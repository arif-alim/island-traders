<script>
	import LottieAbout from './lottie/LottieAbout.svelte';
</script>

<!-- <div class="relative bg-gradient-to-r from-slate-900 to-blue-700 px-4">
	<div class="mx-auto max-w-8xl flex h-72 lg:h-[350px] items-center">
		<div class="flex-col">
			<p class="mt-2 text-white text-3xl font-extrabold sm:text-4xl">Our Services</p>
			<p class="mt-3 text-md text-gray-200 font-light ">
				We're focused on making your dream vacation. Find the right vacation and book with
				confidence.
			</p>
		</div>
		<div class="w-1/2 hidden sm:block">
			<LottieAbout />
		</div>
	</div>
</div> -->

<div class="relative bg-gray-900">
	<div class=" h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
		<div class="h-full w-full xl:grid xl:grid-cols-2">
			<div class="h-full xl:relative xl:col-start-2">
				<img
					class="h-full w-full object-cover object-center opacity-40 xl:absolute xl:inset-0"
					src="/images/public/services/services-cover.jpg"
					alt="People working on laptops"
				/>
				<div
					aria-hidden="true"
					class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-92 xl:bg-gradient-to-r"
				/>
			</div>
		</div>
	</div>
	<div
		class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-8xl lg:px-8 xl:grid xl:grid-cols-3 xl:grid-flow-col-dense xl:gap-x-8"
	>
		<div class="relative pt-12 pb-24 sm:pt-28 sm:pb-28 xl:col-start-1 col-span-2 prose max-w-prose">
			<h2 class="text-3xl  font-extrabold text-white sm:text-4xl">Our Services</h2>
			<p class="mt-0 text-base text-gray-300 ">
				We have grown substantially since our opening in 2014. Thanks to our state-of-the-art
				services, we went from about $165,000 in revenue in 2014 to about $22.5M CAD in 2019, which
				shows an average growth rate of over 2000%.
			</p>
		</div>
	</div>
</div>
