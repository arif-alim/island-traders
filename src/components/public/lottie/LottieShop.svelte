<script>
	import { onMount } from 'svelte';

	let LottiePlayer;

	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});

	let controlsLayout = [
		'previousFrame',
		'playpause',
		'stop',
		'nextFrame',
		'progress',
		'frame',
		'loop',
		'spacer',
		'background',
		'snapshot',
		'zoom',
		'info'
	];
</script>

{#if LottiePlayer}
	<LottiePlayer
		src="lottie/cart.json"
		autoplay={true}
		loop={true}
		controls={false}
		width="80"
		renderer="svg"
		background="transparent"
		{controlsLayout}
	/>
{/if}
