import type {
	VariantColor,
	Breakpoint,
	TypeButton,
	TagsButton,
} from "@/types/components";

export type Props = {
	variant?: Extract<VariantColor, "primary" | "secondary">;
	size?: Extract<Breakpoint, "sm" | "md" | "lg">;
	disabled?: boolean;
	type?: TypeButton;
	tag?: TagsButton;
};
