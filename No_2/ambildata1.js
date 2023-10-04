const fetch = require("fetch");

async function ambilDataUser() {
  const response = await fetch("https://reqres.in/api/users");
  const users = await response.json();

  console.log(users.data);
}

module.exports = ambilDataUser;


