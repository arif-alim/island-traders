<script>
	import { page } from '$app/stores';
	import TopBar from '../components/public/TopBar.svelte';
	import logo from '$lib/islandtraders-logodark.svg';
	import DropdownCaret from '../components/public/DropdownCaret.svelte';

	let logoAlt = 'Island Traders Logo';

	const leftRoutes = [
		{ name: 'Home', href: '/' },
		{ name: 'About', href: '/about-us' },
		{ name: 'Services', href: '/services' },
		{ name: 'Rates', href: '/rates' }
	];

	const Rates = [
		{ name: 'Rates by Island', href: '/island-rates' },
		{ name: 'Rate Estimator', href: '/rate-estimator' },
		{ name: 'Duties on items', href: '/duties' }
	];

	const rightRoutes = [
		{ name: 'FAQs', href: '/faqs' },
		{ name: 'Contact', href: '/contact-us' }
	];
</script>

<div class="hidden lg:block relative">
	<nav aria-label="Top" class="border-b border-gray-100 bg-gray-900">
		<!-- Top navigation -->
		<TopBar />
	</nav>
</div>
<header class="bg-white relative shadow-sm">
	<div class="max-w-7xl mx-auto px-4 md:px-0">
		<div class="relative flex justify-between h-16 ">
			<div class="flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" sveltekit:prefetch>
						<img src={logo} alt={logoAlt} class="h-14 w-auto py-1" />
					</a>
				</div>
				<div class="hidden sm:ml-12 lg:flex sm:space-x-8 items-center">
					{#each leftRoutes as route}
						{#if route.name === 'Rates'}
							<a
								class="dropdown-toggle cursor-pointer transition duration-150 ease-in-out inline-flex items-center text-xb tracking-tight uppercase text-gray-800 hover:text-blue-900 font-bold"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Rates
								<DropdownCaret />
							</a>
							<ul
								class="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
								aria-labelledby="dropdownMenuButton1"
							>
								{#each Rates as rate}
									<li>
										<a
											class="dropdown-item text-xb py-2.5 px-6 font-semibold block w-full  whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 mt-1 hover:text-blue-900"
											href={rate.href}
										>
											{rate.name}
										</a>
									</li>
								{/each}
							</ul>
						{:else}
							<a
								href={route.href}
								sveltekit:prefetch
								class="inline-flex items-center text-xb tracking-tight uppercase font-bold cursor-pointer
						{route.href === $page.url.pathname ? ' text-sky-900' : ' text-gray-800 hover:text-blue-900 '}"
							>
								{route.name}
							</a>
						{/if}
					{/each}
				</div>
			</div>

			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<div class="hidden sm:ml-12 lg:flex sm:space-x-8">
					{#each rightRoutes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="inline-flex items-center text-xb tracking-tight uppercase
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
