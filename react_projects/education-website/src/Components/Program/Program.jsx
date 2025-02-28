import React from 'react'
import './Program.css'
import Program_1 from '../../assets/program-1.png'
import Program_2 from '../../assets/program-2.png'
import Program_3 from '../../assets/program-3.png'
import Program_icon_1 from '../../assets/program-icon-1.png'
import Program_icon_2 from '../../assets/program-icon-2.png'
import Program_icon_3 from '../../assets/program-icon-3.png'

const Program = () => {
    return (
        <div className='programs'>
            <div className="program">
                <img src={Program_1} alt="Program-1" />
                <div className="caption">
                    <img src={Program_icon_1} alt="" />
                    <p>Graduation Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_2} alt="Program-2" />
                <div className="caption">
                    <img src={Program_icon_2} alt="" />
                    <p>Master Degree</p>
                </div>
            </div>
            <div className="program">
                <img src={Program_3} alt="Program-3" />
                <div className="caption">
                    <img src={Program_icon_3} alt="" />
                    <p>Post Graduation</p>
                </div>
            </div>
        </div>
    )
}

export default Program
