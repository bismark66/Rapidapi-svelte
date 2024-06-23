<!-- App.svelte -->
<script>
    import Layout from '../+layout.svelte';
  </script>
  
  <Layout>
    <!-- Header Slot -->
    <template slot="header">
      <h1>Your App Name</h1>
      <!-- Additional header elements or actions -->
    </template>
  
    <!-- Sidebar Slot -->
    <template slot="sidebar">
      <h2>Custom Sidebar</h2>
      <ul style="color: black;">
        <li>Dashboard</li>
        <li>Analytics</li>
        <li>Settings</li>
        <!-- Additional sidebar items -->
      </ul>
    </template>
  
    <!-- Main Content Slot -->
    <div>
      <h2>Main Content Area</h2>
      <p>Welcome to your modern app!</p>
      <!-- Additional components or content for main area -->
    </div>

    <template slot="footer">
        <h2>Custom Sidebar</h2>
        <ul style="color: black;">
          <li>Dashboard</li>
          <li>Analytics</li>
          <li>Settings</li>
          <!-- Additional sidebar items -->
        </ul>
      </template>

  </Layout>
  