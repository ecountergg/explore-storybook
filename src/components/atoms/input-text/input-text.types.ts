import type { VariantColor } from "@/types/components";

export type Props = {
	id: string;
	placeholder: string;
	state: Extract<VariantColor, "primary" | "success" | "danger">;
};
