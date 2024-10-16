import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Container, Flex, Heading, VStack, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, HStack, AspectRatio, Stack } from "@chakra-ui/react";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Container maxW="1280px" p="0px">
				<Flex direction={["column", "column", "row"]} h="100vh" py="40px">
					<VStack w="full" h="full" p="40px" spacing="40px" alignItems="flex-start">
						<VStack textAlign="left" align="left" alignItems="flex-start">
							<Heading fontSize={["32px", "32px", "48px"]}>Your details</Heading>
							<Text fontSize={["16px", "16px", "16px"]}>If you already have an account, click here to log in.</Text>
						</VStack>

						<SimpleGrid columns={2} columnGap="12px" rowGap="24px" w="full">
							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>First Name</FormLabel>
									<Input placeholder="John" />
								</FormControl>
							</GridItem>

							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>Last Name</FormLabel>
									<Input placeholder="Doe" />
								</FormControl>
							</GridItem>

							<GridItem colSpan={2}>
								<FormControl>
									<FormLabel>Address</FormLabel>
									<Input placeholder="Blvd. Broken Dreams 21" />
								</FormControl>
							</GridItem>

							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>City</FormLabel>
									<Input placeholder="San Francisco" />
								</FormControl>
							</GridItem>

							<GridItem colSpan={1}>
								<FormControl>
									<FormLabel>Country</FormLabel>
									<Select placeholder="United States of America">
										<option value="USA" selected>
											United States of America
										</option>
										<option value="Canada">Canada</option>
										<option value="Mexico">Mexico</option>
									</Select>
								</FormControl>
							</GridItem>

							<GridItem colSpan={2} textAlign="left">
								<Checkbox defaultChecked>Ship to the billing address.</Checkbox>
							</GridItem>

							<GridItem colSpan={2}>
								<Button size="lg" w="full">
									Place order
								</Button>
							</GridItem>
						</SimpleGrid>
					</VStack>

					<VStack w="full" h="full" p="40px" spacing="24px" alignItems="flex-start" bg="gray.50">
						<VStack textAlign="left" align="left" alignItems="flex-start">
							<Heading fontSize={["32px", "32px", "48px"]}>Your cart</Heading>
							<Text fontSize={["16px", "16px", "16px"]}>
								If price is too hard on your eyes,{" "}
								<Button variant="link" colorScheme="black">
									try changing the theme.
								</Button>
							</Text>
						</VStack>
						<HStack spacing="24px" w='full'>
							<AspectRatio ratio={1} w="96px">
								<img src="imgboard.png" alt="Board" />
							</AspectRatio>

							<Stack align="left" textAlign="left" spacing={0}>
								<Text fontSize="20px" fontWeight="700">
									Penny board
								</Text>
								<Text fontSize="18px" fontWeight="400">
									PNYCOMP27541
								</Text>
							</Stack>

							<Stack textAlign="right" flex='1'>
								<Text fontSize="16px" fontWeight="700" fontFamily='Montserrat'>
									$119.00
								</Text>
							</Stack>
						</HStack>

            <VStack w='full' spacing='16px'>
            <Flex justifyContent="space-between" w='full'>
              <Text fontSize="16px" fontWeight="400">Subtotal</Text>
              <Text fontSize="16px" fontWeight="700" fontFamily='Montserrat'>
									$119.00
								</Text>
            </Flex>

            <Flex justifyContent="space-between" w='full'>
              <Text fontSize="16px" fontWeight="400">Shipping</Text>
              <Text fontSize="16px" fontWeight="700" fontFamily='Montserrat'>
              $19.99
								</Text>
            </Flex>

            <Flex justifyContent="space-between" w='full'>
              <Text fontSize="16px" fontWeight="400">Taxes (estimated)</Text>
              <Text fontSize="16px" fontWeight="700" fontFamily='Montserrat'>
              $23.80
								</Text>
            </Flex>
            </VStack>

            <Flex justifyContent="space-between" w='full' pt='24px' borderTop="1px solid #E2E8F0">
              <Text fontSize="16px" fontWeight="400">Total</Text>
              <Text fontSize="30px" fontWeight="700" fontFamily='Montserrat'>
              $162.79
								</Text>
            </Flex>


					</VStack>
				</Flex>
			</Container>
		</>
	);
}

export default App;
