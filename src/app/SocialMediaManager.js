import {FacebookManager} from "./account-managers/FacebookManager";
import {TwitterManager} from "./account-managers/TwitterManager";
import {InstagramManager} from "./account-managers/InstagramManager";

export class SocialMediaManager {
  constructor() {
    this.managers = [
      new FacebookManager(),
      new TwitterManager(),
      new InstagramManager(),
    ]
    this.publication = ''
  }

  associateAccount(key) {
    this.selectManager(key).associateAccount()
  }

  updateAccount(account, key) {
    this.selectManager(key).updateAccount(account)
  }

  updatePublication(publication) {
    this.publication = publication
  }

  publish() {
    this.managers.forEach((manager) => manager.publish(this.publication))
  }

  // private

  selectManager(key) {
    return this.managers.find((manager) => manager.has(key))
  }
}
