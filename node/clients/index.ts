import { IOClients } from '@vtex/api'

import { BroadcasterClient } from './broadcaster'
import ValoraApi from './valora'

export class Clients extends IOClients {
  public get broadcaster() {
    return this.getOrSet('broadcaster', BroadcasterClient)
  }

  public get skuChanged() {
    return this.getOrSet('skuChanged', ValoraApi)
  }
}
