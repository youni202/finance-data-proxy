const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// CORS 설정
app.use(cors());
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('금융위원회 API 프록시 서버가 실행 중입니다.');
});

// 요약재무제표조회 API 프록시
app.get('/api/summary', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY || '4q1sVXi0cPESZlljpKfTU7CxdXYfGycZKuBakPEOYWMHS4h8VaetyuTMI89MS12gmh2jd1uiBrkEzKc/zqVg4w==';
    const baseUrl = 'http://apis.data.go.kr/1160100/service/GetFinaStatInfoService_V2/getSummFinaStat_V2';
    
    // 사용자 쿼리 파라미터 가져오기
    const { corp_code, bsns_year, ...otherParams } = req.query;
    
    // API 호출
    const response = await axios.get(baseUrl, {
      params: {
        serviceKey: apiKey,
        corp_code,
        bsns_year,
        ...otherParams
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      message: error.message 
    });
  }
});

// 재무상태표조회 API 프록시
app.get('/api/balance', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY || '4q1sVXi0cPESZlljpKfTU7CxdXYfGycZKuBakPEOYWMHS4h8VaetyuTMI89MS12gmh2jd1uiBrkEzKc/zqVg4w==';
    const baseUrl = 'http://apis.data.go.kr/1160100/service/GetFinaStatInfoService_V2/getBs_V2';
    
    const { corp_code, bsns_year, ...otherParams } = req.query;
    
    const response = await axios.get(baseUrl, {
      params: {
        serviceKey: apiKey,
        corp_code,
        bsns_year,
        ...otherParams
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      message: error.message 
    });
  }
});

// 손익계산서조회 API 프록시
app.get('/api/income', async (req, res) => {
  try {
    const apiKey = process.env.API_KEY || '4q1sVXi0cPESZlljpKfTU7CxdXYfGycZKuBakPEOYWMHS4h8VaetyuTMI89MS12gmh2jd1uiBrkEzKc/zqVg4w==';
    const baseUrl = 'http://apis.data.go.kr/1160100/service/GetFinaStatInfoService_V2/getIncoStat_V2';
    
    const { corp_code, bsns_year, ...otherParams } = req.query;
    
    const response = await axios.get(baseUrl, {
      params: {
        serviceKey: apiKey,
        corp_code,
        bsns_year,
        ...otherParams
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error);
    res.status(500).json({ 
      error: '서버 오류가 발생했습니다.',
      message: error.message 
    });
  }
});

app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});