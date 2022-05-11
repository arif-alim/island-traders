<script>
	import ConsoDividerIcon from '../../../components/icons/ConsoDividerIcon.svelte';
</script>

<div class="bg-white">
	<div class="container px-4 py-3 mx-auto xl:max-w-8xl">
		<div class="xl:flex  gap-4 lg:gap-12">
			<div class="lg:w-1/2 ">
				<div class="flex-col space-y-4">
					<h1 class="font-extrabold	sm:text-3xl text-gray-900 tracking-tight">
						Consolidate Your Orders
					</h1>
					<div class="prose">
						<p class="sm:text-base text-tiny">
							Otherwise known as <b>“CONSOLIMADATION”</b>, Consolidation is the process of combining
							multiple orders into one so all of your packages will be shipped together. Let’s say
							you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we will
							combine both orders together to be treated as a single shipment
							<b>(*FREE of charge)</b> so that you will receive both packages together saving you time
							and money.
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
									<ConsoDividerIcon />
								</span>
							</div>
						</div>
						<p class="text-tiny font-semibold">
							*Free consolidation is not offered to our Commercial iSLAND tRADERS clients.
							<br />
							*Consolidation shipments arrive in 3 business days, it's Next-day shipping.
							<br />
							*Consolidation shipments arrive in 3 business days, it's Next-day shipping.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 mt-8 lg:w-1/2 md:grid-cols-2">
				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/consolidation/consolidation-1.jpg"
						alt=""
					/>
				</div>

				<div class="aspect-w-2 aspect-h-3">
					<img
						class="object-cover rounded"
						src="/images/public/services/consolidation/consolidation-2.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
