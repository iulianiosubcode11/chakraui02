import {Flex, Heading, VStack, Text,Button, HStack, AspectRatio, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";

export default function Cart() {

    const { toggleColorMode } = useColorMode();
	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
	const textGri = useColorModeValue("gray.600", "gray.400");
	const liniediv = useColorModeValue("#E2E8F0", "#464E5A");

	return (
		<VStack w="full" h="full" p={["28px", "32px", "40px"]} spacing="24px" alignItems="flex-start" bg={bgColor}>
			<VStack textAlign="left" align="left" alignItems="flex-start">
				<Heading fontSize={["32px", "32px", "48px"]}>Your cart</Heading>
				<Text fontSize={["16px", "16px", "16px"]}>
					If price is too hard on your eyes,{" "}
					<Button onClick={toggleColorMode} variant="link">
						try changing the theme.
					</Button>
				</Text>
			</VStack>
			<HStack spacing="24px" w="full">
				<AspectRatio ratio={1} w="96px">
					<img src="imgboard.png" alt="Board" />
				</AspectRatio>

				<Stack align="left" textAlign="left" spacing={0}>
					<Text fontSize="20px" fontWeight="700">
						Penny board
					</Text>
					<Text fontSize="18px" fontWeight="400" color={textGri}>
						PNYCOMP27541
					</Text>
				</Stack>

				<Stack textAlign="right" flex="1">
					<Heading fontSize="16px" fontWeight="700">
						$119.00
					</Heading>
				</Stack>
			</HStack>

			<VStack w="full" spacing="16px">
				<Flex justifyContent="space-between" w="full">
					<Text fontSize="16px" fontWeight="400" color={textGri}>
						Subtotal
					</Text>
					<Text fontSize="16px" fontWeight="700" fontFamily="Montserrat">
						$119.00
					</Text>
				</Flex>

				<Flex justifyContent="space-between" w="full">
					<Text fontSize="16px" fontWeight="400" color={textGri}>
						Shipping
					</Text>
					<Heading fontSize="16px" fontWeight="700">
						$19.99
					</Heading>
				</Flex>

				<Flex justifyContent="space-between" w="full">
					<Text fontSize="16px" fontWeight="400" color={textGri}>
						Taxes (estimated)
					</Text>
					<Heading fontSize="16px" fontWeight="700">
						$23.80
					</Heading>
				</Flex>
			</VStack>

			<Flex justifyContent="space-between" w="full" pt="24px" borderTop={`1px solid ${liniediv}`}>
				<Text fontSize="16px" fontWeight="400" color={textGri}>
					Total
				</Text>
				<Heading fontSize="30px" fontWeight="700">
					$162.79
				</Heading>
			</Flex>
		</VStack>
	);
}