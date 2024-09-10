<script>

export let user;

export let i;

function remove() {

    alert('removing');
    
}

</script>

<div class="flex items-center 
justify-between mb-4 relative">
    <span 
    on:click={remove}
    class='absolute right-0 top-0 mt-4 rounded-full
    w-5 h-5 text-center bg-red-300 text-white
    text-sm hover:bg-red-700 '
    > X
   </span>
    <p class="w-10 text-center">{i + 1}</p>
    <img class="rounded-full w-14 h-14" src="{user.image}" alt="{user.name}" />
    <p class="mx-4 w-32 truncate">{user.name}</p>
    <p class="mx-4 w-48 truncate">{user.email}</p>
  </div>