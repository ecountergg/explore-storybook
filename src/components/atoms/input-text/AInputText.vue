<script setup lang="ts">
import { useVModel } from "@vueuse/core";

import type { Props, Emits } from "./input-text.types";

const props = withDefaults(defineProps<Props>(), {
	type: "text",
});

const emits = defineEmits<Emits>();

const value = useVModel(props, "modelValue", emits);
</script>
<template>
	<input
		v-model="value"
		:id="id"
		class="input"
		:class="{
			'input--danger': state === 'danger',
			'input--primary': state === 'primary',
			'input--success': state === 'success',
		}"
		:type="type"
		:placeholder="placeholder"
		@input="emits('update:modelValue', $event.target?.value as string)"
	/>
</template>
<style lang="scss" scoped>
.input {
	@apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:outline-offset-0;
	&--primary {
		@apply border-blue-400 focus:outline-blue-300 focus:ring-blue-300;
	}
	&--danger {
		@apply border-red-400 focus:outline-red-300 focus:ring-red-300;
	}
	&--success {
		@apply border-green-400 focus:outline-green-300 focus:ring-green-300;
	}
}
</style>
