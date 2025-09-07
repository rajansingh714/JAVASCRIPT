async function fun() {
  const y = await 20; // await return the fullfilment value of promise
  console.log(y);

  const obje = {};
  console.log((await obje) === obje);
}

fun();
