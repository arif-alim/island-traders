<script>
	import NavPackages from '$lib/user/NavPackages.svelte';
	import Footer from '$lib/user/Footer.svelte';
</script>

<NavPackages />

<!-- Page Section -->
<div
	class="-mt-20 md:-mt-28 lg:-mt-32 container xl:max-w-8xl mx-auto px-0 sm:px-2 md:px-4 lg:px-8 py-3"
>
	<div class="rounded-t-lg bg-white p-4">
		<slot />
	</div>
</div>

<Footer />
