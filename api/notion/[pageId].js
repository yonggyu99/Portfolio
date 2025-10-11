import { Client } from '@notionhq/client';

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // OPTIONS 요청 처리 (CORS preflight)
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET 요청만 허용
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { pageId } = req.query;

    if (!pageId) {
      res.status(400).json({ error: 'Page ID is required' });
      return;
    }

    // 페이지 정보 가져오기
    const page = await notion.pages.retrieve({ page_id: pageId });

    // 페이지의 모든 블록들 가져오기 (페이지네이션 처리)
    let allBlocks = [];
    let cursor = undefined;

    do {
      const response = await notion.blocks.children.list({
        block_id: pageId,
        start_cursor: cursor,
      });

      allBlocks = [...allBlocks, ...response.results];
      cursor = response.has_more ? response.next_cursor : undefined;
    } while (cursor);

    res.status(200).json({
      page,
      blocks: allBlocks,
    });
  } catch (error) {
    console.error('Notion API Error:', error);
    res.status(500).json({
      error: 'Failed to fetch Notion page',
      details: error.message,
    });
  }
}