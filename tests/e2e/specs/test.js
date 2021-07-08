describe('Test Todo app', () => {
  it('Task Manager', () => {
    cy.visit('http://localhost:8080/#/')
  })
  it('Contains Todo List Item', () => {
    cy.visit('/')
    cy.get('.home')
  })
  it('Contains task input element', () => {
    cy.visit('http://localhost:8080/#/')
    cy.get('.addTask')
  })
  it('Add a new Task', () =>{
    cy.visit('http://localhost:8080/#/')
    cy.get('.addTask').type('New Task {enter}')
  })
  it('Cancel Task', () =>{
    cy.visit('http://localhost:8080/#/')
    cy.get('.cancelTask')
  })
});
