import { useState, useEffect } from 'react';

/**
 * 미디어 쿼리를 체크하는 커스텀 훅
 * @param query - 미디어 쿼리 문자열 (예: '(max-width: 768px)')
 * @returns 미디어 쿼리 매칭 여부
 */
const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // 초기값 설정
    setMatches(media.matches);

    // 변경 감지 리스너
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };

    // 이벤트 리스너 등록
    media.addEventListener('change', listener);

    // 클린업
    return () => media.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

/**
 * 모바일 여부를 체크하는 커스텀 훅
 * @returns 모바일 여부 (768px 미만)
 */
export const useIsMobile = (): boolean => {
  return useMediaQuery('(max-width: 767px)');
};

/**
 * 태블릿 여부를 체크하는 커스텀 훅
 * @returns 태블릿 여부 (768px ~ 1023px)
 */
export const useIsTablet = (): boolean => {
  return useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
};

/**
 * 데스크톱 여부를 체크하는 커스텀 훅
 * @returns 데스크톱 여부 (1024px 이상)
 */
export const useIsDesktop = (): boolean => {
  return useMediaQuery('(min-width: 1024px)');
};

export default useMediaQuery;
