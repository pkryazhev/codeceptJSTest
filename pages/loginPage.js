const { I } = inject();

module.exports = {

  login() {
    I.amOnPage('https://idemo.bspb.ru/');
    I.see('Банк «Санкт-Петербург');
    I.click('#login-button');
    I.click('#login-otp-button');
    I.see('Интернет-банк');
  },
}
