const helloWorld = require("./helloWorld");

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();

const ambilDataUser = require("./ambilDataUser");

ambilDataUser();

const ambilDataUserAsync = require("./ambilDataUserAsync");

ambilDataUserAsync()