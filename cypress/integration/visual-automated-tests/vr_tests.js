/// <reference types="cypress" />

describe('Automated visual regression tests', function(){

    // These are automated visual regression tests - just few lines below will verify that
    // Entire page Looks as expected and also find if there are any CSS changes
    it('Desktop, iPhone-x and iPad-2 viewports should be as per baseline snapshots', function(){
        cy.visit('/register');

        //Verify desktop view port
        cy.desktopViewport();
        cy.matchImageSnapshot('register-Desktop');

        //Verify iPhone-X view port
        cy.iPhoneXViewport();
        cy.matchImageSnapshot('register-iPhoneX');

        //Verify iPad-2 view port
        cy.iPad2Viewport();
        cy.matchImageSnapshot('register-iPad2');
    });
})