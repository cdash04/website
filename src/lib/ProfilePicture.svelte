<script lang="ts">
  // your script goes here
</script>

<picture class="pixel-profile-picture">
  <source srcset="pixel_me.avif" />
  <source srcset="pixel_me.webp" />
  <img src="pixel_me.png" alt="pixelated cdash" />
</picture>

<style lang="scss">
  .pixel-profile-picture {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  /* your styles go here */
</style>
