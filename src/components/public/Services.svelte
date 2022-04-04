<script>
	import CustomsBrokerage from './CustomsBrokerage.svelte';
	import HelpPurchase from './HelpPurchase.svelte';
	import PackageStorage from './PackageStorage.svelte';
	import ItemsBonded from './ItemsBonded.svelte';
	import Consolidation from './Consolidation.svelte';
	import ConsolidationIcon from './ConsolidationIcon.svelte';
	import ItemsBondedIcon from './ItemsBondedIcon.svelte';
	import PackageStorageIcon from './PackageStorageIcon.svelte';
	import HelpPurchaseIcon from './HelpPurchaseIcon.svelte';
	import CustomsBrokerIcon from './CustomsBrokerIcon.svelte';
	import PickupIcon from './PickupIcon.svelte';
	import Pickup from './Pickup.svelte';

	let activeTab = 'consolidation';
	const tabList = [
		{ name: 'Consolidation', ref: 'consolidation', content: Consolidation },
		{ name: 'Items Bonded', ref: 'bonded', content: ItemsBonded },
		{ name: 'Package Storage', ref: 'storage', content: PackageStorage },
		{ name: 'Help Purchase', ref: 'purchase', content: HelpPurchase },
		{ name: 'Customs Broker', ref: 'customs', content: CustomsBrokerage },
		{ name: 'Pickup', ref: 'pickup', content: Pickup }
	];

	function handleClick(list) {
		activeTab = list.ref;
	}
</script>

<div class="bg-gray-100">
	<section
		aria-labelledby="features-heading"
		class="max-w-7xl mx-auto py-4 sm:px-2 lg:px-8 lg:py-20 "
	>
		<div class="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
			<!-- Heading -->
			<div class="max-w-4xl">
				<h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					Services we offer
				</h2>
				<p class="mt-4 text-gray-700 max-w-4xl prose">
					iSLAND tRADERS Shop & Ship offers a great logistic service.
				</p>
			</div>
			<!-- END Heading -->

			<div class="mt-4">
				<div class="-mx-4 flex overflow-x-auto sm:mx-0">
					<div class="flex-auto px-4 border-b border-gray-200 sm:px-0">
						<div class="-mb-px flex justify-between" aria-orientation="horizontal" role="tablist">
							{#each tabList as list}
								<button
									on:click={() => handleClick(list)}
									type="button"
									class="flex flex-col text-tiny px-2 md:px-6 items-center py-4 capitalize justify-center font-semibold {activeTab ===
									list.ref
										? 'text-pblue-900 '
										: 'text-slate-700 hover:text-pblue-800'}"
								>
									{#if list.ref === 'consolidation'}
										<ConsolidationIcon />
									{:else if list.ref === 'bonded'}
										<ItemsBondedIcon />
									{:else if list.ref === 'storage'}
										<PackageStorageIcon />
									{:else if list.ref === 'purchase'}
										<HelpPurchaseIcon />
									{:else if list.ref === 'customs'}
										<CustomsBrokerIcon />
									{:else}
										<PickupIcon />
									{/if}
									{list.name}
								</button>
							{/each}
						</div>
					</div>
				</div>
				<!-- {#each tabList as item}
					{#if activeTab === item.ref}
						{item.content}
					{/if}
				{/each} -->
				{#if activeTab === 'consolidation'}
					<Consolidation />
				{:else if activeTab === 'bonded'}
					<ItemsBonded />
				{:else if activeTab === 'storage'}
					<PackageStorage />
				{:else if activeTab === 'purchase'}
					<HelpPurchase />
				{:else if activeTab === 'customs'}
					<CustomsBrokerage />
				{:else}
					<Pickup />
				{/if}
			</div>
		</div>
	</section>
</div>
