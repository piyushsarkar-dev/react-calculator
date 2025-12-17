"use client";

import { Activity } from "@/components/Activity";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface SearchBarProps {
	onActiveChange?: (isActive: boolean) => void;
}

export const SearchBar = ({ onActiveChange }: SearchBarProps) => {
	const [value, setValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		onActiveChange?.(isFocused || value.length > 0);
	}, [isFocused, value, onActiveChange]);

	return (
		<div
			className={cn(
				"group flex h-[60px] w-[60px] items-center overflow-hidden rounded-full bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 hover:w-[270px] hover:duration-300",
				(value || isFocused) && "w-[270px]",
			)}>
			<div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center fill-white">
				<Activity />
			</div>
			<input
				type="text"
				value={value}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				onChange={(e) => setValue(e.target.value)}
				className="w-full bg-transparent px-4 text-[20px] font-normal text-white outline-none"
			/>
		</div>
	);
};
