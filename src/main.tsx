import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import tema from "./theme/index.ts";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ChakraProvider theme={tema}>
			<App />
		</ChakraProvider>
	</StrictMode>
);
