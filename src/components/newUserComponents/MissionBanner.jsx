import React from 'react'
import Church from '../../assets/NewPage/Church-outside.png'

const MissionBanner = () => {
  return (
    <div className='new-banner'>
      <div className='left-new-banner'>
        <div className='left-header'>
          <h2>Why Our Church</h2>
        </div>
        <div className='mission'>
          <h4>Our Mission</h4>
          <p>United Christian Church is a local assembly of believers in the Lord Jesus Christ that exists to glorify God and equip the saints for service of God by the power of the Holy Spirit through worship, teaching, fellowship and Evangelism.
            (Acts 2:42-47; Eph.4:11-13)</p>
        </div>
        <div>
          <h4>Our Vision</h4>
          <p>United Christian Church strives to build the mature body of Jesus Christ with the help of God the Holy Spirit. (Colossians 1:28)</p>
        </div>
      </div>
      <div className='right-new-banner'>
        <img src={Church} alt="" />
      </div>
    </div>
  )
}

export default MissionBanner