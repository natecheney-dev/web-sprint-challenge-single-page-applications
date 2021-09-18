describe("New User App", ()=>{
    beforeEach(function (){
        cy.visit('http://localhost:3000/pizza-form-container');
    })

    const name = () => cy.get('input[name=name]')
    const button = () => cy.get('button')
    const sauce = () => cy.get('input[name=sauce]')

    const pepperoni = () => cy.get('input[name=pepperoni')
    const sausage = () => cy.get('input[name=sausage')
    const onions = () => cy.get('input[name=onions')

    describe('filling out inputs and button', () =>{
        it('Checking For Inputs', ()=>{
            name()
                .should('have.value', '')
                .type('Name input')
                .should('have.value', 'Name input')
        })
        it('checking for non-check checkbox at start', () => {
            sauce()
                .should('not.be.checked')
        })
        it('submit button starts out disabled', ()=>{
            button().should('be.disabled');
        })

        it('checks', () =>{
            pepperoni().check();
            sausage().check();
            onions().check();
        })
    })
})