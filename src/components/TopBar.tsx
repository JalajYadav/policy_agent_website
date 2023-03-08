import classNames from 'classnames';
import React, { memo } from 'react'
import "./TopBar.css"

const TopBar = () => {
  return (
    <div className='main-container'>
      <div className={classNames("margin-left-20", "grid-center", "contentCont1Header")}>Ashawari</div>
      <div className={classNames("flex-space-between")}>
        <div className="margin-horiz-20">About Us</div>
        <div className="margin-right-20">Contact Us</div>
      </div>
    </div>
  )
}

export default memo(TopBar);
