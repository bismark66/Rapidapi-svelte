<script>
    import Button from '../lib/button.svelte';
  
    // Define a function to handle button click
    function handleButtonClick() {
      alert('Button clicked!');
    }
  </script>

<h1>Welcome to SvelteKit this is Bismark</h1>
<p>Visit <a href="/about">kit.svelte.dev</a> to read the documentation</p>

<Button variant="danger" onClick={handleButtonClick}>Click me!</Button>



