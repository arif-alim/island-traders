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

<!-- Page Heading -->
<div class="bg-gray-800 h-48">
	<div class="container xl:max-w-7xl mx-auto px-4 lg:px-8">
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-y-2 border-t py-5 border-gray-700">
			<div class="flex items-center border-gray-700">
				<div class="grow">
					<h1 class="text-2xl font-semibold text-white">Dashboard</h1>
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
