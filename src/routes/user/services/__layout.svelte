<script>
	import NavServices from '$lib/user/NavServices.svelte';
</script>

<NavServices />

<!-- Page Section -->
<div class="-mt-28 lg:-mt-32 container xl:max-w-7xl mx-auto p-4 lg:p-8">
	<div class="rounded shadow-sm bg-white p-5 lg:p-6">
		<slot />
	</div>
</div>
<!-- END Page Section -->
