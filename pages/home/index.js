const user = document.querySelector("#user");

let data = [];
let userButton = document.querySelector("#user-button");
userButton.addEventListener("click", getInfos);

user.addEventListener("keyup", () => {
  userButton.disabled = false;

  if (!user.value) {
    userButton.disabled = true;
  }
});

async function getInfos() {
  let userName = user.value;
  const url = `https://api.github.com/users/${userName}`;

  await fetch(url, {
    method: "GET",
    Headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => {
      if (resp.hasOwnProperty("message")) {
        let error = document.querySelector(".error");
        error.innerText = "Usuário não encontrado!";
      } else {
        data.push(resp);
        render(data);
      }
    });

  await fetch(`https://api.github.com/users/${userName}/repos`, {
    method: "GET",
    Headers: {
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((resp) => {
      renderRepos(resp);
    });
}
