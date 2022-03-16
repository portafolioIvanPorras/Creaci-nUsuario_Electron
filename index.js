const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
let fechaModificada = document.getElementById('fecha');
let fechaActual = new Date().toISOString().slice(0, 10);
let nombre = document.getElementById('usuario');

const expresiones = {
  usuario: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
  contrasenia: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const campos = {
  usuario: false,
  correo: false,
  contrasenia: false,
};

fechaModificada.setAttribute('max', fechaActual);

const validarFomulario = (e) => {
  switch (e.target.name) {
    case 'usuario':
      validarCampo(expresiones.usuario, e.target, 'usuario');
      break;
    case 'correo':
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case 'contrasenia':
      validarCampo(expresiones.contrasenia, e.target, 'contrasenia');
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.remove(`form__input-error-actvio`);
    campos[campo] = true;
  } else {
    document
      .querySelector(`#grupo__${campo} .form__input-error`)
      .classList.add(`form__input-error-actvio`);
    campos[campo] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFomulario);
  input.addEventListener('blur', validarFomulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  if (campos.usuario && campos.correo && campos.contrasenia) {
    document
      .getElementById('form__mensaje')
      .classList.remove('formulario__mensaje-activo');
    alert('Bienvenido!' + nombre.value);
    formulario.reset();
  } else {
    document
      .getElementById('form__mensaje')
      .classList.add('formulario__mensaje-activo');
  }
});
