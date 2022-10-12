import Conf from "conf";

export interface Configuration {
  certPath: string;
  token: string;
}

export const conf = new Conf<Partial<Configuration>>({
  configName: "console",
  projectName: "tinder-console"
})
