// Repository link: https://github.com/andrxrv/test_cypress

describe('template spec', () => {
  const rand_word = Cypress._.random(99999)
  
  // Creates a user before all test cases
  before(() => {
    cy.request('POST', 'https://api.demoblaze.com/signup', {username: `test_e2e_${rand_word}`, password: 'test'})
  })

  it('Create a user and try to create another with same values', () => {
    cy.request('POST', 'https://api.demoblaze.com/signup', {username: `test_e2e_${rand_word}`, password: 'test'}).then((response) => {
        expect(response.body).to.have.property('errorMessage', 'This user already exist.')
    })
  })

  it('Login with correct user and pass', () => {
    cy.request('POST', 'https://api.demoblaze.com/login', {username: `test_e2e_${rand_word}`, password: 'test'}).then((response) => {
        expect(response.body).to.contain('Auth_token')
    })
  })

  it('Login with incorrect user and pass', () => {
    cy.request('POST', 'https://api.demoblaze.com/login', {username: 'test_e2e_foo', password: 'test_bar'}).then((response) => {
        expect(response.body).to.have.property('errorMessage', 'User does not exist.')
    })
  })

})