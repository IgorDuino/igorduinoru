<script lang="ts">
  import Comic from '$lib/components/Comic.svelte';
  export let data;
  $: ({ comic } = data);
</script>

<Comic {comic} />
