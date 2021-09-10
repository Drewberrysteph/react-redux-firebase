/* eslint-disable */
import { render } from '@testing-library/react'
import WorkspaceHeader from '../components/WorkspaceHeader/WorkspaceHeader'

describe('WorkspaceHeader Component', () => {
    it('should render activeRecord', () => {
        const { getByText } = render(<WorkspaceHeader activeRecord={'Master Record 2'} />)
        expect(getByText(/master record 2/i)).toBeInTheDocument()
    })
})