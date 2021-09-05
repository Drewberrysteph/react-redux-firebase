/* eslint-disable */
import { render } from '@testing-library/react'
import Header from '../components/Header/Header'

describe('Header Component', () => {
    it('should have Header Component Title', () => {
        const { getByText } = render(<Header />)
        expect(getByText(/header component/i)).toBeInTheDocument()
    })
})