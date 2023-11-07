describe('Post User API form pet Swagger', () => {
    it('Create User', () => {
        let dataUser = {
            
                "id": 0,
                "username": "gurita",
                "firstName": "gurita",
                "lastName": "bakar",
                "email": "gurita@gmail.com",
                "password": "baka213",
                "phone": "12312312",
                "userStatus": 0
              
        }

        cy.request('POST', '/user', dataUser).as('createUser')
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200)
        })
    })
})