<script>
	import LottieShop from './lottie/LottieShop.svelte';
	import LottieConsolidation from './lottie/LottieConsolidation.svelte';
	import LottieShipped from './lottie/LottieShipped.svelte';
	import LottieWarehouse from './lottie/LottieWarehouse.svelte';
	import LottieDelivery from './lottie/LottieDelivery.svelte';

	let activeTab = 'test';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-20 lg:space-y-12">
	<!-- Heading -->
	<div class="max-w-4xl">
		<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
			How Does This Work?
		</h2>
		<p class="mt-2 text-gray-700 prose max-w-4xl">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua. Ut enim ad minim veniam.
		</p>
	</div>
	<!-- END Heading -->

	<div class="flex items-center">
		<div class="flex-col relative w-full lg:w-1/5">
			<div class="flex items-center">
				<div class="hidden sm:flex w-full border border-slate-200" />
				<div class="flex rounded-full bg-white shadow-lg p-2 mb-4 items-center">
					<!-- <img
							src="/images/public/home/hdtw-5.jpg"
							alt="User Avatar"
							class="inline-block w-52 h-52 rounded-full object-cover"
						/> -->
					<div class="flex items-center w-28 h-28 justify-center">
						<LottieShop />
					</div>
				</div>
				<div class="hidden sm:flex w-full border border-slate-200" />
			</div>
			<div class="flex items-center">
				<div class="mt-3 sm:pr-8 text-center">
					<h3 class="font-semibold text-gray-900 dark:text-white">
						Shop online and ship it to our U.S warehouse
					</h3>
				</div>
			</div>
		</div>
		<div class="flex-col relative w-full lg:w-1/5">
			<div class="flex items-center">
				<div class="hidden sm:flex w-full border border-slate-200" />
				<div class="flex rounded-full bg-white shadow-lg p-2 mb-4 items-center">
					<!-- <img
							src="/images/public/home/hdtw-5.jpg"
							alt="User Avatar"
							class="inline-block w-52 h-52 rounded-full object-cover"
						/> -->
					<div class="flex items-center w-28 h-28 justify-center">
						<LottieShipped />
					</div>
				</div>
				<div class="hidden sm:flex w-full border border-slate-200" />
			</div>
			<div class="flex items-center">
				<div class="mt-3 sm:pr-8 text-center">
					<h3 class="font-semibold text-gray-900 dark:text-white">
						Packages are shipped from U.S to Nassau warehouse
					</h3>
				</div>
			</div>
		</div>
		<div class="flex-col relative w-full lg:w-1/5">
			<div class="flex items-center">
				<div class="hidden sm:flex w-full border border-slate-200" />
				<div class="flex rounded-full bg-white shadow-lg p-2 mb-4 items-center">
					<!-- <img
							src="/images/public/home/hdtw-5.jpg"
							alt="User Avatar"
							class="inline-block w-52 h-52 rounded-full object-cover"
						/> -->
					<div class="flex items-center w-28 h-28 justify-center">
						<LottieWarehouse />
					</div>
				</div>
				<div class="hidden sm:flex w-full border border-slate-200" />
			</div>
			<div class="flex items-center">
				<div class="mt-3 sm:pr-8 text-center">
					<h3 class="font-semibold text-gray-900 dark:text-white">
						Packages arrive to our Nassau warehouse
					</h3>
				</div>
			</div>
		</div>
		<div class="flex-col relative w-full lg:w-1/5">
			<div class="flex items-center">
				<div class="hidden sm:flex w-full border border-slate-200" />
				<div class="flex rounded-full bg-white shadow-lg p-2 mb-4 items-center">
					<!-- <img
							src="/images/public/home/hdtw-5.jpg"
							alt="User Avatar"
							class="inline-block w-52 h-52 rounded-full object-cover"
						/> -->
					<div class="flex items-center w-28 h-28 justify-center">
						<LottieConsolidation />
					</div>
				</div>
				<div class="hidden sm:flex w-full border border-slate-200" />
			</div>
			<div class="flex items-center">
				<div class="mt-3 sm:pr-8 text-center">
					<h3 class="font-semibold text-gray-900 dark:text-white">
						Packages are inspected, and consolidated
					</h3>
				</div>
			</div>
		</div>

		<div class="flex-col relative w-full lg:w-1/5">
			<div class="flex items-center">
				<div class="hidden sm:flex w-full border border-slate-200" />
				<div class="flex rounded-full bg-white shadow-lg p-2 mb-4 items-center">
					<!-- <img
							src="/images/public/home/hdtw-5.jpg"
							alt="User Avatar"
							class="inline-block w-52 h-52 rounded-full object-cover"
						/> -->
					<div class="flex items-center w-28 h-28 justify-center">
						<LottieDelivery />
					</div>
				</div>
				<div class="hidden sm:flex w-full border border-slate-200" />
			</div>
			<div class="flex items-center">
				<div class="mt-3 sm:pr-8 text-center">
					<h3 class="font-semibold text-gray-900 dark:text-white">
						Finally, packages are shipped to our customers
					</h3>
				</div>
			</div>
		</div>
	</div>
</div>
