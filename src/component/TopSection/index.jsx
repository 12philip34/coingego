import React from 'react';
import "./style.css";


function TopSection() {
    return (
        <div>
            <div className="TopSectioncontainer">
                <div className="contentOne">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima culpa voluptatem aperiam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis, quibusdam!
                    </p>
                    <div className="gridButton">
                        <button>Extention</button>
                        <a href="">Watch Tutorial</a>
                    </div>
                    <div className="gridButton">
                        <label className='numberLabel'>User_Active</label>
                        <label className='numberLabel'>User_Active</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSection;