import type { VariantColor, Breakpoint } from "@/types/components";

export type Props = {
	variant: Extract<VariantColor, "primary" | "secondary">;
	size: Extract<Breakpoint, "sm" | "md" | "lg">;
	disabled: boolean;
};
