import { userEvent, within } from "@storybook/testing-library";
import type { Meta, StoryFn } from "@storybook/vue3";
import { ExtractComponentProps } from "@/types/components";

import MFormLogin from "./MFormLogin.vue";

const meta: Meta<ExtractComponentProps<typeof MFormLogin>> = {
	title: "Molecules/Form Login",
	component: MFormLogin,
	parameters: {
		layout: "centered",
	},
};

export default meta;

const Template: StoryFn<typeof MFormLogin> = (args) => ({
	components: { MFormLogin },
	setup() {
		return { args };
	},
	template: `<MFormLogin v-bind="args" />`,
});

export const Default = Template.bind({});
export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement);

	const usernameINput = canvas.getByLabelText("Username", {
		selector: "input",
	});

	await userEvent.type(usernameINput, "johndoe", {
		delay: 500,
	});

	const passwordInput = canvas.getByLabelText("Password", {
		selector: "input",
	});

	await userEvent.type(passwordInput, "password", {
		delay: 500,
	});

	const submitButton = canvas.getByRole("button");

	await userEvent.click(submitButton);
};
