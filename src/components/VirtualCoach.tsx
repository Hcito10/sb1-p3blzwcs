import React from 'react';
import { Brain, AlertCircle } from 'lucide-react';

export function VirtualCoach() {
  return (
    <div className="fixed bottom-4 right-4 w-80">
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-4 shadow-2xl">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-white">Virtual Coach</h3>
        </div>
        
        <div className="space-y-4">
          <TipCard
            icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
            tip="Your ward placement has improved by 15% in the last 3 games!"
          />
        </div>
      </div>
    </div>
  );
}

function TipCard({ icon, tip }: { icon: React.ReactNode; tip: string }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-3 rounded-lg">
      <div className="flex space-x-3">
        {icon}
        <p className="text-sm text-gray-200">{tip}</p>
      </div>
    </div>
  );
}