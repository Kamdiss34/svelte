<script>
	import FilterUser from './FilterUser.svelte';
	import User from './User.svelte';

import user1 from "../assets/images/user1.png";


    let users = [
        {
            id: 1,
            image: user1,
            name: "John",
            email: "john2@gmail.com",
            active: false,
        },
        {
            id: 2,
            image: user1,
            name: "John567",
            email: "john2@gmail.com",
            active: true,
        },
        {
            id: 3,
            image: user1,
            name: "Jon",
            email: "john77h2@gmail.com",
            active: false,
        },
    ];
    
  let filteredUsers = users;

function filter ({detail}) {
  if(detail ==="null"){
    filteredUsers = users;
    return;
  }
  const active = detail === "true";
  
   filteredUsers = users.filter((user) => user.active === active );
  };
 

</script>
<div class="flex flex-col m-5 bg-white border p-4 rounded-lg shadow-md hover:shadow-lg cursor-pointer">
  <h1 class='text-4xl text-center mt-10 mb-6'>List of Users</h1>
  <FilterUser on:filter={filter} />
  {#each filteredUsers as user, i (user.id) }

  <User {user} {i} />

  {:else}
    <p class="text-center">No user found</p>
  {/each}
</div>



