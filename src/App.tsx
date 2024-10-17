import "./App.css";
import { Container, Flex, useColorModeValue } from "@chakra-ui/react";
import Details from "./sections/details";
import Cart from "./sections/cart";
import Footer from "./sections/footer";

function App() {
	const textNegru = useColorModeValue("gray.800", "gray.200");

	return (
		<>
			<Container maxW='full' p="0px">
				<Flex direction='column' h={{ base: 'auto', md: '100vh' }} align='center'>
				<Flex maxW="1280px" w='full' direction={{ base: 'column-reverse', md: 'row'}} h={{ base: 'auto', md: '100vh' }} py={[0, '10px', '40px']} color={textNegru}>
					<Details />
					<Cart />
				</Flex>
				<Footer/>
				</Flex>
			</Container>
		</>
	);
}

export default App;
