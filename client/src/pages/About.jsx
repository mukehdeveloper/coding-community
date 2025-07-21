import React from 'react';

const About = () => {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechHub</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Empowering the next generation of developers through community, 
              education, and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                TechHub was founded with a simple yet powerful mission: to democratize 
                access to technology education and create a global community where 
                developers can learn, grow, and thrive together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
