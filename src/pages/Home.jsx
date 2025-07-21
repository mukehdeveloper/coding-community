import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  CodeBracketIcon, 
  UserGroupIcon, 
  CalendarDaysIcon,
  BookOpenIcon,
  ChartBarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const Home = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: CodeBracketIcon,
      title: 'Learn to Code',
      description: 'Access comprehensive tutorials and coding resources for all skill levels.'
    },
    {
      icon: UserGroupIcon,
      title: 'Join Community',
      description: 'Connect with fellow developers and tech enthusiasts in your area.'
    },
    {
      icon: CalendarDaysIcon,
      title: 'Attend Events',
      description: 'Participate in workshops, hackathons, and networking events.'
    },
    {
      icon: BookOpenIcon,
      title: 'Share Knowledge',
      description: 'Contribute tutorials and share your expertise with the community.'
    },
    {
      icon: ChartBarIcon,
      title: 'Track Progress',
      description: 'Monitor your learning journey and celebrate achievements.'
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Network',
      description: 'Be part of a worldwide community of tech professionals.'
    }
  ];

  const stats = [
    { label: 'Active Members', value: '10,000+' },
    { label: 'Tutorials', value: '500+' },
    { label: 'Events Hosted', value: '1,200+' },
    { label: 'Cities', value: '150+' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-primary-200">TechHub</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100 max-w-3xl mx-auto">
              Your gateway to the world of technology. Learn, connect, and grow with a global 
              community of developers and tech enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/signup"
                    className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/login"
                    className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <Link
                  to="/dashboard"
                  className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose TechHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to accelerate your tech journey and connect 
              with like-minded individuals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of developers who are already part of our community.
          </p>
          {!isAuthenticated && (
            <Link
              to="/signup"
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Join TechHub Today
            </Link>
          )}
        </div>
      </section>

      {/* Recent Events Preview */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Don't miss out on our latest workshops and networking events.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="bg-primary-100 text-primary-600 text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Workshop
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  React.js Fundamentals
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn the basics of React.js and build your first component-based application.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarDaysIcon className="h-4 w-4 mr-2" />
                  <span>March 15, 2024</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/events"
              className="bg-primary-600 text-white hover:bg-primary-700 px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;