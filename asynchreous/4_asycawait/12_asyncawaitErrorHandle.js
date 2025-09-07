function isEvenAsync(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 === 0) {
        resolve(`number is even ${num}`);
      } else {
        reject(`number is not even ${num}`);
      }
    }, 1000);
  });
}

async function checkNumber(num) {
  try {
    const result = await isEvenAsync(num);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

checkNumber(10);
checkNumber(21);
