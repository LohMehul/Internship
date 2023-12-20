import React from "react";
import { CSSReset, ThemeProvider,} from "react-bootstrap";

const customTheme = {
//   ...theme
};

export default function CustomThemeProvider({ children }) {
  return (
    <ThemeProvider theme={customTheme}>
      {children}
    </ThemeProvider>
  );
}
