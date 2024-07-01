<script lang="ts"> 
    import Button from '$lib/button.svelte';
    import Card from '$lib/card.svelte';
    import {customStore} from '$lib/stores/store';
  
    // Define a function to handle button click
    function handleButtonClick() {
      // alert('Button clicked!');
      $customStore.count += 1
      console.log($customStore.count)
    }

    function handleReset() {
        customStore.reset()
        console.log($customStore.count)
    }

export let nam:string="heello"
console.log(nam, " world")
let count = 0;

// reactive statement, used to triger a change from a different state unto what is passed to, it also run after all other scripts
// it constantly look for a change on it dependencies
$: doubled = count * 2;
let value = 'Hello World';

let files: FileList;
  let imageUrl: string;

  function handleFileChange() {
    if (files && files.length > 0) {
      const selectedFile = files[0];
      console.log("Selected file:", selectedFile);

      // Create a URL for the selected image
      imageUrl = URL.createObjectURL(selectedFile);
    }
  }
</script>

<style>
:global(h1){
    color: red
}

</style>




<!-- <h1>Welcome to SvelteKit this is Bismark</h1> -->
<p>Visit <a href="/about">kit.svelte.dev</a> to read the document</p>
<Button variant="danger" onClick={handleButtonClick}>Click</Button>


<Card title="Welcome Card" description="This is a sample card component with buttons.">
    <!-- Pass Button components as slots -->
    <Button variant="primary" onClick={handleButtonClick}>Button 1</Button>
    <Button variant="secondary" onClick={handleReset}>Reset Store</Button>
  </Card>
  

  <input
	on:input={() => console.log('Old value:', value)}
	bind:value
	on:input={() => console.log('New value:', value)}
/>


<input 
  accept="image/png, image/jpeg" 
  bind:files
  id="avatar" 
  name="avatar" 
  type="file" 
  on:change={handleFileChange} 
/>
