import React from 'react'
import './RReserve.css'

export default function RReserve() {
    return (
        <div className="RReserve">
            <span className='reserve-header'>Rs LKR / Night</span>
            <div className='reserve-display'>
                <form action="" className="reserve-form">
                    <div className="input-fields">
                        <div className="check-in">
                            <p className='field-title'>CHECK-IN</p>
                            <input type="date" id="check-in" name="check-in" className='field' />
                        </div>
                        <div className="check-out">
                            <p className='field-title'>CHECK-OUT</p>
                            <input type="date" id="check-out" name="check-out" className='field' />
                        </div>
                        <div className="guests">
                            <p className='field-title'>GUESTS</p>
                            <select name="guests" id="guests" className='field'>
                                <option value="1">1 Guest</option>
                                <option value="2">2 Guests</option>
                                <option value="4">4 Guests</option>
                                <option value="6">6 Guests</option>
                            </select>
                        </div>
                    </div>
                    <button type='submit' className='reserve-btn'>
                        Reserve
                    </button>
                </form>
                <p className='reserve-msg'>You haven't paid yet</p>
                <p className='reserve-msg'>Free cancellation before 12/26/2022</p>
                <div className='bill-summary'>
                    <p className='summary-title'>LKR x 2 nights</p>
                    <span className='summary-value'>LKR</span>

                    <p className='summary-title'>Weekly Discount</p>
                    <span className='summary-value'>LKR</span>

                    <p className='summary-title'>--</p>
                    <span className='summary-value'>LKR</span>

                    <p className='summary-title'>--</p>
                    <span className='summary-value'>LKR</span>

                    <p className='summary-title'>--</p>
                    <span className='summary-value'>LKR</span>

                    <p className='total-title'>Total Price</p>
                    <span className='total-value'>LKR</span>
                </div>
            </div>
        </div>
    )
}
