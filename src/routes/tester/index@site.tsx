import { $, component$, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '~/components/button';

export default component$(() => {
	const state = useStore({ name: 'unassigned' });

	const handleName = $(() => {
		state.name = 'Pink elephants';
	});

	return (
		<section class="bg-gray-50 dark:bg-gray-800">
			<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
				<div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
					<div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
						<h1>Test Page</h1>
						<Button handleFunction={handleName} />
						<p>Name: {state.name}</p>
					</div>
				</div>
			</div>
		</section>
	);
});

export const head: DocumentHead = {
	title: 'Test Page',
	meta: [
		{
			name: 'description',
			content: 'Hello my Test Page',
		},
	],
};
