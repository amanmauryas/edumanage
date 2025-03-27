import React from 'react';
import { Users, Calendar, BarChart as ChartBar, MessageSquare, Brain } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Student Management',
    description: 'Efficiently manage student records, admissions, and academic progress tracking.'
  },
  {
    icon: Users,
    title: 'Skill development',
    description: 'Efficiently manage Teacher records, admissions, and academic progress tracking.'
  },
  {
    icon: Users,
    title: 'Mental Health Support',
    description: 'Efficiently manage non-educational staff records.'
  },
  {
    icon: Calendar,
    title: 'Career Guidance',
    description: 'Smart scheduling system for classes, exams, and extracurricular activities.'
  },
  {
    icon: ChartBar,
    title: 'Performance Tracking',
    description: 'Comprehensive analytics and reporting for student and teacher performance.'
  },
  {
    icon: Brain,
    title: 'Cognitive load detection',
    description: 'AI based cognitive load detection for students'
  },
  {
    icon: MessageSquare,
    title: 'Communication Tools',
    description: 'Seamless communication between teachers, students, and parents.'
  },
  {
    icon: Brain,
    title: 'AI Based Health Assesment',
    description: 'AI based health assesment for students'
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Powerful Features for Modern Education
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}