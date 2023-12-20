import CustomThemeProvider from "./CustomThemeProvider.jsx";
import TodoStoreProvider from "../models/todoStore.jsx";

// Components
// import { Box } from "@chakra-ui/core";
import Card from "./Card.jsx";

export default function App() {
  return (
    <CustomThemeProvider>
      <TodoStoreProvider>
        <Card />
      </TodoStoreProvider>
    // </CustomThemeProvider>
  );
}