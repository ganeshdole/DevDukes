import React from 'react';
import { Code, Package, Clock, DollarSign, Zap, Cloud } from 'lucide-react';

const featureData = [
  {
    title: "Clean Code",
    description: "We write elegant, maintainable, and efficient code to ensure long-term scalability.",
    icon: Code
  },
  {
    title: "Object Oriented",
    description: "Our development approach leverages object-oriented principles for robust software design.",
    icon: Package
  },
  {
    title: "24h Service",
    description: "We offer round-the-clock support to address your concerns and queries promptly.",
    icon: Clock
  },
  {
    title: "Value for Money",
    description: "Our solutions provide excellent return on investment without compromising on quality.",
    icon: DollarSign
  },
  {
    title: "Faster Response",
    description: "Quick turnaround times and rapid development cycles to meet your deadlines.",
    icon: Zap
  },
  {
    title: "Cloud Support",
    description: "Seamless integration with cloud platforms for scalable and flexible solutions.",
    icon: Cloud
  }
];

const FeatureCard = ({ title, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-teal-100">
      <Icon className="w-6 h-6 text-teal-600" />
    </div>
    <h3 className="mb-2 text-xl font-semibold">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Something You Need To Know</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;