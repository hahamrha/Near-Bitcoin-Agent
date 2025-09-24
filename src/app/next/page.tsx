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
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group relative h-64">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">MCP Servers</h3>
              <p className="text-gray-600 leading-relaxed">MCP servers for every agent on NEAR</p>
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative h-64">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl mb-6">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Multichain Wallets</h3>
              <p className="text-gray-600 leading-relaxed">
                Multichain wallets with unified liquidity for instant swaps
              </p>
              <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative h-64">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white h-full p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-xl mb-6">
                <div className="relative">
                  <div className="w-6 h-6 border-2 border-teal-500 rounded-full"></div>
                  <div className="absolute top-1 left-1 w-4 h-4 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Built on NEAR</h3>
              <p className="text-gray-600 leading-relaxed">
                Built on NEARProtocol
              </p>
              <div className="absolute top-4 right-4 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Next