/* eslint-disable */
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../App'



let getByTestId;
let getByRole;
let findAllByTestId;
let getByText;
let getByPlaceholderText;

const initialState = {
    data: {
        users: {
            data: [
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
        }
    }
}
const middleware = [thunk]
const mockStore = configureMockStore(middleware)

beforeEach(() => {
    let component = render(
        <Provider store={mockStore(initialState)}>
            <App />
        </Provider>
    )
    getByTestId = component.getByTestId
    getByRole = component.getByRole
    findAllByTestId = component.findAllByTestId
    getByText = component.getByText
    getByPlaceholderText = component.getByPlaceholderText
})

function checkElementClass(ele, klassName) {
    return expect(ele.classList.value.includes(klassName)).toBe(true)
}

describe('App Component', () => {
    it('should have active class when record is clicked', () => {
        const firstEle = getByTestId(/master-record-1/i)
        const secondEle = getByTestId(/master-record-2/i)
        userEvent.click(secondEle)
        checkElementClass(firstEle, 'notActive')
        checkElementClass(secondEle, 'active')
        userEvent.click(firstEle)
        checkElementClass(firstEle, 'active')
        checkElementClass(secondEle, 'notActive')
    })
    describe('Modals', () => {
        it('should open Add User modal', () => {
            userEvent.click(getByRole('button', { name: /add user/i }))
            expect(getByRole('heading', { name: /add user modal/i })).toBeInTheDocument()
        })

        it('should open Edit User modal with user info', async () => {
            const userElems = await findAllByTestId(/edit-icon/i)
            userEvent.click(userElems[1])
            expect(getByRole('heading', { name: /edit user modal/i })).toBeInTheDocument()
        })
    })
})