<script>

  import Users from "./lib/Users.svelte";
  import {count} from './store'

  let countValue;
  count.subscribe((value) => (countValue = value));

  function incr() 
{
  
    count.update((value) => value + 1);

}
function decr() 
{
  
    count.update((value) => value-1);

}

</script>

<div>

<button on:click={incr}>+</button>
<button on:click={decr}>-</button>
  {countValue}
  <Users />
</div>

