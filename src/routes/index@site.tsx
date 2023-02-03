import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<section class="bg-gray-50 dark:bg-gray-800">
			<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
				<div class="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
					<div class="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
						<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
							Home Page
						</h2>
						<p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
							This is the main page.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
});

export const head: DocumentHead = {
	title: 'Home Page',
	meta: [
		{
			name: 'description',
			content: 'Hello my Home Page',
		},
	],
};
