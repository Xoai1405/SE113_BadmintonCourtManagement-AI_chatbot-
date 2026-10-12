import React, { useState } from 'react';
import { User, Lock, LogOut, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200 relative z-50">
      <div className="flex items-center gap-4">
        <div className="w-16 h-10 bg-gray-400 flex items-center justify-center text-white font-bold rounded">LOGO</div>
        <Link to="/" className="font-bold text-xl">Smash<span className="text-emerald-500">Flow</span></Link>
      </div>

      <div className="flex gap-8 font-medium text-gray-600">
        <Link to="/" className="text-emerald-500 border-b-2 border-emerald-500 pb-1">Sân</Link>
        <a href="#" className="hover:text-emerald-500 transition-colors">Lịch cố định</a>
        <a href="#" className="hover:text-emerald-500 transition-colors">Booking của tôi</a>
      </div>

      {/* Avatar & Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 hover:bg-gray-50 px-2 py-1 rounded-md transition-colors"
        >
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white overflow-hidden">
            <User size={20} />
          </div>
          <span className="font-medium text-sm">Nguyễn Văn A</span>
          <ChevronDown size={16} className="text-gray-500" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white">
                <User size={24} />
              </div>
              <div>
                <p className="font-bold text-sm">Nguyễn Văn A</p>
                <p className="text-xs text-gray-500">Khách hàng</p>
              </div>
            </div>
            <div className="py-1">
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                <User size={16} className="text-gray-500" /> Thông tin cá nhân
              </button>
              <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-3">
                <Lock size={16} className="text-gray-500" /> Đổi mật khẩu
              </button>
            </div>
            <div className="py-1 border-t border-gray-100">
              <button className="w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-red-50 flex items-center gap-3">
                <LogOut size={16} /> Đăng xuất
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}