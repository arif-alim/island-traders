<script>
	import PurchaseHero from '../components/public/PurchaseHero.svelte';
	import PurchaseDividerIcon from '../components/icons/PurchaseDividerIcon.svelte';
</script>

<PurchaseHero />

<div class="bg-white">
	<div class="container px-4 py-12 sm:py-16 mx-auto xl:max-w-8xl">
		<div class="xl:flex xl:items-center xL:-mx-4">
			<div class="lg:w-1/2 ">
				<div class="flex-col space-y-4">
					<h1 class="font-extrabold	sm:text-3xl text-gray-900 tracking-tight">
						Purchase items without restrictions
					</h1>
					<div class="prose">
						<p class="sm:text-base text-tiny">
							NO credit card or computer? We will be your personal online shopper! Stop by and show
							one of our friendly staff members what you want and we will get it for you for a
							minimal fee of $10 or 15% of the cost of your items (whichever is greater)
						</p>
						<!-- divider -->
						<div class="relative">
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div class="w-full border-t border-gray-300" />
							</div>
							<div class="relative flex justify-start">
								<span class="bg-white px-2 text-gray-500">
									<PurchaseDividerIcon />
								</span>
							</div>
						</div>
						<p class="text-tiny font-semibold text-gray-600 max-w-lg">
							LESS THAN $500 – 15% PURCHASE FEE*
							<br />
							$500-$1499 - 10% PURCHASE FEE
							<br />
							+$1500 - 5% PURCHASE FEE
							<br />
							<span class="font-extrabold"> *$10 MINIMUM PURCHASE FEE </span>
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 mt-8 lg:w-1/2 md:grid-cols-2">
				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/purchase/purchase-1.jpg"
						alt=""
					/>
				</div>

				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/purchase/purchase-2.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
