import { component$, useSignal, useStore, useTask$, $ } from '@builder.io/qwik';

interface ItemProps {
	handleFunction?: any;
}

export const Button = component$((props: ItemProps) => {
	const message = useSignal('Signal None');
	const state = useStore({ message: 'State None' });

	// useClientEffect$ => to render in the browser

	const handleClick = $(() => {
		state.message = 'Button Clicked';
		props.handleFunction();
	});

	useTask$(({ track }) => {
		track(state);
		console.log(message.value);
		console.log(state.message);
	});

	return (
		<button
			onClick$={handleClick}
			class="bg-sky-500 py-2 px-4 rounded-sm text-white hover:bg-sky-400"
		>
			Click Me
		</button>
	);
});
