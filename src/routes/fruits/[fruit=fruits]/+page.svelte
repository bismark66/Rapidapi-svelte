


<script lang="ts" >
  import type { PageData } from './$types';
  import { page } from '$app/stores';
  /**
   * @type {any}
   */
  export let data: PageData;
  console.log(data);
</script>
<h1>This is the dynamic route: {$page.params.fruit}</h1>


