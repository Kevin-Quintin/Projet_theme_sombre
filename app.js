let btn = document.getElementById('mode');
let message = document.querySelector('span');

btn.addEventListener('click', verifierMode);

function appelerModeSombre(){
  document.querySelector('body').className = 'dark';
  btn.className = 'dark_button';
  message.textContent = "Thème clair";
  localStorage.setItem('modeSombre', true)
}

function verifierMode(){
  if (document.body.classList.value == '') { // Si il n'y a pas d'élément dark sur notre body
    // On ajoute cette classe à notre body
    appelerModeSombre()
  } else {
    // On l'enlève
    document.querySelector('body').className = '';
    btn.className = '';
    message.textContent = "Thème sombre";
    localStorage.clear();
  }
}

if (localStorage.getItem('modeSombre')) {
  // SI la variable est stocké je fais ceci
  appelerModeSombre();
} else {
  // Sinon je fais ceci
}

