import AButton from "./AButton.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import { ExtractComponentProps } from "@/types/components";

const meta: Meta<ExtractComponentProps<typeof AButton>> = {
	title: "Atoms/Button",
	component: AButton,
	parameters: {
		layout: "centered",
	},
	args: {
		tag: "button",
		type: "button",
	},
	argTypes: {
		tag: {
			options: ["button", "a"],
			control: {
				type: "select",
			},
		},
		type: {
			options: ["button", "reset", "submit"],
			control: {
				type: "select",
			},
		},
	},
};

export default meta;

const Template: StoryFn<typeof AButton> = (args) => ({
	components: { AButton },
	setup() {
		return { args };
	},
	template: `<AButton v-bind="args">Button</AButton>`,
});

export const Default = Template.bind({});
Default.args = {
	tag: "button",
	variant: "primary",
	size: "sm",
	disabled: false,
};
Default.argTypes = {
	size: {
		options: ["sm", "md"],
		control: { type: "select" },
	},
	variant: {
		options: ["primary", "secondary"],
		control: { type: "radio" },
	},
};

export const Primary = Template.bind({});
Primary.args = {
	tag: "button",
	variant: "primary",
	size: "sm",
};
Primary.argTypes = {
	size: {
		options: ["sm", "md"],
		control: { type: "select" },
	},
	variant: {
		options: ["primary"],
		control: { type: "radio" },
	},
};

export const Secondary = Template.bind({});
Secondary.args = {
	tag: "button",
	variant: "secondary",
	size: "sm",
};
Secondary.argTypes = {
	size: {
		options: ["sm", "md"],
		control: { type: "select" },
	},
	variant: {
		options: ["secondary"],
		control: { type: "radio" },
	},
};

export const Disabled = Template.bind({});
Disabled.args = {
	tag: "button",
	disabled: true,
	variant: "primary",
};
Disabled.argTypes = {
	size: {
		options: ["sm", "md"],
		control: { type: "select" },
	},
	variant: {
		options: ["primary", "secondary"],
		control: { type: "radio" },
	},
};
