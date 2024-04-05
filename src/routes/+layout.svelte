<script>
    import "../app.css";
    import data from "$lib/data.json"
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";

let title=`Portafolio ${data.name}`
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="descripcion" >
</svelte:head>

<div
class="absolute top-0 bottom-0 z-[-2] min-h-screen w-full bg-gray-50 dark:bg-gray-950
bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))]
dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
>
</div>
<Header/>
<slot/>
<Footer/>

