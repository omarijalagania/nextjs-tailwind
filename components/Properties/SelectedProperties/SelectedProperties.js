import React from 'react'

const SelectedProperties = () => {
    return (
        <div className="max-w-screen-lg bg-white shadow-2xl rounded-lg mx-auto text-center py-8 mt-4 rounded border-l-4 border-black flex justify-between mb-10">
      <div className="ml-10 flex">        
        <div className="border-solid border-4 border-gray-600 w-14 h-14 rounded-full mr-5 ">
        </div>
        <div >
          <div className="font-bold">Sean Stacey</div>
                </div>
      </div>
      <div className=" flex justify-end">
        <button className="inline-flex justify-center rounded-full bg-black shadow w-48 h-12 mr-5 mt-1">
          <a href="#" className="text-custom-green font-bold mt-3">
            Select
          </a>
        </button>
      </div>
    </div>
    )
}

export default SelectedProperties
