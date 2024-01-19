import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import HomePage from '@/src/app/page';

describe('<HomePage />', () => {
	it('should load the home page', () => {
		// Given
		render(<HomePage />);

		// When
		const text = screen.getByText(/Get started by editing/i);

		// Then
		expect(text).toBeInTheDocument();
	});
});
