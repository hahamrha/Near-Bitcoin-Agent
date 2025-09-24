import React from 'react'

const Next = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-8">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex flex-col items-center gap-4 mb-6">
            <img src="/assets/axons.png" alt="Logo" className="w-40 h-40 rounded-lg" />
            <h1 className="text-4xl font-bold text-balance">What's Next for Bitcoin Agent ???</h1>
            <h2 className="text-2xl font-medium">"Axons Protocol"</h2>
          </div>
        </div>

      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="text-center p-6 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">MCP Servers</h3>
            <p className="text-sm leading-relaxed">MCP servers for every agent on NEAR</p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Multichain Wallets</h3>
            <p className="text-sm leading-relaxed">Multichain wallets with unified liquidity for instant swaps</p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6 border border-gray-300 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Built on NEAR</h3>
            <p className="text-sm leading-relaxed">
              Built on NEAR Protocol
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Next