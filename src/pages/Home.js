import React from "react";
import Typewriter from 'typewriter-effect';
import picture from "../assets/picture.jpg";
// import "../css/Home.css"

const Home = () => {
    return (
        <div className="flex items-center justify-center container h-screen">
            <div className="space-y-4">
                <div className="text-center pb-10">
                    <img src={picture} alt="Sanil Jalan" className="rounded-full h-40 w-40 mx-auto" />
                </div>
                <div className="text-center text-4xl font-medium font-serif">
                    <h3>Hey, I'm <span className="text-amber-400">Sanil Jalan</span></h3>
                </div>
                <div className="text-center px-3 text-4xl font-medium">
                        <Typewriter
                            options={{
                                strings: ["Site Reliability Engineer.", "Turning Data into Reliability.", "Keeping Systems Measurable.", "Engineering for Uptime."],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                </div>
            </div>
        </div>
    )
}

export default Home;