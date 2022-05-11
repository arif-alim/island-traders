<script>
	import NavBills from '$lib/user/NavBills.svelte';
	import Footer from '$lib/user/Footer.svelte';
</script>

<NavBills />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-28 container xl:max-w-7xl mx-auto px-4 py-3">
	<div class="rounded-t-lg bg-white p-5 lg:p-6">
		<slot />
	</div>
</div>
<!-- END Page Section -->
<Footer />
