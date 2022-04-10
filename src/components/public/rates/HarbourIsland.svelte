<script>
	import LottieRates from '../lottie/LottieRates.svelte';
</script>

<div class="mx-auto max-w-8xl bg-gray-50 px-8">
	<div class="flex items-center h-48">
		<!-- <div class="w-full lg:w-7/12 xl:w-7/12"> -->
		<div class="w-full md:w-2/3">
			<div class="prose max-w-4xl py-8">
				<h1 class="text-xl md:text-2xl font-extrabold mb-4 mt-0">
					Harbour Island <span class="font-normal">Rates</span>
				</h1>
				<p class="text-base text-gray-700">
					Freight cost is determined by the higher of the Actual Weight and Dimensional Weight
					rounded up to the nearest pound. Packaging is factored into these weight approaches.
					Dimensional weight is: Length x Width x Height (in Inches) / 139.
				</p>
			</div>
		</div>
		<div class="hidden md:flex md:w-1/3 justify-center">
			<LottieRates />
		</div>
		<!-- <div class="w-full lg:w-5/12 px-4">
			<div class="flex items-center justify-start">
				<div class="w-full xl:w-1/2">
					<LottieRates />
				</div>
			</div>
		</div> -->
	</div>
	<!-- This example requires Tailwind CSS v2.0+ -->
	<div class="pb-12">
		<h3 class="text-lg leading-6 font-extrabold text-gray-900 mb-4">Coming soon...</h3>
	</div>
</div>
