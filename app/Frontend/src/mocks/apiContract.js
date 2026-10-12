export const mockCourts = [
  {
    id: 1,
    name: "Sân 01",
    type: "Sân tiêu chuẩn ngoài trời",
    description: "Sân tiêu chuẩn, phù hợp cho đánh đơn và đánh đôi.",
    basePrice: 100000,
    peakPrice: 150000,
    status: "active",
    isVip: false,
    imageUrl: "https://placehold.co/600x300/e2e8f0/64748b?text=San+01"
  },
  {
    id: 2,
    name: "Sân VIP 02",
    type: "Sân VIP trong nhà",
    description: "Sân VIP, không gian thoáng mát, đèn đạt chuẩn thi đấu.",
    basePrice: 250000,
    peakPrice: 350000,
    status: "active",
    isVip: true,
    imageUrl: "https://placehold.co/600x300/e2e8f0/64748b?text=San+VIP+02"
  },
  {
    id: 3,
    name: "Sân 03",
    type: "Sân tiêu chuẩn trong nhà",
    description: "Sân tiêu chuẩn, phù hợp cho đánh đơn và đánh đôi.",
    basePrice: 80000,
    peakPrice: 120000,
    status: "maintenance",
    isVip: false,
    imageUrl: "https://placehold.co/600x300/e2e8f0/64748b?text=San+03"
  }
];

// Tạo 24 khung giờ giả lập từ 6:00 đến 23:00
export const generateTimeSlots = () => {
  const slots = [];
  let startHour = 6;
  for (let i = 0; i < 34; i++) {
    const isHalf = i % 2 !== 0;
    const hour = startHour + Math.floor(i / 2);
    const nextIsHalf = !isHalf;
    const nextHour = isHalf ? hour + 1 : hour;
    
    const timeString = `${hour}:${isHalf ? '30' : '00'} - ${nextHour}:${nextIsHalf ? '30' : '00'}`;
    // Random trạng thái để test UI (đã đặt hoặc còn trống)
    const status = Math.random() > 0.7 ? 'booked' : 'available'; 
    slots.push({ id: i, time: timeString, status });
  }
  return slots;
};