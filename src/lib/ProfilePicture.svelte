<script lang="ts">
  const imagePath = "/images/pixel_me";
</script>

<picture class="pixel-profile-picture">
  <source srcset={`${imagePath}.webp`} />
  <img src={`${imagePath}.png`} alt="pixelated cdash" />
</picture>

<style lang="scss">
  .pixel-profile-picture {
    width: 100%;
    max-width: 300px;
    height: auto;
    display: block;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
</style>
