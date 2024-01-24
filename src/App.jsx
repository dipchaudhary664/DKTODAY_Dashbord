import Home from "./screens/Home";
import NavBar from "./screens/NavBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Setting from "./screens/Setting";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
