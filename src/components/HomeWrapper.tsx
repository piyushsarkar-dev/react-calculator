"use client";

import FinalButton from "@/components/FinalButton";
import PreviewBox from "@/components/PreviewBox";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

export const HomeWrapper = () => {
	const [isActive, setIsActive] = useState(false);

	return (
		<section className="flex h-[90dvh] w-full flex-col items-center justify-center gap-16 p-5">
			<PreviewBox active={isActive} />
			<SearchBar onActiveChange={setIsActive} />
			<FinalButton />
		</section>
	);
};
