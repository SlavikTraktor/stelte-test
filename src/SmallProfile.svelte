<script>
  import { createEventDispatcher } from 'svelte';
  
  export let profile;

  const dispatch = createEventDispatcher();

  const avatarClick = () => {
    dispatch('reloadAvatar', {
			name: profile.name
		});
  }
</script>

<div class="profile">
  <img class="profile-img" src="{profile.avatar}" alt={profile.name} on:click={avatarClick}/>
  <div class="profile-name">{profile.name}</div>
</div>

<style>
  .profile {
    width: 200px;
    height: 230px;
    padding: 10px;
  }

  .profile-img {
    width: 100%;
  }
</style>