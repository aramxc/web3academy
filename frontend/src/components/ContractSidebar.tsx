import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Wallet } from '@mui/icons-material';
import ContractInfo from './ContractInfo';
import ContractActions from './ContractActions';

interface ContractSidebarProps {
  account: string;
}

const ContractSidebar: React.FC<ContractSidebarProps> = ({ account }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`fixed left-0 top-0 h-screen transition-all duration-300 ease-in-out z-50
                    ${isExpanded ? 'w-96' : 'w-12'}`}>
      {/* Main Content */}
      <div className="relative h-full bg-gradient-to-b from-slate-900 to-slate-800 
                    border-r border-slate-700/50 shadow-xl">
        
        {/* Toggle Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2
                     w-8 h-24 bg-gradient-to-r from-slate-800 to-slate-900
                     flex items-center justify-center
                     rounded-r-lg border-y border-r border-slate-700/50
                     text-gray-400 hover:text-gray-200 transition-colors
                     shadow-lg"
        >
          {isExpanded ? <ChevronLeft /> : <ChevronRight />}
        </button>

        {/* Sidebar Content */}
        <div className={`h-full flex flex-col ${isExpanded ? 'opacity-100' : 'opacity-0'} 
                      transition-opacity duration-300
                      ${isExpanded ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {/* Top Section */}
          <div className="p-6 space-y-6 flex-1 overflow-y-auto">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-slate-700/50">
              <Wallet className="text-purple-400" />
              <h2 className="text-xl font-bold text-gray-100">
                Wallet & Contract
              </h2>
            </div>

            {/* Contract Info */}
            <div className="space-y-6">
              <ContractInfo account={account} />
            </div>
          </div>

          {/* Bottom Section - Contract Actions */}
          <div className="p-6 border-t border-slate-700/50 bg-slate-900/50">
            <ContractActions />
          </div>
        </div>

        {/* Collapsed State Icon */}
        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 w-full
                      ${isExpanded ? 'opacity-0' : 'opacity-100'} 
                      transition-opacity duration-300
                      ${isExpanded ? 'pointer-events-none' : 'pointer-events-auto'}`}>
          <div className="flex flex-col items-center gap-2">
            <Wallet className="text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractSidebar;