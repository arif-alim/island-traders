<script>
	import BillOneModal from '../../../components/user/BillOneModal.svelte';
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-xl font-semibold text-gray-900">Recent Bills</h1>
			<p class="mt-2 text-sm text-gray-700">Your recent bills, all amounts are in BSD</p>
		</div>
		<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
			<button
				type="button"
				class="inline-flex items-center justify-center rounded-md border border-transparent bg-slate-700 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 sm:w-auto"
				>Export</button
			>
		</div>
	</div>
	<div class="mt-8 flex flex-col">
		<div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
				<div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
					<table class="min-w-full divide-y divide-gray-300">
						<thead class="bg-gray-50">
							<tr>
								<th
									scope="col"
									class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-600 sm:pl-6"
									>Invoice #:</th
								>

								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>Date Billed:</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>Tracking #:</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>VAT</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>Our Fees</th
								>
								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>Duties</th
								>

								<th
									scope="col"
									class="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-slate-600"
									>Net amount</th
								>
								<th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-6">
									<span class="sr-only">Edit</span>
								</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-200 bg-white">
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>
							<tr>
								<td class="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-slate-600 sm:pl-6"
									>245991</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm font-medium text-gray-600"
									>11/12/2021</td
								>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">ZXK15288531</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">+$54.37</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$109.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">82.00</td>
								<td class="whitespace-nowrap px-2 py-2 text-sm text-slate-900">$245.37</td>
								<td class="relative  py-2 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
									<button
										type="button"
										class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
										data-bs-toggle="modal"
										data-bs-target="#exampleModalXl">View details</button
									>
								</td>
							</tr>

							<!-- More transactions... -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</div>

<BillOneModal />
