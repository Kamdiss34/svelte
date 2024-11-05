import { writable } from "svelte/store";
  import user1 from "./assets/images/user1.png";



export const users = writable([
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
]
)
export const remove=({detail})  =>{
 users.update((_users)  => _users.filter((user) => user.id !== detail));

}
export const add = ({ detail }) =>{
    users.update(_users  => [
        {
        id: _users.length + 1,
        image: user1,
        ...detail,
      },
      ..._users,
    ]) ;
      
   }
