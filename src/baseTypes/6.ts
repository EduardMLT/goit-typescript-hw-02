/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): string {
  console.log(message);
  return ('10');
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): Error {
  throw new Error('Error');
  
}

export {};