import Link from 'next/link'
import { ArrowRight, Sparkles, Heart, ShoppingBag } from 'lucide-react'

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border">
                <Sparkles className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">Unique Fashion</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              One-of-a-Kind
              <br />
              <span className="text-gray-600">Fashion Stories</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Discover handcrafted clothing and accessories that celebrate your individuality. 
              Each piece is carefully designed with love and attention to detail.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
              >
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose August Jones</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every piece in our collection is thoughtfully created to bring you unique, 
                quality fashion that stands the test of time.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  <Heart className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Handcrafted with Love</h3>
                <p className="text-gray-600">
                  Each piece is carefully crafted by hand with attention to every detail, 
                  ensuring quality and uniqueness.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  <Sparkles className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">One-of-a-Kind Designs</h3>
                <p className="text-gray-600">
                  No mass production here. Every item is unique, meaning you'll own something 
                  truly special and individual.
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  <ShoppingBag className="h-6 w-6 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Fashion</h3>
                <p className="text-gray-600">
                  We believe in responsible fashion that's kind to both you and the environment, 
                  using sustainable practices and materials.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Piece?</h2>
            <p className="text-gray-600 mb-8">
              Browse our curated collection of unique clothing and accessories, 
              each waiting to become part of your story.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors duration-200 group"
            >
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
