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
    </main>
  )
}

export default Next