import React from "react";

const Experience = () => {
    return (
        <div className="flex items-center justify-center container h-screen">
            <div className="space-y-4 w-full">
                <div className="text-center text-3xl font-medium underline">
                    Experience
                </div>
                <div className="border border-gray-400 w-2/3 place-self-center p-2 rounded flex space-x-2 bg-slate-400 bg-opacity-50">
                    <div className="w-1/3 space-y-4">
                        <div className="cursor-pointer text-center text-2xl font-medium">bet365</div>
                        <div className="cursor-pointer text-center text-2xl font-medium">bet365</div>

                    </div>
                    <div className="border-l-2 border-gray-400 w-2/3 p-2">
                        Work
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;