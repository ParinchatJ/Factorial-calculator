// Factorial calculator
const { program } = require("commander");

program
  .name("factorial-cal")
  .description("A simple factorial calculator")
  .version("1.0.0");

program.command("fac <x>").action((x) => {
  x = +x;

  // check error
  if (Number.isNaN(x)) {
    throw new Error("Your input is not a number!");
  }
  let ans = +1;
  for (let i = x; i >= 1; i--) {
    ans *= i;
  }
  console.log(`the answer is ${ans}`);
});

program.parse();
