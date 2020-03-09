<script>
	import { profiles, search } from "./store.js";
	import { generateAvatar } from "./helpers.js";
  import SmallProfile from "./SmallProfile.svelte";
  import Header from "./Header.svelte";

  $: filteredProfiles = $profiles.filter(v =>
    v.name.toLowerCase().includes($search)
	);
	
	const onReloadAvatar = (event) => {
		const newProfiles = $profiles;
		newProfiles.find(p => p.name === event.detail.name).avatar = generateAvatar();
		$profiles = [...newProfiles];
	}
</script>

<Header />
<main>
  <div class="profiles">
    {#if filteredProfiles.length === 0}
      <div class="empty">No Profiles</div>
    {:else}
      {#each filteredProfiles as profile, i}
        <SmallProfile {profile}  on:reloadAvatar={onReloadAvatar}/>
      {/each}
    {/if}
  </div>
</main>

<style>
  .profiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>