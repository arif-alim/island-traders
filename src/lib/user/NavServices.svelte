<script>
	import { page } from '$app/stores';
	let title = 'Consolidation';

	function titleChange(name) {
		title = name;
	}

	const routes = [
		{ name: 'Consolidation', href: '/user/services' },
		{ name: 'Bond', href: '/user/services/bond' },
		{ name: 'Storage', href: '/user/services/storage' },
		{ name: 'Purchases', href: '/user/services/purchases' },
		{ name: 'Broker', href: '/user/services/broker' },
		{ name: 'Pickup', href: '/user/services/pickup' }
	];
</script>

<!-- Page Header -->
<header id="page-header" class="flex flex-none items-center bg-gray-800 z-1">
	<div class="container xl:max-w-7xl mx-auto px-4 lg:px-8">
		<div class="flex justify-between pt-8 pb-3">
			<!-- Left Section -->
			<div class="flex items-center space-x-2 ">
				<nav class="hidden lg:flex lg:items-center lg:space-x-2">
					{#each routes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="text-ss font-medium flex items-center space-x-2 px-3 py-2 rounded {route.href ===
							$page.url.pathname
								? 'border border-gray-700 bg-gray-700 text-white'
								: 'text-gray-300 border border-transparent hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-600 active:border-gray-600'}"
							on:click={() => titleChange(route.name)}
						>
							{route.name}
						</a>
					{/each}
				</nav>
				<!-- END Desktop Navigation -->
			</div>
			<!-- END Left Section -->

			<!-- Right Section -->
			<div class="hidden md:flex flex-1 px-2 justify-center lg:ml-6 lg:justify-end">
				<div class="max-w-lg w-full lg:max-w-xs">
					<label for="search" class="sr-only">Search</label>
					<div class="relative text-sky-100 focus-within:text-gray-400">
						<div class="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
							<!-- Heroicon name: solid/search -->
							<svg
								class="flex-shrink-0 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<input
							id="search"
							name="search"
							class="block w-full bg-gray-900 bg-opacity-50 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 placeholder-sky-100 focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
							placeholder="Search"
							type="search"
						/>
					</div>
				</div>
			</div>
			<!-- END Right Section -->
		</div>
	</div>
</header>
<!-- END Page Header -->

<!-- Page Heading -->
<div class="bg-gray-800 h-48">
	<div class="container xl:max-w-7xl mx-auto px-4 lg:px-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 border-t py-5 border-gray-700">
			<div class="flex items-center border-gray-700">
				<div class="grow">
					<h1 class="text-2xl font-semibold text-white">{title}</h1>
				</div>
			</div>
			<div class="flex items-center border-gray-700 justify-end">
				{#if $page.url.pathname === '/user/packages'}
					<a
						href="javascript:void(0)"
						class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
					>
						<svg
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
							class="sm:opacity-50 hi-solid hi-plus inline-block w-5 h-5"
							><path
								fill-rule="evenodd"
								d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
								clip-rule="evenodd"
							/></svg
						>
						<span class="hidden sm:inline-block">New Project</span>
					</a>
				{/if}
			</div>
		</div>
	</div>
</div>
<!-- END Page Heading -->
