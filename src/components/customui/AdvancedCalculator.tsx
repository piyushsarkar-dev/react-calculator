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
  return (
    <section className="mx-auto grid w-full max-w-md place-items-center gap-3">
      <div className="grid w-full grid-cols-3 gap-3">
        <Input placeholder="Number One" />

        <Select>
          <SelectTrigger className="w-full max-w-48">
            <SelectValue placeholder="Operators" />
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

        <Input placeholder="Number Two" />

        <Input
          disabled
          className="col-span-2"
          placeholder="Output"
        />
        <Button>Calculate</Button>
        <Button className="col-span-3">All Clear</Button>
      </div>
    </section>
  );
};

export default AdvancedCalculator;
