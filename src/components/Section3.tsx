import classNames from "classnames"
import "./Section3.css"
const Section3 = () => {
    return (
        <div className="topMargin50">
            <h2 > Our Services </h2>
            <div className={classNames("flexSpaveEvenly", "topMargin50", "bottomMargin50")}>
                <div className="categoryStyle">
                    <div className={classNames("categoryHeading")}>
                        Health Insurance
                    </div>
                    <div className={classNames("categoryContent")}>
                        Health insurance can provide you with financial protection against unexpected medical expenses. Without insurance, a single hospital stay or a serious medical condition can lead to a significant financial burden.
                    </div>
                </div>
                <div className="categoryStyle">
                    <div className={classNames("categoryHeading")}>
                        Life Insurance
                    </div>
                    <div className={classNames("categoryContent")}>
                        Provides financial protection for your loved ones: Life insurance can provide a lump sum payment to your beneficiaries in the event of your untimely death. This can help them cover expenses such as mortgage payments, education expenses, and other financial obligations.
                    </div>
                </div>
                <div className="categoryStyle">
                    <div className={classNames("categoryHeading")}>
                        Vehicle Insurance
                    </div>
                    <div className={classNames("categoryContent")}>
                        Vehicle insurance can provide you with financial protection in case of accidents, theft, or damage to your vehicle. Without insurance, you would have to bear the full cost of repairing or replacing your vehicle.In India, vehicle insurance is mandatory by law.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section3