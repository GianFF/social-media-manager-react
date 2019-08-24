import {AccountManager} from "./AccountManager";

export class FacebookManager extends AccountManager {
  static key = 'FACEBOOK'
  static title = 'Facebook'

  associateAccount() {
    this.validateAccount()
    // TODO: do something async
    console.log("Fb account associated: ", this.account)
  }

  validateAccount() {
    // TODO: do something async
    console.log("Fb account validated: ", this.account)
  }

  publish(publication) {
    // TODO: do something async
    console.log("Fb publication: ", publication)
  }

  has(key) {
    return FacebookManager.key === key
  }
}
