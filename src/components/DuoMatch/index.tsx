import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle, CopySimple, Check } from "phosphor-react-native";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);
  const [isDiscordCopied, setIsDiscordCopied] = useState(false);

  async function handleCopyDiscordToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    // Alert.alert("Discord Copiado!", "Usuário copiado para você colar!");

    setIsCopping(false);
    setIsDiscordCopied(true);
  }

  return (
    <Modal
      {...rest}
      transparent //fundo transparent
      statusBarTranslucent //cobrindo até a statusBar
      animationType="fade" //animando a aparição
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              onClose();
              setIsDiscordCopied(false);
            }}
            style={styles.closeIcon}
          >
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>

          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

          <Heading
            title="Let's Play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />

          <Text style={styles.label}>Adicione no Discord</Text>

          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
          >
            <View></View>
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
            {isDiscordCopied ? (
              <Check size={20} color={THEME.COLORS.SUCCESS} />
            ) : (
              <CopySimple size={20} color={THEME.COLORS.CAPTION_300} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
