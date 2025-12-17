import FinalButton from "@/components/FinalButton";
import PreviewBox from "@/components/PreviewBox";
import { SearchBar } from "@/components/SearchBar";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="flex h-[90dvh] w-full flex-col items-center justify-center gap-16 p-5">
			<PreviewBox />
			<SearchBar />
			<FinalButton />
		</section>
	);
};

export default page;
