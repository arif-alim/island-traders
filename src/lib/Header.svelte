<script>
	import { page } from '$app/stores';
	import TopBar from '../components/TopBar.svelte';
	import logo from '$lib/islandtraders-logodark.svg';

	let logoAlt = 'Island Traders Logo';

	const leftRoutes = [
		{ name: 'Home', href: '/' },
		{ name: 'About us', href: '/about-us' },
		{ name: 'Services', href: '/services' },
		{ name: 'Rates', href: '/rates' },
		{ name: 'Estimator', href: '/estimator' }
	];

	const rightRoutes = [
		{ name: 'FAQs', href: '/faqs' },
		{ name: 'Contact us', href: '/contact-us' }
	];
</script>

<header class="relative z-10">
	<nav aria-label="Top" class="border-b border-gray-200">
		<!-- Top navigation -->
		<TopBar />
	</nav>
</header>
<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
		<div class="relative flex justify-between h-14 ">
			<div class="flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" sveltekit:prefetch>
						<img src={logo} alt={logoAlt} class="h-12 w-auto" />
					</a>
				</div>
				<div class="hidden sm:ml-12 sm:flex sm:space-x-8">
					{#each leftRoutes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="inline-flex items-center pt-1 text-xb tracking-tight uppercase
							{route.href === $page.url.pathname
								? ' text-sky-900 font-bold'
								: ' text-gray-800 hover:text-sky-900 font-semibold hover:font-bold'}"
						>
							{route.name}
						</a>
					{/each}
				</div>
			</div>

			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<!-- {#if isloggedIn}
					<div class="ml-3 relative">
						<div>
							<button
								type="button"
								class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Open user menu</span>
								<img
									class="h-8 w-8 rounded-full"
									src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
								/>
							</button>
						</div>
					</div>
				{:else}
					<div class="hidden md:flex items-center justify-end md:flex-1">
						<div class="ml-6 ">
							<a href="#" class="bg-white rounded-full flex uppercase font-semibold text-xb">
								Sign up
							</a>
						</div>
						<div class="ml-6 border-l border-gray-200 pl-6">
							<button
								type="button"
								class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
								id="user-menu-button"
								aria-expanded="false"
								aria-haspopup="true"
							>
								<span class="sr-only">Sign in</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</button>
						</div>
					</div>
				{/if} -->
				<div class="hidden sm:ml-12 sm:flex sm:space-x-8">
					{#each rightRoutes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="inline-flex items-center pt-1 text-xb tracking-tight uppercase
							{route.href === $page.url.pathname
								? ' text-sky-900 font-bold'
								: ' text-gray-800 hover:text-sky-900 font-semibold hover:font-bold'}"
						>
							{route.name}
						</a>
					{/each}
					<div class="ml-6 border-l border-gray-200 pl-6">
						<button
							type="button"
							class="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 items-center"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
						>
							<span class="sr-only">Sign in</span>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
