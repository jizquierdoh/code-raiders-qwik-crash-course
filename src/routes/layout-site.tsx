import { component$, Slot } from '@builder.io/qwik';
import { Navigation } from '~/components/navigation/navigation';

export default component$(() => {
	return (
		<>
			<main>
				<Navigation />
				<section>
					<Slot />
				</section>
			</main>
			<footer class="bg-white dark:bg-gray-900">
				<div class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
					<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
					<div class="text-center">
						<a
							href="#"
							class="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
						>
							Code Raiders
						</a>
						<span class="block text-sm text-center text-gray-500 dark:text-gray-400">
							Built by&nbsp;
							<a
								href="https://jizquierdoh.dev"
								class="text-blue-600 hover:underline dark:text-blue-500"
							>
								Jhonathan Izquierdo
							</a>
							&nbsp;with&nbsp;
							<a
								href="https://tailwindcss.com"
								class="text-blue-600 hover:underline dark:text-blue-500"
							>
								Tailwind CSS
							</a>
							.
						</span>
						<ul class="flex justify-center mt-5 space-x-5">
							<li>
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
								>
									icon
								</a>
							</li>
							<li>
								<a
									href="#"
									class="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
								>
									icon
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	);
});
