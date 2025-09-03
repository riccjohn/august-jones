export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">About August Jones</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Welcome to August Jones, where every piece tells a story and craftsmanship meets creativity.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for unique, handcrafted fashion, August Jones creates one-of-a-kind 
              clothing and accessories that celebrate individuality and artistic expression.
            </p>
            <p className="text-gray-600">
              Each piece is carefully designed and crafted with attention to detail, using quality materials 
              and sustainable practices. We believe that fashion should be personal, meaningful, and timeless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To create beautiful, unique pieces that empower individuals to express their authentic selves 
                through fashion.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Values</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Handcrafted quality</li>
                <li>• Sustainable practices</li>
                <li>• Individual expression</li>
                <li>• Timeless design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
