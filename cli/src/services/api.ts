import { Tinder } from "@tinder-tools/api";
import { conf } from "./config";

const token = conf.get('token')

if (!token) {
  throw new Error('No token found, please run the proxy command first and open Tinder')
}

export const tinder = new Tinder(token)
