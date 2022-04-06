<script>
	import IslandRatesHero from '../components/public/IslandRatesHero.svelte';
</script>

<IslandRatesHero />

<div class="relative py-12 px-4 lg:py-16 ">
	<div class="relative max-w-7xl mx-auto">
		<ul
			class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
			id="tabs-tab"
			role="tablist"
		>
			<li class="nav-item" role="presentation">
				<a
					href="#tabs-home"
					class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
					id="tabs-home-tab"
					data-bs-toggle="pill"
					data-bs-target="#tabs-home"
					role="tab"
					aria-controls="tabs-home"
					aria-selected="true">Grand Bahama</a
				>
			</li>
			<li class="nav-item" role="presentation">
				<a
					href="#tabs-profile"
					class="nav-link block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
					id="tabs-profile-tab"
					data-bs-toggle="pill"
					data-bs-target="#tabs-profile"
					role="tab"
					aria-controls="tabs-profile"
					aria-selected="false">New Providence</a
				>
			</li>

			<li class="nav-item" role="presentation">
				<a
					href="#tabs-contact"
					class="nav-link disabled block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent "
					id="tabs-contact-tab"
					data-bs-toggle="pill"
					data-bs-target="#tabs-contact"
					role="tab"
					aria-controls="tabs-contact"
					aria-selected="false">Contact</a
				>
			</li>
		</ul>
		<div class="tab-content" id="tabs-tabContent">
			<div
				class="tab-pane fade show active"
				id="tabs-home"
				role="tabpanel"
				aria-labelledby="tabs-home-tab"
			>
				Tab 1 content
			</div>
			<div
				class="tab-pane fade"
				id="tabs-profile"
				role="tabpanel"
				aria-labelledby="tabs-profile-tab"
			>
				Tab 2 content
			</div>
			<div
				class="tab-pane fade"
				id="tabs-contact"
				role="tabpanel"
				aria-labelledby="tabs-contact-tab"
			>
				disabled 1
			</div>
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
