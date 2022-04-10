<script>
	import BondDividerIcon from '../components/icons/BondDividerIcon.svelte';
	import BondHero from '../components/public/BondHero.svelte';
</script>

<BondHero />

<div class="bg-white">
	<div class="container px-4 py-12 sm:py-16 mx-auto xl:max-w-8xl">
		<div class="xl:flex xl:items-center xL:-mx-4">
			<div class="lg:w-1/2 ">
				<div class="flex-col space-y-4">
					<h1 class="font-extrabold	sm:text-3xl text-gray-900 tracking-tight">Your Items Bonded</h1>
					<div class="prose">
						<p class="sm:text-base text-tiny">
							iSLAND tRADERS recognizes the challenges businesses face to bring in their items
							BONDED. We handle all of your paperwork and get your items to you in a timely manner.
						</p>
						<p class="sm:text-base text-tiny">
							In order to bring in your items bonded, your invoice/receipt must be in the name of
							your company. Please be mindful that you will also need your company TIN# and current
							bond letter.
						</p>
						<p class="sm:text-base text-tiny">
							We offer special rates to businesses and we invite you to call us and find out more.
						</p>
					</div>
				</div>
			</div>

			<div class="grid grid-cols-1 gap-8 mt-8 lg:w-1/2 md:grid-cols-2">
				<div class="aspect-w-2 aspect-h-3">
					<img class="object-cover rounded" src="/images/public/services/bond/bond-1.jpg" alt="" />
				</div>

				<div class="aspect-w-2 aspect-h-3">
					<img class="object-cover rounded" src="/images/public/services/bond/bond-2.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</div>
