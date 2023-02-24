import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    primary: "#000000",
    primaryGrey: "#333333",
    primaryLight: "#1E1E1E",
    secondary: "#D6D6D6",
    secondaryGrey: "#F4F4F4",
    white: "#ffffff",
    black: "#000000",
    royalWhite: "#E6E6E6",
    royalGold: "#E8CD4F",
    royalGold1: "rgba(232, 205, 79, 0.7)",
    royalGold2: "rgba(232, 205, 79, 0.45)",
    royalGold3: "rgba(232, 205, 79, 0.1)",
  },
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        // borderRadius: '0px'
      },
    },
  },
});
export default theme;
