import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="mt-4  ">
        <div className="bg-blue-900 flex justify-around">
            <div className="text-center py-4">
                <h3 className="text-xl text-orange-200">VISIT US IN KENYA</h3>
                <p className="text-green-600">Nairobi,Kenya</p>
                <p className="text-white">Belgravia Centre, 14 Riverside drive, <br></br>
                    4th Floor, Off Riverside Drive <br></br>
                    Hanover Centre, 14 Riverside Drive, <br></br>
                    6th Floor, Off Riverside Drive <br></br>
                </p>
            </div>
            <div className="text-center py-4">
                <h3 className="text-xl text-orange-200">VISIT US IN GHANA</h3>
                <p className="text-green-600">Accra,Ghana</p>
                <p className="text-white">One Airport Square, Airport City <br></br>
                    8th Floor
                </p>
            </div>
            <div className="text-center py-4">
                <h3 className="text-xl text-orange-200">VISIT US IN NIGERIA</h3>
                <p className="text-green-600">Lagos,Nigeria</p>
                <p className="text-white">Sterling Bank Building
                </p>
            </div>
        </div>
    </footer>
    </div>
    
  )
}

export default Footer