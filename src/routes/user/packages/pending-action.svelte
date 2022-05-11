<script>
	// import IncomingPackages from '../../../components/user/IncomingPackages.svelte';
	import { Pending } from '../../../components/user/pending-data.js';

	import ViewPkgIcon from '../../../components/icons/ViewPkgIcon.svelte';
	import PendingItem1 from '../../../components/user/PendingItem1.svelte';
	import PendingItem2 from '../../../components/user/PendingItem2.svelte';

	const images = [
		'/images/user/packages/incoming/pkg-0.jpg',
		'/images/user/packages/incoming/pkg-1.jpg',
		'/images/user/packages/incoming/pkg-2.jpg',
		'/images/user/packages/incoming/pkg-3.jpg'
	];

	export let wrNum = 0;

	$: content = 'current';

	function handleClick(page, num) {
		wrNum = num;
		content = page;
	}
</script>

<div class="min-h-full">
	<div class="max-w-8xl mx-auto px-2">
		<div class="block md:flex md:justify-between items-center space-y-4 md:space-y-0">
			<div class="mt-0 sm:text-left">
				<div class="heading py-2 md:py-0">
					<p class="text-md font-bold text-gray-900 sm:text-xl">
						{#if content == 'current'}
							Pending Action
						{:else}
							Pending action for package with tracking #: {wrNum}
						{/if}
					</p>
				</div>
			</div>
			<div class="flex items-center border-gray-700 sm:justify-end ">
				{#if content != 'current'}
					<a
						href="javascript:void(0)"
						class="flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-2 leading-5 text-sm rounded border-slate-700 bg-slate-700 text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:ring focus:ring-slate-500 focus:ring-opacity-50 active:bg-slate-700 active:border-slate-700"
						on:click={() => handleClick('current', 1)}
					>
						<ViewPkgIcon />
						<span class="w-full text-center">View Packages in the Warehouse</span>
					</a>
				{/if}
			</div>
		</div>
		<div class=" bg-pink-100 px-4 py-2 rounded mt-4 flex items-center">
			{#if content == 'current'}
				<p class="mt-1 text-sm font-semibold text-gray-900 line-clamp-1">
					See below a list of your packages that requires your attention!
				</p>
			{:else}
				<p class="mt-1 text-sm font-semibold text-gray-900 line-clamp-1">
					The form below is editable by click on the fields
				</p>
			{/if}
		</div>
		{#if content == 'current'}
			<div class="max-w-8xl mx-auto mt-4">
				<!-- Stacked list -->
				<ul
					role="list"
					class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
				>
					{#each Pending as item}
						<li>
							<a
								href={item.href}
								class="group block hover:bg-slate-50 p-4 lg:p-5"
								on:click={() => handleClick(item.ref, item.wr)}
							>
								<div class="flex items-center">
									<div class="min-w-0 flex-1 flex">
										<div
											class="min-w-0 grid grid-flow-col auto-cols-auto gap-4 sm:gap-8 lg:gap-12 justify-between "
										>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Date Arrived:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{item.dateArrived}
													</p>
												</div>
											</div>

											<div class="hidden md:block">
												<div class="shrink">
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Warehouse (WR) #:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{item.wrNumber}
													</p>
												</div>
											</div>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Invoice:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{item.invoiceNumber}
													</p>
												</div>
											</div>

											<div class="hidden md:block">
												<div class="flex-auto">
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Supplier:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{item.supplier}
													</p>
												</div>
											</div>

											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Item Description:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{@html item.itemDescription}
													</p>
												</div>
											</div>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-bold text-rose-600 truncate"
													>
														Action Required:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{@html item.actionRequired}
													</p>
												</div>
											</div>
											<div class="hidden md:block">
												<div>
													<p class="text-xs tracking-tight uppercase font-medium text-blue-800">
														Reason/Notes:
													</p>
													<p class="mt-1 items-center font-medium text-sm text-slate-900">
														{@html item.reasonNotes}
													</p>
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
		{:else if content == 'ap1'}
			<PendingItem1 />
		{:else if content == 'ap2'}
			<PendingItem2 />
		{/if}
	</div>
</div>
