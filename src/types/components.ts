export type VariantColor =
	| "default"
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "severe-warning"
	| "disabled";

export type TypeInput = "text" | "password" | "email";

export type TypeButton = "button" | "reset" | "submit";

export type TagsButton = "button" | "a";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export type ExtractComponentProps<TComponent> = TComponent extends new () => {
	$props: infer P;
}
	? P
	: never;
