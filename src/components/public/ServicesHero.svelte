<script>
	import LottieAbout from './lottie/LottieAbout.svelte';
</script>

<!-- <div class="relative bg-gradient-to-r from-slate-900 to-blue-700 px-4">
	<div class="mx-auto max-w-7xl flex h-72 lg:h-[350px] items-center">
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
	<div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
		<div class="h-full w-full xl:grid xl:grid-cols-2">
			<div class="h-full xl:relative xl:col-start-2">
				<img
					class="h-full w-full object-cover object-center opacity-40 xl:absolute xl:inset-0"
					src="<?php echo THEME_IMAGE_HERO.'/tripsupport-team.jpg'?>"
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
		class="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-3 xl:grid-flow-col-dense xl:gap-x-8"
	>
		<div
			class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 col-span-2 xl:pb-24 prose max-w-prose"
		>
			<h3 class="mt-3 text-3xl leading-normal tracking-wide font-bold text-white">Our Entity</h3>
			<p class="border-gray-50 text-slate-100 font-light">
				We have grown substantially since our opening in 2014. Thanks to our state-of-the-art
				services, we went from about $165,000 in revenue in 2014 to about $22.5M CAD in 2019, which
				shows an average growth rate of over 2000%.
			</p>
		</div>
	</div>
</div>
