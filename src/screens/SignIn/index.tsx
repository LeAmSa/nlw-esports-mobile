import { Image, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading } from "../../components/Heading";
import { GameController } from "phosphor-react-native";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

import { ProfileProps } from "../../components/Profile";
import logoImg from "../../assets/logo-nlw-esports.png";

import { styles } from "./styles";
import { THEME } from "../../theme";

import * as AuthSession from "expo-auth-session";

export function SignIn() {
  const navigation = useNavigation();

  function goToHomeScreen({ id, username, avatar }: ProfileProps) {
    navigation.navigate("home", { id, username, avatar });
  }

  async function handleDiscordSignIn() {
    const response = await AuthSession.startAsync({
      authUrl:
        "https://discord.com/api/oauth2/authorize?client_id=1022853718636515328&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40leamsa%2Fmobile&response_type=token&scope=identify",
    });

    fetch("https://discord.com/api/users/@me", {
      headers: {
        authorization: `Bearer ${response.params.access_token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dados: ", data);
        goToHomeScreen(data);
      });

    console.log(response);
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />

        <Heading title="Entrar" subtitle="Encontre seu duo e bora jogar!" />

        <TouchableOpacity style={styles.button} onPress={handleDiscordSignIn}>
          <GameController color={THEME.COLORS.TEXT} size={20} />

          <Text style={styles.buttonTitle}>Entrar com Discord</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Background>
  );
}

/* 
    AUTENTICAÇÃO DISCORD:
    No mobile existe uma particularidade em relação à autenticação de usuário. Para que o processo seja realizado, a aplicação sai momentaneamente para a entrada do browser que é quem realiza a autenticação. Para lidar com essa saída e retorno à aplicação, usamos a biblioteca AuthSession.

    Acessando a foto do usuário:
    Entrar pelo cdn do discord:
    Link: https://cdn.discordapp.com/avatars/[id]/[avatar].png
*/
