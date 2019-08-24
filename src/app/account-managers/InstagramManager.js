import {AccountManager} from "./AccountManager";

export class InstagramManager extends AccountManager {
  static key = 'INSTAGRAM'
  static title = 'Instagram'

  associateAccount() {
    this.validateAccount()
    // TODO: do something async
    console.log("In account associated: ", this.account)
  }

  validateAccount() {
    // TODO: do something async
    console.log("In account validated: ", this.account)
  }

  publish(publication) {
    // TODO: do something async
    console.log("In publication: ", publication)
  }

  has(key) {
    return InstagramManager.key === key
  }
}
