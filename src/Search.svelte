<script>
  import { search } from "./store.js";

  const onSearch = (event) => {
    $search = event.target.value.trim().toLowerCase();
  }
</script>

<input type="text" name="search" on:input={onSearch}>

<style>
  input {
    margin: 0;
  }
</style>