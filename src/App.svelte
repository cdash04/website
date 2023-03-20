<script lang="ts">
  import { SvelteUIProvider } from "@svelteuidev/core";
  import Footer from "./lib/Footer.svelte";
  import HomePage from "./lib/HomePage.svelte";
</script>

<SvelteUIProvider withGlobalStyles themeObserver="dark">
    <div class="App">
      <div class="content">
        <HomePage />
      </div>
      <div class="footer">
        <Footer />
      </div>
    </div>
</SvelteUIProvider>

<style lang="scss">
  #SVELTEUI_PROVIDER {
    width: 100%;
    height: 100%;
  }

  .App {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
