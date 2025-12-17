import { HomeWrapper } from "@/components/HomeWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return <HomeWrapper />;
};

export default page;
