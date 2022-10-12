import { Command } from "@oclif/core"
import { conf } from "../services/config"

export class Token extends Command {
  static description = 'Get the last known API token'

  async run(): Promise<void> {
    const token = conf.get('token')

    if(token) {
      return console.log(token)
    }

    console.log('No token found, please run the proxy command first and open Tinder')
  }
}
