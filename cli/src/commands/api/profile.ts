import { Command } from "@oclif/core"
import { tinder } from "../../services/api"

export class Profile extends Command {
  static description = 'Get current user profile'

  async run(): Promise<void> {
    const profile = await tinder.getProfile()

    console.log(JSON.stringify(profile, null, 2))
  }
}
