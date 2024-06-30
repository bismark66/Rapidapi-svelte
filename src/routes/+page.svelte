<script lang="ts"> 
    import Button from '$lib/button.svelte';
    import Card from '$lib/card.svelte';
    import {customStore} from '$lib/stores/store';
  
    // Define a function to handle button click
    function handleButtonClick() {
      alert('Button clicked!');
    }


export let nam:string="heello"
console.log(nam, " world")
let count = 0;

// reactive statement, used to triger a change from a different state unto what is passed to, it also run after all other scripts
// it constantly look for a change on it dependencies
$: doubled = count * 2;

// In order to get or set data to a store, you prefix the variable with a $
// $count="kogi"


</script>

<!-- <h1>Welcome to SvelteKit this is Bismark</h1> -->
<p>Visit <a href="/about">kit.svelte.dev</a> to read the document</p>
<Button variant="danger" onClick={handleButtonClick}>Click</Button>


<Card title="Welcome Card" description="This is a sample card component with buttons.">
    <!-- Pass Button components as slots -->
    <Button variant="primary" onClick={handleButtonClick}>Button 1</Button>
    <Button variant="secondary" onClick={handleButtonClick}>Button 2</Button>
  </Card>
  



