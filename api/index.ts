import { tinderFetch } from './http'
import Interfaces from './interfaces'

export class Tinder {
  constructor (public token: string) { }

  async getProfile (): Promise<Interfaces.Profile> {
    const res = await tinderFetch(this.token, 'https://api.gotinder.com/v2/profile?include=likes%2Cofferings%2Cplus_control%2Cpurchase%2Cuser', {
      method: 'GET'
    })

    const { data, meta } = res

    if (meta.status < 200 || meta.status > 299) {
      throw new Error(`Failed to get profile: ${meta.status}`)
    }

    return data
  }
}
