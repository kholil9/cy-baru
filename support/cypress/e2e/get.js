describe('Get API form Pet Swagger', () => {
    it('get Inventory', () => {
        cy.request('/store/inventory').as('getInventoru')
        cy.get('@getInventoru').then(inventory  => {
            expect(inventory.status).to.equal(200)
            
        })
    })
})