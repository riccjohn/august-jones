export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Product Gallery</h1>
        <p className="text-gray-600 mb-8">
          Discover our unique collection of one-of-a-kind clothing and accessories.
        </p>
        
        {/* Placeholder for product gallery */}
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <p className="text-gray-500">Product gallery coming soon...</p>
          <p className="text-sm text-gray-400 mt-2">
            This will display products fetched from Etsy listings
          </p>
        </div>
      </div>
    </div>
  )
}
