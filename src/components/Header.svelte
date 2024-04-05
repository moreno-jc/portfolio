<script>
 import data from "$lib/data.json"
</script>



<header
  class="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2"
>
  <nav
    class="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center"
  >
  {#each data.navItems as link }
    <a
    class="relative block px-2 py-2 transition hover:text-yellow-500 dark:hover:text-yellow-400"
    aria-label={link.label}
    href={link.url}
    >
    {link.title}
    </a>
  {/each}
    
  </nav>
</header>
