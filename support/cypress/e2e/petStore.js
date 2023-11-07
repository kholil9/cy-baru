
describe('Post User API form pet Swagger', () => {
    it('Create User', () => {
        let dataUser = {
            
                "id": 0,
                "username": Cypress.env('username'),
                "firstName": "gurita",
                "lastName": "bakar",
                "email": "gurita@gmail.com",
                "password": Cypress.env('password'),
                "phone": "12312312",
                "userStatus": 0
              
        }

        cy.request('POST', '/user', dataUser).as('createUser')
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200)
        })
    })

    const loginUser = {
        method: 'GET',
        url : '/user/login',

        qs : {
            username : Cypress.env('username'),
            password : Cypress.env('password')
        }
    }

    it('User Registered Login', () => {
        cy.request(loginUser).as('loginUser')
        cy.get('@loginUser').then(loginUser => {
            expect(loginUser.status).to.equal(200)
        })
    })

})