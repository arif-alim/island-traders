<script>
	// import IncomingPackages from '../../../components/user/IncomingPackages.svelte';
	import { Packages } from '../../../components/user/incoming-data.js';
	import ViewPkgIcon from '../../../components/icons/ViewPkgIcon.svelte';
	// New Invoice
	import IncomingItem1 from '../../../components/user/IncomingItem1.svelte';
	import IncomingItem2 from '../../../components/user/IncomingItem2.svelte';
	import IncomingItem3 from '../../../components/user/IncomingItem3.svelte';
	import IncomingItem4 from '../../../components/user/IncomingItem4.svelte';
	import IncomingItem5 from '../../../components/user/IncomingItem5.svelte';
	import IncomingItem6 from '../../../components/user/IncomingItem6.svelte';
	import IncomingItem7 from '../../../components/user/IncomingItem7.svelte';
	import IncomingItem8 from '../../../components/user/IncomingItem8.svelte';
	import IncomingItem9 from '../../../components/user/IncomingItem9.svelte';
	import NewInvoice from '../../../components/user/NewInvoice.svelte';

	const images = [
		'/images/user/packages/incoming/pkg-0.jpg',
		'/images/user/packages/incoming/pkg-1.jpg',
		'/images/user/packages/incoming/pkg-2.jpg',
		'/images/user/packages/incoming/pkg-3.jpg'
	];

	export let invoiceNumber;

	$: content = 'current';

	function handleClick(page, num) {
		invoiceNumber = num;
		content = page;
	}
</script>

<div class="min-h-full">
	<div class="max-w-7xl mx-auto px-2">
		<div class="block md:flex md:justify-between items-center space-y-4 md:space-y-0">
			<div class="mt-0 sm:text-left">
				<div class="heading py-2 md:py-0">
					<p class="text-md font-bold text-gray-900 sm:text-xl">
						{#if content == 'current'}
							Orders in route to my U.S.A. unit
						{:else if content == 'invoice'}
							Create New Invoice
						{:else if content == 'item1'}
							Invoice # {invoiceNumber}
						{:else if content == 'item2'}
							Invoice # {invoiceNumber}
						{:else if content == 'item3'}
							Invoice # {invoiceNumber}
						{:else if content == 'item4'}
							Invoice # {invoiceNumber}
						{:else if content == 'item5'}
							Invoice # {invoiceNumber}
						{:else if content == 'item6'}
							Invoice # {invoiceNumber}
						{:else if content == 'item7'}
							Invoice # {invoiceNumber}
						{:else if content == 'item8'}
							Invoice # {invoiceNumber}
						{:else if content == 'item9'}
							Invoice # {invoiceNumber}
						{/if}
					</p>
				</div>
				<!-- <div class="max-w-lg">
					{#if content == 'current'}
						<p class="mt-1 text-ss lg:text-tiny font-normal text-gray-600 line-clamp-2">
							See below a list of your packages that have arrived in our warehouse
						</p>
					{:else}
						<p class="mt-1 text-ss lg:text-tiny font-normal text-gray-600 line-clamp-2">
							View package details
						</p>
					{/if}
				</div> -->
			</div>
			<div class="flex items-center border-gray-700 sm:justify-end">
				{#if content == 'current'}
					<a
						href="javascript:void(0)"
						class="flex sm:flex-wrap sm:inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
						on:click={() => handleClick('invoice', 0)}
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
						<span class="inline-block w-48 text-center">Create New Invoice</span>
					</a>
				{:else}
					<a
						href="javascript:void(0)"
						class="flex sm:flex-wrap sm:inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-4 py-2 leading-5 text-sm rounded border-slate-700 bg-slate-700 text-white hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:ring focus:ring-slate-500 focus:ring-opacity-50 active:bg-slate-700 active:border-slate-700"
						on:click={() => handleClick('current', 0)}
					>
						<ViewPkgIcon />
						<span class="inline-block w-48 text-center">View Incoming Packages</span>
					</a>
				{/if}
			</div>
		</div>
		<div class=" bg-slate-100 px-4 py-2 rounded mt-4 flex items-center">
			{#if content == 'current'}
				<p class="mt-1 text-sm font-semibold text-gray-900 line-clamp-1">
					See below a list of your packages that have arrived in our warehouse
				</p>
			{:else if content == 'invoice'}
				<p class="mt-1 text-sm font-semibold text-gray-900 line-clamp-1">
					Please fill the form below
				</p>
			{:else}
				<p class="mt-1 text-sm font-semibold text-gray-900 line-clamp-1">
					Individual package details
				</p>
			{/if}
		</div>
		{#if content == 'current'}
			<div class="max-w-7xl mx-auto mt-4">
				<!-- Stacked list -->
				<ul
					role="list"
					class="mt-5 border-t border-gray-200 divide-y divide-gray-200 sm:mt-0 sm:border-t-0"
				>
					{#each Packages as item}
						<li>
							<a
								href={item.href}
								class="group block hover:bg-slate-50 p-4 lg:p-5"
								on:click={() => handleClick(item.ref, item.invoice)}
							>
								<div class="flex items-center">
									<div class="min-w-0 flex-1 flex">
										<div
											class="min-w-0 grid grid-flow-col auto-cols-auto gap-4 sm:gap-8 lg:gap-20 justify-between "
										>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Invoice Number:
													</p>
													<p class="mt-1 flex items-center font-medium text-sm text-slate-900">
														{item.invoice}
													</p>
												</div>
											</div>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Supplier Name:
													</p>
													<p class="mt-1 flex items-center font-medium text-sm text-slate-900">
														{item.supplier}
													</p>
												</div>
											</div>
											<div class="hidden md:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Tracking Number:
													</p>
													<p class="mt-1 flex items-center font-medium text-sm text-slate-900">
														{item.trackingNumber}
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
													<p class="mt-1 flex items-center font-medium text-sm text-slate-900">
														{item.itemDescription}
													</p>
												</div>
											</div>

											<div class="hidden lg:block">
												<div>
													<p
														class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate"
													>
														Package Notes:
													</p>
													<p
														class="mt-1 flex items-center font-medium text-sm text-slate-900 line-clamp-1"
													>
														{item.packageNotes}
													</p>
												</div>
											</div>
											<div class="hidden lg:block">
												<div />
												<div class="flex -space-x-2 relative z-0 overflow-hidden">
													<img
														class="relative z-30 inline-block h-10 w-10 rounded ring-2 ring-white"
														src={images[0]}
														alt=""
													/>
													<img
														class="relative z-20 inline-block h-10 w-10 rounded ring-2 ring-white"
														src={images[1]}
														alt=""
													/>
													<img
														class="relative z-10 inline-block h-10 w-10 rounded ring-2 ring-white"
														src={images[2]}
														alt=""
													/>
													<img
														class="relative z-0 inline-block h-10 w-10 rounded ring-2 ring-white"
														src={images[3]}
														alt=""
													/>
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
		{:else if content == 'invoice'}
			<NewInvoice />
		{:else if content == 'item1'}
			<IncomingItem1 />
		{:else if content == 'item2'}
			<IncomingItem2 />
		{:else if content == 'item3'}
			<IncomingItem3 />
		{:else if content == 'item4'}
			<IncomingItem4 />
		{:else if content == 'item5'}
			<IncomingItem5 />
		{:else if content == 'item6'}
			<IncomingItem6 />
		{:else if content == 'item7'}
			<IncomingItem7 />
		{:else if content == 'item8'}
			<IncomingItem8 />
		{:else if content == 'item9'}
			<IncomingItem9 />
		{/if}
	</div>
</div>
