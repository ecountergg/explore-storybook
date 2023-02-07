<script setup lang="ts">
import { computed } from "vue";
import type { Props } from "./button.types";

const props = withDefaults(defineProps<Props>(), {
	variant: "primary",
	size: "md",
	type: "button",
	tag: "button",
});

const classes = computed(() => ({
	button: props.tag === "button",
	link: props.tag === "a",
	[`button--${props.variant}`]: props.variant && props.tag === "button",
	[`link--${props.variant}`]: props.variant && props.tag === "a",
	[`button--${props.size}`]: props.size && props.tag === "button",
	[`link--${props.size}`]: props.size && props.tag === "a",
	["button--disabled"]: props.disabled && props.tag === "button",
	["link--disabled"]: props.disabled && props.tag === "a",
}));
</script>
<template>
	<component :is="tag" :class="classes" :type="type" :disabled="disabled">
		<slot />
	</component>
</template>
<style lang="scss" scoped>
.button {
	@apply text-white rounded;
	&--primary {
		@apply bg-blue-500 hover:bg-blue-700;
	}
	&--secondary {
		@apply bg-purple-500 hover:bg-purple-700;
	}
	&--sm {
		@apply p-2 text-sm font-semibold;
	}
	&--md {
		@apply px-4 py-2 text-base font-bold;
	}
	&--disabled {
		@apply cursor-not-allowed bg-gray-500 hover:bg-gray-700;
	}
}
.link {
	@apply cursor-pointer font-semibold flex items-center transition-all duration-300 hover:underline;
	&--primary {
		@apply text-blue-500;
	}
	&--secondary {
		@apply text-purple-500;
	}
	&--disabled {
		@apply text-gray-500 hover:no-underline cursor-not-allowed;
	}
}
</style>
