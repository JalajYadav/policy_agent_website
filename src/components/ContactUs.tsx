import './ContactUs.css'

const ContactUs = () => {
    return (
        <div className='contactMainCont'>
            <div className="flexRowEnd">
                <div>
                    <img
                        className="contact-stock-img"
                        alt="insurance_vector"
                        src="assets/image2.png"
                    ></img>
                </div>
                <div className='contactUsBox'>
                    <div className="contentCont1Header">
                        Contact Us
                    </div>
                    <div className='divForHR'>
                        <hr className='dashWhite'></hr>
                    </div>
                    <div className='addressNumber'>
                        Office No. 103,104, First Floor, P. 321,
                        <br />
                        Gold Coin Complex, 12/b
                        <br />
                        Opp. LIC Office, Gandhidham
                    </div>
                    <div className='addressNumber'>
                        M: 9979260646
                        <br />
                        M: 9377516094
                    </div>
                    <div className='addressNumber'>
                        Gajraj Singh
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs