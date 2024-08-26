import './style.css'
import javascriptLogo from '/javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#root').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Everyone !</h1>
    <p>Today, Every Framework requires time and knowledge with certain problems.</p>
    <button>Yayyy !</button>
  </div>
`;