<script>
  import ServiceQuestions from './ServiceQuestions.svelte';
  import TechnicalQuestions from './TechnicalQuestions.svelte';
  import ShippingQuestions from './ShippingQuestions.svelte';
  import ServiceQuestionIcon from './ServiceQuestionIcon.svelte';
  import TechnicalQuestionIcon from './TechnicalQuestionIcon.svelte';
  import ShippingQuestionIcon from './ShippingQuestionIcon.svelte';
  let activeTab = 'serviceQuestions';
	const tabList = [
		{ name: 'Service Questions', ref: 'serviceQuestions', content: ServiceQuestions },
		{ name: 'Technical Questions', ref: 'technicalQuestions', content: TechnicalQuestions },
		{ name: 'Shipping Questions', ref: 'shippingQuestions', content: ShippingQuestions },
	];

	function handleClick(list) {
		activeTab = list.ref;
	}
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="bg-white">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 ">
    <div class="mx-auto ">
      <h2 class="text-2xl font-extrabold text-gray-900 sm:text-3xl">Frequently asked questions</h2>
      <dl class="mt-6 space-y-6">
        
          <div class="flex overflow-x-auto ">
            <div class="flex-auto px-4 py-2 border-b border-gray-200 ">
              <div class="flex justify-evenly" aria-orientation="horizontal" role="tablist">
                {#each tabList as list}
                  <button
                    on:click={() => handleClick(list)}
                    type="button"
                    class="flex text-tinyxl px-4 gap-4 items-center py-2 capitalize justify-center font-semibold {activeTab ===
                    list.ref
                      ? 'text-pblue-900 '
                      : 'text-slate-700 hover:text-pblue-800'}"
                  >
                    {#if list.ref === 'serviceQuestions'}
                      <ServiceQuestionIcon />
                    {:else if list.ref === 'technicalQuestions'}
                      <TechnicalQuestionIcon />
                    {:else if list.ref === 'shippingQuestions'}
                      <ShippingQuestionIcon />
                    {/if}
                    {list.name}
                  </button>
                {/each}
              </div>
            </div>
          </div>
          {#if activeTab === 'serviceQuestions'}
            <ServiceQuestions />
          {:else if activeTab === 'technicalQuestions'}
            <TechnicalQuestions />
          {:else if activeTab === 'shippingQuestions'}
            <ShippingQuestions />
          {/if}


      </dl>
    </div>
  </div>

</div>

