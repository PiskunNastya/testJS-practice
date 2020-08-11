const loginDiv = document.querySelector('.container.login');
const loggedDiv = document.querySelector('.container.logged');
const inputField = document.querySelector('input');
const loginButton = document.querySelector('[class="login-btn"]');
const logoutButton = document.querySelector('[class="logout-btn"]');
const loggedHead = document.querySelector('[class="logged"]');

const getCookieObject = (text, obj) => {
  let cookieArray = text.split('; ');
  for (let i of cookieArray) {
    let elem = i.split('=');
    obj[elem[0]] = elem[1]
  }
  return obj
}

document.addEventListener('DOMContentLoaded', () => {
  let user = getCookieObject(document.cookie, {}).user || window.localStorage.user
  user ? logged(user) : logout()
});

const logged = (user) => {
  loginDiv.classList.add('disabled-container');
  loggedDiv.classList.remove('disabled-container');
  loggedHead.innerHTML = `Hello, ${user}`
}

const logout = () => {
  loginDiv.classList.remove('disabled-container');
  loggedDiv.classList.add('disabled-container');
  // local storage
  window.localStorage.removeItem('user');
  // cookie
  let user = getCookieObject(document.cookie, {}).user
  document.cookie = `user=${user}; max-age=0`;
  inputField.value = ''
}

const login = () => {
  let inputValue = inputField.value;
  if (inputValue.toLowerCase() === 'admin') {
    // local storage
    window.localStorage.setItem('user', inputValue)
    // cookie
    document.cookie = `user=${inputValue}; max-age=${60*60*24}`;
    logged(inputValue)
  } else inputField.style.background = 'rgba(241,68,68,0.78)'
}

loginButton.addEventListener('click', login)
logoutButton.addEventListener('click', logout)
