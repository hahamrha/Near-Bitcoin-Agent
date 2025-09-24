import React from 'react'

const Next = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Title */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative">
              <img
                src="/assets/axons.png"
                alt="Axons Network Logo"
                className="w-40 h-40 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
            <div className="space-y-7">
              <h1 className="text-2xl md:text-4xl  text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                What's next for Bitcoin Agent ???
              </h1>
              <h2 className="text-5xl font-bold text-teal-600 tracking-wide mt-4">"Axons Network"</h2>
            </div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Next