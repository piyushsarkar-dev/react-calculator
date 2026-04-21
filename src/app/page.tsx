import BasicCalculator from "@/components/customui/BasicCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs Starter Frontend",
  description: "Production grade Next.js starter template",
};

const page = () => {
  return (
    <section className="grid h-dvh place-items-center">
      <Card className="max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Basic Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <BasicCalculator />
        </CardContent>
      </Card>
    </section>
  );
};

export default page;
