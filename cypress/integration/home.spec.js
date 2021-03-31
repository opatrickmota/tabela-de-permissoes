///<reference types="cypress" />

describe('Home page', () => {
    it('opens the site', () => {
        cy.visit('localhost:3000'); //this is the server that was started earlier
    })

    it('should have title, table and button', () => {
        cy.get('div').find('h1')
        cy.get('div').find('table')
        cy.get('div').find('button')
    })

    it('should have thead and tbody', () => {
        cy.get('table').find('thead')
        cy.get('table').find('tbody')
    })

    it('should have th', () => {
        cy.get('thead').find('th')
    })

    it('should have tr', () => {
        cy.get('tbody').find('tr')
    })

    it('should have td', () => {
        cy.get('tr').find('td')
    })

    it('should have text and input', () => {
        cy.get('td').find('p')
        cy.get('td').find('input')
    })

    it('should have svg', () => {
        cy.get('p').find('svg')
    })

    it('should have click on the input', () => {
        cy.get('input').click({multiple: true, force: true})
    })

    it('should have click on the button', () => {
        cy.get('button').click()
    })
})