<script>
	let isActive = 'itss';
</script>

<div class="max-w-7xl mx-auto h-10 px-4 flex items-center justify-between">
	<div class="flex items-center">
		<div class="sm:hidden">
			<label for="tabs" class="sr-only">Select a tab</label>
			<!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
			<select
				id="tabs"
				name="tabs"
				class="block w-full pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
			>
				<option>Grocery & Restaurant Delivery</option>

				<option>242 Island Traders Shop & Ship</option>
			</select>
		</div>
		<div class="hidden sm:block">
			<nav class="-mb-px flex space-x-8" aria-label="Tabs">
				<a
					on:click={() => (isActive = 'itss')}
					href="#"
					class="whitespace-nowrap py-[10px] px-1 text-xb 
					{isActive === 'itss' ? 'text-white ' : 'text-gray-400 hover:text-gray-700'}
					"
				>
					242 Island Traders Shop & Ship
				</a>
				<a
					href="#"
					class="border-transparent text-gray-400 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-[10px] px-1 border-b-2 text-xb
					"
				>
					Grocery & Restaurant Delivery
				</a>
			</nav>
		</div>
	</div>

	<div class="flex items-center space-x-6">
		<a href="#" class="text-xb text-white hover:text-slate-300">Sign in</a>
		<a href="#" class="text-xb text-white hover:text-slate-300">Create an account</a>
		<a href="/user" class="text-xb text-white hover:text-slate-300">User</a>
		<a href="/admin" class="text-xb text-white hover:text-slate-300">Admin</a>
	</div>
</div>
