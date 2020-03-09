import { writable } from "svelte/store";
import { generateProfiles } from "./helpers.js";

export const profiles = writable(generateProfiles(10));
export const search = writable("");
