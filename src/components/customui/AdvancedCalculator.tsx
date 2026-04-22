"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcnui/select";

const AdvancedCalculator = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [operator, setOperator] = useState("");
  const [output, setOutput] = useState("");
  const mainHandeler = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const valuOne = Number(inputOne);
      const valueTwo = Number(inputTwo);
      switch (operator) {
        case "+":
          setOutput((valuOne + valueTwo).toString());

          break;
        case "-":
          setOutput((valuOne - valueTwo).toString());
          break;
        case "*":
          setOutput((valuOne * valueTwo).toString());

          break;
        case "/":
          setOutput((valuOne / valueTwo).toString());
          break;

        default:
          setOutput("Please Select A operator");
          break;
      }
    }
  };

  const clear = () => {
    setOperator("");
    setInputOne("");
    setInputTwo("");
    setOutput("");
  };
  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-3 gap-3">
        <Input
          type="number"
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
          placeholder="Number One"
        />

        <Select
          value={operator}
          onValueChange={(value) => setOperator(value ?? "")}>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Operator" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Operators</SelectLabel>
              <SelectItem value="+">+</SelectItem>
              <SelectItem value="-">-</SelectItem>
              <SelectItem value="*">*</SelectItem>
              <SelectItem value="/">/</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Input
          type="number"
          value={inputTwo}
          onChange={(e) => setInputTwo(e.target.value)}
          placeholder="Number Two"
        />

        <Input
          value={output}
          disabled
          className="col-span-2"
          placeholder="Output"
        />
        <Button
          disabled={operator === "" || inputOne === "" || inputTwo === ""}
          onClick={mainHandeler}>
          Calculate
        </Button>
        <Button
          disabled={inputOne === "" && inputTwo === "" && output === ""}
          onClick={clear}
          className="col-span-3">
          All Clear
        </Button>
      </div>
    </section>
  );
};

export default AdvancedCalculator;
