import AAlert from "./AAlert.vue";
import type { Meta, StoryFn } from "@storybook/vue3";
import { ExtractComponentProps } from "@/types/components";
import { computed, ref } from "vue";

const meta: Meta<ExtractComponentProps<typeof AAlert>> = {
	title: "Atoms/Alert",
	component: AAlert,
	args: {
		title: "Alert Title",
		show: true,
	},
};

export default meta;

const Template: StoryFn<typeof AAlert> = (args) => ({
	components: { AAlert },
	setup() {
		const show = ref<boolean>(true);

		const onHide = () => {
			show.value = false;
		};

		const isShow = computed(() => {
			return args.show && show.value;
		});
		return { args, isShow, onHide };
	},
	template: `<AAlert v-if="isShow" v-bind="args" @click="onHide">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda beatae et! Deserunt, modi officiis.</AAlert>`,
});

export const Default = Template.bind({});
Default.args = {
	variant: "success",
};
Default.argTypes = {
	variant: {
		options: ["success", "danger"],
		control: { type: "select" },
	},
};

export const Success = Template.bind({});
Success.args = {
	variant: "success",
};
Success.argTypes = {
	variant: {
		options: ["success"],
		control: { type: "select" },
	},
};

export const Danger = Template.bind({});
Danger.args = {
	variant: "danger",
};
Danger.argTypes = {
	variant: {
		options: ["danger"],
		control: { type: "select" },
	},
};
