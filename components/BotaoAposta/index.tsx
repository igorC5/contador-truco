import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface IBotaoAposta {
    titulo: string;
    funcao: any;
    cor: string;
}

const BotaoAposta: React.FC<IBotaoAposta> = ({titulo, funcao, cor}) => {

    return (
        <TouchableOpacity
            onPress={funcao}
            style={{
                marginTop: 10,
                width: '90%',
                backgroundColor: cor,
                borderRadius: 15,
                padding: 10,
            }}
        >
            <Text style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 20,
            }}>
                {titulo}
            </Text>
        </TouchableOpacity>
    )
}

export default BotaoAposta;