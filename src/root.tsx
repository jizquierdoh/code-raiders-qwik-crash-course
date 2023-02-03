import { component$, useStyles$ } from '@builder.io/qwik';
import {
	QwikCityProvider,
	RouterOutlet,
	ServiceWorkerRegister,
} from '@builder.io/qwik-city';
import { RouterHead } from './components/router-head/router-head';

import globalStyles from './global.css?inline';

export default component$(() => {
	/**
	 * The root of a QwikCity site always start with the <QwikCityProvider> component,
	 * immediately followed by the document's <head> and <body>.
	 *
	 * Dont remove the `<head>` and `<body>` elements.
	 */
	useStyles$(globalStyles);

	return (
		<QwikCityProvider>
			<head>
				<meta charSet="utf-8" />
				<link rel="manifest" href="/manifest.json" />
				<link
					rel="preload"
					href="Mona-Sans.woff2"
					as="font"
					type="font/woff2"
					crossOrigin="anonymous"
				></link>
				<RouterHead />
			</head>
			<body
				lang="en"
				class="bg-white dark:bg-gray-900 min-h-screen text-gray-500 dark:text-gray-400"
			>
				<RouterOutlet />
				<ServiceWorkerRegister />
			</body>
		</QwikCityProvider>
	);
});
