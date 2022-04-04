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
		src="lottie/about.json"
		autoplay={true}
		loop={false}
		controls={false}
		renderer="svg"
		width="800"
		background="transparent"
		{controlsLayout}
	/>
{/if}
<!-- https://assets8.lottiefiles.com/packages/lf20_xycki5.json -->
<!-- https://assets9.lottiefiles.com/packages/lf20_vetvpg7c.json -->
<!-- https://assets5.lottiefiles.com/packages/lf20_e6db0fcb.json -->
