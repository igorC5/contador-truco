import PlayerInfos from "@/components/PlayerInfos";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Index = () => {
    const [player1Vitorias, setPlayer1Vitorias] = useState<number>(0);
    const [player2Vitorias, setPlayer2Vitorias] = useState<number>(0);

    const [player1Pontos, setPlayer1Pontos] = useState<number>(0);
    const [player2Pontos, setPlayer2Pontos] = useState<number>(0);

    useEffect(() => {
        if (player1Pontos >= 12) {
            setPlayer1Vitorias(player1Vitorias + 1);
            setPlayer1Pontos(0);
            setPlayer2Pontos(0);
        }
        if (player2Pontos >= 12) {
            setPlayer2Vitorias(player2Vitorias + 1);
            setPlayer1Pontos(0);
            setPlayer2Pontos(0);
        }
    }, [player1Pontos, player2Pontos]);

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
            <View style={{
                width: '100%',
                flexDirection: 'row',
            }}>
                <PlayerInfos
                    vitorias={player1Vitorias}
                    titulo="Nós"
                    pontos={player1Pontos}
                    setPontos={setPlayer1Pontos}
                    />
                <PlayerInfos
                    vitorias={player2Vitorias}
                    titulo="Eles"
                    pontos={player2Pontos}
                    setPontos={setPlayer2Pontos}
                />
            </View>
        </View>
    )
}

export default Index;