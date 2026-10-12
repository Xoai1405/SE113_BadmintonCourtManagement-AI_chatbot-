import React from 'react';
import { FileText, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CourtCard({ court }) {
  const navigate = useNavigate();
  const isMaintenance = court.status === 'maintenance';

  return (
    <div className={`bg-white rounded-xl shadow-sm overflow-hidden border ${isMaintenance ? 'opacity-70 grayscale' : ''}`}>
      <img src={court.imageUrl} alt={court.name} className="w-full h-48 object-cover" />
      
      <div className="p-5 flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-xl">{court.name}</h3>
          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${isMaintenance ? 'bg-gray-200 text-gray-600' : 'bg-emerald-50 text-emerald-600'}`}>
            {isMaintenance ? 'Bảo trì' : 'Hoạt động'}
          </span>
        </div>
        
        <p className="text-sm text-gray-500">{court.type}</p>
        
        <div className="flex items-start gap-2 text-sm text-gray-600 mt-2 min-h-[40px]">
          {court.isVip ? <Crown size={18} className="text-yellow-500 shrink-0 mt-0.5" /> : <FileText size={18} className="text-gray-400 shrink-0 mt-0.5" />}
          <p>{court.description}</p>
        </div>
        
        <div className="flex justify-between items-end mt-4 pt-4 border-t border-gray-100">
          <div>
            <p className="font-bold text-lg text-emerald-600">{court.basePrice.toLocaleString()}đ/giờ</p>
            <p className="text-xs text-gray-400">(Giờ cao điểm: {court.peakPrice.toLocaleString()}đ/giờ)</p>
          </div>
          <button 
            disabled={isMaintenance}
            onClick={() => navigate(`/court/${court.id}`)}
            className={`px-5 py-2 rounded-md font-medium text-white transition-colors ${isMaintenance ? 'bg-gray-300 cursor-not-allowed' : 'bg-emerald-500 hover:bg-emerald-600'}`}
          >
            {isMaintenance ? 'Tạm đóng' : 'Xem lịch'}
          </button>
        </div>
      </div>
    </div>
  );
}