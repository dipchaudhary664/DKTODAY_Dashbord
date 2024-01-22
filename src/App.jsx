import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <Box bgColor="#F2F4F4 w-screen h-screen">
        <NavBar />
        <Home />
      </Box>
    </ChakraProvider>
  );
}

export default App;
