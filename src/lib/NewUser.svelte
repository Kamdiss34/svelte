
<script>
    import { createEventDispatcher, onMount } from "svelte";
	import Modal from './Modal.svelte';
    
    let showModal = false;
    let newUser = {};

    const dispatch = createEventDispatcher();

//      onMount( () =>{
       
// const submitBtn = document.getElementById("submit-button");
  
//         submitBtn.disabled = disableSubmitButton;

//   }) 
 
$: disableSubmitButton = !newUser.name || 
 !newUser.email;
    
    function handleForm() 
{
     dispatch('newUser', newUser );
    showModal = false;
}

 </script>

<div class='mt-4'> 

<button
on:click={() => (showModal = true)}
class=' px-4 py-1 bg-blue-800
text-white rounded cursor-pointer'> New User</button>

{#if showModal}  
  
<Modal on:close={ () => (showModal = false)}
     show={showModal}
    on:submit={handleForm}>
<h5 class='text-2xl text-center'>Create New User</h5> 

<div class='py-1 px-2 my-4'>
    <label for='Name'>Name</label>
    <input 
    bind:value={newUser.name}
    class='px-2 py-1 rounded border w-full' type='text'/>
    
</div>

<div class='py-1 px-2 my-4'>
    <label for='email'>Email</label>
    <input 
    bind:value={newUser.email}
    class='px-2 py-1 rounded border w-full' type='text'/>
    
</div>

<div class='py-1 px-2 my-4  flex justify-between'>
    <label for='true'>Active</label>
<div class='flex'>
    
    <label for='true'>Yes</label>
    <input 
    bind:group={newUser.active}
    id='true'
    name='active' 
    class=' mx-5 px-2 py-1 w-full rounded border' 
    type='radio'
    value={true}/>

    <label for='false'>No</label>
    <input
    bind:group={newUser.active} 
    name='active' 
    id='false'
    class='mx-5 px-2 py-1 w-full rounded border' 
    type='radio'
    value={false}/>
</div>    
    
</div>


<button 
type="submit" 
disabled={disableSubmitButton}
id="submit-button"
slot='right-button' 
class='px-2 py-1 bg-blue-800
 text-white rounded'>
    Create </button>
   
</Modal>  
   
{/if}  

</div> 