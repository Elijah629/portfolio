import resolveConfig from "tailwindcss/resolveConfig";
import { Config } from "tailwindcss/types/config";
import tailwindConfig from "../../../tailwind.config";
export const twConfig: NonNullable<Config> = resolveConfig(tailwindConfig);
