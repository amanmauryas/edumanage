import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '299',
    description: 'Perfect for small institutions',
    features: [
      'Basic student management',
      'Course scheduling',
      'Email support',
      'Basic reporting'
    ]
  },
  {
    name: 'Professional',
    price: '599',
    description: 'Ideal for growing schools',
    features: [
      'Up to 2000 students',
      'Advanced student management',
      'Smart scheduling',
      'Priority support',
      'Advanced analytics',
      'Parent portal',
      'Custom reports',
      'ID Card Generation',
      'Health management tool'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large educational networks',
    features: [
      'Unlimited students',
      'Full feature access',
      'Dedicated support',
      'Attendence management',
      'ID Card Generation',
      'Result management',
      '24/7 phone support'
    ]
  }
];

export default function Pricing() {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Choose Your Plan
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-2xl p-8 transition-all transform hover:-translate-y-2 ${
                index === 1 
                  ? 'bg-blue-900 text-white shadow-xl' 
                  : 'bg-gray-50 text-gray-900 shadow-lg'
              }`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm mb-6 opacity-80">{plan.description}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-sm">/month</span>}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  index === 1
                    ? 'bg-white text-blue-900 hover:bg-blue-50'
                    : 'bg-blue-900 text-white hover:bg-blue-800'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}