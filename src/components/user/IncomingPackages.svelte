<script>
	import { Packages } from './incoming-data.js';
	import StatusOnRoute from './StatusOnRoute.svelte';
	import StatusArrived from './StatusArrived.svelte';
	import StatusPending from './StatusPending.svelte';
	import StatusReady from './StatusReady.svelte';
	import StatusShipped from './StatusShipped.svelte';
	const activeList = '';
	function handleClick(item) {
		activeList = item.ref;
	}
</script>

<div class="max-w-8xl mx-auto px-2 py-1">
	<!-- Stacked list -->
	<ul
		role="list"
		class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
	>
		{#each Packages as item}
			<li>
				<a
					href={item.href}
					class="group block hover:bg-slate-50 p-4"
					on:click={() => handleClick(item.ref)}
				>
					<div class="flex items-center py-2 sm:py-2 ">
						<div class="min-w-0 flex-1 flex items-center">
							<div
								class="min-w-0 flex-1 md:grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 "
							>
								<div class="hidden md:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Invoice Number:</p>
										<p class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{item.invoice}
										</p>
									</div>
								</div>
								<div class="hidden md:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Supplier Name:</p>
										<p class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{item.supplier}
										</p>
									</div>
								</div>
								<div class="hidden md:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Tracking Number:</p>
										<p class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{item.tracking}
										</p>
									</div>
								</div>
								<div class="hidden md:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Item Description:</p>
										<p class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{item.description}
										</p>
									</div>
								</div>
								<div class="hidden lg:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Package Notes:</p>
										<p class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{item.notes}
										</p>
									</div>
								</div>
								<div class="hidden sm:block">
									<div>
										<p class="text-sl font-bold text-slate-800 truncate">Status:</p>
										<div class="mt-2 flex items-center font-medium text-sm text-slate-600">
											{#if item.ref == 'list1'}
												<StatusOnRoute />
											{:else if item.ref == 'list2'}
												<StatusPending />
											{:else if item.ref == 'list3'}
												<StatusArrived />
											{:else if item.ref == 'list4'}
												<StatusShipped />
											{:else if item.ref == 'list5'}
												<StatusReady />
											{:else}
												<StatusOnRoute />
											{/if}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div>
							<!-- Heroicon name: solid/chevron-right -->
							<svg
								class="h-5 w-5 text-gray-400 group-hover:text-gray-700"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</a>
			</li>
		{/each}

		<!-- More candidates... -->
	</ul>

	<!-- Pagination -->
	<nav
		class="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0"
		aria-label="Pagination"
	>
		<div class="-mt-px w-0 flex-1 flex">
			<a
				href="#"
				class="border-t-2 border-transparent pt-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
			>
				<!-- Heroicon name: solid/arrow-narrow-left -->
				<svg
					class="mr-3 h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
						clip-rule="evenodd"
					/>
				</svg>
				Previous
			</a>
		</div>
		<div class="hidden md:-mt-px md:flex">
			<a
				href="#"
				class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
			>
				1
			</a>
			<!-- Current: "border-purple-500 text-purple-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200" -->
			<a
				href="#"
				class="border-purple-500 text-purple-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
				aria-current="page"
			>
				2
			</a>
			<a
				href="#"
				class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
			>
				3
			</a>
			<a
				href="#"
				class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
			>
				4
			</a>
			<a
				href="#"
				class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
			>
				5
			</a>
			<a
				href="#"
				class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
			>
				6
			</a>
		</div>
		<div class="-mt-px w-0 flex-1 flex justify-end">
			<a
				href="#"
				class="border-t-2 border-transparent pt-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-200"
			>
				Next
				<!-- Heroicon name: solid/arrow-narrow-right -->
				<svg
					class="ml-3 h-5 w-5 text-gray-400"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</a>
		</div>
	</nav>
</div>
