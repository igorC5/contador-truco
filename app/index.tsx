import PlayerInfos from "@/components/PlayerInfos";
import { useState } from "react";
import { Text, View } from "react-native";

const Index = () => {
    const [player1Pontos, setPlayer1Pontos] = useState<number>(0);

    return (
        <View>
            <View style={{
                marginTop: 30,
                justifyContent: 'center',
                alignContent: 'center',
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 40,
                }}>
                    UNIPAR
                </Text>
            </View>
            <PlayerInfos
                pontos={player1Pontos}
                setPontos={setPlayer1Pontos}
            />
        </View>
    )
}

export default Index;