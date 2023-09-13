import figlet from "figlet";
import { Command } from "commander";

const program = new Command();

console.log(figlet.textSync("next - prime"));

program
  .name("next-prime")
  .version("1.0.0")
  .description(
    "Input a number and I will continue to prompt you with the next prime number"
  );

program.argument("<number>", "the first number").action((number: string) => {
  console.log(nextPrime(parseInt(number)));
});

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
