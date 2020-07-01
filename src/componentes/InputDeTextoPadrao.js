import React from 'react';
import { TextInput } from 'react-native-gesture-handler';


export default function InputPadrao({placeholder, value, onChangeText}){
    return(
        <TextInput 
            style={estilos.inputTexto}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor ='grey'
        />

    )
}


    const estilos = {
        containerTelaLogin:{
            backgroundColor: '#e9967a',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        textoCadastro:{
            fontSize: 34,
            fontWeight: 'bold',
            marginBottom: 40
        },
        inputTexto:{
            height: 50,
            width: 300,
            borderRadius: 5,
            margin: 15,
            backgroundColor: '#ffebcd',
            marginBottom: 50
        },
    }