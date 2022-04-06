<script>
	import logo from '$lib/islandtraders-logodark.svg';
	import FooterBottom from '$lib/FooterBottom.svelte';
	let logoAlt = 'Island Traders Logo';

	// Icons
	import FacebookIcon from '../components/icons/FacebookIcon.svelte';
	import InstagramIcon from '../components/icons/InstagramIcon.svelte';
	import YoutubeIcon from '../components/icons/YoutubeIcon.svelte';
	import EmailIcon from '../components/icons/EmailIcon.svelte';
	import AmericanExpressIcon from '../components/icons/AmericanExpressIcon.svelte';
	import MasterCard from '../components/icons/MasterCard.svelte';

	const serviceLinks = [
		{ name: 'Consolidation', href: '/consolidation' },
		{ name: 'Bonded Packages', href: '/bond' },
		{ name: 'Package Storage', href: '/storage' },
		{ name: 'Help Purchase', href: '/purchase' },
		{ name: 'Pickup & Delivery', href: '/pickup' },
		{ name: 'Custom Brokerage', href: '/customs' }
	];

	const shippingLinks = [
		{ name: 'Track Packages', href: '/tracking' },
		{ name: 'Product Eta', href: '/eta' },
		{ name: 'Shipping Info', href: '/shipping-info' },
		{ name: 'Duty & VAT', href: '/duties-vat' },
		{ name: 'Rates', href: '/rates' }
	];

	const quickLinks = [
		{ name: 'FAQs', href: '/faqs' },
		{ name: 'Contact Us', href: '/contact-us' },
		{ name: 'Sign In', href: '/sign-in' },
		{ name: 'Sign Up', href: '/sign-up' },
		{ name: 'Support', href: '/support' }
	];
</script>

<div class="bg-white">
	<h2 id="footer-heading" class="sr-only">Footer</h2>
	<div class="max-w-8xl mx-auto px-4">
		<!-- ====== Footer Section Start -->
		<footer class="bg-white pt-12 mt-6 pb-4 relative z-10  ">
			<div class="container">
				<div class="flex flex-wrap -mx-4">
					<div class="w-full lg:w-3/12 px-4 mr-24">
						<div class="w-full mb-4">
							<a href="javascript:void(0)" class="inline-block mb-6">
								<img src={logo} alt={logoAlt} class="h-auto w-56" />
							</a>
							<p class="text-sb mb-4">
								We are committed to making your shipping experience as best as possible, setting us
								apart from the competition.
							</p>
							<div class="grid grid-cols-4 gap-10 justify-center">
								<div class="col-span-1 w-16 md:w-10 flex">
									<AmericanExpressIcon />
								</div>
								<div class="col-span-1 w-16 md:w-10 flex">
									<MasterCard />
								</div>
								<div class="col-span-1 w-16 md:w-10 flex">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"
										><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
											d="M248 43.4C130.6 43.4 35.4 138.6 35.4 256S130.6 468.6 248 468.6 460.6 373.4 460.6 256 365.4 43.4 248 43.4zm-97.4 132.9c0-53.7 43.7-97.4 97.4-97.4s97.4 43.7 97.4 97.4v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6c0-82.1-124-82.1-124 0v26.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-26.6zM389.7 380c0 9.7-8 17.7-17.7 17.7H124c-9.7 0-17.7-8-17.7-17.7V238.3c0-9.7 8-17.7 17.7-17.7h248c9.7 0 17.7 8 17.7 17.7V380zm-248-137.3v132.9c0 2.5-1.9 4.4-4.4 4.4h-8.9c-2.5 0-4.4-1.9-4.4-4.4V242.7c0-2.5 1.9-4.4 4.4-4.4h8.9c2.5 0 4.4 1.9 4.4 4.4zm141.7 48.7c0 13-7.2 24.4-17.7 30.4v31.6c0 5-3.9 8.9-8.9 8.9h-17.7c-5 0-8.9-3.9-8.9-8.9v-31.6c-10.5-6.1-17.7-17.4-17.7-30.4 0-19.7 15.8-35.4 35.4-35.4s35.5 15.8 35.5 35.4zM248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 478.3C121 486.3 17.7 383 17.7 256S121 25.7 248 25.7 478.3 129 478.3 256 375 486.3 248 486.3z"
										/></svg
									>
								</div>

								<div class="col-span-1 w-16 md:w-10 flex">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
										><!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path
											d="M470.1 231.3s7.6 37.2 9.3 45H446c3.3-8.9 16-43.5 16-43.5-.2.3 3.3-9.1 5.3-14.9l2.8 13.4zM576 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h480c26.5 0 48 21.5 48 48zM152.5 331.2L215.7 176h-42.5l-39.3 106-4.3-21.5-14-71.4c-2.3-9.9-9.4-12.7-18.2-13.1H32.7l-.7 3.1c15.8 4 29.9 9.8 42.2 17.1l35.8 135h42.5zm94.4.2L272.1 176h-40.2l-25.1 155.4h40.1zm139.9-50.8c.2-17.7-10.6-31.2-33.7-42.3-14.1-7.1-22.7-11.9-22.7-19.2.2-6.6 7.3-13.4 23.1-13.4 13.1-.3 22.7 2.8 29.9 5.9l3.6 1.7 5.5-33.6c-7.9-3.1-20.5-6.6-36-6.6-39.7 0-67.6 21.2-67.8 51.4-.3 22.3 20 34.7 35.2 42.2 15.5 7.6 20.8 12.6 20.8 19.3-.2 10.4-12.6 15.2-24.1 15.2-16 0-24.6-2.5-37.7-8.3l-5.3-2.5-5.6 34.9c9.4 4.3 26.8 8.1 44.8 8.3 42.2.1 69.7-20.8 70-53zM528 331.4L495.6 176h-31.1c-9.6 0-16.9 2.8-21 12.9l-59.7 142.5H426s6.9-19.2 8.4-23.3H486c1.2 5.5 4.8 23.3 4.8 23.3H528z"
										/></svg
									>
								</div>
							</div>
						</div>
					</div>

					<div class="md:w-full lg:w-2/12 px-4">
						<div class="w-full mb-4">
							<h4 class="text-dark text-base font-semibold mb-3">Services</h4>
							<ul>
								{#each serviceLinks as link}
									<li>
										<a
											href={link.href}
											class="
                        inline-block
                        text-sb
                        hover:text-primary
                        leading-loose
                        mb-1
                        "
										>
											{link.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="w-1/2 lg:w-2/12 px-4">
						<div class="w-full mb-4">
							<h4 class="text-dark text-base font-semibold mb-3">Shipping</h4>
							<ul>
								{#each shippingLinks as link}
									<li>
										<a
											href={link.href}
											class="
                        inline-block
                        text-sb
                        hover:text-primary
                        leading-loose
                        mb-1
                        "
										>
											{link.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="w-1/2 lg:w-2/12 px-4">
						<div class="w-full mb-4">
							<h4 class="text-dark text-base font-semibold mb-3">Quick Links</h4>
							<ul>
								{#each quickLinks as link}
									<li>
										<a
											href={link.href}
											class="
                        inline-block
                        text-sb
                        hover:text-primary
                        leading-loose
                        mb-1
                        "
										>
											{link.name}
										</a>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<div class="w-full sm:w-1/2 lg:w-2/12 px-4">
						<div class="w-full mb-4">
							<h4 class="text-dark text-base font-semibold mb-3">Social links</h4>
							<ul role={'list'} class="mt-2 space-y-2">
								<li>
									<a
										href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
										target="_blank"
										rel="noopener nofollow noreferrer"
										class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-800 focus:z-10 focus:ring-2 focus:ring-blue-800 focus:text-blue-800 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>
										<FacebookIcon />
										Facebook
									</a>
								</li>

								<li>
									<a
										href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
										target="_blank"
										rel="noopener nofollow noreferrer"
										class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-orange-600 focus:z-10 focus:ring-2 focus:ring-orange-600 focus:text-orange-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>
										<InstagramIcon />
										Instagram
									</a>
								</li>

								<li>
									<a
										href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
										target="_blank"
										rel="noopener nofollow noreferrer"
										class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-rose-700 focus:z-10 focus:ring-2 focus:ring-rose-700 focus:text-rose-700 "
									>
										<YoutubeIcon />
										Youtube
									</a>
								</li>

								<li>
									<a
										href="https://github.com/themesberg/flowbite/blob/main/content/components/buttons.md"
										target="_blank"
										rel="noopener nofollow noreferrer"
										class="flex items-center px-4 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-slate-700 focus:z-10 focus:ring-2 focus:ring-slate-700 focus:text-slate-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
									>
										<EmailIcon />
										Email us
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div>
				<span class="absolute top-10 right-10 z-[-1]">
					<svg
						width="75"
						height="75"
						viewBox="0 0 75 75"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
							fill="url(#paint0_linear_1179_4)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_1179_4"
								x1="-1.63917e-06"
								y1="37.5"
								x2="75"
								y2="37.5"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#13C296" stop-opacity="0.31" />
								<stop offset="1" stop-color="#C4C4C4" stop-opacity="0" />
							</linearGradient>
						</defs>
					</svg>
				</span>
			</div>
		</footer>
	</div>
</div>

<FooterBottom />
