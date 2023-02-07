import { FunctionalComponent, SVGAttributes } from "vue";

export type VariantColor =
	| "default"
	| "primary"
	| "secondary"
	| "success"
	| "danger"
	| "warning"
	| "severe-warning"
	| "disabled";

export type Breakpoint = "sm" | "md" | "lg" | "xl";

export type ExtractComponentProps<TComponent> = TComponent extends new () => {
	$props: infer P;
}
	? P
	: never;
