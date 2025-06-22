import { Product } from '../types/products';

export const products: Product[] = [
  {
    id: 'secure-shield-enterprise',
    title: 'SecureShield Enterprise',
    description: 'Complete enterprise security solution with advanced threat detection and response capabilities.',
    price: 999,
    category: 'Enterprise',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Real-time threat detection',
      'Advanced firewall protection',
      'Zero-day vulnerability protection',
      '24/7 security monitoring'
    ]
  },
  {
    id: 'cyber-guard-pro',
    title: 'CyberGuard Pro',
    description: 'Professional-grade security toolkit for security analysts and penetration testers.',
    price: 499,
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Penetration testing tools',
      'Vulnerability assessment',
      'Network analysis',
      'Security reporting'
    ]
  },
  {
    id: 'secure-cloud-suite',
    title: 'SecureCloud Suite',
    description: 'Comprehensive cloud security solution for modern distributed applications.',
    price: 799,
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Cloud infrastructure security',
      'Container security',
      'API protection',
      'Compliance monitoring'
    ]
  }
];