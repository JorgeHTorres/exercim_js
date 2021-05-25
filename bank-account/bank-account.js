//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.myBalance = 0;
    this.accountStatus = false;
  }

  open() {
    if(this.accountStatus){
      throw new ValueError();
    }
    this.accountStatus = true;
  }

  close() {
    if(!this.accountStatus){
      throw new ValueError();
    }
    this.accountStatus = false;
    this.myBalance = 0;
  }

  deposit(dep) {
    if(!this.accountStatus || dep < 0){
      throw new ValueError();
    }
    this.myBalance += dep; 
  }

  withdraw(wit) {
    if(!this.accountStatus || wit < 0 || wit > this.myBalance){
      throw new ValueError();
    }
    this.myBalance -= wit;
  }

  get balance() {
    if(!this.accountStatus){
      throw new ValueError();
    }
    return this.myBalance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
