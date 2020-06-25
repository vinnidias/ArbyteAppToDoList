import axios from 'axios'

function cadastraUsuario(nome, email){
	return	axios.post('https://arbyte-todo-list-api.herokuapp.com/users', {
		fullName: nome, 
		email: email
	})
					
}

export default cadastraUsuario;