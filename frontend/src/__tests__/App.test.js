import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, screen } from '@testing-library/react';
import App from '../App';

// Create a mock store
const mockStore = configureStore([]);
const store = mockStore({
    posts: {},
    comments: {},
});

test('renders the app', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    const linkElement = screen.getByText(/Blog/i);
    expect(linkElement).toBeInTheDocument();
});
