import React from 'react';
import { X } from 'lucide-react';

interface Robot3DViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Robot3DViewer: React.FC<Robot3DViewerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-6xl h-5/6 mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full h-full rounded-lg overflow-hidden">
          <iframe 
            src="https://cloud.needle.tools/view/embed?file=Z1uXho1PPGlM-1PPGlM" 
            title="FINAL | Hosted on Needle Cloud" 
            allow="xr-spatial-tracking; accelerometer; gyroscope; display-capture; geolocation; camera; microphone" 
            allowFullScreen
            className="w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Robot3DViewer;