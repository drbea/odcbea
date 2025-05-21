import { useReducer, useState } from "react";
import "./assets/ProductForm.css"

function UserNameForm(){
    const [user, setUserName] = useState({username: "", id: ""})

    const [users, addUsers] = useState([])

    const detectNameChange = (e)=>{
        e.preventDefault();
        console.log(`${e.target.name}: ${e.target.value}`)
        setUserName({
            ...user,
            [e.target.name]: e.target.value

        })
    }
    

    const addName = (e)=>{
        e.preventDefault();
        if (!user.username || !user.id){
            // alert("Le nom d'utilisateur est invalide");
            console.log("Le nom d'utilisateur ou l'ID est invalide");
            return;
        }
        addUsers([...users, user])
        setUserName({username: "", id: ""})
        return;
    }


    return (
        <div class="form-container">
            <h2>Ajouter un produit</h2>
            <form onSubmit={addName}>
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username"  required value={user.username} onChange={detectNameChange}/>
                </div>

                <div class="form-group">
                    <label for="id">User ID</label>
                    <input type="text" id="id" name="id"  required value={user.id} onChange={detectNameChange}/>
                </div>

                <button type="submit">Ajouter</button>
            </form>


        <ul>
            {users.map((user, userIndex)=>(
                <li key={userIndex}>Name: {user.username}   <i>ID: '{userIndex}{user.id}'  </i></li>
            ) )}



            users.map(
                element => 
            )
        </ul>
        </div>   
    )
}
export default UserNameForm;
