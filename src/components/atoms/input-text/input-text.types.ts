import type { VariantColor, TypeInput } from "@/types/components";

export type Props = {
	modelValue: string;
	id: string;
	placeholder: string;
	state: Extract<VariantColor, "primary" | "success" | "danger">;
	type: Extract<TypeInput, "text" | "password">;
};

export type Emits = {
	(e: "update:modelValue", value: string): void;
};
