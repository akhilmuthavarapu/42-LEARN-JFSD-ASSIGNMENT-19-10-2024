function calculator() {
    while (true) {
      console.log("\nMenu:");
      console.log("1. Add");
      console.log("2. Multiply");
      console.log("3. Subtract");
      console.log("4. Divide");
      console.log("5. Exit");
  
      const choice = prompt("Enter your choice (1-5):");
  
      if (choice === '1') {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        console.log(`The sum is: ${num1 + num2}`);
      } 
      else if (choice === '2') {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        console.log(`The product is: ${num1 * num2}`);
      } 
      else if (choice === '3') {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        console.log(`The difference is: ${num1 - num2}`);
      } 
      else if (choice === '4') {
        const num1 = parseFloat(prompt("Enter the first number:"));
        const num2 = parseFloat(prompt("Enter the second number:"));
        if (num2 === 0) {
          console.log("Error! Division by zero is not allowed.");
        } else {
          console.log(`The quotient is: ${num1 / num2}`);
        }
      } 
      else if (choice === '5') {
        console.log("Exiting the program. Goodbye!");
        break;
      } 
      else {
        console.log("Invalid choice! Please enter a number between 1 and 5.");
      }
    }
  }

  calculator();
  