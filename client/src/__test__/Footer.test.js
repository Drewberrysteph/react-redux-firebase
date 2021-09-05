/* eslint-disable */
import { render } from '@testing-library/react'
import Footer from '../components/Footer/Footer'

describe('Footer Component', () => {
    it('should have Footer Component Title', () => {
        const { getByText } = render(<Footer />)
        expect(getByText(/footer component/i)).toBeInTheDocument()
    })
})