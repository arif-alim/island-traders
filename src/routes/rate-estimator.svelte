<script>
	import EstLocation from '../components/public/EstLocation.svelte';
	import EstLocationIcon from '../components/icons/EstLocationIcon.svelte';
	import EstShipping from '../components/public/EstShipping.svelte';
	import EstShippingIcon from '../components/icons/EstShippingIcon.svelte';
	import EstDuty from '../components/public/EstDuty.svelte';
	import EstDutyIcon from '../components/icons/EstDutyIcon.svelte';
	import EstDimensions from '../components/public/EstDimensions.svelte';
	import EstDimensionsIcon from '../components/icons/EstDimensionsIcon.svelte';
	import EstDelivery from '../components/public/EstDelivery.svelte';
	import EstDeliveryIcon from '../components/icons/EstDeliveryIcon.svelte';

	let activeStep = 'step1';
	const Steps = [
		{
			id: 1,
			heading: 'Where to?',
			subheading: 'Origin of your package',
			ref: 'step1',
			icon: EstLocationIcon,
			content: EstLocation
		},
		{
			id: 2,
			heading: 'Shipping',
			subheading: 'Package shipping details',
			ref: 'step2',
			icon: EstShippingIcon,
			content: EstShipping
		},
		{
			id: 3,
			heading: 'Duty',
			subheading: 'Estimated Duites',
			ref: 'step3',
			icon: EstDutyIcon,
			content: EstDuty
		},
		{
			id: 4,
			heading: 'Dimensions',
			subheading: 'Length, Width, Height',
			ref: 'step4',
			icon: EstDimensionsIcon,
			content: EstDimensions
		},
		{
			id: 5,
			heading: 'Delivery',
			subheading: 'Package delivery fees',
			ref: 'step5',
			icon: EstDeliveryIcon,
			content: EstDelivery
		}
	];

	function handleClick(step) {
		activeStep = step.ref;
	}
</script>

<div class="bg-white">
	<div class="space-y-12 max-w-8xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
		<div class="inline-flex justify-between">
			<div class="flex-col space-y-4">
				<h1 class="font-extrabold	text-2xl sm:text-4xl text-gray-900 tracking-tight">
					Rate Estimator
				</h1>
				<p class="sm:text-base text-tiny">
					You can easily navigate from island to island for our rates
				</p>
			</div>
		</div>
		<ol
			role="list"
			class="rounded-t-md overflow-hidden lg:flex lg:border-l lg:border-r border-t lg:border-gray-200"
		>
			{#each Steps as step}
				<li class="relative overflow-hidden lg:flex-1">
					<div class="border border-gray-200 overflow-hidden border-b-0 rounded-t-md lg:border-0">
						<button href="#" class="group" type="button" on:click={() => handleClick(step)}>
							<span
								class="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-gray-200 lg:w-full lg:h-1 lg:bottom-0 lg:top-auto"
								aria-hidden="true"
							/>
							<span class="px-6 py-5 flex text-sm font-medium items-center">
								<span class="flex-shrink-0">
									<span
										class="w-12 h-12 flex items-center bg-white justify-center border-2 rounded-full {activeStep ===
										step.ref
											? ' bg-blue-800 text-white'
											: 'border-gray-500 bg-white text-black'}"
									>
										{#if step.ref === 'step1'}
											<EstDeliveryIcon />
										{:else if step.ref === 'step2'}
											<EstShippingIcon />
										{:else if step.ref === 'step3'}
											<EstDutyIcon />
										{:else if step.ref === 'step4'}
											<EstDimensionsIcon />
										{:else}
											<EstDeliveryIcon />
										{/if}
									</span>
								</span>
								<span class="mt-0.5 ml-4 min-w-0 flex flex-col">
									<span
										class="text-tiny font-bold tracking-wide uppercase {activeStep === step.ref
											? 'text-slate-900'
											: 'text-gray-600'}"
									>
										{step.heading}
									</span>
									<span
										class="text-sm font-medium {activeStep === step.ref
											? 'text-slate-800'
											: 'text-gray-500'}"
									>
										{step.subheading}
									</span>
								</span>
							</span>
						</button>
						{#if step.id > 1 && step.id < 6}
							<!-- Separator -->
							<div class="hidden absolute top-0 left-0 w-3 inset-0 lg:block" aria-hidden="true">
								<svg
									class="h-full w-full text-gray-300"
									viewBox="0 0 12 82"
									fill="none"
									preserveAspectRatio="none"
								>
									<path
										d="M0.5 0V31L10.5 41L0.5 51V82"
										stroke="currentcolor"
										vector-effect="non-scaling-stroke"
									/>
								</svg>
							</div>
						{/if}
					</div>
				</li>
			{/each}
		</ol>
		<div class="lg:border-l lg:border-r lg:border-b rounded-b">
			{#if activeStep === 'step1'}
				<EstLocation />
			{:else if activeStep === 'step2'}
				<EstShipping />
			{:else if activeStep === 'step3'}
				<EstDuty />
			{:else if activeStep === 'step4'}
				<EstDimensions />
			{:else}
				<EstDelivery />
			{/if}
		</div>
	</div>
</div>
