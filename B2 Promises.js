function getMoneyBack(money) {
  return new Promise((resolve, reject) => {
    if (typeof money !== 'number') {
      reject(new Error('money is not a number'));
    } else {
      resolve(money);
    }
  });
}

getMoneyBack(1200).then((money) => {
  console.log(money);
});

getMoneyBack('hello')
  .then((money) => {
    console.log(money);
  })
  .catch((err) => console.log(err.message));
