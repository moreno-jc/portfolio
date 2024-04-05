
<script>
    import SectionContainer from "$components/SectionContainer.svelte"
    import Hero from "$components/Hero.svelte"
    import Experience from "$components/Experience.svelte"
    import Projects from "$components/Projects.svelte"
    import AboutMe from "$components/AboutMe.svelte"
    import {BriefCase,CodeIcon,ProfileCheck, ArrowLeft} from "$lib/icons.js"
</script>


<main class="px-4">
    <SectionContainer className="py-16 md:py-36">
    <Hero/>
    </SectionContainer>
    <SectionContainer id="experiencia">
        <h2
          class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white"
        >
        {@html BriefCase}
          Experiencia laboral
        </h2>
        <Experience/>
      </SectionContainer>
      
      <SectionContainer id="proyectos">
        <h2 class="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            {@html CodeIcon}
          Proyectos
        </h2>
        <Projects />
      </SectionContainer>
  
      <SectionContainer id="sobre-mi">
        <h2
          class="flex items-center mb-6 text-3xl font-semibold gap-x-8 text-black/80 dark:text-white"
        >
        {@html ProfileCheck}
          Sobre mí
        </h2>
        <AboutMe/>
      </SectionContainer>
</main>