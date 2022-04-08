<script>
	import LottieRates from '../lottie/LottieRates.svelte';
</script>

<div class="mx-auto max-w-8xl bg-gray-50 px-8">
	<div class="flex items-center h-48">
		<!-- <div class="w-full lg:w-7/12 xl:w-7/12"> -->
		<div class="w-full md:w-2/3">
			<div class="prose max-w-4xl py-8">
				<h1 class="text-xl md:text-2xl font-extrabold mb-4 mt-0">
					Grand Bahama <span class="font-normal">Rates</span>
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
		<h3 class="text-lg leading-6 font-extrabold text-gray-900 mb-4">Rate Fees</h3>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
			<div class="space-y-4">
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">HANDLING FEE:</dt>
					<dd class="text-sb font-medium text-gray-700">$3: 1-10 LBS PACKAGES</dd>
					<dd class="text-sb font-medium text-gray-700">$5: 11-75 LBS PACKAGES</dd>
					<dd class="text-sb font-medium text-gray-700">$15 PALLET / PACKAGE OVER 75 LBS</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">
						TV INSURANCE & HANDLING FEE:
					</dt>
					<dd class="text-sb font-medium text-gray-700">
						$30 MINIMUM OR 5% OF VALUE (WHICHEVER IS GREATER)
					</dd>
					<dd class="text-sb font-medium text-gray-700">TV'S ARE SHIPPED VIA AIR ONLY</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">BROKERAGE FEE:</dt>
					<dd class="text-sb font-medium text-gray-700">
						$2 PER HS CODE / +$35 IF YOUR INVOICES ARE OVER $1000
					</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">
						COMMERCIAL BROKERAGE FEE:
					</dt>
					<dd class="text-sb font-medium text-gray-700">$50 + $3 PER HS CODE</dd>
				</div>
			</div>
			<div class="space-y-4">
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">GOVERNMENT FEES:</dt>
					<dd class="text-sb font-medium text-gray-700">
						BAHAMAS CUSTOMS PROCESSING FEE: $10 OR 1% VALUE OF INVOICE (WHICHEVER IS GREATER) DUTY +
						ENVIRONMENTAL LEVY + VAT
					</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">PICKUP FEES:</dt>
					<dd class="text-sb font-medium text-gray-700">FORT LAUDERDALE: $40</dd>
					<dd class="text-sb font-medium text-gray-700">MIAMI (BROWARD): $50</dd>
					<dd class="text-sb font-medium text-gray-700">MIAMI (DADE): $65</dd>
					<dd class="text-sb font-medium text-gray-700">WEST PALM BEACH $80</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">INSURANCE FEE:</dt>
					<dd class="text-sb font-medium text-gray-700">1.5% OF INVOICE TOTAL</dd>
				</div>
			</div>
			<div class="space-y-4">
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">
						HAZARDOUS MATERIAL FEE:
					</dt>
					<dd class="text-sb font-medium text-gray-700">$35</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">
						S.E.D (SHIPMENTS OVER $2500):
					</dt>
					<dd class="text-sb font-medium text-gray-700">$35</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">STORAGE FEES:</dt>
					<dd class="text-sb font-medium text-gray-700">$0.25/LB PER WEEK</dd>
					<dd class="text-sb font-medium text-gray-700">$5 MINIMUM (CHARGED AFTER 5 DAYS)</dd>
				</div>
				<div class="bg-white shadow rounded p-5">
					<dt class="font-extrabold text-sl text-gray-900 truncate pb-2">FUEL SURCHAGE:</dt>
					<dd class="text-sb font-medium text-gray-700">0.15/LB</dd>
				</div>
			</div>
		</div>
	</div>

	<!-- Package Pricing -->
	<div class="pt-4 pb-12">
		<div class="prose max-w-4xl pb-10">
			<h1 class="text-2xl font-normal">
				See Our <span class="font-extrabold">Pricing</span> Below
			</h1>
			<p class="text-base text-gray-700">
				Freight cost is determined by the higher of the Actual Weight and Dimensional Weight rounded
				up to the nearest pound. Packaging is factored into these weight approaches. Dimensional
				weight is: Length x Width x Height (in Inches) / 139.
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/x-small-box.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-2">Price: $10.99</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						X-Small
						<br />
						Air Freight
						<br />
						0-4lbs
					</p>
				</div>
			</div>
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/small-box.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-2">Price: $15.99</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						Small
						<br />
						Air Freight
						<br />
						5-8lbs
					</p>
				</div>
			</div>
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/medium-box.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-2">Price: $1.99/lb</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						Medium
						<br />
						Air Freight
						<br />
						9-15lbs
					</p>
				</div>
			</div>
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/large-box.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-2">Price: $1.55/lb</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						Large
						<br />
						Air Freight
						<br />
						16lbs +
					</p>
				</div>
			</div>
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/x-large-box.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-1">Price: $1/lb</h4>
					<h4 class="text-base font-bold tracking-tight leading-tight mb-2">$10 minimum fee</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						X-Large | Ocean Frieght
						<br />
						1-349lbs | Max 5ft (height)
					</p>
				</div>
			</div>
			<div class="flex bg-white rounded-2xl shadow-xl items-center gap-4">
				<div class="p-4 w-2/5">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						src="/images/public/rates/boxes/pallet.png"
						alt="extra small shipping boxes"
						class="w-full"
					/>
				</div>
				<div class="flex-1">
					<h4 class="text-lg font-extrabold tracking-tight leading-tight mb-2">Price: $1.99/lb</h4>
					<p class="leading-relaxed text-tiny text-gray-700 font-bold">
						Pallet
						<br />
						Ocean Frieght
						<br />
						350lbs +
						<br />
						Max 5ft (height)
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
