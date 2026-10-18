import autosJson from "../autos.json/autos.json";
import merkenJson from "../merken.json/merken.json";

import type { Auto, Merk } from "./interfaces";

export const autos: Auto[] = autosJson;
export const merken: Merk[] = merkenJson;