import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

describe('App test', () => {
it('shows error on fetch failure', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('network fail')));
    render(<App />);

    const error = await screen.findByText(/A network error was encountered/i);
    expect(error).toBeInTheDocument();

});

 it('shows loading', () => { 
        let resolveFetch;
        global.fetch = vi.fn(() => {
            return new Promise(resolve => {
                resolveFetch = resolve;
            });
        });

    render(<App />);
    const loading = screen.getByText(/loading/i);
    expect(loading).toBeInTheDocument();
    

resolveFetch({
  ok: true,
  json: async () => [],
});

});
});