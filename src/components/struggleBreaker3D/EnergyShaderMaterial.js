import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const EnergyMaterial = shaderMaterial(
  {
    uTime: 0,
    uEnergy: 0.2,
  },

  // ================= VERTEX SHADER =================
  `
    varying vec3 vNormal;
    varying vec3 vPosition;

    uniform float uTime;
    uniform float uEnergy;

    void main() {

      vNormal = normal;
      vPosition = position;

      vec3 pos = position;

      // Élő, finom torzulás
      float distortion =
        sin(pos.y * 3.0 + uTime * 1.5) *
        0.05 * uEnergy;

      pos += normal * distortion;

      gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(pos, 1.0);
    }
  `,

  // ================= FRAGMENT SHADER =================
  `
    varying vec3 vNormal;
    varying vec3 vPosition;

    uniform float uTime;
    uniform float uEnergy;

    // ---------- Pseudo Noise ----------
    float random(vec3 p) {
      return fract(sin(dot(p.xyz, vec3(12.9898,78.233,45.164))) * 43758.5453);
    }

    float noise(vec3 p) {
      vec3 i = floor(p);
      vec3 f = fract(p);
      f = f * f * (3.0 - 2.0 * f);

      float n = mix(
        mix(
          mix(random(i + vec3(0,0,0)),
              random(i + vec3(1,0,0)), f.x),
          mix(random(i + vec3(0,1,0)),
              random(i + vec3(1,1,0)), f.x), f.y),
        mix(
          mix(random(i + vec3(0,0,1)),
              random(i + vec3(1,0,1)), f.x),
          mix(random(i + vec3(0,1,1)),
              random(i + vec3(1,1,1)), f.x), f.y),
        f.z);

      return n;
    }

    void main() {

      vec3 normal = normalize(vNormal);

      // ===== Mély sötét mag =====
      vec3 baseColor = vec3(0.02, 0.08, 0.07);

      // ===== Repedések =====
      float n = noise(vPosition * 3.0 + uTime * 0.3);

      float crackThreshold = 0.75 - (uEnergy * 0.45);
      float cracks = smoothstep(crackThreshold, crackThreshold + 0.02, n);

      // ===== Energia-alapú színátmenet =====
      vec3 lowEnergy  = vec3(0.0, 0.6, 0.3);
      vec3 midEnergy  = vec3(0.0, 1.0, 0.6);
      vec3 highEnergy = vec3(1.0, 0.85, 0.3);

      vec3 energyColor = mix(
        mix(lowEnergy, midEnergy, uEnergy),
        highEnergy,
        pow(uEnergy, 2.0)
      );

      // ===== Pulzálás =====
      float pulse = sin(uTime * 2.0) * 0.1;

      // ===== Bloom-barát emissive =====
      float glowStrength = cracks * uEnergy * 2.5;

      vec3 color =
        baseColor +
        energyColor * glowStrength +
        energyColor * pulse * uEnergy;

      // ===== Fresnel peremfény =====
      float fresnel =
        pow(1.0 - dot(normal, vec3(0.0, 0.0, 1.0)), 2.0);

      color += energyColor * fresnel * 0.15;

      gl_FragColor = vec4(color, 1.0);
    }
  `
);

extend({ EnergyMaterial });

export default EnergyMaterial;
