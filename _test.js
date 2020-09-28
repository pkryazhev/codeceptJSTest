Feature('internet bank test');

Scenario('deposit info test', (I, loginPage) => {
    loginPage.login();
    I.click('#deposits-index');
    I.click('#account-10032');
    I.see('Детали вклада');
});
