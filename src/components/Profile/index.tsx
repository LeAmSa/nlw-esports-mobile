import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

import { styles } from "./styles";

export interface ProfileProps {
  id: string;
  username: string;
  avatar: string | null;
}

export function Profile({ id, username, avatar }: ProfileProps) {
  const avatarUrl = `https://cdn.discordapp.com/avatars/${id}/${avatar}.png`;

  return (
    <View style={styles.container}>
      <View style={styles.status} />
      <Text style={styles.username}>{username}</Text>
      {avatar && <Image source={{ uri: avatarUrl }} style={styles.avatar} />}
    </View>
  );
}
