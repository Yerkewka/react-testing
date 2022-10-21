/**
 * Greet should render the text hello and if the name is passed into the component
 * It should render hello followed by the name
 */

import { render, screen } from '@testing-library/react'

import { Greet } from './Greet'

describe('Greet', () => {
  test('renders correctly', () => {
    render(<Greet />)

    const textElement = screen.getByText(/hello/i)

    expect(textElement).toBeInTheDocument()
  })

  test('renders with a name', () => {
    render(<Greet name="Yerkebulan" />)

    const textElement = screen.getByText(/hello yerkebulan/i)

    expect(textElement).toBeInTheDocument()
  })
})
