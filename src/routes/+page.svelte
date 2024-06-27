<script>
    import Button from '$lib/button.svelte';
    import Card from '$lib/card.svelte';
  
    // Define a function to handle button click
    function handleButtonClick() {
      alert('Button clicked!');
    }
  </script>

<!-- <h1>Welcome to SvelteKit this is Bismark</h1> -->
<p>Visit <a href="/about">kit.svelte.dev</a> to read the document</p>

<Button variant="danger" onClick={handleButtonClick}>Click me!</Button>


<Card title="Welcome Card" description="This is a sample card component with buttons.">
    <!-- Pass Button components as slots -->
    <Button variant="primary" onClick={handleButtonClick}>Button 1</Button>
    <Button variant="secondary" onClick={handleButtonClick}>Button 2</Button>
  </Card>
  



