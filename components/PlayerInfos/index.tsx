import React from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { Minus, Plus } from 'lucide-react-native';
import BotaoAposta from "../BotaoAposta";

interface IPlayerInfos {
    vitorias: number;
    pontos: number;
    setPontos: any;
    titulo: string;
}

const PlayerInfos: React.FC<IPlayerInfos> = ({
    vitorias,
    pontos,
    titulo,
    setPontos,
}) => {

    const handlePontosChange = (tipo: "+" | "-", valor?: number | null) => {
        let newPontos = 0;
        if (tipo === "+") {
            newPontos = pontos + 1;
        } else {
            if (pontos != 0) {
                newPontos = pontos - 1;
            }
        }
        if (valor != undefined) {
            newPontos = pontos + valor;
        }
        if (newPontos > 12) return 12;
        setPontos(newPontos)
    }

    return (
        <View style={{
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
        }}>
            <Text>{titulo}</Text>
            {pontos}
            <Text>Ganhou {vitorias}</Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: "100%",
                paddingHorizontal: 40,
            }}>
                <TouchableOpacity
                    onPress={() => handlePontosChange("+")}
                    style={{
                        backgroundColor: "green",
                        width: "40%",
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: 2,
                        borderRadius: 12
                    }}
                >
                    <Plus color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => handlePontosChange("-")}
                    style={{
                        backgroundColor: "red",
                        width: "40%",
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: 2,
                        borderRadius: 12
                    }}
                >
                    <Minus color="white" />
                </TouchableOpacity>
            </View>
            <BotaoAposta 
                cor="teal"
                titulo="truco"
                funcao={() => handlePontosChange("+", 3)}
            />
            <BotaoAposta 
                cor="darkblue"
                titulo="seiss"
                funcao={() => handlePontosChange("+", 6)}
            />
            <BotaoAposta 
                cor="purple"
                titulo="novee"
                funcao={() => handlePontosChange("+", 9)}
            />
            <BotaoAposta 
                cor="darkred"
                titulo="dozii"
                funcao={() => handlePontosChange("+", 12)}
            />
        </View>
    )
}

export default PlayerInfos