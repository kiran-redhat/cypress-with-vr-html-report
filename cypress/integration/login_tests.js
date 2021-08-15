/// <reference types="cypress" />

describe('Login tests', function(){

    it('Valid user can login successfully', function(){
        cy.visit('/');
        cy.get('.input-sm').type('kiran.redhat@gmail.com');
        cy.get(".pull-xs-right .ng-pristine").type('MySuperSecreat@123');
        cy.get('.btn-success').click();
        cy.get('.pull-xs-right .nav-item').should('contain', 'Hi, Kiran');
    });

    it('In valid user can not login and shown with an error message', function(){
        cy.visit('/');
        cy.get('.input-sm').type('Non.existing.user@kiran.com');
        cy.get(".pull-xs-right .ng-pristine").type('MySuperSecreat@123');
        cy.get('.btn-success').click();
        cy.get('.label-warning').should('contain', "Invalid username/password");
    });
})