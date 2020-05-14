//Selection of the elements

const imgPerfil = document.querySelector("img.img_perfil");
const realName = document.querySelector("#realName");
const userName = document.querySelector("#userName");
const followers = document.querySelector("#followers");
const following = document.querySelector("#following");
const inputUser = document.querySelector("#inputUser");
const btnSearch = document.querySelector("#btnSearch");



// Pasos para obtener los datos
// 1. Crear una funcion asincrona
// 2. Ejecutar una peticion y esperar por la  respuesta
// 3. Verificar si la respuesta esta bien
// 4. Convertir la respuesta y procesarla

// 1. Crear una funcion asincrona


btnSearch.addEventListener('click', ()=>{
   
    let valor= inputUser.value;
    obtenerDatosGitHub(valor);

      
});


async function obtenerDatosGitHub(valor) {
    
    let respuesta = await fetch(`https://api.github.com/users/${valor}`);
  
    if (respuesta.ok) {
      let user = await respuesta.json();
      imgPerfil.src = user.avatar_url;
      realName.textContent = user.name;
      userName.textContent = user.login;
      followers.textContent = user.followers;
      following.textContent = user.following;
    }else
     console.log("Error detected");
  }




