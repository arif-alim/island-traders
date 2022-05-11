<script>
	import logo from '$lib/islandtraders-logodark.svg';
	let logoAlt = 'Island Traders Logo';
</script>

<div
	class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
	id="exampleModalXl"
	tabindex="-1"
	aria-labelledby="exampleModalXlLabel"
	aria-modal="true"
	role="dialog"
>
	<div class="modal-dialog modal-xl relative w-auto pointer-events-none">
		<div
			class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
		>
			<div
				class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md"
			>
				<h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalXlLabel">
					Extra large modal
				</h5>
				<button
					type="button"
					class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
					data-bs-dismiss="modal"
					aria-label="Close"
				/>
			</div>
			<div class="modal-body relative p-4">
				<div class="px-4 sm:px-6 lg:px-8 py-4 lg:py-12">
					<div class="sm:flex sm:items-center">
						<div class="sm:flex-auto">
							<h1 class="text-xl font-bold text-gray-900">Invoice</h1>
							<div class="flex-shrink-0 flex items-center">
								<a href="/" sveltekit:prefetch>
									<img src={logo} alt={logoAlt} class="h-14 w-auto py-1" />
								</a>
							</div>
							<p class="mt-2 text-sm text-gray-700">
								For work completed from <time datetime="2022-08-01">August 1, 2022</time>
								to <time datetime="2022-08-31">August 31, 2022</time>.
							</p>
						</div>
						<div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
							<button
								type="button"
								class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
								>Print</button
							>
						</div>
					</div>
					<div class="-mx-4 mt-8 flex flex-col sm:-mx-6 md:mx-0">
						<table class="min-w-full divide-y divide-gray-300">
							<thead>
								<tr>
									<th
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0"
										>Project</th
									>
									<th
										scope="col"
										class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
										>Hours</th
									>
									<th
										scope="col"
										class="hidden py-3.5 px-3 text-right text-sm font-semibold text-gray-900 sm:table-cell"
										>Rate</th
									>
									<th
										scope="col"
										class="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
										>Price</th
									>
								</tr>
							</thead>
							<tbody>
								<tr class="border-b border-gray-200">
									<td class="py-4 pl-4 pr-3 text-sm sm:pl-6 md:pl-0">
										<div class="font-medium text-gray-900">New Advertising Campaign</div>
										<div class="mt-0.5 text-gray-500 sm:hidden">12.0 hours at $75.00</div>
									</td>
									<td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"
										>12.0</td
									>
									<td class="hidden py-4 px-3 text-right text-sm text-gray-500 sm:table-cell"
										>$75.00</td
									>
									<td class="py-4 pl-3 pr-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
										>$900.00</td
									>
								</tr>

								<!-- More projects... -->
							</tbody>
							<tfoot>
								<tr>
									<th
										scope="row"
										colspan="3"
										class="hidden pl-6 pr-3 pt-6 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
										>Subtotal</th
									>
									<th
										scope="row"
										class="pl-4 pr-3 pt-6 text-left text-sm font-normal text-gray-500 sm:hidden"
										>Subtotal</th
									>
									<td class="pl-3 pr-4 pt-6 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
										>$3,900.00</td
									>
								</tr>
								<tr>
									<th
										scope="row"
										colspan="3"
										class="hidden pl-6 pr-3 pt-4 text-right text-sm font-normal text-gray-500 sm:table-cell md:pl-0"
										>Tax</th
									>
									<th
										scope="row"
										class="pl-4 pr-3 pt-4 text-left text-sm font-normal text-gray-500 sm:hidden"
										>Tax</th
									>
									<td class="pl-3 pr-4 pt-4 text-right text-sm text-gray-500 sm:pr-6 md:pr-0"
										>$585.00</td
									>
								</tr>
								<tr>
									<th
										scope="row"
										colspan="3"
										class="hidden pl-6 pr-3 pt-4 text-right text-sm font-semibold text-gray-900 sm:table-cell md:pl-0"
										>Total</th
									>
									<th
										scope="row"
										class="pl-4 pr-3 pt-4 text-left text-sm font-semibold text-gray-900 sm:hidden"
										>Total</th
									>
									<td
										class="pl-3 pr-4 pt-4 text-right text-sm font-semibold text-gray-900 sm:pr-6 md:pr-0"
										>$4,485.00</td
									>
								</tr>
							</tfoot>
						</table>
					</div>
				</div>
				<div
					class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"
				>
					<button
						type="button"
						class="px-6
          py-2.5
          bg-slate-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-slate-700 hover:shadow-lg
          focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-slate-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
						data-bs-dismiss="modal">Close</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
