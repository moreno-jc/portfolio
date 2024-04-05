<script>
    import Badge from "$components/Badge.svelte"
    import data from "$lib/data.json"
    const name = data.name;
    const src = data.photoProfile;
    const LinkedIn = data.socialNetworks.LinkendIn;
    const Email = data.socialNetworks.Correo; 
    const Experiences = data.description.experience1;
</script>

<h2>

<div class="max-w-xl">
    <div class="flex gap-4 mb-4">
      <img
        class="rounded-full shadow-lg size-16"
        src={src}
        alt={name}
      />
      <a
        href=""
        target="_blank"
        rel="noopener"
        class="flex items-center transition md:justify-center md:hover:scale-105"
      >
      </a>
      <Badge>Disponible para trabajar</Badge>
    </div>
    <h1
      class="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white"
    >
      Hey, soy {name}
    </h1>
    <p
      class="mt-6 text-xl text-gray-800 dark:[&>strong]:text-yellow-200 [&>strong]:text-yellow-500 [&>strong]:font-semibold dark:text-gray-300"
    >
      +2 años de experiencia como <strong
        >{Experiences}</strong
      >, dedicada al diseño y desarrollo de proyectos web.
    </p>
    <nav class="flex flex-wrap gap-4 mt-8">

      <a
        href={Email}
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      >
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail-forward size-4"
 width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" 
 stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
 <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" /><path d="M3 6l9 6l9 -6" /><path d="M15 18h6" />
 <path d="M18 15l3 3l-3 3" />
</svg>
        Contáctame
      </a>
      <a
        href={LinkedIn}
        target="_blank"
        rel="noopener noreferrer"
        role="link"
        class="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"
      > 
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin size-4" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>   LinkedIn
      </a>
    </nav>
  </div>

</h2>