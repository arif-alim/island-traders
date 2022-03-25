<script>
	let activeTab = 'consolidation';
</script>

<div class="bg-white">
	<section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-12 sm:px-2 lg:px-8">
		<div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
			<!-- Heading -->
			<div class="max-w-4xl">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					How Does This Work?
				</h2>
				<p class="mt-4 text-gray-700 max-w-4xl prose">
					At Trip Support, we believe in offering you simple solutions for your travel needs. That’s
					why our Book Now Pay Later system is as easy as can be. Simply choose your travel
					destination, and we will do the rest. We will buy your tickets and your vacation packages.
					Once that happens, you’d be asked to pay us in installments. Our Book Now Pay Later option
					allows you to enjoy the benefits of early bookings savings. Instead of paying the full
					amount of your trip in advance, you only have to place a deposit to secure your tickets.
				</p>
			</div>
			<!-- END Heading -->

			<div class="mt-4">
				<div class="-mx-4 flex overflow-x-auto sm:mx-0">
					<div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
						<div class="-mb-px flex space-x-10" aria-orientation="horizontal" role="tablist">
							<button
								on:click={() => (activeTab = 'consolidation')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'cuba'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								Package Consolidation
							</button>
							<button
								on:click={() => (activeTab = 'bonded')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'cuba'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								Items Bonded
							</button>
							<button
								on:click={() => (activeTab = 'storage')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'cuba'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								Package Storage
							</button>
							<button
								on:click={() => (activeTab = 'purchases')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'cuba'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								Help with purhcases
							</button>
							<button
								on:click={() => (activeTab = 'customs')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'cuba'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								Customs Brokerage
							</button>
						</div>
					</div>
				</div>
				{#if activeTab === 'consolidation'}
					<div class="space-y-16 pt-10 lg:pt-16">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-5">
								<h3 class="text-lg font-medium text-gray-900">Consolidation</h3>
								<p class="mt-2 text-sm text-gray-500">
									The Organize base set allows you to configure and evolve your setup as your items
									and habits change. The included trays and optional add-ons are easily rearranged
									to achieve that perfect setup.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-01.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'bonded'}
					<div class="space-y-16 pt-10 lg:pt-16">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-5">
								<h3 class="text-lg font-medium text-gray-900">Bonded</h3>
								<p class="mt-2 text-sm text-gray-500">
									Organize has options for rich walnut and bright maple base materials. Accent your
									desk with a contrasting material, or match similar woods for a calm and cohesive
									look. Every base is hand sanded and finished.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg"
										alt="Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'storage'}
					<div class="space-y-16 pt-10 lg:pt-16">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-5">
								<h3 class="text-lg font-medium text-gray-900">Storage</h3>
								<p class="mt-2 text-sm text-gray-500">
									Organize has options for rich walnut and bright maple base materials. Accent your
									desk with a contrasting material, or match similar woods for a calm and cohesive
									look. Every base is hand sanded and finished.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg"
										alt="Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'purchases'}
					<div class="space-y-16 pt-10 lg:pt-16">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-5">
								<h3 class="text-lg font-medium text-gray-900">Purchases</h3>
								<p class="mt-2 text-sm text-gray-500">
									Organize has options for rich walnut and bright maple base materials. Accent your
									desk with a contrasting material, or match similar woods for a calm and cohesive
									look. Every base is hand sanded and finished.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg"
										alt="Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'customs'}
					<div class="space-y-16 pt-10 lg:pt-16">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-5">
								<h3 class="text-lg font-medium text-gray-900">Customs</h3>
								<p class="mt-2 text-sm text-gray-500">
									Organize has options for rich walnut and bright maple base materials. Accent your
									desk with a contrasting material, or match similar woods for a calm and cohesive
									look. Every base is hand sanded and finished.
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src="https://tailwindui.com/img/ecommerce-images/product-feature-06-detail-02.jpg"
										alt="Walnut organizer base with pen, sticky note, phone, and bin trays, next to modular drink coaster attachment."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</section>
</div>

<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
