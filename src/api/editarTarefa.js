import axios from 'axios'

export default function editaTarefa(token, id, texto){
    return axios.put(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,
    {
        description: texto,
    },
    {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}