<script lang="ts">
  import ProfilePicture from "./ProfilePicture.svelte";
</script>

<div class="HomePage">
    <h1>CDASH</h1>
    <ProfilePicture />
</div>

<style lang="scss">
  .HomePage {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 2em;
      text-align: center;
    }
  }

  @media (max-width: 760px) {
    h1 {
      font-size: 1.5em;
    }
  }
</style>
