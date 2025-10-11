interface SectionTitleProps {
  number: string;
  title: string;
}

const SectionTitle = ({ number, title }: SectionTitleProps) => {
  return (
    <div className="mb-16 md:mb-28 text-left">
      <h2 className="text-primary text-2xl md:text-4xl font-bold mb-4">
        <span className="text-secondary">{number}. </span>
        {title}
        <div className="hidden md:inline-block ml-4 md:ml-8 w-32 md:w-72 h-0.5 bg-line align-middle"></div>
      </h2>
      {/* 모바일용 하단 선 */}
      <div className="block md:hidden w-full h-0.5 bg-line mt-2"></div>
    </div>
  );
};

export default SectionTitle;
