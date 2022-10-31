import { useEffect, useState } from "react";
import { Image, FlatList, ActivityIndicator } from "react-native";
import logoImg from "../../assets/logo-nlw-esports.png";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { Heading } from "../../components/Heading";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import { ProfileProps } from "../../components/Profile";
import { Profile } from "../../components/Profile";
import { API_URL } from "@env";
import { THEME } from "../../theme";

export const BASE_URL = API_URL;

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const routes = useRoute();
  const profile = routes.params as ProfileProps;

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch(`${BASE_URL}/games`)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Profile
          id={profile.id}
          username={profile.username}
          avatar={profile.avatar}
        />

        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        {isLoading ? (
          <ActivityIndicator color={THEME.COLORS.PRIMARY} />
        ) : (
          <FlatList
            data={games}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <GameCard data={item} onPress={() => handleOpenGame(item)} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={styles.contentList}
          />
        )}
      </SafeAreaView>
    </Background>
  );
}
