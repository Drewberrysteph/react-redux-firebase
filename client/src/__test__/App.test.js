/* eslint-disable */
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import App from '../App'

function checkElementClass(ele, klassName) {
    return expect(ele.classList.value.includes(klassName)).toBe(true)
}

describe('App Component', () => {
    it('should have active class when record is clicked', () => {
        const initialState = {
            data: {
                users: []
            }
        }
        const middleware = [thunk]
        const mockStore = configureMockStore(middleware)
        const { getByTestId } = render(
            <Provider store={mockStore(initialState)}>
                <App />
            </Provider>
        )
        const firstEle = getByTestId(/master-record-1/i)
        const secondEle = getByTestId(/master-record-2/i)
        userEvent.click(secondEle)
        checkElementClass(firstEle, 'notActive')
        checkElementClass(secondEle, 'active')
        userEvent.click(firstEle)
        checkElementClass(firstEle, 'active')
    })
})