import axios from 'axios'
import { useState } from 'react'
import './GetSupport.css'

const GetSupport = () => {
    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobileNumber: 0,
        request: '',
    })

    const handleChange = (e: any) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        alert("We will reach out to you as soon as possible.")
        axios.post('https://sheet.best/api/sheets/95ea634d-c90f-436e-b7e4-ac8f3d1ad853', state)
            .then(response => {
                console.log(response);
            })
    }

    return (
        <div className="container">
            <h2 > Get Support </h2>
            <div className='maxWidth70'>
                <form
                    // eslint-disable-next-line no-script-url
                    action="javascript:void(0);"
                    onSubmit={handleFormSubmit}
                >
                    <label htmlFor="fname">First Name*</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." onChange={handleChange} required />

                    <label htmlFor="lname">Last Name*</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." onChange={handleChange} required />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email Address" onChange={handleChange} />

                    <label htmlFor="mobileNumber">Mobile Number*</label>
                    <input type="tel" id="mobileNumber" name="mobileNumber" placeholder="9X-9979260XXX" pattern="[0-9]{2,6}-[0-9]{5,10}" required onChange={handleChange} />

                    <label htmlFor="request">Special Request</label>
                    <textarea id="request" name="request" placeholder="Write something.." style={{ height: "200px" }} onChange={handleChange} ></textarea>

                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div >
    )
}

export default GetSupport