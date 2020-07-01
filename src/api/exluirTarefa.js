import axios from 'axios'

export default function exluirTarefa(token, id){
    return axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}