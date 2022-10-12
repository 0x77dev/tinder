import { Command } from "@oclif/core"
import { tinder } from "../../services/api"

export class Profile extends Command {
  static description = 'Get current user profile'

  async run(): Promise<void> {
    const profile = await tinder.getProfile()
    const birthDate = new Date(profile.user.birth_date)
    const yearsOld = new Date().getFullYear() - birthDate.getFullYear()

    this.log(`@${profile.user.username}`)
    this.log(`${profile.user.name}, ${yearsOld}, ${profile.user.bio}`)
    this.log(`${profile.user.city.name}, ${profile.user.city.region}`)
    this.log(`Position: ${profile.user.pos.lat}, ${profile.user.pos.lon}`)
    this.log(`Last ping: ${profile.user.ping_time}`)
    this.log(`Likes left: ${profile.likes.likes_remaining}`)
    this.log(profile.user.selfie_verification)
    this.log('\n\nMore info:\n$ tinder api profile')
  }
}
