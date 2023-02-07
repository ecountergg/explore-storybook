import "tailwindcss/tailwind.css";

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(story) => ({
		components: { story },
		template: `<div style="margin: 3em;"><story /></div>`,
	}),
];

export const argTypes = {
	label: { control: "text" },
};

export const args = { label: "Label" };
