import AdvancedCalculator from "@/components/customui/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import TextType from "@/components/TextType";

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            <TextType
              text={[
                "Advanced Calculator",
                "Fast • Smart • Powerful",
                "Powered by Next.js ⚡",
              ]}
              typingSpeed={65}
              pauseDuration={800}
              showCursor
              cursorCharacter="_"
              deletingSpeed={50}
              cursorBlinkDuration={0.5}
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <AdvancedCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
