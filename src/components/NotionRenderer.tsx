import { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface RichText {
  type: string;
  plain_text: string;
  annotations: {
    bold: boolean;
    italic: boolean;
    code: boolean;
    strikethrough: boolean;
    underline: boolean;
    color: string;
  };
  href?: string | null;
}

interface NotionBlock {
  id: string;
  type: string;
  paragraph?: {
    rich_text: RichText[];
    color: string;
  };
  heading_1?: {
    rich_text: RichText[];
    color: string;
  };
  heading_2?: {
    rich_text: RichText[];
    color: string;
  };
  heading_3?: {
    rich_text: RichText[];
    color: string;
  };
  bulleted_list_item?: {
    rich_text: RichText[];
    color: string;
  };
  numbered_list_item?: {
    rich_text: RichText[];
    color: string;
  };
  code?: {
    rich_text: RichText[];
    language: string;
    caption: RichText[];
  };
  image?: {
    type: 'file' | 'external';
    file?: {
      url: string;
      expiry_time: string;
    };
    external?: {
      url: string;
    };
    caption: RichText[];
  };
  quote?: {
    rich_text: RichText[];
    color: string;
  };
}

interface NotionPage {
  id: string;
  created_time: string;
  last_edited_time: string;
  archived: boolean;
  icon?: {
    type: string;
    emoji?: string;
  };
  cover?: {
    type: string;
    external?: {
      url: string;
    };
  };
  properties: Record<string, unknown>;
  parent: {
    type: string;
    page_id?: string;
  };
  url: string;
}

interface NotionData {
  page: NotionPage;
  blocks: NotionBlock[];
}

interface NotionRendererProps {
  pageId: string;
  className?: string;
}

const NotionRenderer = ({ pageId, className = '' }: NotionRendererProps) => {
  const [notionData, setNotionData] = useState<NotionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        setLoading(true);

        const response = await fetch(`/api/notion/${pageId}`);

        if (!response.ok) {
          throw new Error('Failed to fetch Notion data');
        }

        const data = await response.json();
        setNotionData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      fetchNotionData();
    }
  }, [pageId]);

  const renderBlock = (block: NotionBlock) => {
    const { type, id } = block;

    switch (type) {
      case 'paragraph':
        return (
          <p key={id} className="mb-3 md:mb-4 text-sm md:text-base text-gray-700 leading-relaxed">
            {renderRichText(block.paragraph?.rich_text || [])}
          </p>
        );

      case 'heading_1':
        return (
          <h1 key={id} className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-900">
            {renderRichText(block.heading_1?.rich_text || [])}
          </h1>
        );

      case 'heading_2':
        return (
          <h2 key={id} className="text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-gray-900">
            {renderRichText(block.heading_2?.rich_text || [])}
          </h2>
        );

      case 'heading_3':
        return (
          <h3 key={id} className="text-lg md:text-xl lg:text-2xl font-medium mb-2 md:mb-3 text-gray-900">
            {renderRichText(block.heading_3?.rich_text || [])}
          </h3>
        );

      case 'bulleted_list_item':
        return (
          <li key={id} className="ml-4 md:ml-6 mb-1 md:mb-2 list-disc text-sm md:text-base text-gray-700">
            {renderRichText(block.bulleted_list_item?.rich_text || [])}
          </li>
        );

      case 'numbered_list_item':
        return (
          <li key={id} className="ml-4 md:ml-6 mb-1 md:mb-2 list-decimal text-sm md:text-base text-gray-700">
            {renderRichText(block.numbered_list_item?.rich_text || [])}
          </li>
        );

      case 'code':
        return (
          <div key={id} className="mb-4 md:mb-6">
            <pre className="bg-gray-900 text-gray-100 p-3 md:p-4 rounded-lg overflow-x-auto text-xs md:text-sm">
              <code className={`language-${block.code?.language || 'text'}`}>
                {renderRichText(block.code?.rich_text || [])}
              </code>
            </pre>
          </div>
        );

      case 'image': {
        const imageUrl = block.image?.file?.url || block.image?.external?.url;
        return (
          <div key={id} className="mb-4 md:mb-6">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Notion 이미지"
                className="max-w-full h-auto rounded-lg shadow-md"
              />
            )}
          </div>
        );
      }

      case 'quote':
        return (
          <blockquote
            key={id}
            className="border-l-2 md:border-l-4 border-blue-400 pl-3 md:pl-4 py-1 md:py-2 mb-3 md:mb-4 bg-blue-50 italic text-sm md:text-base text-gray-700"
          >
            {renderRichText(block.quote?.rich_text || [])}
          </blockquote>
        );

      case 'divider':
        return <hr key={id} className="my-6 md:my-8 border-gray-300" />;

      default:
        return (
          <div
            key={id}
            className="mb-3 md:mb-4 p-2 md:p-3 bg-gray-100 rounded text-xs md:text-sm text-gray-600"
          >
            지원되지 않는 블록 타입: {type}
          </div>
        );
    }
  };

  const renderRichText = (richText: RichText[]): (string | ReactElement)[] => {
    return richText.map((text, index) => {
      const { annotations, plain_text, href } = text;
      let element: string | ReactElement = plain_text;

      // 링크 처리
      if (href) {
        element = (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-200"
          >
            {element}
          </a>
        );
      }

      if (href) {
        element = (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:font-bold hover:underline"
          >
            {element}
          </a>
        );
      }
      if (annotations?.bold) element = <strong key={index}>{element}</strong>;
      if (annotations?.italic) element = <em key={index}>{element}</em>;
      if (annotations?.code)
        element = (
          <code key={index} className="bg-gray-200 px-1 rounded">
            {element}
          </code>
        );

      return element;
    });
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center h-full ${className}`}>
        <LoadingSpinner size="lg" message="Notion 페이지를 불러오는 중..." />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center h-64 ${className}`}>
        <div className="text-red-500">오류: {error}</div>
      </div>
    );
  }

  if (!notionData) {
    return (
      <div className={`flex items-center justify-center h-64 ${className}`}>
        <div className="text-gray-500">데이터를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className={`notion-content px-4 md:px-6 lg:px-8 ${className}`}>
      <div className="max-w-none prose prose-gray pb-6 md:pb-8">
        {notionData.blocks.map(renderBlock)}
      </div>
    </div>
  );
};

export default NotionRenderer;
