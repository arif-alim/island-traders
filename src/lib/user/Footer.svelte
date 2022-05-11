<script>
	const footerLinks = [
		{ name: 'Dashboard', href: '/user/dashboard' },
		{ name: 'Packages', href: '/user/packages' },
		{ name: 'Services', href: '/user/services' },
		{ name: 'Bills', href: '/user/bills' },
		{ name: 'Estimator', href: '/user/estimator' },
		{ name: 'Pickup', href: '/user/pickup' }
	];
	const copyright = [
		{ name: 'Terms & Conditions', href: '/terms-conditions' },
		{ name: 'Privacy Policy', href: '/privacy-policy', target: '_blank' }
	];
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<footer class="bg-white border-t border-gray-200 mt-4 lg:mt-12">
	<div class="max-w-7xl mx-auto px-4 py-4 lg:py-4 lg:px-12 justify-between flex items-center">
		<nav class="flex flex-wrap md:order-1 gap-8" aria-label="Footer">
			{#each footerLinks as link}
				<div>
					<a href={link.href} class="text-xb text-gray-600 hover:text-gray-900"> {link.name} </a>
				</div>
			{/each}
		</nav>

		<nav class="flex flex-wrap gap-8 items-center" aria-label="Footer">
			<div class="text-xb text-gray-600 hover:text-gray-900">&copy; 2022 Island Traders</div>
			{#each copyright as copy}
				<div>
					<a href={copy.href} class="text-xb text-gray-600 hover:text-gray-900"> {copy.name} </a>
				</div>
			{/each}
		</nav>
	</div>
</footer>
