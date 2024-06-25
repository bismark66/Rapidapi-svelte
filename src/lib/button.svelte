<!-- Button.svelte -->
<script lang="ts">
    
    export let variant = 'primary'; 
    export let disabled = false;
  //   /**
  //  * @type {() => void}
  //  */
     export let onClick: ()=>void;
  
    // Determine class based on variant
    let buttonClass = 'button';
    if (variant === 'primary') {
      buttonClass += ' primary';
    } else if (variant === 'secondary') {
      buttonClass += ' secondary';
    } else if (variant === 'danger') {
      buttonClass += ' danger';
    }
  </script>
  
  <style>
    /* Button styles */
    .button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      outline: none;
      transition: background-color 0.3s ease;
    }
  
    .primary {
      background-color: #007bff;
      color: white;
    }
  
    .secondary {
      background-color: #6c757d;
      color: white;
    }
  
    .danger {
      background-color: #dc3545;
      color: white;
    }
  
    .button:hover {
      opacity: 0.8;
    }
  
    .button:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  </style>
  
  <button class={buttonClass} on:click={onClick} {disabled}>
    <slot></slot>
  </button>
  