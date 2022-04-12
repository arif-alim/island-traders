<script>
	import NavServices from '$lib/user/NavServices.svelte';
	import Footer from '$lib/user/Footer.svelte';
</script>

<NavServices />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-32 container xl:max-w-8xl mx-auto px-4 lg:px-8 py-3">
	<div class="rounded-t-lg bg-white p-5 lg:p-6">
		<slot />
	</div>
</div>
<!-- END Page Section -->
<Footer />
