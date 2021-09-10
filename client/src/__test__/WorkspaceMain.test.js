/* eslint-disable */
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import WorkspaceMain from '../components/WorkspaceMain/WorkspaceMain'

describe('WorkspaceMain Component', () => {
    it('should render list of users', () => {
        const users = [
            {
                country: "New Zealand",
                createdAt: { _nanoseconds: 520000000, _seconds: 1630587749 },
                email: "maria@test.com",
                firstName: "Maria",
                id: "5YQLRJmfg39JO9GczSQU",
                lastName: "Mitchell",
                organisation: "Mitchell Inc.",
                organisation_features: ['Inventory', 'Analytics'],
                role: "Employee",
            },
            {
                country: "New Zealand",
                createdAt: { _seconds: 1630587677, _nanoseconds: 293000000 },
                email: "johannes@test.com",
                firstName: "Johannes",
                id: "Wiu1GqR9sxF6iFZdAOdz",
                lastName: "Kepler",
                organisation: "Kepler Co.",
                organisation_features: ['Inventory'],
                role: "Employee",
            }
        ]
        const initialState = {}
        const middleware = [thunk]
        const mockStore = configureMockStore(middleware)

        const { getAllByTestId } = render(
            <Provider store={mockStore(initialState)}>
                <WorkspaceMain users={users} />
            </Provider>
        )
        expect(getAllByTestId('user-container').length).toBe(2)
    })
})