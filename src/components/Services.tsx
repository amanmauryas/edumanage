import React from 'react';
import { 
  BookOpen, 
  Users, 
  Brain, 
  Target, 
  Presentation, 
  Calendar,
  MessageSquare,
  BarChart,
  Shield,
  Clock
} from 'lucide-react';

const services = [
  {
    icon: BookOpen,
    title: 'Curriculum Management',
    description: 'Comprehensive digital curriculum planning and management system with real-time updates and collaborative features.',
    features: ['Interactive lesson planning', 'Resource library', 'Assessment tools']
  },
  {
    icon: Users,
    title: 'Student Information System',
    description: 'Centralized database for managing student records, attendance, and academic progress tracking.',
    features: ['Digital student profiles', 'Attendance tracking', 'Grade management']
  },
  {
    icon: Brain,
    title: 'Learning Analytics',
    description: 'Advanced analytics platform to track and improve student performance through data-driven insights.',
    features: ['Performance metrics', 'Progress tracking', 'Predictive analytics']
  },
  {
    icon: Target,
    title: 'Admission Management',
    description: 'Streamlined admission process with online applications, document management, and status tracking.',
    features: ['Online applications', 'Document verification', 'Interview scheduling']
  },
  {
    icon: Presentation,
    title: 'Virtual Classroom',
    description: 'Interactive virtual learning environment with real-time collaboration and engagement tools.',
    features: ['Live sessions', 'Interactive whiteboard', 'Recording capabilities']
  },
  {
    icon: Calendar,
    title: 'Schedule Management',
    description: 'Intelligent scheduling system for classes, exams, and events with conflict resolution.',
    features: ['Automated scheduling', 'Calendar integration', 'Room allocation']
  },
  {
    icon: MessageSquare,
    title: 'Communication Platform',
    description: 'Integrated communication system connecting teachers, students, and parents seamlessly.',
    features: ['Instant messaging', 'Announcement system', 'Parent portal']
  },
  {
    icon: BarChart,
    title: 'Financial Management',
    description: 'Comprehensive financial tracking and management system for fees, expenses, and budgeting.',
    features: ['Fee collection', 'Expense tracking', 'Financial reporting']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Robust security measures ensuring data protection and regulatory compliance.',
    features: ['Data encryption', 'Access control', 'Audit trails']
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Efficient time management tools for scheduling and organizing academic activities.',
    features: ['Timetable generator', 'Reminder system', 'Activity tracking']
  }
];

export default function Services() {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-blue-600">
            Comprehensive Educational Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our full range of educational management services designed to transform your institution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
              </div>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}