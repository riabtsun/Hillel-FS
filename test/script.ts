class BankAccount {
  public accountHolder: string;
  private balance: number;

  constructor(accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  public deposit(amount: number) {
    this.balance += amount;
  }

  public getBalance() {
    return this.balance;
  }

  private logTransaction() {
    return console.log(`Balance was amounted on ${this.balance}`);
  }
}

const John = new BankAccount('John', 1000);
John.deposit(200);
John.getBalance();
John.logTransaction();
