<script>
	import '../../app.css';
	import Header from '$lib/user/Header.svelte';
</script>

<Header />

<main id="page-content" class="flex flex-auto flex-col max-w-full">
	<slot />
</main>
