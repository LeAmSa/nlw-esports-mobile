import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    backgroundColor: THEME.COLORS.PRIMARY,
    borderRadius: 16,
    paddingLeft: 10,
  },
  status: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2,
    backgroundColor: "#7fff00",
    marginRight: 6,
  },
  username: {
    color: THEME.COLORS.TEXT,
    marginRight: 8,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 40 / 2,
  },
});
