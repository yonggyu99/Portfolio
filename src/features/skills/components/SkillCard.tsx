import * as simpleIcons from 'simple-icons';

interface SkillCardProps {
  name: string;
  description: string;
  icon?: string;
  color?: string;
}

const SkillCard = ({ name, description, icon, color }: SkillCardProps) => {
  return (
    <div className="flex items-start gap-4 md:gap-8 lg:gap-12">
      {/* 겹쳐진 사각형 아이콘 영역 */}
      <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
        {/* 뒤쪽 사각형 (민트색 테두리) */}
        <div className="absolute top-1 left-1 md:top-2 md:left-2 w-full h-full border-2 border-secondary rounded-md"></div>
        {/* 앞쪽 사각형 (이미지가 들어갈 곳) */}
        <div
          className="relative w-full h-full flex items-center justify-center overflow-hidden p-2 md:p-3 rounded-md"
          style={{ backgroundColor: '#1E293B' }}
        >
          {icon && (
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            >
              <path
                d={
                  icon && icon in simpleIcons
                    ? (
                        simpleIcons[icon as keyof typeof simpleIcons] as {
                          path: string;
                        }
                      ).path
                    : ''
                }
                fill={color || '#ffffff'}
              />
            </svg>
          )}
        </div>
      </div>

      {/* 텍스트 영역 */}
      <div className="flex-1">
        <h3 className="text-primary text-lg md:text-xl font-semibold mb-1 md:mb-2 text-left">
          {name}
        </h3>
        <p className="text-line text-sm md:text-base leading-relaxed text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SkillCard;
