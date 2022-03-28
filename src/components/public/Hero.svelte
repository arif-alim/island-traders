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
				<div
					class="carousel-inner relative w-full overflow-hidden h-[200px] sm:h-[300px] lg:h-[600px]"
				>
					<div
						class="carousel-item bg-cover active w-full"
						style="
    background-position: 50%;
    background-image: url('/images/public/home/slide-1.jpg');
    height: 600px;
  "
					>
						<!-- <img src="/images/public/home/slide-1.jpg" class="block w-full" alt="Wild Landscape" /> -->
						<!-- Background image -->

						<div
							class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
							style="background-color: rgba(0, 0, 0, 0.1)"
						>
							<div class="flex mx-auto max-w-3xl items-center h-full">
								<div class="flex-col">
									<div class="flex my-12">
										<img
											src="/images/public/home/island-traders.svg"
											class="block w-[400px]"
											alt="Wild Landscape"
										/>
									</div>
									<div class=" text-white px-6 md:px-12">
										<h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
										<h3 class="text-3xl font-bold mb-8">Subeading</h3>
										<button
											type="button"
											class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
											data-mdb-ripple="true"
											data-mdb-ripple-color="light"
										>
											Get started
										</button>
									</div>
								</div>
							</div>
						</div>

						<!-- Background image -->
					</div>
					<div class="carousel-item float-left w-full">
						<img src="/images/public/home/slide-3.jpg" class="block w-full" alt="Wild Landscape" />
					</div>
					<div class="carousel-item float-left w-full">
						<img src="/images/public/home/slide-2.jpg" class="block w-full" alt="Exotic Fruits" />
					</div>
				</div>
				<button
					class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
					type="button"
					data-bs-target="#carouselExampleCrossfade"
					data-bs-slide="prev"
				>
					<span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" />
					<span class="visually-hidden">Previous</span>
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
	<div class="hidden lg:block relative w-full lg:w-4/12">
		<div class="max-w-7xl h-[600px]">
			<img
				src="https://islandtraders.s3.ca-central-1.amazonaws.com/home/islandtraders_consolidation.jpg"
				alt="happy island traders customer"
				class="object-cover lg:block lg:h-full w-full "
			/>
		</div>
	</div>
</div>
