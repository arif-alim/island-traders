<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="bg-white">
	<Header />
	<main id="page-content" class="flex flex-auto flex-col max-w-full">
		<slot />
	</main>
	<Footer />
</div>
