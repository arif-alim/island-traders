<script>
	import { page } from '$app/stores';
</script>

<!-- Page Heading -->
<div class="bg-gray-800 h-48">
	<div class="container xl:max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-1 md:grid-cols-2 py-9 border-gray-700">
			<div class="flex items-center border-gray-700">
				<div class="grow">
					<h1 class="text-2xl font-semibold text-white">Pickup Requests</h1>
				</div>
			</div>
			<!-- END Left Section -->
			<div class="flex items-center border-gray-700 justify-end">
				<!-- BEGIN Right Section -->
				<div class="hidden md:flex flex-1 px-2 lg:ml-6 lg:justify-end">
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
	</div>
</div>
<!-- END Page Heading -->
