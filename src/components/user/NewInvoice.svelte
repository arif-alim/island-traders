<script>
	let inv1 = 2315513441;
	let form = 1;
	function addForm() {
		++form;
	}
	function removeForm() {
		if (form > 1) {
			--form;
		} else {
			return;
		}
	}

	let trackingNum = 1;

	function addTracking() {
		if (trackingNum < 5) {
			++trackingNum;
		} else {
			return;
		}
	}

	function removeTracking() {
		if (trackingNum > 1) {
			--trackingNum;
		} else {
			return;
		}
	}

	let totalInvoice = 1;

	function addInvoice() {
		++totalInvoice;
	}

	function removeInvoice() {
		--totalInvoice;
	}

	let done = false;
</script>

<!-- Card: Billing Information -->
<div class="flex-col max-w-7xl mx-auto bg-white overflow-hidden">
	<!-- Card Header: Billing Information -->

	<!-- Card Body: Billing Information -->
	<div class="max-w-3xl mx-auto">
		<!-- <div class="p-5 lg:p-6 grow w-full md:flex md:space-x-5"> -->
		<!-- <p class="md:flex-none md:w-1/3 text-gray-500 text-sm mb-5"> -->
		<!-- <p class="md:flex-none  text-gray-500 text-sm mb-5">
			Your billing information is never shown to other users and only used for creating your
			invoices.
		</p> -->
		<!-- <form onsubmit="return false;" class="space-y-6 md:w-3/4"> -->
		{#each Array(totalInvoice) as _, i}
			<div class="p-4 lg:p-6 rounded-lg bg-gray-50 my-4 lg:my-6">
				<form onsubmit="return false;" class="space-y-6 justify-center">
					{#if totalInvoice >= 2}
						<div class="md:flex-none pt-6">
							<div class="font-bold text-tiny text-slate-700">
								Invoice #: {inv1}
							</div>
						</div>
					{/if}
					<div class="sm:spacey-1-1">
						<label for="island" class="block text-tiny font-semibold text-gray-700">
							Select Island
						</label>
						<div class="mt-1">
							<select
								id="island"
								name="island"
								autocomplete="island-name"
								class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
							>
								<option>New Providence</option>
								<option>Grand Bahama</option>
							</select>
						</div>
					</div>
					<div class="sm:flex gap-8 lg:gap-16">
						<div class="relative flex-col space-y-4 justify-center">
							<div class="text-sl">
								<label for="comments" class="text-tiny font-semibold text-gray-700 "
									>Conslidating your package?</label
								>
							</div>
							<div class="inline-flex gap-8 grow">
								<div class="flex items-center h-5 text-sl">
									<input
										id="comments"
										name="comments"
										type="checkbox"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300 rounded mr-2"
									/>
									Yes
								</div>
								<div class="flex items-center justify-end h-5 text-sl ml-3">
									<input
										id="comments"
										name="comments"
										type="checkbox"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300 rounded mr-2"
									/>
									No
								</div>
							</div>
						</div>
						<div class="relative flex-col items-start space-y-4">
							<div class="text-tiny">
								<label for="comments" class="font-semibold text-gray-700"
									>Method of shipmment?</label
								>
							</div>
							<div class="inline-flex gap-8 ">
								<div class="flex items-center h-5 text-sl">
									<input
										id="comments"
										name="comments"
										type="checkbox"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300 rounded mr-2"
									/>
									Air
								</div>
								<div class="flex items-center justify-end h-5 text-sl ml-3">
									<input
										id="comments"
										name="comments"
										type="checkbox"
										class="focus:ring-pblue-500 h-4 w-4 text-pblue-600 border-gray-300 rounded mr-2"
									/>
									Ocean
								</div>
							</div>
						</div>
					</div>

					<div class="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
						<div class="space-y-1 sm:w-1/2">
							<label for="last-name" class="block text-sl font-medium text-gray-700">
								Supplier/Store of your purchases
							</label>
							<div class="mt-1">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autocomplete="family-name"
									class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
								/>
							</div>
						</div>
						<div class="space-y-1 sm:w-1/2">
							<label for="email" class="block text-sl font-medium text-gray-700">
								Item(s) Description
							</label>
							<div class="mt-1">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
								/>
							</div>
						</div>
					</div>
					<div class="space-y-1">
						<div class=" bg-gray-50 sm:rounded-lg">
							{#each Array(trackingNum) as _, i}
								<div class="grid grid-cols-6 px-4 sm:pt-4 gap-x-4">
									<div class="col-span-3">
										<h3 class="text-sl leading-6 font-semibold text-gray-900">Carrier</h3>
										<label for="email" class="block text-sl font-medium text-gray-700">
											Item(s) Description
										</label>
										<div class="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autocomplete="email"
												class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
											/>
										</div>
									</div>
									<div class="col-span-3">
										<h3 class="text-sl leading-6 font-semibold text-gray-900">Tracking number</h3>
										<label for="email" class="block text-sl font-medium text-gray-700">
											Item(s) Description
										</label>
										<div class="mt-1">
											<input
												id="email"
												name="email"
												type="email"
												autocomplete="email"
												class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
											/>
										</div>
									</div>
								</div>
							{/each}

							<div class="col-span-6 justify-end flex sm:pr-4 py-4 gap-x-4">
								<button
									type="button"
									class="inline-flex items-center px-4 py-2 border border-transparent  text-sl font-medium rounded-md text-red-900 "
									on:click={removeTracking}
								>
									<!-- Heroicon name: solid/mail -->

									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 mr-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
											clip-rule="evenodd"
										/>
									</svg>
									Remove
								</button>
								<button
									type="button"
									class="inline-flex items-center px-4 py-2 border border-transparent text-sl font-medium rounded-md text-blue-900 "
									on:click={addTracking}
								>
									<!-- Heroicon name: solid/mail -->

									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 mr-2"
										viewBox="0 0 20 20"
										fill="currentColor"
									>
										<path
											fill-rule="evenodd"
											d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
											clip-rule="evenodd"
										/>
									</svg>
									Add
								</button>
							</div>
						</div>
					</div>
					<div class="space-y-6 sm:space-y-0 sm:flex sm:space-x-3">
						<div class="space-y-1 sm:w-1/2">
							<label for="email" class="block text-sl font-medium text-gray-700">
								Expected package arrival <b>date</b> to U.S?
							</label>
							<div class="mt-1 relative rounded-md shadow-sm">
								<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
									<!-- Heroicon name: solid/mail -->
									<svg
										class="h-5 w-5 text-gray-400"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
										fill="currentColor"
										aria-hidden="true"
									>
										<path
											d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
										/>
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
								</div>
								<input
									type="email"
									name="email"
									id="email"
									class="focus:ring-gray-500 focus:border-gray-500 block w-full pl-10 sm:text-sl border-gray-400 rounded-md"
									placeholder="you@example.com"
								/>
							</div>
						</div>
						<div class="space-y-1 sm:w-1/2">
							<label for="island" class="block text-sl font-medium text-gray-700">
								Expected package arrival <b>time</b> to U.S?
							</label>
							<div class="mt-1">
								<select
									id="island"
									name="island"
									autocomplete="island-name"
									class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sl border-gray-400 rounded-md"
								>
									<option>Between 9am to 12pm</option>
									<option>Afternoon</option>
									<option>I don't know</option>
								</select>
							</div>
						</div>
					</div>
					<div class="space-y-1">
						<label for="about" class="block text-sl font-medium text-gray-700 sm:mt-px ">
							Package(s) Notes
						</label>
						<div class="mt-1 sm:col-span-6">
							<textarea
								id="about"
								name="about"
								rows="4"
								class="shadow-sm block w-full focus:ring-gray-500 focus:border-gray-500 sm:text-sl border border-gray-400 rounded-md"
							/>
							<p class="mt-1 text-xs text-gray-500">Please describe the products in your invoice</p>
						</div>
					</div>

					<div class="space-y-1">
						<label for="cover-photo" class="block text-sl font-medium text-gray-700">
							Upload invoice
						</label>
						<div
							class="mt-1 flex justify-center px-6 pt-4 pb-5 border-2 border-gray-400 border-dashed rounded-md"
						>
							<div class="space-y-1 text-center">
								<svg
									class="mx-auto h-8 w-8 text-gray-400"
									stroke="currentColor"
									fill="none"
									viewBox="0 0 48 48"
									aria-hidden="true"
								>
									<path
										d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
								<div class="flex text-sl text-gray-600">
									<label
										for="file-upload"
										class="relative cursor-pointer bg-white rounded-md font-medium text-gray-600 hover:text-gray-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500"
									>
										<span>Upload a file</span>
										<input id="file-upload" name="file-upload" type="file" class="sr-only" />
									</label>
									<p class="pl-1">or drag and drop</p>
								</div>
								<p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
							</div>
						</div>
					</div>
					<div class="space-y-1">
						<div class="bg-slate-50 border border-gray-400 sm:rounded-lg">
							<div class="px-4 py-5 sm:p-6">
								<h3 class="text-md leading-6 font-semibold text-gray-900">Additional documents</h3>
								<div class="mt-2">
									<div class="max-w-xl text-sl text-gray-500">
										<p>
											If you have any supporting documents that you believe will be required for
											customs please provide it to us
										</p>
									</div>
									{#each Array(form) as _, i}
										<div class="mt-5 sm:mt-2 sm:flex-shrink-0 sm:flex sm:items-center">
											<span class="relative z-0 inline-flex shadow-sm rounded-md">
												<span
													class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sl font-medium"
												>
													Upload
												</span>
												<label for="message-type" class="sr-only">Select message type</label>
												<select
													id="message-type"
													name="message-type"
													class="-ml-px block pl-3 pr-9 py-2 rounded-l-none rounded-r-md border border-gray-300 bg-white text-sl font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-pblue-500 focus:border-pblue-500"
												>
													<option>Nema Forms</option>
													<option>Permits (Drones, Cruising, etc.)</option>
													<option>Bond Letters</option>
													<potion>Exemption Forms</potion>
													<option>Police Identity</option>
													<option>Agriculture</option>
												</select>
											</span>
										</div>
									{/each}
									<div class="flex justify-end ">
										<button
											type="button"
											class="flex items-center pt-4 text-sl font-medium  text-blue-900 pr-6 "
											on:click={addForm}
										>
											<!-- Heroicon name: solid/mail -->

											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-3 w-3 mr-2"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
													clip-rule="evenodd"
												/>
											</svg>
											Add more forms
										</button>
										<button
											type="button"
											class="flex items-center pt-4 text-sl font-medium  text-rose-900 "
											on:click={removeForm}
										>
											<!-- Heroicon name: solid/mail -->

											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-3 w-3 mr-2"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fill-rule="evenodd"
													d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
													clip-rule="evenodd"
												/>
											</svg>
											Remove form
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		{/each}

		<div class="flex justify-end space-x-4">
			<button
				type="submit"
				class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
			>
				Submit Invoice
			</button>
			<button
				type="submit"
				class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
				on:click={addInvoice}
			>
				Add Another Invoice
			</button>
			{#if totalInvoice >= 2}
				<button
					type="submit"
					class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-indigo-700 bg-indigo-700 text-white hover:text-white hover:bg-indigo-800 hover:border-indigo-800 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 active:bg-indigo-700 active:border-indigo-700"
					disabled={totalInvoice === 1}
					on:click={() => (totalInvoice = totalInvoice - 1)}
				>
					Add Another Invoice
				</button>
			{/if}
		</div>
	</div>
	<!-- END Card Body: Billing Information -->
</div>
<!-- END Card: Billing Information -->
{#if done}
	<div class="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
		<div class="flex-auto">
			<div class="rounded-md bg-green-50 p-4 mt-4">
				<div class="flex">
					<div class="flex-shrink-0">
						<!-- Heroicon name: solid/check-circle -->
						<svg
							class="h-5 w-5 text-green-400"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
						>
							<path
								fill-rule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<div class="ml-3">
						<h3 class="text-sl font-medium text-green-800">Order completed</h3>
						<div class="mt-2 text-sl text-green-700">
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum
								similique veniam.
							</p>
						</div>
						<div class="mt-4">
							<div class="-mx-2 -my-1.5 flex">
								<button
									type="button"
									class="bg-green-50 px-2 py-1.5 rounded-md text-sl font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
									>View status</button
								>
								<button
									type="button"
									class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sl font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
									>Dismiss</button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}
