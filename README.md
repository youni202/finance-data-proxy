# 금융 데이터 프록시 서버

금융위원회 공공 API를 위한 프록시 서버입니다. GPTs 및 기타 클라이언트에서 CORS 및 인증 관련 이슈를 우회하기 위해 설계되었습니다.

## 기능

1. 요약재무제표조회 API 프록시 (`/api/summary`)
2. 재무상태표조회 API 프록시 (`/api/balance`)
3. 손익계산서조회 API 프록시 (`/api/income`)

## 사용 방법

### 요약재무제표 조회
```
GET /api/summary?corp_code={법인등록번호}&bsns_year={사업연도}
```

### 재무상태표 조회
```
GET /api/balance?corp_code={법인등록번호}&bsns_year={사업연도}
```

### 손익계산서 조회
```
GET /api/income?corp_code={법인등록번호}&bsns_year={사업연도}
```

## 로컬 개발환경 설정

1. 저장소 클론
```bash
git clone https://github.com/youni202/finance-data-proxy.git
cd finance-data-proxy
```

2. 의존성 설치
```bash
npm install
```

3. 환경 변수 설정
`.env.example`을 복사하여 `.env` 파일 생성

4. 개발 서버 실행
```bash
npm run dev
```

## 배포

이 프로젝트는 Vercel에 쉽게 배포할 수 있도록 구성되어 있습니다.

1. Vercel CLI 설치 (선택사항)
```bash
npm i -g vercel
```

2. 배포
```bash
vercel
```

또는 GitHub 저장소를 Vercel 대시보드에 직접 연결하여 배포할 수 있습니다.

## API 키 관리

보안을 위해 API 키는 환경 변수로 관리합니다. Vercel에 배포할 때 환경 변수를 설정해주세요.