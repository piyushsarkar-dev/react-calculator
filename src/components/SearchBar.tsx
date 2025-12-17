"use client";

import { Activity } from "@/components/Activity";
import { useInteraction } from "@/components/Providers/InteractionProvider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export const SearchBar = () => {
	const [value, setValue] = useState("");
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const { setIsActive } = useInteraction();

	useEffect(() => {
		setIsActive(isFocused || value.length > 0 || isHovered);
	}, [isFocused, value, isHovered, setIsActive]);

	return (
		<div
			className={cn(
				"group flex h-[60px] w-[60px] cursor-pointer items-center overflow-hidden rounded-full bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 hover:w-[270px] hover:duration-300",
				(value || isFocused) && "w-[270px]",
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
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
