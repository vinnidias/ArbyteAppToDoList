import axios from 'axios'

function validaLogin(email){
    return axios.post('https://arbyte-todo-list-api.herokuapp.com/users/login',{
        email
    })
}

export default validaLogin