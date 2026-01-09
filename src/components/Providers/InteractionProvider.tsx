"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface InteractionContextType {
	isActive: boolean;
	setIsActive: (active: boolean) => void;
}

const InteractionContext = createContext<InteractionContextType | undefined>(
	undefined,
);

export const InteractionProvider = ({ children }: { children: ReactNode }) => {
	const [isActive, setIsActive] = useState(false);

	return (
		<InteractionContext.Provider value={{ isActive, setIsActive }}>
			{children}
		</InteractionContext.Provider>
	);
};

export const useInteraction = () => {
	const context = useContext(InteractionContext);
	if (context === undefined) {
		throw new Error(
			"useInteraction must be used within an InteractionProvider",
		);
	}
	return context;
};
