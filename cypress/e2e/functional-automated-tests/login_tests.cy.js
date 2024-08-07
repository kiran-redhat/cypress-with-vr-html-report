/// <reference types="cypress" />

describe('Login tests', function(){

    it('Valid user can login successfully', function(){
        cy.visit('/');
        cy.get('.input-sm').type('kiran.redhat@gmail.com');
        cy.get(".pull-xs-right .ng-pristine").type('MySuperSecreat@123');
        cy.get('.btn-success').click();
        cy.get('.navbar > .container').should('contain', 'Hi, Firstname');
    });

    it('In valid user can not login and shown with an error message', function(){
        cy.visit('/');
        cy.get('.input-sm').type('Non.existing.user@kiran.com');
        cy.get(".pull-xs-right .ng-pristine").type('MySuperSecreat@123');
        cy.get('.btn-success').click();
        cy.get('.label-warning').should('contain', "Invalid username/password");
    });

    // This is intentional - verifying that 'Non existing user' name is displayed
    // it('Failing this test intentionally to show failed snapshot in HTML report', function(){
    //     cy.visit('/');
    //     cy.get('.input-sm').type('kiran.redhat@gmail.com');
    //     cy.get(".pull-xs-right .ng-pristine").type('MySuperSecreat@123');
    //     cy.get('.btn-success').click();
    //     cy.get('.navbar > .container').should('contain', 'Hi, Non existing user');
    // });
})