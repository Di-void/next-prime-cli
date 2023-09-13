import figlet from "figlet";
import { Command } from "commander";
import inquirer from "inquirer";

const program = new Command();

console.log(figlet.textSync("next - prime"));

program
  .name("next-prime")
  .version("1.0.0")
  .description(
    "Input a number and I will continue to prompt you with the next prime number"
  );

program
  .argument(
    "<number>",
    "the CLI will find the next prime number after this one"
  )
  .option("-l, --loop", "CLI continues to ask to go on")
  .action(async (number: string, options) => {
    let val = nextPrime(parseInt(number));
    console.log(val);
    if (options.loop) {
      let shouldAskAgain = true;
      while (shouldAskAgain) {
        const answers = await inquirer.prompt([
          {
            type: "confirm",
            name: "shouldSeeNext",
            message: "Keep going ? :)",
          },
        ]);
        if (answers.shouldSeeNext) {
          val = nextPrime(val);
          console.log(val);
        } else {
          shouldAskAgain = false;
        }
      }
    }
    console.log("\nMata ne ! ^_^");
  })
  .showHelpAfterError("(add the -h or --help `for additional information)");

program.parse();

// next prime function
function nextPrime(n: number) {
  n % 2 !== 0 ? (n += 2) : n++;
  while (!isPrime(n)) {
    if (n % 2 !== 0) {
      n += 2;
    } else {
      n++;
    }
  }
  return n;
}

function isPrime(n: number) {
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
