<script setup lang="ts">
import type { Props } from "./button.types";

withDefaults(defineProps<Props>(), {
	variant: "primary",
	size: "md",
});
</script>
<template>
	<button
		class="button"
		:class="{
			'button--primary': variant === 'primary',
			'button--secondary': variant === 'secondary',
			'button--sm': size === 'sm',
			'button--md': size === 'md',
			'button--disabled': disabled,
		}"
		:disabled="disabled"
	>
		<slot />
	</button>
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
</style>
