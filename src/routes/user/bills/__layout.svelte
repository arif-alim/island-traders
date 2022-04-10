<script>
	import NavBills from '$lib/user/NavBills.svelte';
</script>

<NavBills />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-28 container xl:max-w-8xl mx-auto px-4 lg:px-8 py-3">
	<div class="rounded-t-lg bg-white p-5 lg:p-6">
		<slot />
	</div>
</div>
<!-- END Page Section -->
