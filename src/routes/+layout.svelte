<!-- Layout.svelte -->
<script>
    // No script logic needed for this example
  </script>
  
  <style>
    /* Global styles for layout */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f5f5f5;
    }
  
    .container {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
  
    .sidebar {
      width: 250px;
      background-color: #333;
      color: white;
      padding: 20px;
      transition: transform 0.3s ease;
      transform: translateX(-100%);
      z-index: 1000;
      position: fixed;
      top: 0;
      left: 0;
      bottom: 50px; /* Adjust for footer height */
    }
  
    .sidebar.open {
      transform: translateX(0);
    }
  
    .main {
      flex: 1;
      padding: 20px;
    }
  
    .header {
      background-color: #222;
      color: white;
      padding: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .footer {
      background-color: #222;
      color: white;
      padding: 10px;
      text-align: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  
    .menu-icon {
      cursor: pointer;
    }
  </style>
  
  <div class="container">
    <!-- Sidebar -->
    <div class="sidebar">
      <slot name="sidebar">
        <!-- Default sidebar content goes here -->
        <h2>Sidebar</h2>
        <ul>
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Settings</li>
        </ul>
      </slot>
    </div>
  
    <!-- Main Content -->
    <div class="main">
      <!-- Header -->
      <div class="header">
        <slot name="header">
          <!-- Default header content goes here -->
          <h1>Main App Header</h1>
          <div class="menu-icon">
            ☰
          </div>
        </slot>
      </div>
  
      <!-- Main Content Area -->
      <div>
        <slot></slot>
      </div>
    </div>
  
    <!-- Footer -->
    <div class="footer">
      <slot name="footer">
        <!-- Default footer content goes here -->
        <ul style="color: white;list-style: none">
            <li>Dashboard</li>
            <li>Analytics</li>
            <li>Settings</li>
            <!-- Additional sidebar items -->
          </ul>
        &copy; 2024 Your App Name. All rights reserved.
      </slot>
    </div>
  </div>
  