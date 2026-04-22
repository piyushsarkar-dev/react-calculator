import AdvancedCalculator from "@/components/customui/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import TextType from "@/components/TextType";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "React Calculator | Advanced",
  description:
    "A simple and advanced calculator built with Next.js and TypeScript.",
};

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
              pauseDuration={3500}
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
