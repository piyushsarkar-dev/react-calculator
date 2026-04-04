"use client";

import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";

const BasicCalculator = () => {
  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-2 gap-2">
        <Input
          type="number"
          placeholder="Input 1"
        />
        <Input
          type="number"
          placeholder="Input 2"
        />
      </div>
      <Input
        disabled
        className="w-full"
      />
      <div className="grid w-full grid-cols-4 gap-2">
        <Button>+</Button>
        <Button>-</Button>
        <Button>*</Button>
        <Button>/</Button>
      </div>
      <Button className="w-full">Calculate</Button>
    </section>
  );
};

export default BasicCalculator;
