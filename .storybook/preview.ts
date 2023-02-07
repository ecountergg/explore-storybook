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

export const argTypes = {
	label: { control: "text" },
};

export const args = { label: "Label" };
