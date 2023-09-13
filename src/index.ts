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

program
  .argument("<number>", "the first number")
  .action((number: string, options) => {
    console.log(number, options);
  });

program.parse();

// next prime function
