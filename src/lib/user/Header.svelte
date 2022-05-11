<script>
	// @ts-ignore
	import { page } from '$app/stores';
	import logo from '$lib/islandtraders-logodark.svg';

	let logoAlt = 'Island Traders Logo';

	const routes = [
		{ name: 'Dashboard', href: '/user/dashboard' },
		{ name: 'Packages', href: '/user/packages' },
		{ name: 'Services', href: '/user/services' },
		{ name: 'Bills', href: '/user/bills' },
		{ name: 'Estimator', href: '/user/estimator' },
		{ name: 'Pickup', href: '/user/pickup' }
	];
</script>

<header class="bg-white shadow">
	<div class="max-w-7xl mx-auto px-4">
		<div class="relative flex justify-between h-16 ">
			<div class="flex items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex-shrink-0 flex items-center">
					<a href="/" sveltekit:prefetch>
						<img src={logo} alt={logoAlt} class="h-10 w-auto" />
					</a>
				</div>
				<div class="hidden sm:ml-12 sm:flex sm:space-x-8">
					{#each routes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="inline-flex items-center pt-1 text-sm font-medium 
							{route.href === $page.url.pathname
								? ' text-slate-900 font-bold'
								: ' text-slate-600 hover:text-gray-700'}"
						>
							{route.name}
						</a>
					{/each}
				</div>
			</div>

			<div
				class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
			>
				<button type="button" class="p-1 rounded-full text-slate-500 hover:text-white ">
					<span class="sr-only">View notifications</span>
					<!-- Heroicon name: outline/bell -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/>
					</svg>
				</button>

				<!-- Profile dropdown -->
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
			</div>
		</div>
	</div>
</header>
