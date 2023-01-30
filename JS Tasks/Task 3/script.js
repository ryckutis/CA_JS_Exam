/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = "https://api.github.com/users";

const showBtn = document.querySelector("#btn");
const output = document.querySelector("#output");
const message = document.querySelector("#message");

showBtn.addEventListener("click", async () => {
  message.style.display = "none";
  showBtn.style.display = "none";

  const response = await fetch(ENDPOINT);
  const users = await response.json();

  let result = "";
  for (const user of users) {
    result += `
      <div class="card">
        <img src="${user.avatar_url}" alt="avatar" />
        <p>Login: ${user.login}</p>
        
      </div>
    `;
  }

  output.innerHTML = result;
});
