import {AccountManager} from "./AccountManager";

export class TwitterManager extends AccountManager {
  static key = 'TWITTER'
  static title = 'Twitter'
  static maxCharactersLength = 250

  associateAccount() {
    this.validateAccount()
    // TODO: do something async
    console.log("Tw account associated: ", this.account)
  }

  validateAccount() {
    // TODO: do something async
    console.log("Tw account validated: ", this.account)
  }

  publish(publication) {
    try {
      this.validatePublication(publication)
      // TODO: do something async
      console.log("Tw publication: ", publication)
    } catch (e) {
      console.log(e.message)
    }
  }

  validatePublication(publication) {
    if (publication.length > TwitterManager.maxCharactersLength) {
      throw new Error("Tw max length exceeded")
    }
  }

  has(key) {
    return TwitterManager.key === key
  }
}
