


<script lang="ts" >
  
  import type { PageData } from './$types';
  import { page } from '$app/stores';

  export let data: PageData;
 
  console.log(data);
</script>
<h1>This is the dynamic rote: {$page.params.fruit}</h1>



