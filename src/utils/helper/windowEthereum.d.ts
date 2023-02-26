import {
	ExternalProvider,
	JsonRpcFetchFunc
} from "@ethersproject/providers/src.ts/web3-provider";

declare global {
	interface Window {
		ethereum: ExternalProvider | JsonRpcFetchFunc;
	}
}

// 6.0.2
// import { Eip1193Provider } from "ethers/types/providers";

// declare global {
// 	interface Window {
// 		ethereum: Eip1193Provider;
// 	}
// }
