"use client";

import { Activity } from "@/components/Activity";
import { useInteraction } from "@/components/Providers/InteractionProvider";
import { counterValue } from "@/lib/atoms";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";

export const SearchBar = () => {
	const [count, setCount] = useAtom(counterValue);
	const [isFocused, setIsFocused] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const { setIsActive } = useInteraction();
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		setIsActive(isFocused || isHovered);
	}, [isFocused, isHovered, setIsActive]);

	return (
		<div
			className={cn(
				"group flex h-[60px] w-[60px] cursor-pointer items-center overflow-hidden rounded-full bg-[#4070f4] shadow-[2px_2px_20px_rgba(0,0,0,0.08)] duration-300 hover:w-[270px] hover:duration-300",
				isFocused && "w-[270px]",
			)}
			onMouseEnter={() => {
				setIsHovered(true);
				inputRef.current?.focus();
			}}
			onMouseLeave={() => {
				setIsHovered(false);
				inputRef.current?.blur();
			}}>
			<div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center fill-white">
				<Activity />
			</div>
			<input
				onChange={(e) => setCount(e.target.value)}
				value={count}
				ref={inputRef}
				type="text"
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				className="w-full bg-transparent px-4 text-[20px] font-normal text-white outline-none"
			/>
		</div>
	);
};
