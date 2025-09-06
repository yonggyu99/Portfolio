interface SkillCardProps {
  name: string;
  description: string;
  icon?: string; // 아이콘 경로 또는 컴포넌트
}

const SkillCard = ({ name, description, icon }: SkillCardProps) => {
  return (
    <div className="flex items-start gap-6 p-4">
      {/* 아이콘 영역 (사각형) */}
      <div className="w-16 h-16 bg-gray-300 border-2 border-secondary flex-shrink-0">
        {/* 아이콘이 들어갈 자리 */}
      </div>

      {/* 텍스트 영역 */}
      <div className="flex-1">
        <h3 className="text-primary text-2xl font-semibold mb-2">{name}</h3>
        <p className="text-line text-lg">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard;
