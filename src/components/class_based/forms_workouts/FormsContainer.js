import React, { Component } from 'react'
import { EssayForm } from './EssayForm'
import { FlavorForm } from './FlavorForm'
import { NameForm } from './NameForm'
import { ReservationForm } from './ReservationForm'
import { UsingFormik } from './UsingFormik'

export class FormsContainer extends Component {
    // it's convenient to have a function that handles submission of form and has access to data that user has entered into that form
    // standard way to achieve this is with a technique called 'controlled componenets'

    // in HTML form elemnts such as <input> <textarea> and <select> typically maintain their own state and update based on user input
    // in React, mutable state is typically kept in state property of components and only updated through setState()

    // React component that renders a form also controls what happens in thzt form on subsequent user input
    // an input element whose value is controlled by react in this way is called a "controlled component"
    render() {
        return (
            <div>
                <p>Using Forms, Controlled Components</p>
                <NameForm />
                <EssayForm />
                <FlavorForm />
                {/* all of those components works similarly, they all accept a value attribute that we can use to implement a controlled component */}
                
                {/* handling multiple controlled inputs */}
                <ReservationForm />
                
                {/* controlled input null value */}
                {/* by specifying a value prop on a controlled component prevents user from chainging input unless attempts to do so */}
                
                {/* with Formik */}
                {/* <UsingFormik /> */}
            </div>
        )
    }
}
