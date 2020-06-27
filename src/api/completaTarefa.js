import axios from 'axios'

export default function completaTarefa(token, id, bool){
    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
    {
        completed: bool
    },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}