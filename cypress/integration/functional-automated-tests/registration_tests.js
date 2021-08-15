/// <reference types="cypress" />

describe('Registration tests', function(){

    // Set all re-usable constants here
    const passwordToRegister = 'MySuperSecreat@123';

    // As this is just a demo, we are doing just form level validations - however, not field level validations
    it('New user can register successfully', function(){
        cy.visit('/');
        cy.get('.btn-success-outline').click();
        const currentTimeInMilliseconds = Date.now();

        // Use an unique username while creating a new user
        cy.get('input#username').type(`always.unique.username${currentTimeInMilliseconds}@gmail.com`);
        cy.get('input#firstName').type(`Firstname${currentTimeInMilliseconds}`);
        cy.get('input#lastName').type(`Lastname${currentTimeInMilliseconds}`);
        cy.get('input#password').type(passwordToRegister);
        cy.get('input#confirmPassword').type(passwordToRegister);
        cy.get('.btn-default').click();

        cy.get('.result').should('contain', 'Registration is successful');
    });

    it('Registering an existing user shows an error message', function(){
        cy.visit('/');
        cy.get('.btn-success-outline').click();
        const currentTimeInMilliseconds = Date.now();

        // Use an existing username
        cy.get('input#username').type(`kiran.redhat@gmail.com`);
        cy.get('input#firstName').type(`Firstname${currentTimeInMilliseconds}`);
        cy.get('input#lastName').type(`Lastname${currentTimeInMilliseconds}`);
        cy.get('input#password').type(passwordToRegister);
        cy.get('input#confirmPassword').type(passwordToRegister);
        cy.get('.btn-default').click();

        cy.get('.result').should('contain', 'UsernameExistsException: User already exists');
    });
})