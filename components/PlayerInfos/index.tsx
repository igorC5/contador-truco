import React from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { Minus, Plus } from 'lucide-react-native';

interface IPlayerInfos {
    pontos: number;
    setPontos: any;
}

const PlayerInfos: React.FC<IPlayerInfos> = ({
    pontos,
    setPontos,
}) => {

    const handlePontosChange = (tipo: "+" | "-") => {
        if (tipo === "+") {
            setPontos((prev: number) => prev + 1);
        } else {
            if (pontos != 0) {
                setPontos((prev: number) => prev - 1);
            }
        }
    }

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: 40,
        }}>
            <Text>Marcador</Text>
            {pontos}
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
        </View>
    )
}

export default PlayerInfos