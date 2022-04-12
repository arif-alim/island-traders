<script>
	import { slide } from 'svelte/transition';
	let isActive = 1;
	const tocs = [
		{
			id: 1,
			is_active: false,
			link: '#dfn',
			title: 'Definitions'
		},
		{
			id: 2,
			is_active: false,
			link: '#ipr',
			title: 'Intellectual Property Rights'
		},
		{
			id: 3,
			is_active: false,
			link: '#rst',
			title: 'Restrictions'
		},
		{
			id: 4,
			is_active: false,
			link: '#yrc',
			title: 'Your Content'
		},
		{
			id: 5,
			is_active: false,
			link: '#nwa',
			title: 'No Warranties'
		},
		{
			id: 6,
			is_active: false,
			link: '#lol',
			title: 'Limitation of Liability'
		},
		{
			id: 7,
			is_active: false,
			link: '#ind',
			title: 'Indemnification'
		},
		{
			id: 8,
			is_active: false,
			link: '#svb',
			title: 'Severability'
		},
		{
			id: 9,
			is_active: false,
			link: '#vot',
			title: 'Variation of Terms'
		},
		{
			id: 10,
			is_active: false,
			link: '#asn',
			title: 'Assignment'
		},
		{
			id: 11,
			is_active: false,
			link: '#eag',
			title: 'Entire Agreement'
		},
		{
			id: 12,
			is_active: false,
			link: '#arb',
			title: 'Arbitration'
		},
		{
			id: 13,
			is_active: false,
			link: '#parp',
			title: 'Governing Law & Jurisdiction'
		}
	];
</script>

<div class="bg-gradient-to-r from-slate-900 to-fuchsia-900 ">
	<div class="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:justify-between">
		<div class="max-w-3xl">
			<h1 class="text-sm font-semibold tracking-wide uppercase">
				<span class="bg-gradient-to-r from-white to-rose-300 bg-clip-text text-transparent"
					>Island Traders</span
				>
			</h1>
			<h2 class="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
				Terms & Conditions
			</h2>
			<h3 class="text-white">
				Last updated: <span class="font-semibold">November 21, 2021</span>
			</h3>
		</div>
	</div>
</div>

<div class="py-10">
	<div class="max-w-3xl mx-auto px-4 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
		<div class="lg:col-span-9 ">
			<article class="max-w-4xl text-sz sm:text-base">
				<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
					Please read these Terms of Use (this <span class="font-bold">"Agreement"</span>) carefully
					as it governs the terms and conditions under which Users (<span class="font-bold"
						>"you"</span
					>
					or <span class="font-bold">"your"</span>) may access, view and use the Island traders
					websites,
					<a href="#" class="text-rose-600 hover:text-rose-500">support@tislandtraders.ca</a>
					and <a href="#" class="text-rose-600 hover:text-rose-500">support@tislandtraders.com</a>
					(collectively, the
					<span class="font-bold">"Websites"</span>).
				</p>

				<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
					The Websites are owned and operated by Island Traders Inc. (<span class="font-bold"
						>"Island Traders"</span
					>, <span class="font-bold">"us"</span>, <span class="font-bold">"we"</span>, or
					<span class="font-bold">"our"</span>). We operate the Websites and provide them for use
					subject to compliance with this Agreement.
				</p>
				<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
					This Agreement includes our Privacy Policy, which is incorporated herein. Please note that
					your use of the Websites constitutes your agreement to follow and be bound by the terms of
					this Agreement and the Privacy Policy. If you object to anything in this Agreement or the
					Privacy Policy, do not use the Websites.
				</p>

				<ol class="list-decimal py-10">
					<li
						id="definitions"
						class="font-bold text-lg md:text-xl"
						transition:slide={{ duration: 1000 }}
					>
						Definitions
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							These are iSLAND tRADERS SHOP & SHIP Website Terms and Conditions (these “Terms” or
							these “Website Standard Terms and Conditions”) contained herein on this webpage, shall
							govern your use of this website, including all pages within this website (collectively
							referred to herein below as this “Website”). These Terms apply in full force and
							effect to your use of this Website and by using this Website, you expressly accept all
							terms and conditions contained herein in full. You must not use this Website, if you
							have any objection to any of these Website Standard Terms and Conditions.
						</p>
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							This Website is not for use by any minors (defined as those who are not at least 18
							years of age), and you must not use this Website if you are a minor.
						</p>
					</li>
					<li id="ctta" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Intellectual Property Rights
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							Other than content you own, which you may have opted to include on this Website, under
							these Terms, iSLAND tRADERS SHOP & SHIP and/or its licensors own all rights to the
							intellectual property and material contained in this Website, and all such rights are
							reserved.
						</p>
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							You are granted a limited license only, subject to the restrictions provided in these
							Terms, for purposes of viewing the material contained on this Website,
						</p>
					</li>
					<li id="rfuc" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Restrictions

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							You are expressly and emphatically restricted from all of the following:
						</p>

						<ul class="list-disc sm:ml-4">
							<li class="text-tiny font-normal p-1.5">
								Publishing any Website material in any media;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Publishing any Website material in any media; Selling, sublicensing and/or otherwise
								commercializing any Website material;
							</li>

							<li class="text-tiny font-normal p-1.5">
								Publicly performing and/or showing any Website material;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Using this Website in any way that is, or may be, damaging to this Website;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Using this Website in any way that impacts user access to this Website;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Using this Website contrary to applicable laws and regulations, or in a way that
								causes, or may cause, harm to the Website, or to any person or business entity;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Engaging in any data mining, data harvesting, data extracting or any other similar
								activity in relation to this Website, or while using this Website;
							</li>
							<li class="text-tiny font-normal p-1.5">
								Using this Website to engage in any advertising or marketing;
							</li>
						</ul>
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							Certain areas of this Website are restricted from access by you and iSLAND tRADERS
							SHOP & SHIP may further restrict access by you to any areas of this Website, at any
							time, in its sole and absolute discretion. Any user ID and password you may have for
							this Website are confidential and you must maintain confidentiality of such
							information.
						</p>
					</li>
					<li
						id="toaaattw"
						class="font-bold text-lg md:text-xl"
						transition:slide={{ duration: 1000 }}
					>
						Your Content
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							In these iSLAND tRADERS SHOP & SHIP Terms and Conditions, “Your Content” shall mean
							any files, audio, video, text, images or other material you choose to display or
							upload on this Website. With respect to Your Content, by displaying it, you grant
							iSLAND tRADERS SHOP & SHIP a non-exclusive, worldwide, irrevocable, royalty-free, sub
							licensable license to use, reproduce, adapt, publish, translate and distribute it in
							any and all media.
						</p>
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							Your Content must be your own and must not be infringing on any third party’s rights.
							iSLAND tRADERS SHOP & SHIP reserves the right to remove any of Your Content from this
							Website at any time, and for any reason, without notice.
						</p>
					</li>
					<li id="tsip" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						No warranties

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							This Website is provided “as is,” with all faults, and iSLAND tRADERS SHOP & SHIP
							makes no express or implied representations or warranties, of any kind related to this
							Website or the materials contained on this Website. Additionally, nothing contained on
							this Website shall be construed as providing consult or advice to you.
						</p>
					</li>
					<li id="uc" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Limitation of liability

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							This Website is provided “as is,” with all faults, and iSLAND tRADERS SHOP & SHIP
							makes no express or implied representations or warranties, of any kind related to this
							Website or the materials contained on this Website. Additionally, nothing contained on
							this Website shall be construed as providing consult or advice to you.
						</p>
					</li>
					<li
						id="privacy"
						class="font-bold text-lg md:text-xl"
						transition:slide={{ duration: 1000 }}
					>
						Indemnification
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							You hereby indemnify to the fullest extent iSLAND tRADERS SHOP & SHIP from and against
							any and all liabilities, costs, demands, causes of action, damages and expenses
							(including reasonable attorney’s fees) arising out of or in any way related to your
							breach of any of the provisions of these Terms.
						</p>
					</li>
					<li id="tpl" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Severability

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							If any provision of these Terms is found to be unenforceable or invalid under any
							applicable law, such unenforceability or invalidity shall not render these Terms
							unenforceable or invalid as a whole, and such provisions shall be deleted without
							affecting the remaining provisions herein.
						</p>
					</li>
					<li id="tps" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Variation of Terms

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							iSLAND tRADERS SHOP & SHIP is permitted to revise these Terms at any time as it sees
							fit, and by using this Website you are expected to review such Terms on a regular
							basis to ensure you understand all terms and conditions governing use of this Website.
						</p>
					</li>
					<li id="tr" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Assignment

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							iSLAND tRADERS SHOP & SHIP shall be permitted to assign, transfer, and subcontract its
							rights and/or obligations under these Terms without any notification or consent
							required. However, you shall not be permitted to assign, transfer, or subcontract any
							of your rights and/or obligations under these Terms.
						</p>
					</li>
					<li id="naad" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Entire Agreement

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							These Terms, including any legal notices and disclaimers contained on this Website,
							constitute the entire agreement between iSLAND tRADERS SHOP & SHIP and you in relation
							to your use of this Website, and supersede all prior agreements and understandings
							with respect to the same.
						</p>
					</li>
					<li
						id="promotions"
						class="font-bold text-lg md:text-xl"
						transition:slide={{ duration: 1000 }}
					>
						Arbitration

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							a) Any dispute, controversy, or claim arising out of or relating to these Terms and
							Agreement shall be settled by arbitration in accordance with the laws of The
							Commonwealth of The Bahamas.
						</p>
						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							b) The parties agree to exclude any right of application or appeal to the courts of
							The Bahamas in connection with any question of law arising in the course of
							arbitration or with respect to any award made.
						</p>
					</li>
					<li id="parp" class="font-bold text-lg md:text-xl" transition:slide={{ duration: 1000 }}>
						Governing Law & Jurisdiction

						<p class="pt-6 sm:pt-12 text-tiny sm:text-[17px]">
							These Terms will be governed by and construed in accordance with the laws of the
							Commonwealth of The Bahamas, and the parties hereby irrevocably submit to the
							non-exclusive jurisdiction of The Bahamas courts.
						</p>
					</li>
				</ol>
			</article>
		</div>
		<aside class="hidden col-span-3 lg:block">
			<div class="sticky top-4 space-y-4">
				<section aria-labelledby="who-to-follow-heading">
					<!-- This example requires Tailwind CSS v2.0+ -->
					<nav class="space-y-1" aria-label="Sidebar">
						<!-- Current: "bg-gray-100 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
						{#each tocs as toc}
							<a
								href={toc.link}
								transition-x
								on:click={(isActive = toc.id)}
								class="flex items-center px-3 py-1.5 text-sm font-medium rounded-md
							{isActive === toc.id
									? 'bg-gray-100 text-gray-900 '
									: 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
							"
								aria-current={toc.link}
							>
								<span class="truncate">{toc.title}</span>
							</a>
						{/each}
					</nav>
				</section>
			</div>
		</aside>
	</div>
</div>

<!-- END Blog Post Section: Left Aligned With Extras -->
<style>
	ol {
		counter-reset: item;
	}
	ol > li {
		display: block;
		margin-bottom: 2rem;
	}
	ol > li:before {
		content: counters(item, '.') '. ';
		counter-increment: item;
		padding-right: 8px;
	}

	p {
		line-height: 1.775;
		font-weight: 400;
		padding: 6px 0;
	}

	p:first-child {
		margin-top: 12px;
	}
</style>
