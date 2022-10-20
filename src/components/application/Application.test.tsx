import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeadingElement = screen.getByRole('heading', { level: 1 });
    expect(pageHeadingElement).toBeInTheDocument();

    const sectionHeadingElement = screen.getByRole('heading', { level: 2 });
    expect(sectionHeadingElement).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory', {
      selector: 'p',
    });
    expect(paragraphElement).toBeInTheDocument();

    const closeElement = screen.getByTitle('close');
    expect(closeElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: 'Name' });
    expect(nameElement).toBeInTheDocument();

    // const nameElement2 = screen.getByLabelText('Name');
    // expect(nameElement2).toBeInTheDocument();

    // const nameElement3 = screen.getByPlaceholderText('Fullname');
    // expect(nameElement3).toBeInTheDocument();

    // const nameElement4 = screen.getByDisplayValue('Yerkebulan');
    // expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole('textbox', { name: 'Bio' });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox');
    expect(termsElement).toBeInTheDocument();

    const submitButtomElement = screen.getByRole('button');
    expect(submitButtomElement).toBeInTheDocument();
  });
});
