<script>
	// @ts-nocheck

	import IslandRatesHero from '../components/public/IslandRatesHero.svelte';
	import GrandBahama from '../components/public/rates/GrandBahama.svelte';
	import NewProvidence from '../components/public/rates/NewProvidence.svelte';
	import Inagua from '../components/public/rates/Inagua.svelte';
	import LongIsland from '../components/public/rates/LongIsland.svelte';
	import HarbourIsland from '../components/public/rates/HarbourIsland.svelte';
	import Exuma from '../components/public/rates/Exuma.svelte';
	import CatIsland from '../components/public/rates/CatIsland.svelte';
	import Bimini from '../components/public/rates/Bimini.svelte';
	import LottieRates from '../components/public/lottie/LottieRates.svelte';

	let activeTab = 'grand-bahama';
	const islands = [
		{ name: 'Grand Bahama', ref: 'grand-bahama', content: GrandBahama },
		{ name: 'New Providence', ref: 'new-providence', content: NewProvidence },
		{ name: 'Inagua', ref: 'inagua', content: Inagua },
		{ name: 'Long Island', ref: 'long-island', content: LongIsland },
		{ name: 'Harbour Island', ref: 'harbour-island', content: HarbourIsland },
		{ name: 'Exuma', ref: 'exuma', content: Exuma },
		{ name: 'Cat Island', ref: 'cat-island', content: CatIsland },
		{ name: 'Bimini', ref: 'bimini', content: Bimini }
	];

	function handleClick(list) {
		activeTab = list.ref;
	}
</script>

<IslandRatesHero />

<div class="bg-white">
	<div class="space-y-12 max-w-7xl mx-auto px-4 py-12 lg:py-16">
		<div class="inline-flex justify-between">
			<div class="flex-col">
				<h2 class="font-extrabold	text-2xl sm:text-4xl text-gray-900 mb-4 tracking-tight">
					See Rates
				</h2>
				<p class="sm:text-base text-tiny">
					You can easily navigate from island to island for our rates
				</p>
			</div>

			<!-- <div class="flex">
				<LottieRates />
			</div> -->
		</div>
		<ul
			class="nav nav-pills flex flex-col md:flex-row list-none pl-0 mb-4 px-4"
			id="pills-tabFill"
			role="tablist"
		>
			{#each islands as list}
				<li class="nav-item flex-auto text-center my-2 md:mr-2" role="presentation">
					<button
						on:click={() => handleClick(list)}
						type="button"
						class="nav-link
            w-full
            font-semibold
            text-xb
            leading-tight
            uppercase
            rounded
            px-6
            py-3
            focus:outline-none focus:ring-0 {activeTab === list.ref
							? 'active'
							: 'text-slate-700 hover:text-pblue-800'}"
					>
						{list.name}
					</button>
				</li>
			{/each}
		</ul>
		<div class="tab-content" id="pills-tabContentFill">
			{#if activeTab === 'grand-bahama'}
				<GrandBahama />
			{:else if activeTab === 'new-providence'}
				<NewProvidence />
			{:else if activeTab === 'inagua'}
				<Inagua />
			{:else if activeTab === 'long-island'}
				<LongIsland />
			{:else if activeTab === 'harbour-island'}
				<HarbourIsland />
			{:else if activeTab === 'exuma'}
				<Exuma />
			{:else if activeTab === 'cat-island'}
				<CatIsland />
			{:else}
				<Bimini />
			{/if}
		</div>
	</div>
</div>

<!-- <script>
	import IslandRatesHero from '../components/public/IslandRatesHero.svelte';
	import GrandBahama from '../components/public/rates/GrandBahama.svelte';
	import NewProvidence from '../components/public/rates/NewProvidence.svelte';
	import Inagua from '../components/public/rates/Inagua.svelte';

	const islands = [
		{
			name: 'Grand Bahama',
			value: 'gb',
			disabled: false,
			content: GrandBahama,
			href: '#tabs-gb',
			id: 'tabs-gb-tab',
			target: '#tabs-gb',
			aria: 'tabs-gb',
			selected: true
		},
		{
			name: 'New Providence',
			value: 'np',
			disabled: false,
			content: NewProvidence,
			href: '#tabs-np',
			id: 'tabs-np-tab',
			target: '#tabs-np',
			aria: 'tabs-np',
			selected: false
		},
		{
			name: 'Inagua',
			value: 'in',
			disabled: true,
			content: Inagua,
			href: '#tabs-in',
			id: 'tabs-in-tab',
			target: '#tabs-in',
			aria: 'tabs-in',
			selected: false
		}
	];

	const activeTab = '';
</script>

<IslandRatesHero />

<div class="relative py-12 px-4 lg:py-16 ">
	<div class="relative max-w-7xl mx-auto">
		{#each islands as island}
			<div
				class="nav nav-tabs inline-flex md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
				id="tabs-tab"
				role="tablist"
			>
				<li class="nav-item" role="presentation">
					<a
						href={island.href}
						class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
						id={island.id}
						data-bs-toggle="pill"
						data-bs-target={island.target}
						role="tab"
						aria-controls={island.aria}
						aria-selected={island.selected}
					>
						{island.name}
					</a>
				</li>
			</div>
			<div class="tab-content" id="tabs-tabContent">
				<div
					class="tab-pane fade {island.selected === true}
						? 'show active'
						: ''}
                "
					id={island.id}
					role="tabpanel"
					aria-labelledby={island.aria}
				>
					{island.content}
				</div>
			</div>
		{/each}
	</div>
</div> -->
