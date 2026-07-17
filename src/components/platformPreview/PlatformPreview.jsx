import BrainMapPreview from "./BrainMapPreview";
import EmotionalReleasePreview from "./EmotionalReleasePreview";
import AutomaticThinkingPreview from "./AutomaticThinkingPreview";

export default function PlatformPreview() {
  return (
    <section className="relative">

      <BrainMapPreview />

      <div className="relative
                    lg:-mt-8
                    mt-8
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-8
                    px-4">
        <EmotionalReleasePreview />
        <AutomaticThinkingPreview />
      </div>

    </section>
  );
}