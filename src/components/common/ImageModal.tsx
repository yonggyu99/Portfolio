import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  title?: string;
}

const ImageModal = ({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
  title,
}: ImageModalProps) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 큰 이미지 */}
        <div className="relative">
          <img
            src={images[currentIndex]}
            alt={`${title || '이미지'} ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg"
          />

          {/* 닫기 버튼 */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 w-8 h-8 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>

        {/* 좌우 네비게이션 (이미지가 여러 개일 때만) */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-300"
            >
              <FaChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* 이미지 인디케이터 */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ImageModal;
