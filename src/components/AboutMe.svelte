<script>
import data from "$lib/data.json"
 const name = data.name;
</script>

<article class="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
  <div
    class="[&>p]:mb-4 [&>p>strong]:text-yellow-500 dark:[&>p>strong]:text-yellow-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1"
  >
    <p>
      Me llamo {name} pero mis amigos me llaman Joce.
      Actualmente formo parte del <strong
      > equipo de desarrollo web en el Instituto Nacional de Antropología e Historia</strong
      >.
    </p>

  </div>

  <img width="200" height="200" src="/foto_Jocelyn.jpg" alt={name} class="order-1 object-cover w-64 h-full p-1 md:order-2 rotate-3 lg:p-2 lg:w-64 aspect-square rounded-2xl bg-black/20 dark:bg-yellow-500/5 ring-1 ring-black/70 dark:ring-white/20 " style="object-position: 50% 50%">

</article>
