import { useState } from "react"


const ListRender = () => {

    const [list] = useState(["Fernanda", "Rodolpho", "Débora","Matheus"])

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", age: 12},
        {id: 2, name: "Pedro", age: 39},
        {id: 3, name: "Ricardo", age: 23},
        {id: 7, name: "Flávio", age: 50},
        {id: 9, name: "Ana", age: 83}
    ])
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4)
        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id )
        })
    }
    return(
        <div>
            <ul>
                {list.map((item, i)=>(<li key={i}>{item}</li>))}
            </ul>

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                      id: {user.id} - {user.name} = {user.age}
                    </li>
                ))}
            </ul>
       <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}
export default ListRender