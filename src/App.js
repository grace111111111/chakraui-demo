import { Route } from "react-router-dom";
import { Box } from '@chakra-ui/core';
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  return (
    <Box w="500px" mx="auto" mt="100px" d="flex" justifyContent="center" m="0 auto">
      <Route path="/" exact component={Form} />
      <Route path="/card" exact component={Card} />
    </Box>
  );
}

export default App;
