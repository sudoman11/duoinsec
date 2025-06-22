import React from 'react';
import { Shield, Lock, Server } from 'lucide-react';

export default function ProductHero() {
  return (
    <div className="relative bg-theme-dark py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-theme-text mb-6">
            Enterprise Security Solutions
          </h1>
          <p className="text-xl text-theme-text-secondary max-w-2xl mx-auto">
            Cutting-edge cybersecurity products designed to protect your business
            in an evolving digital landscape.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Shield className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Advanced Protection
            </h3>
            <p className="text-theme-text-secondary">
              Multi-layered security systems with real-time threat detection.
            </p>
          </div>
          
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Lock className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Data Encryption
            </h3>
            <p className="text-theme-text-secondary">
              Enterprise-grade encryption for sensitive data protection.
            </p>
          </div>
          
          <div className="bg-theme-blue/20 p-6 rounded-lg border border-blue-900/20">
            <Server className="h-10 w-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold text-theme-text mb-2">
              Cloud Security
            </h3>
            <p className="text-theme-text-secondary">
              Comprehensive cloud infrastructure protection solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}