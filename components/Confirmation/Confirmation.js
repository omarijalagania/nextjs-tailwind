import React from 'react'
import ConfirmBooking from './ConfirmBooking/ConfirmBooking'
import Form from './Form/Form'

const Confirmation = () => {
    return (
        <div className="flex pb-10 justify-center">
            <Form/>
            <ConfirmBooking/>
        </div>
    )
}

export default Confirmation
