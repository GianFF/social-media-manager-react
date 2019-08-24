export class AccountManager {
  constructor() {
    this.account = ''
  }

  associateAccount() {
    throw new Error('Subclass responsibility')
  }

  validateAccount() {
    throw new Error('Subclass responsibility')
  }

  updateAccount(account) {
    this.account = account
  }

  has(key) {
    throw new Error('Subclass responsibility')
  }
}
