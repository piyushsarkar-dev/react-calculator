import AdvancedCalculator from "@/components/customui/AdvancedCalculator";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
  return (
    <section className="grid h-[90dvh] place-items-center">
      <Card className="w-sm">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Advanced Calculaotr
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
