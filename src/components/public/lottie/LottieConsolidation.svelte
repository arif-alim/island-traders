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
		src="lottie/consolidation.json"
		autoplay={true}
		loop={true}
		controls={false}
		renderer="svg"
		background="transparent"
		width="100"
		{controlsLayout}
	/>
{/if}
