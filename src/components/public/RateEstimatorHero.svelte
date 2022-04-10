<script>
	import LottieEstimator from './lottie/LottieEstimator.svelte';
</script>

<!-- Page Header Section: With Actions -->
<div class="bg-white">
	<div class="bg-gradient-to-r from-slate-900 to-sky-600">
		<div class="container max-w-8xl mx-auto px-4 lg:px-8">
			<div class="flex flex-col lg:flex-row lg:items-center py-8">
				<div class="lg:w-1/2 text-center lg:text-left  ">
					<h2 id="sale-heading" class="text-3xl font-extrabold text-white md:text-5xl">
						Rate Estimator
					</h2>
					<p class="hidden sm:flex prose text-sm sm:text-base  text-slate-100 mt-4">
						Please use our rate estimator below to find the cost of shipping your package
					</p>
					<div class="mt-4 text-base">
						<a href="#" class="font-semibold text-white"
							>View Duties<span aria-hidden="true" class="ml-2"> &rarr;</span></a
						>
					</div>
				</div>
				<div class="lg:w-1/2 flex sm:items-center sm:justify-center lg:justify-center">
					<div class="w-60 ">
						<!-- <img
							class="rounded-lg object-cover object-center"
							src="/images/public/rates/bahamas-islands-color.png"
							alt=""
						/> -->
						<LottieEstimator />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
