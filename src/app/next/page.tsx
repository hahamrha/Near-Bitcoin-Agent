export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Title */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-6 mb-8">
            <div className="relative">
              <img
                src="/assets/axons.png"
                alt="Axons Network Logo"
                className="w-24 h-24 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
            </div>
            <div className="space-y-3">
              <h1 className="text-5xl md:text-5xl text-balance bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                What's next for Bitcoin Agent ???
              </h1>
              <h2 className="text-6xl font-bold text-teal-600 tracking-wide">"Axons Network"</h2>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
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

          <div className="relative max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-6xl font-bold text-gray-900 mb-4">Network Architecture</h3>
            </div>

            {/* Bubble Map Container */}
            <div className="relative w-full h-[600px] bg-white rounded-3xl shadow-xl border border-gray-200/50 overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 600">
                <defs>
                  <linearGradient id="straightLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                  </linearGradient>
                </defs>

                {/* Lines from center AXONS PROTOCOL (400,300) to each outer circle */}
                {/* Bitcoin - top center (400,72) */}
                <line x1="400" y1="300" x2="400" y2="72" stroke="#14b8a6" strokeWidth="3" />
                {/* Ethereum - top right (688,128) - adjusted for right-16 positioning */}
                <line x1="400" y1="300" x2="688" y2="128" stroke="#14b8a6" strokeWidth="3" />
                {/* Base - middle right (736,300) */}
                <line x1="400" y1="300" x2="736" y2="300" stroke="#14b8a6" strokeWidth="3" />
                {/* SUI - bottom right (640,472) - adjusted for right-32 positioning */}
                <line x1="400" y1="300" x2="640" y2="472" stroke="#14b8a6" strokeWidth="3" />
                {/* Solana - bottom left (160,472) - adjusted for left-32 positioning */}
                <line x1="400" y1="300" x2="160" y2="472" stroke="#14b8a6" strokeWidth="3" />
                {/* Many More - middle left (96,300) */}
                <line x1="400" y1="300" x2="96" y2="300" stroke="#14b8a6" strokeWidth="3" />

                {/* Adjacent circle connections in clockwise order */}
                <line x1="400" y1="72" x2="688" y2="128" stroke="#14b8a6" strokeWidth="2" />
                <line x1="688" y1="128" x2="736" y2="300" stroke="#14b8a6" strokeWidth="2" />
                <line x1="736" y1="300" x2="640" y2="472" stroke="#14b8a6" strokeWidth="2" />
                <line x1="640" y1="472" x2="160" y2="472" stroke="#14b8a6" strokeWidth="2" />
                <line x1="160" y1="472" x2="96" y2="300" stroke="#14b8a6" strokeWidth="2" />
                <line x1="96" y1="300" x2="400" y2="72" stroke="#14b8a6" strokeWidth="2" />

                {/* Animated dots flowing along the main lines from center */}
                <circle r="3" fill="#14b8a6" opacity="0.8">
                  <animateMotion dur="2s" repeatCount="indefinite">
                    <path d="M400,300 L400,72" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#06b6d4" opacity="0.8">
                  <animateMotion dur="2.2s" repeatCount="indefinite">
                    <path d="M400,300 L688,128" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#0891b2" opacity="0.8">
                  <animateMotion dur="2.4s" repeatCount="indefinite">
                    <path d="M400,300 L736,300" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#14b8a6" opacity="0.8">
                  <animateMotion dur="2.6s" repeatCount="indefinite">
                    <path d="M400,300 L640,472" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#06b6d4" opacity="0.8">
                  <animateMotion dur="2.8s" repeatCount="indefinite">
                    <path d="M400,300 L160,472" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#0891b2" opacity="0.8">
                  <animateMotion dur="3s" repeatCount="indefinite">
                    <path d="M400,300 L96,300" />
                  </animateMotion>
                </circle>

                {/* Animated dots flowing along adjacent connections */}
                <circle r="2" fill="#14b8a6" opacity="0.6">
                  <animateMotion dur="4s" repeatCount="indefinite">
                    <path d="M400,72 L688,128 L736,300 L640,472 L160,472 L96,300 L400,72" />
                  </animateMotion>
                </circle>
              </svg>

              {/* Center AXONS PROTOCOL circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative group">
                  <div className="absolute -inset-3 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full blur opacity-50 group-hover:opacity-70 transition duration-300 animate-pulse"></div>
                  <div className="relative w-40 h-40 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <div className="text-white text-center font-bold text-sm leading-tight px-6 py-4">
                      AXONS
                      <br />
                      PROTOCOL
                    </div>
                  </div>
                </div>
              </div>

              {/* Bitcoin circle */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-300 to-cyan-300 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-32 h-32 bg-white border-3 border-teal-400 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-5 py-4">
                      <div className="font-bold text-sm mb-1">Bitcoin</div>
                      <div className="text-teal-600 text-xs mb-1">Chain Sig.</div>
                      <div className="text-teal-600 text-xs mb-1">MCP</div>
                      <div className="text-green-600 font-bold text-xs bg-green-100 px-2 py-0.5 rounded-full">LIVE</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ethereum circle */}
              <div className="absolute top-16 right-16">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-28 h-28 bg-white border-2 border-teal-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-4 py-3">
                      <div className="font-bold text-xs mb-1">Ethereum</div>
                      <div className="text-teal-600 text-xs mb-1">Chain Sig.</div>
                      <div className="text-teal-600 text-xs mb-1">MCP</div>
                      <div className="text-orange-500 font-bold text-xs bg-orange-100 px-1 py-0.5 rounded-full">
                        Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Base circle */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-28 h-28 bg-white border-2 border-teal-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-4 py-3">
                      <div className="font-bold text-sm mb-1">Base</div>
                      <div className="text-teal-600 text-xs mb-1">Chain Sig.</div>
                      <div className="text-teal-600 text-xs mb-1">MCP</div>
                      <div className="text-orange-500 font-bold text-xs bg-orange-100 px-1 py-0.5 rounded-full">
                        Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SUI circle */}
              <div className="absolute bottom-16 right-32">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-28 h-28 bg-white border-2 border-teal-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-4 py-3">
                      <div className="font-bold text-sm mb-1">SUI</div>
                      <div className="text-teal-600 text-xs mb-1">Chain Sig.</div>
                      <div className="text-teal-600 text-xs mb-1">MCP</div>
                      <div className="text-orange-500 font-bold text-xs bg-orange-100 px-1 py-0.5 rounded-full">
                        Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solana circle */}
              <div className="absolute bottom-16 left-32">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-28 h-28 bg-white border-2 border-teal-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-4 py-3">
                      <div className="font-bold text-sm mb-1">Solana</div>
                      <div className="text-teal-600 text-xs mb-1">Chain Sig.</div>
                      <div className="text-teal-600 text-xs mb-1">MCP</div>
                      <div className="text-orange-500 font-bold text-xs bg-orange-100 px-1 py-0.5 rounded-full">
                        Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Many More Networks circle */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative w-32 h-32 bg-white border-2 border-teal-300 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                    <div className="text-center text-xs font-semibold text-gray-800 leading-tight px-5 py-4">
                      <div className="font-bold text-sm mb-1">Many More</div>
                      <div className="text-teal-600 text-xs mb-1">Networks</div>
                      <div className="text-teal-600 text-xs">Coming on</div>
                      <div className="text-teal-600 text-xs">Axons MCP</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Updated animation circles */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-40 h-40 border-2 border-teal-100 rounded-full animate-ping opacity-20"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-56 h-56 border border-cyan-200 rounded-full animate-pulse opacity-30"></div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div
                  className="w-76 h-76 border border-teal-100 rounded-full animate-pulse opacity-10"
                  style={{ animationDuration: "4s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-30"></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-transparent via-teal-200 to-transparent opacity-30"></div>
        </div>
      </div>
      <footer className="bg-white border-t border-gray-200/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-6">
              {/* Website Link */}
              <a
                href="https://axons.network"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                <span className="font-semibold">axons.network</span>
              </a>

              {/* Twitter Link */}
              <a
                href="https://x.com/axonsprotocol"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="font-semibold">@axonsprotocol</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
