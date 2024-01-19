describe('Home', () => {
	it('should load the home page', () => {
		// Given
		cy.visit('/');

		// When

		const docsLink = cy.findByRole('link', { name: /Docs/i });
		const learnLink = cy.findByRole('link', { name: /Learn/i });
		const templateLink = cy.findByRole('link', { name: /Templates/i });
		const deployLink = cy.findByRole('link', { name: /Deploy/i });

		// Then
		docsLink.should('exist');
		learnLink.should('exist');
		templateLink.should('exist');
		deployLink.should('exist');
	});
});
