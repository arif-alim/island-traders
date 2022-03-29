<script>
	// import 'tw-elements';
</script>

<div class="flex space-x-2">
	<div class="relative w-full lg:w-8/12">
		<div>
			<!-- <img
				src="/images/public/home/package-consolidation.jpg"
				alt="lady opening packages that were consolidated"
				class="object-cover w-full sm:h-72 md:h-[400px] lg:block lg:h-[500px]"
			/> -->

			<div
				id="carouselExampleCrossfade"
				class="carousel slide carousel-fade relative"
				data-bs-ride="carousel"
			>
				<div
					class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
				>
					<button
						type="button"
						data-bs-target="#carouselExampleCrossfade"
						data-bs-slide-to="0"
						class="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCrossfade"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleCrossfade"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div class="carousel-inner relative w-full overflow-hidden ">
					<div class="carousel-item active float-left w-full ">
						<img src="/images/public/home/slide-1.jpg" class="block h-full" alt="Wild Landscape" />
					</div>
					<div class="carousel-item float-left w-full">
						<img src="/images/public/home/slide-2.jpg" class="block w-full" alt="Wild Landscape" />
					</div>
					<div class="carousel-item float-left w-full">
						<img src="/images/public/home/slide-3.jpg" class="block w-full" alt="Wild Landscape" />
					</div>
				</div>
				<button
					class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleCrossfade"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
					<span class="visually-hidden ">Previous</span>
				</button>
				<button
					class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
					type="button"
					data-bs-target="#carouselExampleCrossfade"
					data-bs-slide="next"
				>
					<span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" />
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	</div>
	<div class="hidden lg:block relative lg:w-4/12 ">
		<div class="max-w-7xl h-full">
			<img
				src="https://islandtraders.s3.ca-central-1.amazonaws.com/home/islandtraders_consolidation.jpg"
				alt="happy island traders customer"
				class="object-cover lg:block lg:h-full w-full "
			/>
		</div>
	</div>
</div>
