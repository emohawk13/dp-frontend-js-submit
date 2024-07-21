class ATM {
  constructor() {
    this.balance = 0;
    this.totalWithdrawn = 0;
    this.totalDeposited = 0;
    this.depositOccurred = false;
    this.withdrawOccurred = false;
  }

  depositMoney(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.totalDeposited += amount;
      this.depositOccurred = true;
    }
  }

  withdrawMoney(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.totalWithdrawn += amount;
      this.withdrawOccurred = true;
    }
  }

  getBalance() {
    return this.balance;
  }

  getTotalWithdrawn() {
    return this.totalWithdrawn;
  }

  getTotalDeposited() {
    return this.totalDeposited;
  }

  depositDidOccur() {
    return this.depositOccurred;
  }

  withdrawDidOccur() {
    return this.withdrawOccurred;
  }
}
