import classNames from "classnames"
import "./Section1.css"

const Section1 = () => {
    return (
        <div className="mainContent">
            <div className="flexRowCenter">
                <div className="maxWidth1140">
                    <div className="flexRowCenter">
                        <div className="contentCont1">
                            <div className={classNames("textAllignLeft", "contentCont1Header")}>
                                Welcome !
                            </div>
                            <div className={classNames("contentCont1Text", "textAllignLeft")}>
                                We provide the highest quality insurance policies and services.
                            </div>
                        </div>
                        <div className="imageContainer">
                            <img
                                className="section1-stock-img"
                                alt="insurance_vector"
                                src="assets/image3.png"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default (Section1)
