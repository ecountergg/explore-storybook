import AInputText from "./AInputText.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import { ExtractComponentProps } from "@/types/components";

const meta: Meta<ExtractComponentProps<typeof AInputText>> = {
	title: "Atoms/Input Text",
	component: AInputText,
	args: {
		id: "username",
		placeholder: "Username",
	},
};

export default meta;

const Template: StoryFn<typeof AInputText> = (args) => ({
	components: { AInputText },
	setup() {
		return { args };
	},
	template: `<AInputText v-bind="args" />`,
});

export const Default = Template.bind({});
Default.argTypes = {
	state: {
		options: ["primary", "success", "danger"],
		control: { type: "select" },
	},
};

export const Primary = Template.bind({});
Primary.args = {
	state: "primary",
};
Primary.argTypes = {
	state: {
		options: ["primary"],
		control: { type: "select" },
	},
};

export const Danger = Template.bind({});
Danger.args = {
	state: "danger",
};
Danger.argTypes = {
	state: {
		options: ["danger"],
		control: { type: "select" },
	},
};

export const Success = Template.bind({});
Success.args = {
	state: "success",
};
Success.argTypes = {
	state: {
		options: ["success"],
		control: { type: "select" },
	},
};
