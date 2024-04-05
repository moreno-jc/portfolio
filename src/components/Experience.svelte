<script>
import ExperienceItem from "$components/ExperienceItem.svelte"
import Data from "$lib/data.json"

let Experience = Data.Experience;
</script>


<ol class="relative mt-16">
  {#each Experience as experience}
    <li class="">
        <ExperienceItem {...experience} />
    </li>    
  {/each}
</ol>