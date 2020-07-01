import React, { useState } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'


export default function BotaoCheckBox({pressionado, bool}){
	const [check, setCheck] = useState(bool)
	return(
	
		<TouchableOpacity 
			style={estilos.containerCheckBox}
			onPress={()=> {setCheck(!check); pressionado(check)}}
		>
			<View>
				{check && <Text>✔️</Text>}
			</View>
		</TouchableOpacity>
	)
}

const estilos = {
	containerCheckBox: {
		height: 20,
		width: 20,
		borderWidth: 2,
		borderRadius: 5,
		margin:15,
		borderColor: '#e9967a'
	}
}