import React from 'react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const AlertModal: React.FC<AlertModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  message, 
  buttonText = "확인",
  onButtonClick
}) => {
  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full mx-4 text-center">
        {/* 경고 아이콘 */}
        <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-500 text-2xl font-bold">!</span>
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
        <p 
          className="text-gray-600 text-sm mb-6"
          dangerouslySetInnerHTML={{ __html: message }}
        />
        
        <button
          onClick={handleButtonClick}
          className="w-full bg-purple text-white py-3 rounded-lg font-medium hover:opacity-90 transition-all"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default AlertModal;