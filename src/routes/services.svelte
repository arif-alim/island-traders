<script>
	import ServicesHero from '../components/public/ServicesHero.svelte';
</script>

<ServicesHero />

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative py-12 px-4 lg:py-16 ">
	<div class="relative max-w-8xl mx-auto">
		<h2 class="text-3xl tracking-tight font-extrabold text-slate-900 sm:text-4xl">
			Ship, shop and save with ease
		</h2>
		<p class="mt-3 max-w-4xl text-md text-slate-900 sm:mt-4">
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
			ducimus sed.
		</p>
		<div
			class="mt-12 max-w-lg mx-auto grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
		>
			<!-- Consolidation Service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="/consolidation" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="/images/public/services/consolidation.jpg "
							alt=""
						/>
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-blue-900">Save money with us</p>
							<p class="text-lg font-bold text-slate-900 hover:text-blue-700 mt-1">
								Package Consolidation
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								Consolidation is the process of combining multiple orders into one so all of your
								packages will be shipped together. Let’s say you buy a smartphone from Amazon and a
								pair of sneakers from Foot Locker; we will combine both orders together to be
								treated as a single shipment (*FREE of charge) so that you will receive both
								packages together saving you time and money.
							</p>
						</div>
						<div class="mt-4 flex w-full">
							<a
								href="/consolidation"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-blue-900"
							>
								View our Package Consolidation Services <span aria-hidden="true" class="ml-1"
									>&rarr;</span
								>
							</a>
						</div>
					</div>
				</a>
			</div>
			<!-- Bonding items service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="bond" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="/images/public/services/items-bonded.jpg "
							alt=""
						/>
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-purple-900">Secure your items</p>
							<p class="text-lg font-bold text-slate-900 hover:text-purple-700 mt-1">
								Bonding Items
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								iSLAND tRADERS recognizes the challenges businesses face to bring in their items
								BONDED. We handle all of your paperwork and get your items to you in a timely
								manner.
							</p>
						</div>
						<div class="mt-4 flex w-full">
							<a
								href="/bond"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-purple-900"
							>
								View our Item Bond Services <span aria-hidden="true" class="ml-1">&rarr;</span>
							</a>
						</div>
					</div>
				</a>
			</div>
			<!-- Bonding items service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="/storage" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="/images/public/services/packages-storage.jpg"
							alt=""
						/>
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-emerald-900">Processed & Stored</p>
							<p class="text-lg font-bold text-slate-900 hover:text-emerald-700 mt-1">
								Package Storage
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								If you or someone you know are travelling to South Florida, you can now pick up your
								stuff up from our warehouse directly and use your $500 Bahamas Customs duty
								exemption! The fees associated with this service will be a $25.00 In/Out service Fee
								and additional charges based on the size (dimensional weight = L x W x H /139) of
								the items at $0.15 per pound. Anything over 100lbs will be billed at $0.10 per
								pound. Your fees will have to be paid before we release your items from your USA
								warehouse unit.
							</p>
						</div>
						<div class="mt-4 flex w-full">
							<a
								href="/storage"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-emerald-900"
							>
								View our Package Storage Services <span aria-hidden="true" class="ml-1">&rarr;</span
								>
							</a>
						</div>
					</div>
				</a>
			</div>
		</div>
		<div
			class="mt-12 max-w-lg mx-auto grid gap-x-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none"
		>
			<!-- Bonding items service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="/purchase" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="/images/public/services/help-purchase.jpg"
							alt=""
						/>
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-rose-700">Financial Support</p>

							<p class="text-lg font-bold text-slate-900 hover:text-rose-700 mt-1">
								Help with Purchases
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								NO credit card or computer? We will be your personal online shopper! Stop by and
								show one of our friendly staff members what you want and we will get it for you for
								a minimal fee of $10 or 15% of the cost of your items (whichever is greater)
							</p>
						</div>
						<div class="mt-4 flex w-full">
							<a
								href="/purchase"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-rose-900"
							>
								View our Purchase Support Services <span aria-hidden="true" class="ml-1"
									>&rarr;</span
								>
							</a>
						</div>
					</div>
				</a>
			</div>
			<!-- Package Pickup Service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="/purchase" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img class="h-48 w-full object-cover" src="/images/public/services/pickup.jpg" alt="" />
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-amber-700">Easily access packages</p>
							<p class="text-lg font-bold text-slate-900 hover:text-amber-700 mt-1">
								Package Pickup
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								iSLAND tRADERS SHOP & SHIP is a one stop shop. We don’t let our clients waste their
								time and energy running up and down dealing with Customs. We will handle your
								brokerage work for you and we won’t charge you an arm and a leg to do so. We only
								provide customs brokerage services for customers who utilized use our shipping
								services.
							</p>
						</div>
						<div class="mt-4 flex w-full">
							<a
								href="/pickup"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-amber-900"
							>
								View our Package Pickup Services <span aria-hidden="true" class="ml-1">&rarr;</span>
							</a>
						</div>
					</div>
				</a>
			</div>

			<!-- Customs Broker Service -->
			<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
				<a href="/customs" sveltekit:prefetch class="block">
					<div class="flex-shrink-0">
						<img
							class="h-48 w-full object-cover"
							src="/images/public/services/customs-brokerage.jpg"
							alt=""
						/>
					</div>
					<div class="flex-1 bg-white p-6 flex flex-col justify-between">
						<div class="flex-1">
							<p class="text-sm font-medium text-fuchsia-900">We take care of customs</p>
							<p class="text-lg font-bold text-slate-900 hover:text-fuchsia-700 mt-1">
								Customs Borkerage
							</p>
							<p class="mt-3 text-tinyxl text-slate-600 line-clamp-3">
								Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
								multiple orders into one so all of your packages will be shipped together. Let’s say
								you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we will
								combine both orders together to be treated as a single shipment (*FREE of charge) so
								that you will receive both packages together saving you time and money.
							</p>
						</div>
						<div class="mt-4 flex ">
							<a
								href="/purchase"
								type="button"
								sveltekit:prefetch
								class="text-sb font-bold text-slate-900 hover:text-fuchsia-900"
							>
								View our Customs Broker Services <span aria-hidden="true" class="ml-1">&rarr;</span>
							</a>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
