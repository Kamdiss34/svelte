<script>

import NewUser from './NewUser.svelte';
	import FilterUser from './FilterUser.svelte';
	import User from './User.svelte';
  import user1 from "../assets/images/user1.png";
  import { add, remove,users} from '../store';
    import { tweened } from 'svelte/motion';
    import { cubicIn } from 'svelte/easing';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
    //$: progress = filteredUsers.length;
     const progress = tweened(0,{
        duration: 1000,
        easing: cubicIn,
       });

       onMount( () =>{
       
        progress.set(filteredUsers.length);
          }) 
        

  $: filteredUsers = $users;

function filter ({detail}) {
  if(detail ==="null"){
    filteredUsers = $users;
    return;
  }
  const active = detail === "true";
  
   filteredUsers = $users.filter((user) => user.active === active );
  };

 

</script>
	



<div 
transition:slide
class="flex flex-col m-5 bg-white border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
  <h1 class='text-4xl text-center mt-10 mb-6'>List of Users</h1>
 
  <div class='flex justify-between mx-4 items-center'>
    
    <FilterUser on:filter={filter} />
  
  <NewUser on:newUser={add} />
</div>

<progress 
max="10" 
min="0" 
value={$progress} 
class="w-full mx-4" />

  {#each filteredUsers as user, i (user.id) }

  <User on:remove={remove}  {user} {i} />

  {:else}

    <p class="text-center">No user found</p>
  {/each}
</div>



