<script setup lang="ts">
import { useVModel } from "@vueuse/core";

import type { Props, Emits } from "./alert.types";

const props = withDefaults(defineProps<Props>(), {
	show: false,
	variant: "success",
});

const emits = defineEmits<Emits>();

const isShow = useVModel(props, "show", emits);
</script>
<template>
	<div
		v-if="isShow"
		class="alert"
		:class="{
			'alert--success': variant === 'success',
			'alert--danger': variant === 'danger',
		}"
		role="alert"
	>
		<p class="alert__title">{{ title }}</p>
		<span class="alert__description"><slot /></span>
		<span class="alert__close" @click="emits('click')">
			<svg
				class="alert__icon"
				:class="{
					'alert__icon--success': variant === 'success',
					'alert__icon--danger': variant === 'danger',
				}"
				role="button"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
			>
				<title>Close</title>
				<path
					d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
				/>
			</svg>
		</span>
	</div>
</template>
<style lang="scss" scoped>
.alert {
	@apply relative px-4 py-3 rounded border;
	&__title {
		@apply font-bold;
	}
	&__description {
		@apply block sm:inline;
	}
	&__close {
		@apply absolute top-0 bottom-0 right-0 px-4 py-3;
	}
	&__icon {
		@apply fill-current h-6 w-6;
		&--danger {
			@apply text-red-500;
		}
		&--success {
			@apply text-green-500;
		}
	}
	&--danger {
		@apply bg-red-100 border-red-400 text-red-700;
	}
	&--success {
		@apply bg-green-100 border-green-400 text-green-700;
	}
}
</style>
