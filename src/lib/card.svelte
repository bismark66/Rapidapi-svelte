<!-- Card.svelte -->
<script>
    // Define props for the card component
    export let title = 'Card Title';
    export let description = 'Card Description';

    
  </script>
  
  <style>
    /* Card styles */
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 20px;
      margin: 20px;
      background-color: #f9f9f9;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 300px;
    }
  
    .card-title {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
  
    .card-description {
      margin-bottom: 20px;
    }
  
    .button-container {
      display: flex;
      justify-content: space-between;
    }
  
    /* .button {
      padding: 10px 20px;
      font-size: 14px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      outline: none;
      transition: background-color 0.3s ease;
    }
  
    .button-primary {
      background-color: #007bff;
      color: white;
    }
  
    .button-secondary {
      background-color: #6c757d;
      color: white;
    }
  
    .button-danger {
      background-color: #dc3545;
      color: white;
    }
  
    .button:hover {
      opacity: 0.8;
    } */
  </style>
  
  <div class="card">
    <div class="card-title">{title}</div>
    <div class="card-description">{description}</div>
    
    <div class="button-container">
        <slot></slot>
      </div>
  </div>
  