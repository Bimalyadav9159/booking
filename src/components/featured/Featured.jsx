import React from 'react'
import "./featured.css"

import featuredimgs from '../../alldata'
const Featured = () => {
    return (
        <div className="featured">
            {/* { featuredimgs.map((featimg,id)=>(
                <div className="featuredItem" key={featimg.id}>
                <img
                    src={featimg.img}
                    alt={featimg.alt}
                    className={featimg.clNm}
                />
                <div className="featuredTitles">
                    <h1>{featimg.title}</h1>
                    <h2>{featimg.subtitle}</h2>
                </div>
            </div>
            ))}           */}

            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img
                    src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
                    alt=""
                    className="featuredImg"
                />
                <div className="featuredTitles">
                    <h1>Dublin</h1>
                    <h2>123 properties</h2>
                </div>
            </div>

        </div>

    )
}

export default Featured
