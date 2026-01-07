import { ImageWithFallback } from '../components/common/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl mb-8 text-center">About FashionHub</h1>

      {/* Hero Section */}
      <div className="mb-16">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1633457896836-f8d6025c85d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NjczMzI0NDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Our Team"
          className="w-full h-96 object-cover rounded-lg"
        />
      </div>

      {/* Our Story */}
      <div className="mb-16">
        <h2 className="text-3xl mb-6">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-gray-700">
              Founded in 2015, FashionHub was born from a simple idea: everyone deserves access to quality, stylish clothing at affordable prices. What started as a small boutique has grown into a beloved online destination for fashion enthusiasts worldwide.
            </p>
            <p className="mb-4 text-gray-700">
              Our journey began when our founder, recognizing a gap in the market for accessible yet fashionable clothing, decided to create a platform that would democratize style. Today, we serve thousands of customers across the globe.
            </p>
          </div>
          <div>
            <p className="mb-4 text-gray-700">
              At FashionHub, we believe that fashion is more than just clothing—it's a form of self-expression. That's why we carefully curate our collections to offer diverse styles that cater to different tastes, occasions, and lifestyles.
            </p>
            <p className="mb-4 text-gray-700">
              We're committed to sustainability, ethical sourcing, and creating a positive impact in the fashion industry. Every piece we offer is selected with care, ensuring quality, durability, and timeless appeal.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="mb-16">
        <h2 className="text-3xl mb-6">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl mb-3 text-[#1a3a6b]">Quality First</h3>
            <p className="text-gray-700">
              We never compromise on quality. Every product is thoroughly inspected to meet our high standards before it reaches you.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl mb-3 text-[#1a3a6b]">Customer Focus</h3>
            <p className="text-gray-700">
              Your satisfaction is our priority. We're here to ensure you have an exceptional shopping experience from start to finish.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border">
            <h3 className="text-xl mb-3 text-[#1a3a6b]">Sustainability</h3>
            <p className="text-gray-700">
              We're committed to reducing our environmental impact through responsible sourcing and eco-friendly practices.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#1a3a6b] text-white p-8 rounded-lg">
          <h2 className="text-2xl mb-4">Our Mission</h2>
          <p>
            To make fashion accessible, affordable, and sustainable for everyone. We strive to offer quality products that empower individuals to express their unique style while maintaining our commitment to ethical practices.
          </p>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become the world's most trusted and beloved online fashion destination, known for our commitment to quality, sustainability, and customer satisfaction. We envision a future where style and responsibility go hand in hand.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div>
          <p className="text-4xl text-[#1a3a6b] mb-2">10+</p>
          <p className="text-gray-600">Years in Business</p>
        </div>
        <div>
          <p className="text-4xl text-[#1a3a6b] mb-2">50K+</p>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <p className="text-4xl text-[#1a3a6b] mb-2">1000+</p>
          <p className="text-gray-600">Products</p>
        </div>
        <div>
          <p className="text-4xl text-[#1a3a6b] mb-2">25+</p>
          <p className="text-gray-600">Countries Served</p>
        </div>
      </div>
    </div>
  );
}
