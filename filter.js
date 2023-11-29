const users = [
    {id: 1, name: "Matheus", age: 12},
    {id: 2, name: "Pedro", age: 39},
    {id: 3, name: "Ricardo", age: 23},
    {id: 7, name: "Flávio", age: 50},
    {id: 9, name: "Ana", age: 83}
]

const FilterUsers = users.filter((user) => {
    if(user.age > 30){
        console.log(user)
    }
})

FilterUsers()