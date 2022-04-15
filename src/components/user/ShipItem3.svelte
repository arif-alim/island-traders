<script>
	import { Ship as pkg } from '../../components/user/ship-data.js';

	const Images = [
		{ src: '/images/user/packages/incoming/pkg-4.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-0.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-5.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-2.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-1.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-6.jpg', alt: 'Package in the warehouse' },
		{ src: '/images/user/packages/incoming/pkg-3.jpg', alt: 'Package in the warehouse' }
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->

<div class="bg-white overflow-hidden">
	<div class="mt-4">
		<dl>
			<div class="bg-white p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Date Arrived:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].dateArrived}</dd>
			</div>
			<div class="bg-slate-50 p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Invoice #:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].invoiceNumber}</dd>
			</div>
			<div class="bg-white p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Warehouse (WR) #:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].wrNumber}</dd>
			</div>
			<div class="bg-slate-50 p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Tracking Number:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].trackingNumber}</dd>
			</div>
			<div class="bg-white p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Item Description:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].itemDescription}</dd>
			</div>
			<div class="bg-slate-50 p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Shipping Address:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{pkg[2].address}</dd>
			</div>

			<div class="bg-white p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Images:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
						{#each Images as img}
							<div>
								<img src={img.src} alt={img.alt} class="inline-block w-full h-auto rounded-lg" />
							</div>
						{/each}
					</div>
				</dd>
			</div>
			<div class="bg-white p-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Attached Invoices:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<ul role="list" class="border border-gray-200 rounded-md divide-y divide-gray-200">
						<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm bg-pink-50">
							<div class="w-0 flex-1 flex items-center">
								<!-- Heroicon name: solid/paper-clip -->
								<svg
									class="flex-shrink-0 h-5 w-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="ml-2 flex-1 w-0 truncate"> walmart-invoice-1231414.pdf </span>
							</div>
							<div class="ml-4 flex-shrink-0">
								<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
							</div>
						</li>
						<li class="pl-3 pr-4 py-3 flex items-center justify-between text-sm bg-cyan-50">
							<div class="w-0 flex-1 flex items-center">
								<!-- Heroicon name: solid/paper-clip -->
								<svg
									class="flex-shrink-0 h-5 w-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
										clip-rule="evenodd"
									/>
								</svg>
								<span class="ml-2 flex-1 w-0 truncate">
									walmart-invoice-1231414-corrected.pdf
								</span>
							</div>
							<div class="ml-4 flex-shrink-0">
								<a href="#" class="font-medium text-indigo-600 hover:text-indigo-500"> Download </a>
							</div>
						</li>
					</ul>
					<!-- This example requires Tailwind CSS v2.0+ -->
					<div class="flex justify-end">
						<div class="block py-4 ">
							<span class="relative z-0 inline-flex shadow-sm rounded-md">
								<button
									type="button"
									class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
								>
									<!-- Heroicon name: solid/bookmark -->
									<svg
										class="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
										/>
									</svg>
								</button>
								<button
									type="button"
									class="-ml-px relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
									>Upload New Invoice</button
								>
							</span>
							<div class="font-normal text-ss text-slate-600 mt-1">
								Must be in .pdf or .docx format
							</div>
						</div>
					</div>
				</dd>
			</div>
		</dl>
	</div>
</div>
