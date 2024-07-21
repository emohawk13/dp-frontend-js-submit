let atm = new ATM();

function withdraw() {
  Swal.fire({
    title: "Withdraw",
    input: "number",
    inputLabel: "Enter amount to withdraw:",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Withdraw",
    showLoaderOnConfirm: true,
    preConfirm: (amount) => {
      amount = parseFloat(amount);
      return new Promise((resolve, reject) => {
        if (isNaN(amount) || amount <= 0) {
          reject("Invalid input. Please enter a valid number.");
        } else if (amount > atm.getBalance()) {
          reject(`Insufficient balance. Current Balance: $${atm.getBalance()}`);
        } else {
          resolve(amount);
        }
      });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  })
    .then((result) => {
      if (result.isConfirmed) {
        atm.withdrawMoney(result.value);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Successfully withdrawn: $${result.value}`,
        });
        updateBalanceDisplay();
      }
    })
    .catch((error) => {
      Swal.fire({
        icon: "error",
        title: "Error",
        html: error,
      });
    });
}

function deposit() {
  Swal.fire({
    title: "Deposit",
    input: "number",
    inputLabel: "Enter amount to deposit:",
    inputAttributes: {
      autocapitalize: "off",
    },
    showCancelButton: true,
    confirmButtonText: "Deposit",
    showLoaderOnConfirm: true,
    preConfirm: (amount) => {
      return new Promise((resolve, reject) => {
        amount = parseFloat(amount);
        if (isNaN(amount) || amount <= 0) {
          reject("Invalid input. Please enter a valid number.");
        } else {
          resolve(amount);
        }
      });
    },
    allowOutsideClick: () => !Swal.isLoading(),
  })
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Successfully deposited: $${result.value}`,
        }).then(() => {
          atm.depositMoney(result.value);
          updateBalanceDisplay();
        });
      }
    })
    .catch((error) => {
      if (error) {
        handleError(error);
      }
    });
}

function viewBalance() {
  Swal.fire({
    icon: "info",
    title: "Current Balance",
    text: `Current Balance: $${atm.getBalance()}`,
    confirmButtonText: "OK",
  });
}

function exitProgram() {
  Swal.fire({
    title: "Exit Program",
    text: "Are you sure you want to exit?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const balance_message = `Current Balance: $${atm.getBalance()}`;
      let deposit_message = "";
      let withdraw_message = "";

      if (atm.depositDidOccur()) {
        deposit_message = `Total Deposited: $${atm.getTotalDeposited()}<br>`;
      }
      if (atm.withdrawDidOccur()) {
        withdraw_message = `Total Withdrawn: $${atm.getTotalWithdrawn()}<br>`;
      }

      const message = "Thank you for using the ATM. Have a nice day!";
      Swal.fire({
        title: "Receipt",
        html: `
        <h3>${deposit_message}</h3>
        <h3>${withdraw_message}</h3>
        <h2>${balance_message}</h2>
        <h4>${message}</h4>`,
        icon: "info",
        confirmButtonText: "OK",
      }).then(() => {
        atm = new ATM();
      });
    }
  });
}
