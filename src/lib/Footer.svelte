<script lang="ts">
  // your script goes here
  import { Anchor } from "@svelteuidev/core";
  import {
    Github,
    Facebook,
    Twitch,
    Linkedin,
    Minutemailer,
  } from "@icons-pack/svelte-simple-icons";
  import type { ComponentType } from "svelte";

  type Link = {
    href: string;
    icon: ComponentType;
  };

  const links: Link[] = [
    {
      href: "mailto:contact@cda.sh",
      icon: Minutemailer,
    },
    {
      href: "https://github.com/cdash04/",
      icon: Github,
    },
    {
      href: "https://www.facebook.com/cdash01/",
      icon: Facebook,
    },
    {
      href: "https://www.linkedin.com/in/christophe-duchesne-ashworth/",
      icon: Linkedin,
    },
    {
      href: "https://www.twitch.tv/cdash01/",
      icon: Twitch,
    },
  ];
</script>

<div>
  <div class="links">
    {#each links as { href, icon }}
      <Anchor class="link" {href} target="_blank">
        <svelte:component this={icon} size={60} color="#fff" />
      </Anchor>
    {/each}
  </div>
</div>

<style lang="scss">
  .links {
    display: flex;
    gap: 1.5rem;
  }
</style>
