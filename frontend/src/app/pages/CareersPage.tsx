import { Briefcase, MapPin, Clock } from 'lucide-react';

interface JobListing {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

const jobListings: JobListing[] = [
  {
    id: 1,
    title: 'Senior Fashion Designer',
    department: 'Design',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'We are looking for a creative and experienced fashion designer to lead our design team and create innovative collections.',
  },
  {
    id: 2,
    title: 'E-Commerce Manager',
    department: 'Digital',
    location: 'Remote',
    type: 'Full-time',
    description: 'Manage our online store, optimize user experience, and drive sales growth through strategic initiatives.',
  },
  {
    id: 3,
    title: 'Customer Service Representative',
    department: 'Customer Support',
    location: 'Los Angeles, CA',
    type: 'Full-time',
    description: 'Provide exceptional customer service and support to our valued customers across multiple channels.',
  },
  {
    id: 4,
    title: 'Marketing Coordinator',
    department: 'Marketing',
    location: 'Chicago, IL',
    type: 'Full-time',
    description: 'Support marketing campaigns, manage social media, and help grow our brand presence.',
  },
  {
    id: 5,
    title: 'Warehouse Associate',
    department: 'Operations',
    location: 'Dallas, TX',
    type: 'Part-time',
    description: 'Handle inventory management, order fulfillment, and ensure smooth warehouse operations.',
  },
  {
    id: 6,
    title: 'Content Writer',
    department: 'Marketing',
    location: 'Remote',
    type: 'Contract',
    description: 'Create engaging content for our website, blog, and marketing materials.',
  },
];

export function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl mb-4">Join Our Team</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Be part of a dynamic team that's reshaping the fashion industry. We're always looking for talented, passionate individuals to join our growing family.
        </p>
      </div>

      {/* Why Join Us */}
      <div className="mb-16">
        <h2 className="text-3xl mb-8 text-center">Why FashionHub?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="w-16 h-16 bg-[#1a3a6b] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🚀</span>
            </div>
            <h3 className="text-xl mb-3">Growth Opportunities</h3>
            <p className="text-gray-700">
              We invest in our employees' development with training programs, mentorship, and career advancement opportunities.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="w-16 h-16 bg-[#1a3a6b] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💼</span>
            </div>
            <h3 className="text-xl mb-3">Great Benefits</h3>
            <p className="text-gray-700">
              Enjoy competitive salary, health insurance, retirement plans, employee discounts, and more.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border text-center">
            <div className="w-16 h-16 bg-[#1a3a6b] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🌟</span>
            </div>
            <h3 className="text-xl mb-3">Amazing Culture</h3>
            <p className="text-gray-700">
              Work in a collaborative, inclusive environment where creativity and innovation are celebrated.
            </p>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div>
        <h2 className="text-3xl mb-8">Open Positions</h2>
        <div className="space-y-6">
          {jobListings.map(job => (
            <div key={job.id} className="bg-white p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl mb-2">{job.title}</h3>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{job.department}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-2 bg-[#1a3a6b] text-white rounded hover:bg-[#2a4a7b] transition-colors whitespace-nowrap">
                  Apply Now
                </button>
              </div>
              <p className="text-gray-700">{job.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mt-16 bg-gray-50 p-8 rounded-lg">
        <h2 className="text-3xl mb-6 text-center">Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1a3a6b] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
              1
            </div>
            <h3 className="mb-2">Apply Online</h3>
            <p className="text-sm text-gray-600">Submit your application and resume through our portal</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1a3a6b] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
              2
            </div>
            <h3 className="mb-2">Initial Review</h3>
            <p className="text-sm text-gray-600">Our team reviews your application and qualifications</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1a3a6b] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
              3
            </div>
            <h3 className="mb-2">Interview</h3>
            <p className="text-sm text-gray-600">Selected candidates are invited for interviews</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#1a3a6b] text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
              4
            </div>
            <h3 className="mb-2">Offer</h3>
            <p className="text-sm text-gray-600">Successful candidates receive an offer to join our team</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl mb-4">Don't see a perfect match?</h2>
        <p className="text-gray-600 mb-6">
          We're always interested in meeting talented people. Send us your resume and we'll keep you in mind for future opportunities.
        </p>
        <button className="px-8 py-3 bg-[#1a3a6b] text-white rounded hover:bg-[#2a4a7b] transition-colors">
          Send General Application
        </button>
      </div>
    </div>
  );
}
