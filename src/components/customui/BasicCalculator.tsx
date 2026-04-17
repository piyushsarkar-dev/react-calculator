"use client";

import { useState } from "react";
import { Button } from "../shadcnui/button";
import { Input } from "../shadcnui/input";

const BasicCalculator = () => {
  const [count, setCount] = useState("");
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  const plus = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) + Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };

  const minus = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) - Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const multiply = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) * Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const divide = () => {
    if (inputOne !== "" && inputTwo !== "") {
      const total = Number(inputOne) / Number(inputTwo);
      setCount(total.toString());
    }
    setInputOne("");
    setInputTwo("");
  };
  const reset = () => {
    setInputOne("");
    setInputTwo("");
    setCount("");
  };

  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-2 gap-2">
        <Input
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne}
          type="number"
          placeholder="Input 1"
        />
        <Input
          onChange={(e) => setInputTwo(e.target.value)}
          value={inputTwo}
          type="number"
          placeholder="Input 2"
        />
      </div>
      <Input
        placeholder="Preview Show Here"
        value={count}
        disabled
        className="w-full"
      />
      <div className="grid w-full grid-cols-4 gap-2">
        <Button onClick={plus}>+</Button>
        <Button onClick={minus}>-</Button>
        <Button onClick={multiply}>*</Button>
        <Button onClick={divide}>/</Button>
      </div>
      <Button
        onClick={reset}
        className="w-full bg-red-500 text-white">
        Reset
      </Button>
    </section>
  );
};

export default BasicCalculator;
