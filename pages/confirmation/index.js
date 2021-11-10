import React from 'react'
import ConfirmBooking from '../../components/Confirmation/ConfirmBooking/ConfirmBooking'
import Form from '../../components/Confirmation/Form/Form'

const Confirmation = () => {
    return (
        <div className="flex pb-10 justify-center">
            <Form/>
            <ConfirmBooking/>
        </div>
    )
}

export default Confirmation
