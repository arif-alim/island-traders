<script>
	let supplierName = 'Walmart';
	let trackingNum = '24131ZD1241';
	let itemDescription = 'Testing item descript <b>new</b> item is now on sale! <br> Test it out!';
	let packageNotes = 'Testing notes';
	let dateUploaded = '22/12/20222';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white overflow-hidden">
	<div class="border-t border-gray-200 mt-4">
		<dl>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Date Uploaded:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{dateUploaded}</dd>
			</div>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Supplier Name:
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{supplierName}</dd>
			</div>
			<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Tracking Number
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{trackingNum}</dd>
			</div>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Item Description
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemDescription}</dd>
			</div>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Invoice Preview
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{itemDescription}</dd>
			</div>
			<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">
					Package Notes
				</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{packageNotes}</dd>
			</div>
			<div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">About</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa
					consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud
					in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit
					deserunt qui eu.
				</dd>
			</div>
			<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
				<dt class="text-xs tracking-tight uppercase font-medium text-slate-600 truncate">Images</dt>
				<dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
					<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 text-center">
						<div>
							<!-- Rounded Avatar (extra large) -->
							<img
								src="/images/user/packages/inc-pkg-0.jpg"
								alt="User Avatar"
								class="inline-block w-full h-auto rounded-lg"
							/>
						</div>
						<div>
							<!-- Rounded Avatar (extra large) -->
							<img
								src="/images/user/packages/inc-pkg-1.jpg"
								alt="User Avatar"
								class="inline-block w-full h-auto rounded-lg"
							/>
						</div>
						<div>
							<!-- Rounded Avatar (extra large) -->
							<img
								src="/images/user/packages/inc-pkg-2.jpg"
								alt="User Avatar"
								class="inline-block w-full h-auto rounded-lg"
							/>
						</div>
						<div>
							<!-- Rounded Avatar (extra large) -->
							<img
								src="/images/user/packages/inc-pkg-3.jpg"
								alt="User Avatar"
								class="inline-block w-full h-auto rounded-lg"
							/>
						</div>
					</div>
				</dd>
			</div>
			<div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
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
