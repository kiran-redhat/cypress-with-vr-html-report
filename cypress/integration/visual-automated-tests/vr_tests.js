/// <reference types="cypress" />

describe('Automated visual regression tests', function(){

    // These are automated visual regression tests - just few lines below will verify that
    // Entire page Looks as expected and also find if there are any CSS changes
    it('Verify Desktop viewport matches with base snapshot', function(){
        cy.visit('/register');

        //Verify desktop view port
        cy.desktopViewport();
        cy.matchImageSnapshot('register-Desktop');
    });

    it('Verify iPhone-X viewport matches with base snapshot', function(){
        cy.visit('/register');
       
        //Verify iPhone-X view port
        cy.iPhoneXViewport();
        cy.matchImageSnapshot('register-iPhoneX');
    });

    it('Verify iPad-2 viewport matches with base snapshot', function(){
        cy.visit('/register');

        //Verify iPad-2 view port
        cy.iPad2Viewport();
        cy.matchImageSnapshot('register-iPad2');
    });
})