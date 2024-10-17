import { Heading, VStack, Text, SimpleGrid, GridItem, FormControl, FormLabel, Input, Select, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react";

export default function Details() {

    const colSpan = useBreakpointValue({ base: 2, md: 1});

	return (
		<VStack w="full" h="full" p={["28px", "32px", "40px"]} spacing="40px" alignItems="flex-start">
			<VStack textAlign="left" align="left" alignItems="flex-start">
				<Heading fontSize={["32px", "32px", "48px"]}>Your details</Heading>
				<Text fontSize={["16px", "16px", "16px"]}>If you already have an account, click here to log in.</Text>
			</VStack>

			<SimpleGrid columns={2} columnGap="12px" rowGap="24px" w="full">
				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>First Name</FormLabel>
						<Input placeholder="John" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={[2, 2, 1]}>
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

				<GridItem colSpan={colSpan}>
					<FormControl>
						<FormLabel>City</FormLabel>
						<Input placeholder="San Francisco" />
					</FormControl>
				</GridItem>

				<GridItem colSpan={colSpan}>
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
					<Checkbox defaultChecked>
						Ship to the billing address.
					</Checkbox>
				</GridItem>

				<GridItem colSpan={2}>
					<Button variant='primary' size="lg" w="full">
						Place order
					</Button>
				</GridItem>
			</SimpleGrid>
		</VStack>
	);
}