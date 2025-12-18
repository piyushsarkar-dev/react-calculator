"use client";

import { Activity } from "@/components/Activity";
import { counterValue } from "@/lib/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";

export const SearchBar = () => {
	const [count, setCount] = useAtom(counterValue);
	return (
		<div
			className={cn(
				"group flex h-[60px] w-[60px] cursor-pointer items-center overflow-hidden rounded-full bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 focus-within:w-[270px] hover:w-[270px] hover:duration-300",
			)}>
			<div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center fill-white">
				<Activity />
			</div>
			<input
				onChange={(e) => setCount(e.target.value)}
				type="text"
				className="w-full bg-transparent px-4 text-[20px] font-normal text-white outline-none"
			/>
		</div>
	);
};
