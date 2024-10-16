import "./App.css";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Details from "./sections/details";
import Cart from "./sections/cart";

function App() {
	const textNegru = useColorModeValue("gray.800", "gray.200");

	return (
		<>
			<Container maxW="1280px" p="0px">
				<Flex direction={{ base: 'column-reverse', md: 'row'}} h={{ base: 'auto', md: '100vh' }} py={[0, '10px', '40px']} color={textNegru}>
					<Details />
					<Cart />
				</Flex>
			</Container>
		</>
	);
}

export default App;
