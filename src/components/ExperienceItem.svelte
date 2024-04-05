<script>
    export let title = "";
    export let company= "";    
    export let date = "";
    export let description= "";
    export let link = "";
    import {ArrowLeft} from "$lib/icons.js"

</script>


<div
  class="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
>
  <div class="relative pb-12 md:col-span-2">
    <div class="sticky top-0">
      <span class="text-yellow-400 -left-[42px] absolute rounded-full text-5xl"
        >&bull;</span
      >

      <h3 class="text-xl font-bold text-yellow-400">{title}</h3>
      <h4 class="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
      <time class="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{date}</time>
    </div>
  </div>
  <div class="relative flex flex-col gap-2 pb-4 text-gray-600 dark:text-gray-300 md:col-span-3">
    {description}
    {#if link}

    <a href={link} role="link" class="inline-flex items-center text-lg font-medium text-yellow-500 dark:text-yellow-200 dark:hover:text-yellow-300 hover:text-yellow-700">
        Saber más
        {@html ArrowLeft}
    </a>
     {/if}
  </div>
</div>