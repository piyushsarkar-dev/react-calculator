"use client";

import { useInteraction } from "@/components/Providers/InteractionProvider";
import { cn } from "@/lib/utils";

const PreviewBox = () => {
	const { isActive } = useInteraction();

	return (
		<div
			className={cn(
				"group origin-bottom-right -rotate-12 skew-x-0 duration-500 hover:-translate-x-6 hover:translate-y-12 hover:-rotate-0 hover:-skew-x-12",
				isActive && "-translate-x-6 translate-y-12 -rotate-0 -skew-x-12",
			)}>
			<div
				className={cn(
					"before:content[''] relative flex h-36 w-64 flex-col items-center justify-center gap-1 rounded-2xl bg-zinc-800 text-gray-50 duration-500 group-hover:duration-500 before:absolute before:top-0 before:right-3 before:-z-10 before:h-32 before:w-64 before:-skew-x-12 before:rounded-2xl before:bg-neutral-700 before:duration-500 group-hover:before:-right-3 group-hover:before:skew-x-12",
					isActive && "duration-500 before:-right-3 before:skew-x-12",
				)}>
				<span className="text-5xl font-bold">Jr</span>
				<p className="font-thin text-amber-300">- Frontend Developer -</p>
			</div>
		</div>
	);
};

export default PreviewBox;
