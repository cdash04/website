<script lang="ts">
  const imagePath = "/images/pixel_me";
</script>

<picture class="pixel-profile-picture">
  <source srcset={`${imagePath}.avif`} />
  <source srcset={`${imagePath}.webp`} />
  <img src={`${imagePath}.png`} alt="pixelated cdash" />
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
