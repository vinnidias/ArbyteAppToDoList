import axios from 'axios'

export default function pegaTarefas(token){
    return axios.get('https://arbyte-todo-list-api.herokuapp.com/tasks',{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}