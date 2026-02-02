// Simple TypeScript logging function - hooks tested
function log(message: string): string {
  let x = `The given message is ${message}`;
  return x;
}

console.log(log("Hi"));
