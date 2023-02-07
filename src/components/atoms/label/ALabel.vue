<script setup lang="ts">
import type { Props } from "./label.types";

defineProps<Props>();
</script>
<template>
	<label class="block text-gray-700 text-sm font-bold mb-2" :for="id">
		{{ label }}
	</label>
</template>
