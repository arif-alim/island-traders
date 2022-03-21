<script>
	import '../app.css';
	import Header from '$lib/Header.svelte';
	import Footer from '$lib/Footer.svelte';
</script>

<div class="bg-white">
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>
