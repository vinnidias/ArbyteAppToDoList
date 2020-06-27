import React from 'react'
import {View, Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

function BotaoIcone({pressionado, icone}){
    return(
        <View style={estilos.containerBotoes}>
				<TouchableOpacity onPress={pressionado}>
					<Text style={estilos.botaoExcluir}>
						{icone}
					</Text>
				</TouchableOpacity>
			</View>
    )
}

const estilos ={
    containerBotoes:{
		flexDirection: 'row',
		alignSelf: 'flex-end',
        marginLeft: -5,
    },
    botaoExcluir:{
		alignSelf: 'flex-end',
		margin: 15,
		marginLeft: 1
	}
}

export default BotaoIcone;