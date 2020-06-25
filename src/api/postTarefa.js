import axios from 'axios'

export default function postarTarefa(token, descricao, completa){
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/tasks',
        {
            description: descricao,
            completed: completa
        },
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}