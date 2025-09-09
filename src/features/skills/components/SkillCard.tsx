interface SkillCardProps {
  name: string;
  description: string;
  icon?: string; // 아이콘 경로 또는 컴포넌트
}

const SkillCard = ({ name, description, icon }: SkillCardProps) => {
  return (
    <div className="flex items-start gap-12">
      {/* 겹쳐진 사각형 아이콘 영역 */}
      <div className="relative w-20 h-20 flex-shrink-0">
        {/* 뒤쪽 사각형 (민트색 테두리) */}
        <div className="absolute top-2 left-2 w-full h-full border-2 border-secondary"></div>
        {/* 앞쪽 사각형 (이미지가 들어갈 곳) */}
        <div className="relative w-full h-full bg-primary flex items-center justify-center overflow-hidden">
          {icon && (
            <img 
              src={icon} 
              alt={name}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div className="flex-1">
        <h3 className="text-primary text-xl font-semibold mb-2 text-left">{name}</h3>
        <p className="text-line text-m leading-relaxed text-left">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
