import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const AtmosphereMaterial = shaderMaterial(
  {
    uTime: 0,
    uEnergy: 0.5,
  },

  // ================= VERTEX =================
  `
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelMatrix * vec4(position, 1.0)).xyz;

      gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
    }
  `,

  // ================= FRAGMENT =================
  `
    varying vec3 vNormal;
    varying vec3 vPosition;

    uniform float uTime;
    uniform float uEnergy;

    void main() {

      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(cameraPosition - vPosition);

      // 🔥 Vékonyabb perem (minél nagyobb hatvány, annál vékonyabb)
      float fresnel = pow(1.0 - dot(normal, viewDir), 4.5);

      // Finom pulzálás
      float pulse = 0.85 + sin(uTime * 1.5) * 0.05;

      // Energia-alapú erősség
      float strength = fresnel * pulse * (0.4 + uEnergy * 0.6);

      // Szín átmenet energia szerint
      vec3 glowColor =
        mix(vec3(0.0, 0.6, 0.3),
            vec3(0.0, 1.0, 0.6),
            uEnergy);

      gl_FragColor = vec4(glowColor * strength, strength);
    }
  `
);

extend({ AtmosphereMaterial });

export default AtmosphereMaterial;