<script>
	let activeTab = 'consolidation';
</script>

<div class="bg-white">
	<section aria-labelledby="features-heading" class="max-w-7xl mx-auto py-12 sm:px-2 lg:px-8">
		<div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
			<!-- Heading -->
			<div class="max-w-4xl">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					Services we offer
				</h2>
				<p class="mt-4 text-gray-700 max-w-4xl prose">
					iSLAND tRADERS Shop & Ship offers a great logistic service. We strive to offer the best
					solution for your shipping and purchasing needs without compromise.
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
								'consolidation'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								<!-- <svg
									viewBox="0 -1 512 512"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><path
										d="m396.382812 122.796875 99.632813-36.347656-240.015625-86.449219-97.675781 35.179688 238.410156 86.648437zm0 0"
									/><path
										d="m114.214844 51.066406-95.097656 34.253906 236.949218 88.664063 97.992188-35.75zm0 0"
									/><path
										d="m271 363.867188c16.425781-57.933594 69.789062-100.496094 132.914062-100.496094 43.714844 0 82.746094 20.421875 108.074219 52.21875l.011719-203.039063-241 87.921875zm0 0"
									/><path
										d="m271 502.085938 28.496094-10.265626c-13.058594-15.074218-22.910156-32.996093-28.496094-52.691406zm0 0"
									/><path d="m0 415.285156 241 86.804688v-301.710938l-241-90.183594zm0 0" /><path
										d="m403.304688 292.351562c-60.035157 0-108.699219 48.664063-108.699219 108.695313s48.664062 108.699219 108.699219 108.699219c60.03125 0 108.695312-48.667969 108.695312-108.699219s-48.664062-108.695313-108.695312-108.695313zm1.625 155.3125-43.390626-43.390624 21.210938-21.214844 14.816406 14.820312 21.648438-40.402344 26.441406 14.167969zm0 0"
									/></svg
								> -->
								<svg
									enable-background="new 0 0 512 512"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><g
										><path
											d="m163.257 134.444c5.717 5.186 14.437 5.187 20.155 0l44.645-40.496c6.136-5.566 6.599-15.052 1.033-21.188-5.566-6.137-15.052-6.598-21.188-1.033l-19.567 17.749v-74.476c0-8.284-6.716-15-15-15s-15 6.716-15 15v74.476l-19.568-17.749c-6.135-5.565-15.622-5.104-21.188 1.033s-5.104 15.622 1.033 21.188z"
										/><path
											d="m328.59 134.444c5.717 5.186 14.437 5.187 20.155 0l44.646-40.496c6.136-5.566 6.599-15.052 1.033-21.188-5.566-6.137-15.053-6.599-21.188-1.033l-19.568 17.749v-74.476c0-8.284-6.716-15-15-15s-15 6.716-15 15v74.476l-19.568-17.748c-6.137-5.565-15.622-5.104-21.188 1.033-5.566 6.136-5.104 15.622 1.033 21.188z"
										/><path
											d="m506.872 129.708c-6.236-5.453-15.713-4.816-21.166 1.419l-66.433 75.983h-326.545l-66.434-75.983c-5.453-6.237-14.929-6.873-21.166-1.419-6.237 5.453-6.872 14.929-1.419 21.166l67.203 76.862v249.264c0 19.3 15.7 35 35 35h300.18c19.3 0 35-15.7 35-35v-249.267l67.2-76.86c5.452-6.236 4.817-15.713-1.42-21.165zm-148.871 310.292h-67c-8.28 0-15-6.72-15-15s6.72-15 15-15h67c8.28 0 15 6.72 15 15s-6.72 15-15 15zm0-65h-67c-8.28 0-15-6.72-15-15s6.72-15 15-15h67c8.28 0 15 6.72 15 15s-6.72 15-15 15z"
										/></g
									></svg
								>

								Consolidation
							</button>
							<button
								on:click={() => (activeTab = 'bonded')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'bonded'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 -19 512 512"
									class="h-6 w-6 mr-2"
									fill="currentColor"
								>
									<g id="surface1">
										<path
											d="M 174.203125 0 L 237.40625 0 L 237.40625 131.320312 L 174.203125 131.320312 Z M 174.203125 0 "
										/>
										<path
											d="M 336.878906 205.703125 C 327.191406 231.074219 306.65625 251.078125 280.941406 260.042969 L 280.941406 292.847656 C 280.941406 367.183594 322.414062 435.3125 388.453125 469.449219 L 396.472656 473.597656 L 404.488281 469.449219 C 470.527344 435.3125 512 367.183594 512 292.847656 L 512 260.042969 C 486.285156 251.078125 465.75 231.074219 456.066406 205.703125 Z M 467.773438 296.769531 L 388.640625 373.253906 L 335.578125 323.144531 L 356.175781 301.332031 L 388.402344 331.765625 L 446.921875 275.199219 Z M 467.773438 296.769531 "
										/>
										<path
											d="M 250.941406 292.847656 L 250.941406 238.730469 L 271.066406 231.714844 C 288.492188 225.640625 302.261719 212.257812 308.851562 195.003906 L 316.21875 175.703125 L 411.609375 175.703125 L 411.609375 0 L 267.40625 0 L 267.40625 161.320312 L 144.203125 161.320312 L 144.203125 0 L 0 0 L 0 374.527344 L 266.023438 374.527344 C 256.097656 348.554688 250.941406 320.890625 250.941406 292.847656 Z M 250.941406 292.847656 "
										/>
									</g>
								</svg>
								Items Bonded
							</button>
							<button
								on:click={() => (activeTab = 'storage')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'storage'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								<!-- <svg
									enable-background="new 0 0 512 512"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><g
										><path
											d="m451 422h-285c-8.276 0-15-6.724-15-15v-362c0-24.814-20.186-45-45-45h-45v30h45c8.276 0 15 6.724 15 15v362c0 20.744 14.178 38.077 33.303 43.264-2.089 5.184-3.303 10.813-3.303 16.736 0 24.814 20.186 45 45 45s45-20.186 45-45c0-5.284-1.082-10.285-2.763-15.01h95.526c-1.681 4.725-2.763 9.726-2.763 15.01 0 24.814 20.186 45 45 45s45-20.186 45-45c0-5.284-1.082-10.285-2.763-15h32.763z"
										/><path d="m211 121v90h180v-90h-75v30h-30v-30z" /><path
											d="m286 241h30v30h-30z"
										/><path d="m346 301h-90v-60h-75v151h240v-151h-75z" /></g
									></svg
								> -->
								<svg
									enable-background="new 0 0 512 512"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><g
										><path
											d="m183.65 333c0 20.496-22.514 33.079-39.96 22.37l-23.19-14.21-23.2 14.21c-17.36 10.689-39.95-1.821-39.95-22.37v-62h-37.35c-11.046 0-20 8.954-20 20v201c0 11.046 8.954 20 20 20h221v-241h-57.35zm-23.42 117.63h-79.46c-8.29 0-15-6.71-15-15 0-8.28 6.71-15 15-15h79.46c8.29 0 15 6.72 15 15 0 8.29-6.71 15-15 15z"
										/><path
											d="m134.2 314.37 19.45 11.92v-55.29h-66.3v55.29l19.43-11.91c8.47-5.17 18.97-5.17 27.42-.01z"
										/><path
											d="m492 271h-37.35v62c0 20.496-22.514 33.079-39.96 22.37l-23.19-14.21-23.2 14.21c-17.326 10.668-39.95-1.796-39.95-22.37v-62h-57.35v241h221c11.046 0 20-8.954 20-20v-201c0-11.046-8.954-20-20-20zm-60.77 179.63h-79.46c-8.29 0-15-6.71-15-15 0-8.28 6.71-15 15-15h79.46c8.29 0 15 6.72 15 15 0 8.29-6.71 15-15 15z"
										/><path
											d="m358.35 326.29 19.43-11.91c8.47-5.17 18.97-5.17 27.42-.01l19.45 11.92v-55.29h-66.3z"
										/><path
											d="m376.5 20c0-11.046-8.954-20-20-20h-37.35v62c0 20.496-22.514 33.079-39.96 22.37l-23.19-14.21-23.2 14.21c-17.297 10.65-39.95-1.727-39.95-22.37v-62h-37.35c-11.046 0-20 8.954-20 20v221h241zm-80.77 159.63h-79.46c-8.29 0-15-6.71-15-15 0-8.28 6.71-15 15-15h79.46c8.29 0 15 6.72 15 15 0 8.29-6.71 15-15 15z"
										/><path
											d="m269.7 43.37 19.45 11.92v-55.29h-66.3v55.29l19.43-11.91c8.47-5.17 18.97-5.17 27.42-.01z"
										/></g
									></svg
								>

								Package Storage
							</button>
							<button
								on:click={() => (activeTab = 'purchases')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'purchases'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								<svg
									viewBox="-33 0 512 512.002"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><path
										d="m136.289062 271h180c8.292969 0 15-6.710938 15-15v-181c0-8.289062-6.707031-15-15-15h-45v-15c0-24.8125-20.1875-45-45-45s-45 20.1875-45 45v15h-45c-8.289062 0-15 6.710938-15 15v181c0 8.289062 6.710938 15 15 15zm75-226c0-8.277344 6.738282-15 15-15 8.261719 0 15 6.722656 15 15v15h-30zm0 0"
									/><path
										d="m444.816406 248.234375c-2.695312-4.480469-7.589844-7.234375-12.832031-7.234375-26.429687 0-50.675781 14.667969-62.945313 38.078125l-46.011718 87.8125c-7.820313 14.882813-23.085938 24.109375-39.871094 24.109375h-101.867188c-8.289062 0-15-6.710938-15-15s6.710938-15 15-15h101.863282c5.597656 0 10.695312-3.074219 13.304687-8.042969 2.597657-4.960937 10.445313-19.941406 17.191407-32.816406 2.125-4.054687 1.976562-8.925781-.394532-12.84375-2.375-3.914063-6.621094-6.296875-11.199218-6.296875h-155.921876c-20.039062 0-38.847656 7.808594-53.027343 21.972656l-88.710938 88.710938c-5.859375 5.859375-5.859375 15.351562 0 21.210937l75 74.710938c2.929688 2.929687 6.769531 4.398437 10.605469 4.398437s7.675781-1.46875 10.605469-4.398437l56.894531-56.605469h125.652344c39.171875 0 74.824218-21.5625 93.019531-56.265625l69.082031-131.761719c2.460938-4.644531 2.285156-10.238281-.4375-14.738281zm0 0"
									/></svg
								>
								Help purchase
							</button>
							<button
								on:click={() => (activeTab = 'customs')}
								type="button"
								class="text-tiny px-2 md:px-6 flex items-center py-3 capitalize {activeTab ===
								'customs'
									? 'text-pblue-800 border-b-2 border-pblue-800 font-bold'
									: 'text-gray-700 hover:text-pblue-800 font-semibold'}"
							>
								<svg
									enable-background="new 0 0 512 512"
									viewBox="0 0 512 512"
									xmlns="http://www.w3.org/2000/svg"
									class="h-6 w-6 mr-2"
									fill="currentColor"
									><g
										><path
											d="m64.267 176.733h-17.134c-25.483 0-47.133 20.557-47.133 47.134v145.667c0 26.576 21.645 47.133 47.133 47.133h32.133v-224.934c.001-8.284-6.715-15-14.999-15z"
										/><path
											d="m495.933 127.467v-2.133h-158.533v2.133c0 43.708 35.559 79.267 79.267 79.267s79.266-35.559 79.266-79.267z"
										/><path
											d="m304.2 95.333h191.733v-80.333c0-8.284-6.716-15-15-15h-128.533c-8.284 0-15 6.716-15 15v50.333h-33.2c-8.284 0-15 6.716-15 15s6.716 15 15 15z"
										/><path
											d="m304.2 416.667h-224.933v48.2c0 26.576 21.645 47.133 47.133 47.133h145.667c25.483 0 47.133-20.556 47.133-47.133v-33.2c0-8.285-6.716-15-15-15z"
										/><path
											d="m217.721 351.4-7.844 7.853c-6.937 7.812-11.083 17.415-12.167 27.413h55.278z"
										/><path
											d="m416.667 206.733c-34.625 0-68.478 14.026-92.87 38.473l-84.875 84.969 56.491 56.491h25.715l48.405-48.386v158.72c0 8.284 6.716 15 15 15h112.467c8.284 0 15-6.716 15-15v-194.95c0-52.558-42.767-95.317-95.333-95.317z"
										/></g
									></svg
								>
								Customs broker
							</button>
						</div>
					</div>
				</div>
				{#if activeTab === 'consolidation'}
					<div class="space-y-16 pt-6 lg:pt-12">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-7 prose">
								<h3 class="text-xl font-bold leading-tight text-gray-900">
									We Does Consolidate Your Orders
								</h3>
								<p class="mt-2  text-gray-600">
									Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
									multiple orders into one so all of your packages will be shipped together. Let’s
									say you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we
									will combine both orders together to be treated as a single shipment (*FREE of
									charge) so that you will receive both packages together saving you time and money.
								</p>
								<p class="mt-2  text-gray-600">
									Consolidation is offered upon request only. So if your orders are expected to
									arrive at your Unit on different days and from different stores, we will combine
									them into one shipment for you for up to a maximum of ten (10) calendar days.
								</p>
								<p class="mt-2  text-gray-600">
									Please upload your invoices with the tracking numbers to your account to avoid any
									delays with your orders.
								</p>
							</div>
							<div class="lg:col-span-5">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-3 sm:aspect-h-2"
								>
									<img
										src="/images/public/home/services-1.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}

				{#if activeTab === 'bonded'}
					<div class="space-y-16 pt-6 lg:pt-12">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-7 prose">
								<h3 class="text-xl font-bold leading-tight text-gray-900">
									We Does Consolidate Your Orders
								</h3>
								<p class="mt-2  text-gray-600">
									Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
									multiple orders into one so all of your packages will be shipped together. Let’s
									say you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we
									will combine both orders together to be treated as a single shipment (*FREE of
									charge) so that you will receive both packages together saving you time and money.
								</p>
								<p class="mt-2  text-gray-600">
									Consolidation is offered upon request only. So if your orders are expected to
									arrive at your Unit on different days and from different stores, we will combine
									them into one shipment for you for up to a maximum of ten (10) calendar days.
								</p>
								<p class="mt-2  text-gray-600">
									Please upload your invoices with the tracking numbers to your account to avoid any
									delays with your orders.
								</p>
							</div>
							<div class="lg:col-span-5">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-3 sm:aspect-h-2"
								>
									<img
										src="/images/public/home/services-1.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'storage'}
					<div class="space-y-16 pt-6 lg:pt-12">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-7 prose">
								<h3 class="text-xl font-bold leading-tight text-gray-900">
									We Does Consolidate Your Orders
								</h3>
								<p class="mt-2  text-gray-600">
									Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
									multiple orders into one so all of your packages will be shipped together. Let’s
									say you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we
									will combine both orders together to be treated as a single shipment (*FREE of
									charge) so that you will receive both packages together saving you time and money.
								</p>
								<p class="mt-2  text-gray-600">
									Consolidation is offered upon request only. So if your orders are expected to
									arrive at your Unit on different days and from different stores, we will combine
									them into one shipment for you for up to a maximum of ten (10) calendar days.
								</p>
								<p class="mt-2  text-gray-600">
									Please upload your invoices with the tracking numbers to your account to avoid any
									delays with your orders.
								</p>
							</div>
							<div class="lg:col-span-5">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-3 sm:aspect-h-2"
								>
									<img
										src="/images/public/home/services-1.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'purchases'}
					<div class="space-y-16 pt-6 lg:pt-12">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-7 prose">
								<h3 class="text-xl font-bold leading-tight text-gray-900">
									We Does Consolidate Your Orders
								</h3>
								<p class="mt-2  text-gray-600">
									Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
									multiple orders into one so all of your packages will be shipped together. Let’s
									say you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we
									will combine both orders together to be treated as a single shipment (*FREE of
									charge) so that you will receive both packages together saving you time and money.
								</p>
								<p class="mt-2  text-gray-600">
									Consolidation is offered upon request only. So if your orders are expected to
									arrive at your Unit on different days and from different stores, we will combine
									them into one shipment for you for up to a maximum of ten (10) calendar days.
								</p>
								<p class="mt-2  text-gray-600">
									Please upload your invoices with the tracking numbers to your account to avoid any
									delays with your orders.
								</p>
							</div>
							<div class="lg:col-span-5">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-3 sm:aspect-h-2"
								>
									<img
										src="/images/public/home/services-1.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-center object-cover"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
				{#if activeTab === 'customs'}
					<div class="space-y-16 pt-6 lg:pt-12">
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:mt-0 lg:col-span-7 prose">
								<h3 class="text-xl font-bold leading-tight text-gray-900">
									We Does Consolidate Your Orders
								</h3>
								<p class="mt-2  text-gray-600">
									Otherwise known as “CONSOLIMADATION”, Consolidation is the process of combining
									multiple orders into one so all of your packages will be shipped together. Let’s
									say you buy a smartphone from Amazon and a pair of sneakers from Foot Locker; we
									will combine both orders together to be treated as a single shipment (*FREE of
									charge) so that you will receive both packages together saving you time and money.
								</p>
								<p class="mt-2  text-gray-600">
									Consolidation is offered upon request only. So if your orders are expected to
									arrive at your Unit on different days and from different stores, we will combine
									them into one shipment for you for up to a maximum of ten (10) calendar days.
								</p>
								<p class="mt-2  text-gray-600">
									Please upload your invoices with the tracking numbers to your account to avoid any
									delays with your orders.
								</p>
							</div>
							<div class="lg:col-span-5">
								<div
									class="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-3 sm:aspect-h-2"
								>
									<img
										src="/images/public/home/services-1.jpg"
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
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
