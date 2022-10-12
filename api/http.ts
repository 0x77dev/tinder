import fetch from 'cross-fetch'
import Interfaces from './interfaces'

// eslint-disable-next-line no-undef
export const tinderFetch = async (token: string, url: string, init: RequestInit): Promise<Interfaces.Response> => {
  const res = await fetch(url, {
    ...init,
    headers: {
      ...init.headers,
      'X-Auth-Token': token
    }
  })

  return res.json()
}
