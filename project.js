const prompt = require("prompt-sync")();
const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = { A: 2, B: 4, C: 6, D: 8 };
const SYMBOL_VALUES = { A: 5, B: 4, C: 3, D: 2 };

// Function to simulate delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Money related functions
function money() {
  let totalDeposited = 0;
  let totalBet = 0;
  let totalWinnings = 0;

  const deposit = async () => {
    while (true) {
      const depositAmount = prompt("Enter a deposit amount: ");
      const numberDepositAmount = parseFloat(depositAmount);
      if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Invalid deposit amount, try again.");
      } else {
        totalDeposited += numberDepositAmount;
        return numberDepositAmount;
      }
    }
  };

  const getBet = async (balance, lines) => {
    while (true) {
      const maxBetPerLine = (balance / lines).toFixed(2);
      const betInput = prompt(
        `Enter your bet amount per line (Maximum bet per line: ${maxBetPerLine}): `
      );
      const bet = parseFloat(betInput);

      if (isNaN(bet) || bet <= 0 || bet > maxBetPerLine) {
        console.log(
          `Invalid bet amount. Please enter a number between 0 and ${maxBetPerLine}.`
        );
        if (balance < 0.0) {
          balance = await handleDepositAndPlayAgain(balance);
          if (balance === -1) {
            return -1;
          }
        }
      } else {
        totalBet += bet * lines;
        return bet;
      }
    }
  };

  const getWinnings = (rows, bet, lines) => {
    let winnings = 0;
    for (let row = 0; row < lines; row++) {
      const symbols = rows[row];
      const allSame = symbols.every((symbol) => symbol === symbols[0]);
      if (allSame) {
        winnings += bet * SYMBOL_VALUES[symbols[0]];
      }
    }
    totalWinnings += winnings;
    return winnings;
  };

  const handleDepositAndPlayAgain = async (balance) => {
    if (balance <= 0) {
      console.log(`Your balance is $0. Depositing more...`);
      const additionalDeposit = await deposit();
      totalDeposited += additionalDeposit;
      return balance + additionalDeposit;
    } else {
      const playAgain = prompt("Do you want to play again (y/n)? ");
      return playAgain.toLowerCase() === "y" ? balance : -1;
    }
  };

  const getTotalEarnings = () => {
    const earnings = totalWinnings - totalBet;
    return earnings;
  };

  return {
    deposit,
    getBet,
    getWinnings,
    handleDepositAndPlayAgain,
    getTotalEarnings,
    get totalDeposited() {
      return totalDeposited;
    },
    get totalBet() {
      return totalBet;
    },
    get totalWinnings() {
      return totalWinnings;
    },
  };
}

// Game related functions
function gameRelated() {
  const getNumberOfLines = async () => {
    while (true) {
      const lines = parseInt(
        prompt("Enter the number of lines to bet on (1-3): ")
      );
      if (isNaN(lines) || lines <= 0 || lines > 3) {
        console.log("Invalid number of lines, try again.");
      } else {
        return lines;
      }
    }
  };

  const spin = async () => {
    const symbols = [];
    Object.entries(SYMBOLS_COUNT).forEach(([symbol, count]) => {
      symbols.push(...Array(count).fill(symbol));
    });

    const reels = [];
    for (let i = 0; i < COLS; i++) {
      reels.push([]);
      const reelSymbols = [...symbols];
      for (let j = 0; j < ROWS; j++) {
        await delay(100);
        const randomIndex = Math.floor(Math.random() * reelSymbols.length);
        const selectedSymbol = reelSymbols.splice(randomIndex, 1)[0];
        reels[i].push(selectedSymbol);
      }
    }

    return reels;
  };

  const showWinningValues = () => {
    console.log("\nWinning Symbol Values:");
    for (const symbol in SYMBOL_VALUES) {
      console.log(`${symbol}: ${SYMBOL_VALUES[symbol]}`);
    }
  };

  return { getNumberOfLines, spin, showWinningValues };
}

// Console related functions
function consoleRelated() {
  const transpose = (reels) => {
    return reels[0].map((_, colIndex) => reels.map((row) => row[colIndex]));
  };

  const printRows = (rows) => {
    console.log("---------");
    rows.forEach((row) => console.log(row.join(" | ")));
    console.log("---------");
  };

  return { transpose, printRows };
}

// Main game loop
const gameLoop = async () => {
  try {
    const {
      deposit,
      getBet,
      getWinnings,
      handleDepositAndPlayAgain,
      getTotalEarnings,
    } = money();
    const { getNumberOfLines, spin, showWinningValues } = gameRelated();
    const { transpose, printRows } = consoleRelated();

    let balance = await deposit();
    let gameOver = false;

    while (!gameOver) {
      console.log(`\nYou have a balance of $${balance.toFixed(2)}`);
      console.log("\nMenu:");
      console.log("1. Start");
      console.log("2. How to Win (Show Symbol Values)");
      console.log("3. Deposit More Money");
      console.log("4. Current Balance");
      console.log("5. Quit");

      const choice = prompt("Enter your choice: ");

      switch (choice) {
        case "1":
          if (balance <= 10) {
            console.log(
              "You don't have enough balance to place a bet. Please deposit more money or quit. You need at least $10.00"
            );
            break;
          }
          const numberOfLines = await getNumberOfLines();
          const bet = await getBet(balance, numberOfLines);
          balance -= bet * numberOfLines;

          const reels = await spin();
          const rows = transpose(reels);
          printRows(rows);

          const winnings = getWinnings(rows, bet, numberOfLines);
          balance += winnings;
          console.log(`\nYou won: $${winnings.toFixed(2)}`);
          break;
        case "2":
          showWinningValues();
          break;
        case "3":
          const additionalDeposit = await deposit();
          balance += additionalDeposit;
          console.log(`\nYou deposited: $${additionalDeposit.toFixed(2)}`);
          break;
        case "4":
          console.log(`\nYour current balance is: $${balance.toFixed(2)}`);
          break;
        case "5":
          console.log("\nExiting game...");
          if (balance > 0) {
            console.log(`Total Earnings: $${getTotalEarnings().toFixed(2)}`);
          } else {
            balance = await handleDepositAndPlayAgain(balance);
            if (balance > 0) {
              console.log(`Total Earnings: $${getTotalEarnings().toFixed(2)}`);
            } else {
              console.log("\nYou ran out of money! Have a good day.");
            }
          }
          gameOver = true;
          break;
        default:
          console.log("\nInvalid choice. Please choose again.");
      }
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

gameLoop();
