import ALabel from "./ALabel.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import { ExtractComponentProps } from "@/types/components";

const meta: Meta<ExtractComponentProps<typeof ALabel>> = {
	title: "Atoms/Label",
	component: ALabel,
	args: {
		id: "label",
		label: "Label",
	},
};

export default meta;

const Template: StoryFn<typeof ALabel> = (args) => ({
	components: { ALabel },
	setup() {
		return { args };
	},
	template: `<ALabel v-bind="args" />`,
});

export const Default = Template.bind({});
