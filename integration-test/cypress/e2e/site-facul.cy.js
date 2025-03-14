describe('Página Inicial', () => {
  it('Deve carregar corretamente a página', () => {
    cy.visit('http://localhost:5500/site-aula.html')
    cy.contains('Faculdade Tech')
  });

  it('Deve navegar até a página de Cursos', () => {
    cy.visit('http://localhost:5500/site-aula.html');
    cy.get('nav a').contains('Cursos').click();
    cy.url().should('include', 'cursos.html');
  });
})