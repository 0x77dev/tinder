import { Command } from '@oclif/core'
import { flags } from '@oclif/core/lib/parser'
import { ProxyServer, utils } from 'anyproxy'
import { promisify } from 'util'
import { conf } from '../services/config'
import onExit from 'signal-exit'
import fetch from 'cross-fetch'
import { writeFile } from 'fs/promises'
import { join } from 'path'

export class Proxy extends Command {
  static description = 'Proxy for the Tinder API'

  static flags = {
    port: flags.integer({
      name: 'port',
      char: 'p',
      description: 'Port to run the proxy on',
      default: 8000
    }),
    system: flags.boolean({
      name: 'system',
      char: 's',
      description: 'Set the proxy system wise',
      default: true
    }),
    imagesOutput: flags.string({
      name: 'images',
      char: 'i',
      description: 'Output images to the file system',
      summary: '-i /output/path',
    })
  }

  private async downloadImage(url: string, headers: Record<string, string>, path: string): Promise<void> {
    const {pathname} = new URL(url)
    const filename = pathname.split('/').pop()
    if(!filename || !filename.includes('.')) return
    const output = join(path, filename)

    const res = await fetch(url, {
      headers
    })

    const buffer = await res.arrayBuffer()
    await writeFile(output, Buffer.from(buffer))

    console.log('Downloaded image:', output)
  }

  async run(): Promise<void> {
    const options = await this.parse(Proxy)

    let certPath = conf.get('certPath')
    if (!certPath) {
      certPath = await promisify(utils.certMgr.generateRootCA)()
      conf.set('certPath', certPath)
      console.log('Certificate path:', certPath)
    }

    const proxy = new ProxyServer({
      port: options.flags.port,
      webInterface: {
        enable: true,
        webPort: options.flags.port + 1
      },
      silent: true,
      rule: {
        summary: 'Tinder API Proxy',
        beforeSendRequest: async (requestDetail) => {
          let token = conf.get('token')

          if (requestDetail.url.includes('https://api.gotinder.com') && requestDetail.requestOptions.headers) {
            const newToken = requestDetail.requestOptions.headers['X-Auth-Token']
            if (newToken && token !== newToken) {
              conf.set('token', newToken)
              console.log('New API token detected:', newToken, 'and saved')
            }
          }

          if(requestDetail.url.includes('https://images-ssl.gotinder.com') && options.flags.imagesOutput) {
            this.downloadImage(requestDetail.url, requestDetail.requestOptions.headers as any, options.flags.imagesOutput)
          }

          return undefined
        }
      },
      forceProxyHttps: true,
    })

    proxy.on('ready', () => {
      if (options.flags.system) {
        utils.systemProxyMgr.enableGlobalProxy('127.0.0.1', options.flags.port, 'https')

        onExit(() => {
          console.log('Disabling proxy')
          utils.systemProxyMgr.disableGlobalProxy('https')
        })
      }

      console.log('Proxy ready')
      console.log('Web UI:', `http://localhost:${options.flags.port + 1}`)
      console.log('Don\'t forget to download and trust a certificate from Web UI')
    })

    proxy.on('error', (err) => {
      console.error(err)
    })

    proxy.start()
  }
}
