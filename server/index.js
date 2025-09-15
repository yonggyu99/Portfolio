import express from 'express';
import cors from 'cors';
import { Client } from '@notionhq/client';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Notion API 클라이언트 초기화
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

// CORS 설정
app.use(cors());
app.use(express.json());

// 정적 파일 제공 (React 빌드 파일)
app.use(express.static(path.join(__dirname, '../dist')));

// Notion 페이지 내용 가져오기 API
app.get('/api/notion/:pageId', async (req, res) => {
  try {
    const { pageId } = req.params;

    // 페이지 정보 가져오기
    const page = await notion.pages.retrieve({ page_id: pageId });

    // 페이지의 블록들 가져오기
    const blocks = await notion.blocks.children.list({
      block_id: pageId,
    });

    res.json({
      page,
      blocks: blocks.results,
    });
  } catch (error) {
    console.error('Notion API Error:', error);
    res.status(500).json({
      error: 'Failed to fetch Notion page',
      details: error.message,
    });
  }
});

// 기본 라우트
app.get('/', (req, res) => {
  res.json({ message: 'Notion API Server is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(
    `Notion API endpoint: http://localhost:${PORT}/api/notion/:pageId`
  );
});
