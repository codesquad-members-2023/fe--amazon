import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import axios from 'axios';

// CONNECT_URL =
//   'mongodb+srv://{id}:{password}@{clusterName}.{clusterId}.mongodb.net/{projectName}';

dotenv.config();

const connectUrl = process.env.CONNECT_URL;
await mongoose.connect(connectUrl);
const router = express.Router();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const SearchModel = mongoose.model('search', {
  title: String,
});

app.get('/search-recommend', (req, res) => {
  const limit = req.query.limit;
  SearchModel.limit(limit)
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: 'Not found' });
      }
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

app.get('/search', (req, res) => {
  const query = req.query.q;
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  SearchModel.find({ title: { $regex: `.*${query}.*` } })
    .skip(skip)
    .limit(limit)
    .then((result) => {
      if (!result) {
        res.status(404).json({ message: 'Not found' });
      }
      res.send(result);
    })
    .catch((error) => {
      res.status(500).json({ message: error.message });
    });
});

app.post('/data', (req, res) => {
  const record = new SearchModel(req.body);
  record
    .save()
    .then((result) => {
      res.status(201).json({ message: 'Record created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error saving record' });
    });
});

const datas = [
  '아마존 에코 닷',
  '인스턴트 파인 쿡쿡',
  '애플 아이폰',
  '삼성 갤럭시',
  '아마존 파이어 태블릿',
  '애플 아이패드',
  '필립스 휴대용 에어프라이어',
  '보스 블루투스 스피커',
  '애플 맥북 프로',
  '삼성 QLED TV',
  '루이비통 핸드백',
  '애플 워치',
  '소니 블루투스 헤드셋',
  '인스턴트 포트',
  '애플 에어팟',
  '브라우닝 나이트로 헌팅 플래쉬라이트',
  '아마존 킨들',
  '퀸즈 블레이드 제로 그라비티 카트리지',
  '라쿠텐 TV',
  '식스티 아웃도어스 밀리터리 트랙터 풀',
  '아마존 베이직',
  '블랙앤데커 레이저 레벨러',
  '에픽게임즈 포트나이트',
  '선케어 스타일러',
  '도끼 인터넷 휴대용 와이파이',
  '헬로키티 디지털 카메라',
  '아이러브 꼬마 요정 문신 메이커',
  '미샤 모이스트 젤틴트',
  '로지텍 웹캠',
  '켄모어 엘리트 접이식 전기 펜치',
  '매직쉐프 에어프라이어',
  '테디스노우 내구성 텐트',
  '애플 맥북 에어',
  '시티즈 오브 프레이어스 인호텔리전스',
  '미니무브 스마트 무게계',
  '케이맥스 카메라 드론',
  '유니클로 저스트리츠 울트라 라이트 다운 점퍼',
  '니콘 DSLR 카메라',
  '아이디어 프리사이드 비즈니스 노트북 백팩',
  '타이틀리스트 프로 V1 골프볼',
  '제조사 스펙트럼 2 검은 색',
  'LG 오렌지 버블 워시',
  '아마존 베이직 가정용 비데',
  '레노버 요가 북',
  '마크제이콥스 로고 토트백',
  '토마토 페이스트',
  '에어랩 스마트 마스크',
  '메르세데스-벤츠 G클래스 SUV',
  '마이크로소프트 서피스 프로',
  '밀워키 드릴 세트',
  '아이폰용 DJI 오스모 모바일 3 짐벌',
  '뉴발란스 퓨엘코어 샌들',
  '삼성 냉장고',
  '쿠킹 메이트 이지셰프 에어프라이어 오븐',
  '로렉스 서브마리너',
  '아이패드 프로',
  '모두의 마블 보드게임',
  '대한민국 지도',
  '캐논 EOS 5D 마크 IV DSLR 카메라',
  '데스크탑 컴퓨터 라이젠 9',
  '콜맨 8인용 인스턴트 텐트',
  '스쿠터와 액세서리',
  '블랙앤데커 로봇 진공청소기',
  '조지 아르마니 메이크업',
  '아마존 파이어 TV 스틱',
  '나이키 운동화',
  '모토로라 몬토로 G 플러스',
  '코치 클러치',
  '블룸버그 터미널',
  '에어텔 X마스터',
  '푸마 뉴 아이콘 신발',
  '선샤인 미라클봉제리프 풀',
  '히트 체커스 퍼지 헤어 컬링 아이론',
  'LG OLED TV',
  '애플 맥미니',
  '블룸버그 모바일',
  '갤럭시 버즈 라이브',
  '휠라 디스럽터 2',
  '메이펙 브랜드 우드펠릿 그릴',
  '캐논 EOS R5 미러리스 카메라',
  'LG 그램 노트북',
  '제이슨 마크 마크자크',
  '알로하로라 마일드 선스크린',
  '아이디어 프리사이드 비즈니스 노트북 케이스',
  '케이블 모뎀',
  '브레이브',
  '샤오미 미스마트 전동킥보드',
  '보타니컬스 마스크시트',
  '유니클로 울 카시미어 블렌드 코트',
  '레이저 제로X 게임 마우스',
  '이즈미 기분좋은 노트',
  '마이크로소프트 서피스 랩탑',
  '타미야 풀포트 RC 자동차',
  '바닥 청소기',
  '맥도날드 기프트 카드',
  '엔비디아 지포스 RTX 3080 그래픽 카드',
  '미샤 블랙 가슴털 제거 원형 면도기',
  '캐논 EOS 90D DSLR 카메라',
  'LG 그램 17노트북',
];

function postTest() {
  axios
    .post('http://localhost:3000/data', { data: { title: '테스트' } })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error.message);
    });
}
// postTest();
// bundleInsert();

function bundleInsert() {
  datas.forEach((v) => {
    axios
      .post('http://localhost:3000/data', { title: v })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }); // 데이터 번들로 넣기
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
