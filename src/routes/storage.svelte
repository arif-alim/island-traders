<script>
	import StorageHero from '../components/public/StorageHero.svelte';
	import StorageDividerIcon from '../components/icons/StorageDividerIcon.svelte';
</script>

<StorageHero />

<div class="bg-white">
	<div class="container px-4 py-12 sm:py-16 mx-auto xl:max-w-8xl">
		<div class="xl:flex xl:items-center xL:-mx-4">
			<div class="lg:w-1/2 ">
				<div class="flex-col space-y-4">
					<h1 class="font-extrabold	sm:text-3xl text-gray-900 tracking-tight">In & Out Service</h1>
					<div class="prose">
						<p class="sm:text-base text-tiny">
							If you or someone you know are travelling to South Florida, you can now pick up your
							stuff up from our warehouse directly and use your $500 Bahamas Customs duty exemption!
							The fees associated with this service will be a $25.00 In/Out service Fee and
							additional charges based on the size (dimensional weight = L x W x H /139) of the
							items at $0.15 per pound. Anything over 100lbs will be billed at $0.10 per pound. Your
							fees will have to be paid before we release your items from your USA warehouse unit.
						</p>
						<p class="sm:text-base text-tiny">
							<b>Consolidation is offered upon request only</b>. So if your orders are expected to
							arrive at your Unit on different days and from different stores, we will combine them
							into one shipment for you for up to a maximum of ten (10) calendar days.
						</p>
						<p class="sm:text-base text-tiny">
							Please upload your invoices with the tracking numbers to your account to avoid any
							delays with your orders.
						</p>
						<!-- divider -->
						<div class="relative">
							<div class="absolute inset-0 flex items-center" aria-hidden="true">
								<div class="w-full border-t border-gray-300" />
							</div>
							<div class="relative flex justify-start">
								<span class="bg-white px-2 text-gray-500">
									<StorageDividerIcon />
								</span>
							</div>
						</div>
						<p class="text-tiny font-semibold text-rose-600 max-w-lg">
							Items held in our US office for pickup for more than 7 days will accrue storage fees
							on a per week basis.
							<br />
							Any stored items left unpaid for 30 days will be sold to cover charges.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 mt-8 lg:w-1/2 md:grid-cols-2">
				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/storage/storage-1.jpg"
						alt=""
					/>
				</div>

				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/storage/storage-2.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
