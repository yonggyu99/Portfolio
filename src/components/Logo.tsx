const Logo = () => {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      {/* 민트색 원 */}
      <div className="absolute w-20 h-20 border border-secondary rounded-full"></div>

      {/* P 텍스트 - 가운데 */}
      <span className="text-secondary text-[36px] font-bold z-10">P</span>
    </div>
  );
};

export default Logo;
