import { render, screen, fireEvent } from '@testing-library/react';
import Favourites from "../components/Favourites";
import { beforeEach, describe } from 'node:test';

describe('Favourites Component', () => {
	beforeEach(() => {
		Storage.prototype.setItem = jest.fn();
		Storage.prototype.setItem = jest.fn(() => JSON.stringify([]));
	})

	it('should add a movie to favourites when the "Add to Favourites" button is clicked', () => {
		render(<Favourites />);

		const button = screen.getByText('Add to favourites');
		fireEvent.click(button);

		expect(localStorage.setItem).toHaveBeenCalledWith('favourites', JSON.stringify([
			{id:'1', title: 'Avatar', release_date: '2009-12-18', poster_path: '/avatar.jpg'}
		]));
	});
});