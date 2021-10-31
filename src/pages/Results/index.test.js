import Results, { formatJobList, formatQueryParams } from './';
import { rest } from 'msw';
import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { render } from '../../utils/test';
import { screen, waitFor } from '@testing-library/react';

describe('The getJobTitle function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,';
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState);
  });
  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3';
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState);
  });
});

describe('The formatQueryParams function', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1';
    expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState);
  });
  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2';
    expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    );
  });

  describe('Fetching from the server', () => {
    const answersMockedData = [
      {
        title: 'backend',
        description: 'Le backend partie imergée'
      },
      {
        title: 'design',
        description: 'En charge du design'
      }
    ];

    const server = setupServer(
      rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({ resultsData: answersMockedData }));
      })
    );

    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    it('Should display results after API call', async () => {
      render(<Results />);
      await waitFor(() => {
        expect(
          screen.getByText('Le backend partie imergée')
        ).toBeInTheDocument();
        expect(screen.getByText('En charge du design')).toBeInTheDocument();
      });
    });
  });
});
