import Marquee from "react-fast-marquee"
import Card from "./Card"
import "./Section2.css"

const Section2 = () => {
    return (
        <div className="topMargin50">
            <h2> About US </h2>
            <div className="aboutUsContent">
                We are committed to providing you with the highest quality insurance policies
                and services to protect your valuable assets and provide peace of mind.
                Our team is here to help you navigate the complex world of
                insurance and find the policies that best fit your needs and budget.
                Our policies cover a wide range of insurance needs, including auto, home, business,
                health, and life insurance. We work with a variety of insurance companies to offer
                you the best possible rates and coverage options.
            </div>
            <h2 > Our Partners </h2>
            <Marquee className="marquee">
                <Card path="assets/HDFCErgo.png" alt="HDFC Ergo Take it easy" text="HDFC Ergo" />
                <Card path="assets/newIndiaInsu.png" alt="newIndaiIns" text="New India Insurance" />
                <Card path="assets/LICLogo.png" alt="LICLogo" text="Life Insurance Corporation" />
                <Card path="assets/starHealth.svg" alt="starHealth" text="Star Health" />
            </Marquee>
        </div>
    )
}

export default Section2