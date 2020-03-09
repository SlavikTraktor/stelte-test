<script>
  import Search from "./Search.svelte";
  import { profiles } from "./store.js";
  import { generateProfile } from "./helpers.js";

  const onPlus = () => {
    $profiles = [
      ...$profiles,
      { ...generateProfile() },
    ]
  }
</script>

<header>
  <h1>Random profile!</h1>
  <div class="search">
    <Search />
  </div>
  <div class="plus" on:click={onPlus}>+</div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .search {
    margin-left: auto;
  }

  .plus {
    margin: 5px;
    color: #ff3e00;
    font-size: 3em;
    padding: 5px;
    padding-top: 0; 
    padding-bottom: 10px; 
    cursor: pointer;
  }

  .plus:hover {
    color: #ffa588;
  }
</style>