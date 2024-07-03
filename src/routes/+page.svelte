<script>
  import Header from '$lib/components/Header.svelte';
  import Whoami from '$lib/components/Whoami.svelte';
  import About from '$lib/components/About.svelte';
  import Projects from '$lib/components/Projects.svelte';
  import Achievements from '$lib/components/Achievements.svelte';
  import Photos from '$lib/components/Photos.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<Header />
<Whoami />
<About />
<Projects />
<Achievements />
<Photos />
<Footer />

<style>
  @import url('/static/global.css');
</style>
