import type { VariantColor } from "@/types/components";

export type Props = {
	id: string;
	label: string;
	placeholder: string;
	state: Extract<VariantColor, "primary" | "success" | "danger">;
};