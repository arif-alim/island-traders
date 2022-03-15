<script>
	import { page } from '$app/stores';

	const routes = [
		{ name: 'Incoming packages', href: '/user/incoming-packages' },
		{ name: 'Packages in the warehouse', href: '/user/packages-warehouse' },
		{ name: 'Action pending', href: '/user/action-pending' },
		{ name: 'Ready to ship', href: '/user/ready-to-ship' }
	];
</script>

<!-- END Page Heading -->

<div class="bg-gray-800">
	<div class="max-w-7xl mx-auto px-4 lg:px-8">
		<div class="flex justify-between py-1">
			<!-- Left Section -->
			<div class="flex items-center space-x-2 lg:space-x-6">
				<!-- Desktop Navigation -->
				<nav class="hidden lg:flex lg:items-center lg:space-x-4">
					{#each routes as route}
						<a
							href={route.href}
							sveltekit:prefetch
							class="text-sm font-medium flex items-center space-x-2 px-3 py-2 rounded {route.href ===
							$page.url.pathname
								? 'border border-gray-700 bg-gray-700 text-white'
								: 'text-gray-300 border border-transparent hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-600 active:border-gray-600'}"
						>
							{route.name}
						</a>
					{/each}
				</nav>
				<!-- END Desktop Navigation -->
			</div>
			<!-- END Left Section -->
			<div
				class="flex-none flex items-center justify-center sm:justify-end space-x-2 py-3 rounded sm:bg-transparent px-2 sm:px-0"
			>
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
					<span class="hidden sm:inline-block">Add New Invoice</span>
				</a>
			</div>
		</div>
	</div>
</div>
