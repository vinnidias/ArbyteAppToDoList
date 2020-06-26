import axios from 'axios'

export default function exluirTarefa(token, id){
    console.log('o que ta acontecendo', token)
    return axios.delete(`https://arbyte-todo-list-api.herokuapp.com/tasks/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}