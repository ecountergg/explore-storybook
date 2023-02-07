<script setup lang="ts">
import { reactive } from "vue";

// Components
import ALabel from "@/components/atoms/label/ALabel.vue";
import AInputText from "@/components/atoms/input-text/AInputText.vue";
import AButton from "@/components/atoms/button/AButton.vue";

interface IForm {
	username: string;
	password: string;
}

const form = reactive<IForm>({
	username: "",
	password: "",
});

const onLogin = () => {
	console.log(form);
};
</script>
<template>
	<div class="w-full max-w-xs">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 space-y-4">
			<div>
				<ALabel id="username" label="Username" />
				<AInputText
					v-model="form.username"
					id="username"
					type="text"
					placeholder="Username"
					state="primary"
				/>
			</div>
			<div>
				<ALabel id="password" label="Password" />
				<AInputText
					v-model="form.password"
					id="password"
					type="password"
					placeholder="******************"
					state="primary"
				/>
			</div>
			<div class="flex items-center gap-x-8 justify-between">
				<AButton @click="onLogin"> Sign In</AButton>
				<AButton tag="a" variant="secondary">
					Forgot Password?
				</AButton>
			</div>
		</form>
		<p class="text-center text-gray-500 text-xs">
			&copy;Copyright by heart ❤️
		</p>
	</div>
</template>
