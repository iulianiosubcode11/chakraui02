import { Box, Container, Stack, Text, Link, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
	return (
		<Box w="full" bg={useColorModeValue("gray.50", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
			<Container as={Stack} maxW={"1280px"} py={4} px={[4, 6, 8]} direction={{ base: "column", md: "row" }} spacing={4} justify={{ base: "center", md: "space-between" }} align={{ base: "center", md: "center" }}>
				<Text>© 2024 Your Company Name. All rights reserved</Text>
				<Stack
					direction={'row'}
					gap={['12px 24px', '12px 24px', '16px 32px']}
					wrap="wrap"
					justify="center"
				>
					<Link href={"#"} color={useColorModeValue("brand.600", "brand.200")} _hover={{ color: useColorModeValue("brand.500", "brand.400") }}>
						Privacy Policy
					</Link>
					<Link href={"#"} color={useColorModeValue("brand.600", "brand.200")} _hover={{ color: useColorModeValue("brand.500", "brand.400") }}>
						Terms of Use
					</Link>
					<Link href={"#"} color={useColorModeValue("brand.600", "brand.200")} _hover={{ color: useColorModeValue("brand.500", "brand.400") }}>
						Contact Us
					</Link>
				</Stack>
			</Container>
		</Box>
	);
}
