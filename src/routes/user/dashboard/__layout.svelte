<script>
	import NavDashboard from '$lib/user/NavDashboard.svelte';
	import Footer from '$lib/user/Footer.svelte';
</script>

<NavDashboard />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-28 container xl:max-w-8xl mx-auto px-4 lg:px-8 py-3">
	<div class="rounded-t-lg bg-white">
		<slot />
	</div>
</div>
<!-- END Page Section -->

<Footer />
