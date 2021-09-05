/* eslint-disable */
import { render } from '@testing-library/react'
import Sidebar from '../components/Sidebar/Sidebar'


describe('Sidebar Component', () => {
    it('should render Master Records Lists', () => {
        const masterRecords = [
            'Master Record 1',
            'Master Record 2',
            'Master Record 3',
            'Master Record 4',
        ]
        const { getByText } = render(<Sidebar
            masterRecords={masterRecords} />)

        expect(getByText(/master record 1/i)).toBeInTheDocument()
        expect(getByText(/master record 2/i)).toBeInTheDocument()
        expect(getByText(/master record 3/i)).toBeInTheDocument()
        expect(getByText(/master record 4/i)).toBeInTheDocument()
    })
})