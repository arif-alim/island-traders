<script>
	import NavDashboard from '$lib/user/NavDashboard.svelte';
</script>

<NavDashboard />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-32 container xl:max-w-7xl mx-auto px-4 lg:px-8 py-3">
	<div class="rounded shadow-sm bg-white p-5 lg:p-6">
		<slot />
	</div>
</div>
<!-- END Page Section -->
