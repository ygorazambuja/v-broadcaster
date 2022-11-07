import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export default class ValoraApi extends ExternalClient {
  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://7510-2804-3b1c-101-401-00-7.sa.ngrok.io/', context, {
      ...options,
    })
  }

  public async skuChanged(skuObject: any) {
    return this.http.post(`/vtex-sku/skuChanged/`, skuObject, {
      headers: {
        'X-VTEX-Use-Https': 'true',
      },
    })
  }
}
