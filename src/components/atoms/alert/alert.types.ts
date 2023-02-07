import type { VariantColor } from "@/types/components";

export type Props = {
	variant: Extract<VariantColor, "success" | "danger">;
	show: boolean;
	title: string;
};

export type Emits = {
	(e: "click"): void;
};
