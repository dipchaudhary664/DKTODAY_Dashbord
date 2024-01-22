import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box>
        <Box>
          <NavBar />
          <Home />
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
