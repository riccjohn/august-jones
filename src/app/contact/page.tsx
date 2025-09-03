export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h1>
        <p className="text-gray-600 mb-8">
          Have a question or want to learn more about our pieces? We'd love to hear from you.
        </p>
        
        {/* Placeholder for contact form */}
        <div className="bg-gray-100 rounded-lg p-12 text-center">
          <p className="text-gray-500">Contact form coming soon...</p>
          <p className="text-sm text-gray-400 mt-2">
            This will include a form with name, email, subject, and message fields
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            In the meantime, feel free to reach out directly:
          </p>
          <a 
            href="mailto:hello@augustjones.com" 
            className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200"
          >
            hello@augustjones.com
          </a>
        </div>
      </div>
    </div>
  )
}
