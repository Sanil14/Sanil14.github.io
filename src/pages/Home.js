import React from "react";
import Typewriter from 'typewriter-effect';
// import "../css/Home.css"

const Home = () => {
    return (
        <div className="container h-full">
            <div className="space-y-4">
                <div className="text-center text-4xl font-medium font-serif">
                    <h3>Hey, I'm <span className="text-amber-400">Sanil Jalan</span></h3>
                </div>
                <div className="text-center px-3 text-5xl font-medium font-serif">
                    <h1>
                        <Typewriter
                            options={{
                                strings: ["Aspiring Web Developer", "Aspiring NodeJS Developer", "Aspiring Backend Developer", "Aspiring Software Engineer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Home;