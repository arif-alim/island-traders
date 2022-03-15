<script>
	// import '../app.css';
	import NavPackages from '$lib/user/NavPackages.svelte';
	import Header from '$lib/user/Header.svelte';
</script>

<Header />
<NavPackages />
<main id="page-content" class="flex flex-auto flex-col max-w-full">
	<slot />
</main>
