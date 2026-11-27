/* 샤오홍슈 상품소개서 - HTML 슬라이드 (1920x1080 기준, 화면 크기에 맞게 자동 축소)
 * - 단가: assets/prices.js 의 PRICES.xhs (메인 소개서와 같이 씀)
 * - 문구/사례/수치: 아래 T 객체만 고치면 PC·모바일 화면에 같이 반영된다.
 * - 사례 수치는 "기준일"을 같이 적는다. 다시 캡처하면 수치와 기준일을 함께 바꿀 것.
 */
(function () {
  var P = window.PRICES.xhs;
  var VER = window.DOCS_VERSION ? '?v=' + window.DOCS_VERSION : '';
  var img = function (k) { return 'img/xhs-' + (k.indexOf('.') > -1 ? k : k + '.jpg') + VER; };
  var N = 9;

  var T = {
    title: '샤오홍슈 상품소개서',
    contact: {
      form: 'https://www.branall.co.kr/contact.html',
      kakao: 'https://pf.kakao.com/_QLwxlX', kakaoName: '@브랜올',
      tel: '070-4108-2296', mail: 'contact@branall.co.kr'
    },
    stats: [
      { num: '93.2', unit: '%', label: '중국 개별여행객이 방한 여행 정보를<br>얻을 때 샤오홍슈를 활용', src: '한국관광공사, 2023-2024 중국 개별자유여행객 방한관광 트렌드 조사' },
      { num: '33', unit: '%', label: '올리브영 오프라인 매출 중 외국인 비중<br>(2022년 2% → 2026년 8월 33%)', src: 'CJ올리브영 발표, 2026.08.31' },
      { num: '약 3', unit: '억 명', label: '샤오홍슈 월간 사용자<br>90년대생 이후 · 여성 사용자 약 70%', src: '한국관광공사 베이징지사 보고서, 2024.09' }
    ],
    flow: ['여행 전 검색', '노트 저장', '한국 도착', '매장 방문 · 구매', '후기 재생산'],
    fits: [
      { icon: 'bag', title: '올리브영 · 다이소 입점 브랜드', desc: '"올리브영 필수템", "다이소 추천템"을 검색하는 중국인에게 우리 제품 후기가 보이도록 노트를 쌓습니다.', rec: '자유모집 · 지정모집' },
      { icon: 'food', title: 'F&B 매장 · 관광 상권 맛집', desc: '주소와 가격이 들어간 방문 후기로 지도 검색과 실제 방문까지 이어지게 만듭니다.', rec: '자유모집(매장 방문)' },
      { icon: 'clinic', title: '병의원 · 뷰티 시술', desc: '방한 전 시술 정보를 찾는 중국 고객에게 실제 체험 후기를 보여드립니다.', rec: '자유모집(매장 방문) · 지정모집' }
    ],
    gains: [
      ['검색 첫 화면', '브랜드·매장 키워드 검색 결과에 실사용 후기 노트가 쌓입니다.'],
      ['저장 → 방문 동선', '저장된 노트가 여행 중 쇼핑·맛집 리스트가 됩니다.'],
      ['광고 소재 후보', '반응 좋은 노트는 광고 소재 후보로 쓸 수 있습니다. (2차 활용 별도 협의)']
    ],
    strengths: [
      { no: '01', title: '자체 모집 · 계정 검수', desc: '팔로워 수만 보지 않고 실제 도달과 댓글 반응을 확인해, 지금 활동 중인 계정만 모집합니다.' },
      { no: '02', title: '후보 2배수 직접 선택', desc: '목표 인원의 2배수 프로필을 먼저 보여드립니다. 10팀이면 20명 중 브랜드가 최종 선택합니다.' },
      { no: '03', title: '중국인 원어민 직원 소통', desc: '위챗으로 가이드 전달, 현지 표현과 해시태그, 일정 관리까지 번역 없이 직접 챙깁니다.' },
      { no: '04', title: '실시간 리포트 · A/S', desc: '구글 시트로 진행 현황과 게시 링크를 바로 공유하고, 가이드 미이행 시 재촬영합니다.' }
    ],
    steps: [
      ['모집 설계', '자유 · 지정모집, 배송 · 방문 선택', '후보 2배수 제안'],
      ['왕훙 소통', '원어민 직원 위챗 소통', '촬영 가이드 전달'],
      ['체험 · 방문', '제품 체험 또는', '매장 방문 진행'],
      ['발행 · 리포팅', '노트 발행', '구글 시트 실시간 공유'],
      ['A/S · 보고', '가이드 미이행 시 재촬영', '최종 결과 보고']
    ],
    timeline: [
      ['D-30', '왕훙 모집 · 선정'],
      ['D-21', '매장 방문 · 촬영'],
      ['D-14', '노트 발행'],
      ['D-day', '세일 · 오픈 · 방한 시즌']
    ],
    prepare: ['밀고 싶은 제품 1~2개', '꼭 들어가야 할 말 1~2개', '쓰면 안 되는 표현'],
    caseOY: {
      title: '올리브영 방문형 노트 2건',
      basis: '2026년 11월 14일 샤오홍슈 화면 기준 · 얼굴과 브랜드는 가렸습니다.',
      cols: ['노트 A', '노트 B'],
      rows: [['형식', '영상 76초', '영상 66초'], ['게시', '2026년 8월', '2026년 8월'], ['좋아요', '4.4천', '3.1천'], ['저장', '2천', '2.2천'], ['댓글', '45', '26']],
      why: ['매장 앞 장면으로 시작해 어디서 산 제품인지 바로 보입니다.', '운동 뒤, 식사 뒤, 이동 중처럼 일상 사용 장면을 3가지씩 넣었습니다.', '커버 한 장에 매장 · 제품 · 사용 장면을 4컷으로 담았습니다.', '"올리브영 필수템", "한국 쇼핑"처럼 여행 전에 찾는 말을 해시태그로 넣었습니다.']
    },
    refs: {
      oy: ['o1.webp', 'a1', 'o3.webp', 'a2', 'o4.webp', 'a4', 'o7.webp', 'a5'],
      daiso: ['b5', 'd6.webp', 'b1', 'b2', 'd7.webp', 'b3', 'b4', 'd8.webp'],
      fnb: ['fn1', 'fn2', 'fb1', 'fn3', 'fn4', 'fn5', 'fn6', 'fn7']
    },
    faq: [
      ['계정을 직접 고를 수 있나요?', '네. 목표 인원의 2배수 프로필을 먼저 보내드리고, 브랜드가 최종 선택합니다.'],
      ['진행 기간은 얼마나 걸리나요?', '모집부터 발행까지 보통 2~3주입니다. 세일·오픈 시점을 노린다면 30일 전에 시작하는 것을 권합니다.'],
      ['게시물이 삭제되면요?', '게재일로부터 30일 이내 삭제 시 A/S로 다시 진행합니다.'],
      ['세금계산서 발행되나요?', '네. 견적서 확정 → 계산서 발행 → 결제 순으로 진행합니다. 신규 거래처는 첫 캠페인에 한해 선결제입니다.'],
      ['진행이 어려운 품목도 있나요?', '제품·업종에 따라 제한될 수 있어, 상담 때 먼저 확인해 드립니다.']
    ]
  };

  /* ---------- 공통 ---------- */
  var CSS = '' +
  '.xh{position:absolute;inset:0;background:#fff;color:#141414;word-break:keep-all}' +
  '.xh *{box-sizing:border-box}' +
  '.xh-top{position:absolute;left:110px;right:110px;top:40px;height:34px;display:flex;align-items:center;gap:14px;font-size:17px;color:#777;z-index:3}' +
  '.xh-top .red{background:#ff2442;color:#fff;font-weight:800;font-size:15px;padding:5px 10px;border-radius:5px;letter-spacing:.02em}' +
  '.xh-top b{color:#141414;font-weight:700;letter-spacing:.04em}' +
  '.xh-top .pn{margin-left:auto;font-weight:600;color:#999}' +
  '.xh-top a.home:hover{color:#ff2442}' +
  '.xh.dark .xh-top{color:rgba(255,255,255,.75)} .xh.dark .xh-top b{color:#fff} .xh.dark .xh-top .pn{color:rgba(255,255,255,.6)}' +
  '.xh-foot{position:absolute;left:110px;right:110px;bottom:34px;display:flex;justify-content:space-between;font-size:15px;color:#999}' +
  '.xh.dark .xh-foot{color:rgba(255,255,255,.6)}' +
  '.xh-hd{position:absolute;left:110px;right:110px;top:120px}' +
  '.xh-hd .k{font-size:18px;font-weight:800;color:#ff2442;letter-spacing:.12em}' +
  '.xh-hd h2{font-size:54px;font-weight:800;letter-spacing:-.03em;margin-top:12px;line-height:1.2}' +
  '.xh-hd p{font-size:23px;color:#5a5a5a;margin-top:14px;line-height:1.5}' +
  '.xh-body{position:absolute;left:110px;right:110px;top:330px;bottom:96px}' +
  '.xh-src{font-size:15px;color:#999;line-height:1.5}' +
  /* 표지 */
  '.xh-cv{background:radial-gradient(90% 120% at 100% 0%,#e0243f 0%,rgba(224,36,63,0) 55%),linear-gradient(135deg,#1a070b 0%,#3d0b16 45%,#7d1022 100%);color:#fff}' +
  '.xh-cv .txt{position:absolute;left:110px;top:250px;width:900px}' +
  '.xh-cv .tag{display:inline-block;font-size:21px;font-weight:700;padding:9px 18px;border:1.5px solid rgba(255,255,255,.5);border-radius:999px;letter-spacing:.02em}' +
  '.xh-cv h1{font-size:96px;font-weight:800;line-height:1.14;letter-spacing:-.04em;margin-top:34px}' +
  '.xh-cv h1 em{font-style:normal;color:#ff6b80}' +
  '.xh-cv .sub{font-size:27px;line-height:1.55;margin-top:30px;color:rgba(255,255,255,.88)}' +
  '.xh-cv .chips{display:flex;gap:12px;margin-top:44px;flex-wrap:wrap}' +
  '.xh-cv .chips span{font-size:19px;font-weight:600;background:rgba(255,255,255,.12);padding:11px 18px;border-radius:10px}' +
  '.xh-cv .pics{position:absolute;right:110px;top:150px;width:760px;height:800px}' +
  '.xh-cv .pic{position:absolute;width:300px;border-radius:22px;overflow:hidden;box-shadow:0 30px 60px rgba(0,0,0,.45);background:#000}' +
  '.xh-cv .pic img{display:block;width:100%;aspect-ratio:3/4;object-fit:cover}' +
  '.xh-cv .pic .st{position:absolute;left:12px;right:12px;bottom:12px;background:rgba(255,255,255,.95);color:#141414;border-radius:12px;padding:10px 12px;font-size:16px;font-weight:600;display:flex;justify-content:space-between}' +
  '.xh-cv .pic .st b{color:#ff2442}' +
  '.xh-cv .note{position:absolute;left:110px;bottom:84px;font-size:16px;color:rgba(255,255,255,.6)}' +
  /* 통계 */
  '.xh-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}' +
  '.xh-stat{border:1px solid #eee;border-radius:24px;padding:40px 40px 32px;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.04);display:flex;flex-direction:column;height:470px}' +
  '.xh-stat .n{font-size:110px;font-weight:800;color:#ff2442;letter-spacing:-.04em;line-height:1}' +
  '.xh-stat .n small{font-size:44px;margin-left:6px}' +
  '.xh-stat .l{font-size:24px;font-weight:600;line-height:1.5;margin-top:26px;color:#222}' +
  '.xh-stat .xh-src{margin-top:auto;padding-top:18px;border-top:1px solid #f0f0f0}' +
  '.xh-flow{display:flex;align-items:center;gap:14px;margin-top:50px;background:#fff4f5;border-radius:18px;padding:26px 36px}' +
  '.xh-flow .t{font-size:20px;font-weight:800;color:#ff2442;margin-right:16px;white-space:nowrap}' +
  '.xh-flow span{font-size:22px;font-weight:600}' +
  '.xh-flow i{font-style:normal;color:#ff9aa8;font-size:24px}' +
  /* 업종 */
  '.xh-fits{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}' +
  '.xh-fit{border-radius:24px;background:#f7f7f8;padding:40px 40px 34px;height:390px;display:flex;flex-direction:column}' +
  '.xh-fit .ic{width:64px;height:64px;border-radius:16px;background:#ff2442;display:flex;align-items:center;justify-content:center}' +
  '.xh-fit .ic svg{width:34px;height:34px}' +
  '.xh-fit h3{font-size:30px;font-weight:800;margin-top:24px;letter-spacing:-.02em}' +
  '.xh-fit p{font-size:20px;line-height:1.6;color:#555;margin-top:12px}' +
  '.xh-fit .rec{margin-top:auto;font-size:18px;font-weight:700;color:#ff2442}' +
  '.xh-gains{display:grid;grid-template-columns:auto 1fr 1fr 1fr;gap:20px;margin-top:40px;align-items:stretch}' +
  '.xh-gains div.g{min-height:150px}' +
  '.xh-gains .t{background:#141414;color:#fff;border-radius:18px;padding:0 30px;display:flex;align-items:center;font-size:22px;font-weight:800}' +
  '.xh-gains div.g{border:1px solid #eee;border-radius:18px;padding:28px 30px}' +
  '.xh-gains .g b{display:block;font-size:22px;font-weight:800}' +
  '.xh-gains .g span{display:block;font-size:18px;color:#666;line-height:1.5;margin-top:6px}' +
  /* 단가 표 */
  '.xh-price{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}' +
  '.xh-pc dl{grid-template-columns:120px 1fr !important}' +
  '.xh-pc .pr b.ask{font-size:48px;color:#555}' +
  '.xh-pc{border-radius:24px;border:1.5px solid #ececec;overflow:hidden;display:flex;flex-direction:column}' +
  '.xh-pc.hl{border-color:#ff2442;box-shadow:0 14px 36px rgba(255,36,66,.12)}' +
  '.xh-pc .h .th{position:absolute;right:24px;top:20px;width:96px;height:118px;object-fit:cover;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,.12)}' +
  '.xh-pc .h{position:relative;padding:28px 32px 22px;background:#fafafa;border-bottom:1px solid #eee}' +
  '.xh-pc.hl .h{background:#fff4f5}' +
  '.xh-pc .h .en{font-size:15px;font-weight:800;letter-spacing:.1em;color:#ff2442}' +
  '.xh-pc .h h3{font-size:34px;font-weight:800;margin-top:6px}' +
  '.xh-pc .h .tg{font-size:19px;color:#555;margin-top:6px}' +
  '.xh-pc .pr{padding:24px 32px 6px;display:flex;align-items:baseline;gap:12px}' +
  '.xh-pc .pr b{font-size:56px;font-weight:800;letter-spacing:-.03em}' +
  '.xh-pc .pr span{font-size:19px;color:#777}' +
  '.xh-pc dl{padding:6px 32px 26px;display:grid;grid-template-columns:120px 1fr;row-gap:12px;font-size:19px}' +
  '.xh-pc dt{color:#888}' +
  '.xh-pc dd{font-weight:600;color:#222}' +
  '.xh-incl{display:grid;grid-template-columns:1.25fr 1fr;gap:26px;margin-top:26px}' +
  '.xh-incl .bx{border-radius:20px;padding:22px 30px;background:#f7f7f8}' +
  '.xh-incl .bx b{font-size:19px;font-weight:800;display:block;margin-bottom:10px}' +
  '.xh-incl .bx ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:6px 20px}' +
  '.xh-incl .bx.n ul{grid-template-columns:1fr}' +
  '.xh-incl li{font-size:18px;color:#444;line-height:1.5;padding-left:26px;position:relative}' +
  '.xh-incl .bx.y li:before{content:"";position:absolute;left:0;top:6px;width:16px;height:9px;border-left:3px solid #ff2442;border-bottom:3px solid #ff2442;transform:rotate(-45deg)}' +
  '.xh-incl .bx.n{background:#fff8f0}' +
  '.xh-incl .bx.n b{color:#b45309}' +
  '.xh-incl .bx.n li:before{content:"·";position:absolute;left:8px;top:-2px;font-weight:800;color:#b45309}' +
  /* 강점 */
  '.xh-str{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}' +
  '.xh-st{border-radius:24px;border:1px solid #eee;padding:34px 30px;height:300px;display:flex;flex-direction:column;background:#fff}' +
  '.xh-st .no{font-size:46px;font-weight:800;color:#ff2442;letter-spacing:-.02em}' +
  '.xh-st h3{font-size:27px;font-weight:800;margin-top:20px;letter-spacing:-.02em}' +
  '.xh-st p{font-size:19px;color:#555;line-height:1.6;margin-top:12px}' +
  '.xh-sheet{margin-top:36px;border-radius:18px;border:1px solid #e6e6e6;overflow:hidden;display:grid;grid-template-columns:220px 1fr}' +
  '.xh-sheet .lab{background:#141414;color:#fff;font-size:20px;font-weight:800;display:flex;flex-direction:column;justify-content:center;padding:0 28px;line-height:1.4}' +
  '.xh-sheet .lab small{font-size:14px;font-weight:500;color:#aaa;margin-top:4px}' +
  '.xh-sheet table{width:100%;border-collapse:collapse;font-size:17px}' +
  '.xh-sheet th{background:#f3f6f3;color:#2f6d3c;font-weight:700;text-align:left;padding:14px 22px;border-bottom:1px solid #e3e3e3}' +
  '.xh-sheet td{padding:14px 22px;border-bottom:1px solid #f0f0f0;color:#444}' +
  '.xh-sheet .ok{color:#1f8a3b;font-weight:700} .xh-sheet .ing{color:#c07a00;font-weight:700}' +
  '.xh-sheet .blur{filter:blur(3.5px);color:#555}' +
  /* 진행 */
  '.xh-steps{display:grid;grid-template-columns:repeat(5,1fr);gap:0}' +
  '.xh-step{position:relative;background:#f7f7f8;padding:36px 30px 30px 54px;height:220px;clip-path:polygon(0 0,calc(100% - 30px) 0,100% 50%,calc(100% - 30px) 100%,0 100%,30px 50%)}' +
  '.xh-step:first-child{padding-left:32px;clip-path:polygon(0 0,calc(100% - 30px) 0,100% 50%,calc(100% - 30px) 100%,0 100%)}' +
  '.xh-step.on{background:#ff2442;color:#fff}' +
  '.xh-step .s{font-size:15px;font-weight:800;letter-spacing:.1em;color:#ff2442}' +
  '.xh-step.on .s{color:#ffd0d6}' +
  '.xh-step h4{font-size:27px;font-weight:800;margin-top:8px}' +
  '.xh-step p{font-size:17px;line-height:1.5;margin-top:8px;color:#555}' +
  '.xh-step.on p{color:#fff}' +
  '.xh-tl2{display:grid;grid-template-columns:1.45fr 1fr;gap:28px;margin-top:44px}' +
  '.xh-tl{display:flex;flex-direction:column;justify-content:center}' +
  '.xh-tl{border:1px solid #eee;border-radius:24px;padding:30px 40px}' +
  '.xh-tl .t{font-size:21px;font-weight:800}' +
  '.xh-tl .bar{position:relative;margin-top:44px;height:6px;background:linear-gradient(90deg,#ffd0d6,#ff2442);border-radius:3px}' +
  '.xh-tl .pts{display:grid;grid-template-columns:repeat(4,1fr);margin-top:-23px}' +
  '.xh-tl .pt{text-align:left}' +
  '.xh-tl .pt i{display:block;width:20px;height:20px;border-radius:50%;background:#fff;border:5px solid #ff2442}' +
  '.xh-tl .pt b{display:block;font-size:30px;font-weight:800;margin-top:16px;color:#ff2442}' +
  '.xh-tl .pt span{display:block;font-size:19px;color:#444;margin-top:4px}' +
  '.xh-prep{background:#141414;color:#fff;border-radius:24px;padding:30px 36px}' +
  '.xh-prep .t{font-size:21px;font-weight:800}' +
  '.xh-prep ol{list-style:none;margin-top:18px;counter-reset:p}' +
  '.xh-prep li{counter-increment:p;font-size:22px;font-weight:600;padding:10px 0 10px 48px;position:relative;border-bottom:1px solid rgba(255,255,255,.12)}' +
  '.xh-prep li:before{content:counter(p);position:absolute;left:0;top:9px;width:32px;height:32px;border-radius:50%;background:#ff2442;font-size:17px;font-weight:800;display:flex;align-items:center;justify-content:center}' +
  '.xh-prep p{font-size:17px;color:rgba(255,255,255,.7);margin-top:16px;line-height:1.5}' +
  /* 사례 */
  '.xh-case{display:grid;grid-template-columns:auto 1fr;gap:60px;align-items:start}' +
  '.xh-case .ims{display:flex;gap:20px}' +
  '.xh-case .ims figure{width:380px;border-radius:20px;overflow:hidden;position:relative;box-shadow:0 14px 34px rgba(0,0,0,.12)}' +
  '.xh-case .ims img{display:block;width:100%;aspect-ratio:3/4;object-fit:cover}' +
  '.xh-case .ims figcaption{position:absolute;left:12px;top:12px;background:#ff2442;color:#fff;font-size:16px;font-weight:800;padding:5px 12px;border-radius:8px}' +
  '.xh-case.three .ims figure{width:330px}' +
  '.xh-vbox{margin-top:34px;border-radius:20px;border:1.5px solid #ff2442;background:#fff4f5;padding:26px 30px}' +
  '.xh-vbox .en{font-size:15px;font-weight:800;letter-spacing:.1em;color:#ff2442}' +
  '.xh-vbox b{display:block;font-size:30px;font-weight:800;margin-top:6px}' +
  '.xh-vbox span{display:block;font-size:18px;color:#555;margin-top:8px;line-height:1.5}' +
  '.xh-mt{width:100%;border-collapse:collapse;font-size:21px}' +
  '.xh-mt th{font-size:18px;color:#888;font-weight:700;text-align:center;padding:10px;border-bottom:2px solid #141414}' +
  '.xh-mt th:first-child{text-align:left}' +
  '.xh-mt td{padding:12px 10px;border-bottom:1px solid #eee;text-align:center;font-weight:700}' +
  '.xh-mt td:first-child{text-align:left;color:#666;font-weight:500}' +
  '.xh-mt tr.hi td{color:#ff2442;font-size:26px}' +
  '.xh-mt tr.hi td:first-child{color:#666;font-size:21px}' +
  '.xh-why{margin-top:26px}' +
  '.xh-why b{font-size:20px;font-weight:800;display:block;margin-bottom:10px}' +
  '.xh-why ol{list-style:none;counter-reset:w}' +
  '.xh-why li{counter-increment:w;font-size:19px;line-height:1.5;color:#333;padding:6px 0 6px 38px;position:relative}' +
  '.xh-why li:before{content:counter(w);position:absolute;left:0;top:7px;width:26px;height:26px;border-radius:7px;background:#fff0f2;color:#ff2442;font-size:15px;font-weight:800;display:flex;align-items:center;justify-content:center}' +
  '.xh-basis{font-size:15px;color:#999;margin-top:18px;line-height:1.5}' +
  /* 레퍼런스 */
  '.xh-s17{display:grid;grid-template-columns:560px 1fr;gap:50px;align-items:start}' +
  '.xh-s17l .pd{display:inline-block;font-size:19px;font-weight:700;background:#fff0f2;color:#ff2442;padding:8px 16px;border-radius:10px}' +
  '.xh-s17st{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:24px}' +
  '.xh-s17st div{border:1px solid #eee;border-radius:16px;padding:18px 22px}' +
  '.xh-s17st b{display:block;font-size:38px;font-weight:800;color:#ff2442;letter-spacing:-.02em}' +
  '.xh-s17st span{display:block;font-size:17px;color:#666;margin-top:2px}' +
  '.xh-s17g{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}' +
  '.xh-s17g img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:14px;display:block;box-shadow:0 6px 16px rgba(0,0,0,.08)}' +
  '.xh-refrow{display:flex;align-items:center;gap:18px}' +
  '.xh-refrow + .xh-refrow{margin-top:16px}' +
  '.xh-refrow .lb{width:150px;flex:none;font-size:20px;font-weight:800}' +
  '.xh-refrow .lb small{display:block;font-size:15px;color:#999;font-weight:500;margin-top:4px}' +
  '.xh-refnote{margin-top:14px;font-size:18px;color:#ff2442;font-weight:700;padding-left:168px}' +
  '.xh-refrow img{width:160px;aspect-ratio:3/4;object-fit:cover;border-radius:14px;display:block;box-shadow:0 6px 16px rgba(0,0,0,.08)}' +
  '.xh-refrow .more{width:160px;font-size:16px !important;aspect-ratio:3/4;border-radius:14px;border:2px dashed #ffc2cb;display:flex;align-items:center;justify-content:center;text-align:center;font-size:19px;font-weight:700;color:#ff2442;line-height:1.5}' +
  /* FAQ + CTA */
  '.xh-end{display:grid;grid-template-columns:1.25fr 1fr;gap:40px;height:100%}' +
  '.xh-faq dt{font-size:22px;font-weight:800;padding-top:16px}' +
  '.xh-faq dt:before{content:"Q.";color:#ff2442;margin-right:10px}' +
  '.xh-faq dd{font-size:19px;color:#555;line-height:1.55;padding:6px 0 16px 38px;border-bottom:1px solid #eee}' +
  '.xh-cta{border-radius:28px;background:radial-gradient(90% 90% at 100% 0%,#e0243f 0%,rgba(224,36,63,0) 60%),linear-gradient(135deg,#1a070b,#5e0d1b);color:#fff;padding:46px 46px;display:flex;flex-direction:column}' +
  '.xh-cta .k{font-size:16px;font-weight:800;letter-spacing:.12em;color:#ff9aa8}' +
  '.xh-cta h3{font-size:42px;font-weight:800;line-height:1.3;margin-top:14px;letter-spacing:-.03em}' +
  '.xh-cta p{font-size:19px;color:rgba(255,255,255,.8);margin-top:14px;line-height:1.55}' +
  '.xh-cta .btn{margin-top:30px;display:flex;align-items:center;justify-content:center;height:72px;border-radius:16px;background:#ff2442;color:#fff;font-size:24px;font-weight:800}' +
  '.xh-cta .btn:hover{background:#ff4560}' +
  '.xh-cta ul{list-style:none;margin-top:auto}' +
  '.xh-cta li{display:flex;justify-content:space-between;font-size:20px;padding:14px 0;border-top:1px solid rgba(255,255,255,.15)}' +
  '.xh-cta li span{color:rgba(255,255,255,.6)}' +
  '.xh-cta li a:hover{text-decoration:underline}' +
  /* ===== 모바일 ===== */
  '.xm{background:#fff;border-radius:16px;padding:22px 18px 20px;box-shadow:0 4px 14px rgba(20,26,60,.07);border:1px solid #eee;color:#141414}' +
  '.xm *{box-sizing:border-box}' +
  '.xm .k{font-size:12px;font-weight:800;color:#ff2442;letter-spacing:.1em}' +
  '.xm h3{font-size:22px;font-weight:800;line-height:1.3;margin:6px 0 8px;letter-spacing:-.02em;word-break:keep-all}' +
  '.xm .d{font-size:14px;line-height:1.6;color:#555;word-break:keep-all}' +
  '.xm-cv{position:relative;border-radius:16px;overflow:hidden;color:#fff;padding:26px 20px 22px;background:radial-gradient(90% 120% at 100% 0%,#e0243f 0%,rgba(224,36,63,0) 55%),linear-gradient(135deg,#1a070b 0%,#3d0b16 45%,#7d1022 100%)}' +
  '.xm-cv .tag{display:inline-block;font-size:12px;font-weight:700;padding:5px 10px;border:1px solid rgba(255,255,255,.5);border-radius:999px}' +
  '.xm-cv h2{font-size:31px;font-weight:800;line-height:1.22;margin-top:18px;letter-spacing:-.03em}' +
  '.xm-cv h2 em{font-style:normal;color:#ff6b80}' +
  '.xm-cv p{font-size:14.5px;line-height:1.55;margin-top:12px;color:rgba(255,255,255,.85)}' +
  '.xm-cv .pics{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:18px}' +
  '.xm-cv .pics img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:10px;display:block}' +
  '.xm-cv .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}' +
  '.xm-cv .chips span{font-size:12px;font-weight:600;background:rgba(255,255,255,.14);padding:6px 9px;border-radius:7px}' +
  '.xm-stat{padding:14px 0;border-bottom:1px solid #f0f0f0}' +
  '.xm-stat:last-of-type{border-bottom:0}' +
  '.xm-stat .n{font-size:40px;font-weight:800;color:#ff2442;letter-spacing:-.03em;line-height:1.1}' +
  '.xm-stat .n small{font-size:18px;margin-left:3px}' +
  '.xm-stat .l{font-size:14.5px;font-weight:600;line-height:1.5;margin-top:6px}' +
  '.xm-stat .s{font-size:11.5px;color:#999;margin-top:4px;line-height:1.4}' +
  '.xm-flow{display:flex;flex-wrap:wrap;gap:4px 6px;align-items:center;background:#fff4f5;border-radius:12px;padding:12px;margin-top:12px;font-size:13px;font-weight:600}' +
  '.xm-flow i{font-style:normal;color:#ff9aa8}' +
  '.xm-li{list-style:none;margin-top:12px}' +
  '.xm-li li{padding:12px 0;border-top:1px solid #f0f0f0}' +
  '.xm-li li b{display:block;font-size:15.5px;font-weight:800}' +
  '.xm-li li span{display:block;font-size:13.5px;color:#555;line-height:1.55;margin-top:3px;word-break:keep-all}' +
  '.xm-li li em{display:inline-block;font-style:normal;font-size:12px;font-weight:700;color:#ff2442;margin-top:6px}' +
  '.xm-pc{border:1.5px solid #ececec;border-radius:14px;padding:16px;margin-top:12px}' +
  '.xm-pc.hl{border-color:#ff2442}' +
  '.xm-pc .en{font-size:11px;font-weight:800;color:#ff2442;letter-spacing:.08em}' +
  '.xm-pc h4{font-size:19px;font-weight:800;margin-top:2px}' +
  '.xm-pc .pr{font-size:28px;font-weight:800;margin-top:8px;letter-spacing:-.02em}' +
  '.xm-pc .pr span{font-size:13px;color:#777;font-weight:500;margin-left:6px}' +
  '.xm-pc dl{display:grid;grid-template-columns:76px 1fr;row-gap:6px;font-size:13.5px;margin-top:10px}' +
  '.xm-pc dt{color:#888} .xm-pc dd{font-weight:600;word-break:keep-all}' +
  '.xm-box{border-radius:12px;padding:12px 14px;margin-top:12px;background:#f7f7f8;font-size:13px;line-height:1.6}' +
  '.xm-box b{display:block;margin-bottom:4px;font-size:13px}' +
  '.xm-box.n{background:#fff8f0;color:#4a3a28} .xm-box.n b{color:#b45309}' +
  '.xm-box ul{list-style:none} .xm-box li:before{content:"· "}' +
  '.xm-steps{list-style:none;margin-top:12px;counter-reset:s}' +
  '.xm-steps li{counter-increment:s;position:relative;padding:10px 0 10px 40px;border-top:1px solid #f0f0f0}' +
  '.xm-steps li:before{content:counter(s);position:absolute;left:0;top:11px;width:28px;height:28px;border-radius:50%;background:#ff2442;color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center}' +
  '.xm-steps b{display:block;font-size:15px;font-weight:800} .xm-steps span{font-size:13px;color:#555}' +
  '.xm-tl{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:12px}' +
  '.xm-tl div{background:#fff4f5;border-radius:10px;padding:10px 6px;text-align:center}' +
  '.xm-tl b{display:block;color:#ff2442;font-size:15px;font-weight:800} .xm-tl span{display:block;font-size:11.5px;color:#444;margin-top:3px;line-height:1.35;word-break:keep-all}' +
  '.xm-ims{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;margin-top:12px}' +
  '.xm-ims.c3{grid-template-columns:repeat(3,1fr)}' +
  '.xm-ims img{width:100%;aspect-ratio:3/4;object-fit:cover;border-radius:10px;display:block}' +
  '.xm-mt{width:100%;border-collapse:collapse;font-size:13.5px;margin-top:12px}' +
  '.xm-mt th{color:#888;font-weight:700;padding:7px 4px;border-bottom:2px solid #141414;text-align:center}' +
  '.xm-mt th:first-child,.xm-mt td:first-child{text-align:left}' +
  '.xm-mt td{padding:8px 4px;border-bottom:1px solid #eee;text-align:center;font-weight:700}' +
  '.xm-mt td:first-child{color:#666;font-weight:500}' +
  '.xm-mt tr.hi td{color:#ff2442}' +
  '.xm-mt tr.hi td:first-child{color:#666}' +
  '.xm-basis{font-size:11.5px;color:#999;margin-top:10px;line-height:1.45}' +
  '.xm-cta{border-radius:16px;padding:22px 18px;color:#fff;background:radial-gradient(90% 90% at 100% 0%,#e0243f 0%,rgba(224,36,63,0) 60%),linear-gradient(135deg,#1a070b,#5e0d1b)}' +
  '.xm-cta h3{font-size:22px;font-weight:800;line-height:1.3}' +
  '.xm-cta p{font-size:13.5px;color:rgba(255,255,255,.8);margin-top:8px;line-height:1.55}' +
  '.xm-cta .btn{display:flex;align-items:center;justify-content:center;height:48px;border-radius:12px;background:#ff2442;color:#fff;font-size:16px;font-weight:800;margin-top:16px}' +
  '.xm-cta ul{list-style:none;margin-top:14px}' +
  '.xm-cta li{display:flex;justify-content:space-between;font-size:14px;padding:10px 0;border-top:1px solid rgba(255,255,255,.15)}' +
  '.xm-cta li span{color:rgba(255,255,255,.6)}' +
  '.xm a{color:inherit;text-decoration:none} .xm-cta a{color:#fff;text-decoration:none}';
  (function () { var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); })();

  var ICONS = {
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l-1 13H7L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>',
    food: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11h16a8 8 0 0 1-16 0z"/><path d="M8 7c0-1.5 1-1.5 1-3M12 7c0-1.5 1-1.5 1-3M16 7c0-1.5 1-1.5 1-3"/></svg>',
    clinic: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/></svg>'
  };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  function top(n) {
    return '<div class="xh-top"><span class="red">小红书 RED</span><a class="go home" data-go="1" href="#1"><b>BRANALL GLOBAL</b></a><span>· ' + T.title + '</span><span class="pn">' + pad(n) + ' / ' + pad(N) + '</span></div>';
  }
  function foot() { return '<div class="xh-foot"><span>www.branall.co.kr</span><span>© BRANALL Co., Ltd. · 비용은 부가세 별도</span></div>'; }
  function head(k, h, p) { return '<div class="xh-hd"><div class="k">' + k + '</div><h2>' + h + '</h2>' + (p ? '<p>' + p + '</p>' : '') + '</div>'; }
  function page(n, k, h, p, body, cls) { return '<div class="xh ' + (cls || '') + '">' + top(n) + head(k, h, p) + '<div class="xh-body">' + body + '</div>' + foot() + '</div>'; }
  var PRODUCTS = [P.free, P.pick, P.big];
  var br = function (s) { return String(s).replace(/\n/g, '<br>'); };
  var sp = function (s) { return String(s).replace(/\n/g, ' '); };

  /* ---------- PC 페이지 ---------- */
  var PAGES = [null,
    /* 1 표지 */
    function () {
      return '<div class="xh xh-cv dark">' + top(1) +
        '<div class="txt"><span class="tag">샤오홍슈 체험단 · 매장 방문형 마케팅</span>' +
        '<h1>중국인 고객이<br>검색하고, 저장하고,<br><em>찾아오게</em> 만듭니다</h1>' +
        '<p class="sub">여행 전 샤오홍슈에서 먼저 검색하는 중국 고객에게<br>실제 체험 후기 노트로 브랜드와 매장을 보여드립니다.</p>' +
        '<div class="chips"><span>자체 모집 · 계정 검수</span><span>후보 2배수 직접 선택</span><span>중국인 원어민 직원 관리</span><span>실시간 리포트</span></div></div>' +
        '<div class="pics">' +
          '<div class="pic" style="left:0;top:120px"><img src="' + img('n1') + '" alt=""><div class="st"><span>좋아요 <b>4.4천</b></span><span>저장 <b>2천</b></span></div></div>' +
          '<div class="pic" style="left:230px;top:0;z-index:2;width:320px"><img src="' + img('n2') + '" alt=""><div class="st"><span>좋아요 <b>3.1천</b></span><span>저장 <b>2.2천</b></span></div></div>' +
          '<div class="pic" style="left:460px;top:250px"><img src="' + img('fb1') + '" alt=""></div>' +
        '</div>' +
        '<div class="note">수치: 2026년 11월 14일 샤오홍슈 화면 기준 · 얼굴과 브랜드는 가렸습니다.</div>' +
        foot() + '</div>';
    },
    /* 2 왜 샤오홍슈 */
    function () {
      var s = T.stats.map(function (x) { return '<div class="xh-stat"><div class="n">' + x.num + '<small>' + x.unit + '</small></div><div class="l">' + x.label + '</div><div class="xh-src">출처: ' + x.src + '</div></div>'; }).join('');
      var f = '<div class="xh-flow"><span class="t">중국 고객의 동선</span>' + T.flow.map(function (x) { return '<span>' + x + '</span>'; }).join('<i>→</i>') + '</div>';
      return page(2, 'WHY XIAOHONGSHU', '왜 샤오홍슈인가', '중국 고객은 한국에 오기 전 샤오홍슈에서 먼저 검색하고, 저장한 노트를 들고 찾아옵니다.', '<div class="xh-stats">' + s + '</div>' + f);
    },
    /* 3 이런 브랜드에 */
    function () {
      var f = T.fits.map(function (x) { return '<div class="xh-fit"><div class="ic">' + ICONS[x.icon] + '</div><h3>' + x.title + '</h3><p>' + x.desc + '</p><div class="rec">추천 상품 · ' + x.rec + '</div></div>'; }).join('');
      var g = '<div class="xh-gains"><div class="t">브랜드가 얻는 것</div>' + T.gains.map(function (x) { return '<div class="g"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>';
      return page(3, 'WHO IT\'S FOR', '이런 브랜드에 맞습니다', '중국 관광객과 재한 중국인이 실제로 찾아가는 매장 · 제품이라면 효과가 큽니다.', '<div class="xh-fits">' + f + '</div>' + g);
    },
    /* 4 상품 · 단가 */
    function () {
      var c = PRODUCTS.map(function (x, i) {
        var ask = /문의|협의/.test(x.price);
        return '<div class="xh-pc' + (i === 0 ? ' hl' : '') + '"><div class="h"><img class="th" src="' + img(['o1.webp', 'o3.webp', 'fb1'][i]) + '" alt=""><div class="en">' + x.en.toUpperCase() + '</div><h3>' + x.name + '</h3><div class="tg">' + x.target + '</div></div>' +
          '<div class="pr"><b' + (ask ? ' class="ask"' : '') + '>' + x.price + '</b><span>' + (x.tag || (ask ? x.unit : x.min + ' 기준 · ' + x.unit)) + '</span></div>' +
          '<dl><dt>최소 수량</dt><dd>' + x.min + '</dd><dt>추가 1건</dt><dd>' + x.add + '</dd><dt>체험 방식</dt><dd>' + br(x.way) + '</dd><dt>결과물</dt><dd>피드 또는 영상 노트</dd></dl></div>';
      }).join('');
      var incl = '<div class="xh-incl"><div class="bx y"><b>모든 상품에 포함</b><ul><li>후보 2배수 프로필 제안</li><li>원고 · 이미지 사전 컨펌</li><li>중국인 원어민 직원 위챗 소통</li><li>게시물 발행 · 모니터링</li><li>구글 시트 실시간 리포트</li><li>최종 결과 보고</li></ul></div>' +
        '<div class="bx n"><b>유의사항</b><ul>' + P.notes.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div></div>';
      return page(4, 'PRODUCTS & PRICING', '상품 구성 및 단가', '팔로워 규모에 따라 세 가지 중 고르거나 섞어서 진행할 수 있습니다. (비용 부가세 별도)', '<div class="xh-price">' + c + '</div>' + incl);
    },
    /* 5 강점 */
    function () {
      var s = T.strengths.map(function (x) { return '<div class="xh-st"><div class="no">' + x.no + '</div><h3>' + x.title + '</h3><p>' + x.desc + '</p></div>'; }).join('');
      var sheet = '<div class="xh-sheet"><div class="lab">실시간 리포트<small>구글 시트 화면 예시</small></div><table><thead><tr><th>닉네임</th><th>팔로워</th><th>방문 · 발송일</th><th>게시 링크</th><th>상태</th></tr></thead><tbody>' +
        '<tr><td class="blur">小红书用户01</td><td>2.1만</td><td>11/18</td><td class="blur">xhslink.com/a1b2c3</td><td class="ok">게시 완료</td></tr>' +
        '<tr><td class="blur">小红书用户02</td><td>8,400</td><td>11/19</td><td class="blur">xhslink.com/d4e5f6</td><td class="ing">촬영 완료</td></tr>' +
        '<tr><td class="blur">小红书用户03</td><td>1.3만</td><td>11/20</td><td class="blur">-</td><td class="ing">방문 예정</td></tr></tbody></table></div>';
      return page(5, 'HOW WE RUN', '자체 모집 · 원어민 직접 관리', '모집부터 소통, 리포트, A/S까지 브랜올이 직접 운영합니다.', '<div class="xh-str">' + s + '</div>' + sheet);
    },
    /* 6 진행 · 일정 */
    function () {
      var st = '<div class="xh-steps">' + T.steps.map(function (x, i) { return '<div class="xh-step' + (i === 0 ? ' on' : '') + '"><div class="s">STEP ' + pad(i + 1) + '</div><h4>' + x[0] + '</h4><p>' + x[1] + '<br>' + x[2] + '</p></div>'; }).join('') + '</div>';
      var tl = '<div class="xh-tl"><div class="t">세일 · 오픈 시점을 노린다면, 30일 전에 시작하세요</div><div class="bar"></div><div class="pts">' + T.timeline.map(function (x) { return '<div class="pt"><i></i><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div></div>';
      var pr = '<div class="xh-prep"><div class="t">브랜드가 준비할 것 3가지</div><ol>' + T.prepare.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol><p>이 세 가지만 정해 주시면 견적과 일정을 하루 안에 드립니다.</p></div>';
      return page(6, 'PROCESS', '진행 순서와 일정', '노트가 검색에 자리 잡는 시간까지 계산해 일정을 잡습니다.', st + '<div class="xh-tl2">' + tl + pr + '</div>');
    },
    /* 7 사례: 올리브영 */
    function () {
      var c = T.caseOY;
      var ims = '<div class="ims"><figure><img src="' + img('n1') + '" alt=""><figcaption>노트 A</figcaption></figure><figure><img src="' + img('n2') + '" alt=""><figcaption>노트 B</figcaption></figure></div>';
      var tb = '<table class="xh-mt"><thead><tr><th></th>' + c.cols.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' +
        c.rows.map(function (r) { return '<tr' + (/좋아요|저장/.test(r[0]) ? ' class="hi"' : '') + '>' + r.map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>';
      var why = '<div class="xh-why"><b>두 노트에 공통으로 넣은 것</b><ol>' + c.why.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol></div>';
      return page(7, 'CASE 01 · BEAUTY', c.title, '', '<div class="xh-case">' + ims + '<div>' + tb + why + '<div class="xh-basis">' + c.basis + ' 1건의 사례이며 결과는 캠페인마다 다릅니다.</div></div></div>').replace('<div class="xh-body">', '<div class="xh-body" style="top:290px">');
    },
    /* 8 레퍼런스 */
    function () {
      var row = function (lb, sub, ks, extra) { return '<div class="xh-refrow"><div class="lb">' + lb + '<small>' + sub + '</small></div>' + ks.map(function (k) { return '<img src="' + img(k) + '" alt="">'; }).join('') + (extra || '') + '</div>'; };
      var r1 = row('올리브영', '매장 방문 · 제품 노트', T.refs.oy);
      var r2 = row('다이소', '제품 노트', T.refs.daiso);
      var r3 = row('F&B', '맛집 방문 노트', T.refs.fnb, T.refs.fnb.length ? '' : '<div class="more">F&B 노트<br>이미지 준비 중</div>');
      var r1 = r1 + r2 + r3 + '<div class="xh-refnote">실제 게시물과 리포트는 상담 때 직접 보여드립니다.</div>';
      var r2 = '';
      return page(8, 'REFERENCE', '실제 집행 노트', '브랜올이 샤오홍슈에서 실제 집행한 노트입니다. 얼굴은 가렸습니다.', r1 + r2).replace('<div class="xh-body">', '<div class="xh-body" style="top:292px">');
    },
    /* 9 FAQ + 상담 */
    function () {
      var q = '<dl class="xh-faq">' + T.faq.map(function (x) { return '<dt>' + x[0] + '</dt><dd>' + x[1] + '</dd>'; }).join('') + '</dl>';
      var C = T.contact;
      var cta = '<div class="xh-cta"><div class="k">CONTACT</div><h3>우리 예산으로<br>몇 건 가능한지 받아보세요</h3><p>밀고 싶은 제품과 일정만 알려주시면<br>견적과 일정을 하루 안에 드립니다.</p>' +
        '<a class="btn" href="' + C.form + '" target="_blank" rel="noopener">상담 신청하기 →</a>' +
        '<ul><li><span>카카오톡</span><a href="' + C.kakao + '" target="_blank" rel="noopener">' + C.kakaoName + '</a></li><li><span>전화</span><a href="tel:' + C.tel + '">' + C.tel + '</a></li><li><span>메일</span><a href="mailto:' + C.mail + '">' + C.mail + '</a></li></ul></div>';
      return page(9, 'FAQ & CONTACT', '자주 묻는 질문', '', '<div class="xh-end"><div>' + q + '</div>' + cta + '</div>').replace('<div class="xh-body">', '<div class="xh-body" style="top:250px">');
    }
  ];

  /* ---------- 모바일 (같은 T, P 데이터를 세로 카드로) ---------- */
  function mcard(k, h, d, inner) { return '<div class="xm"><div class="k">' + k + '</div><h3>' + h + '</h3>' + (d ? '<p class="d">' + d + '</p>' : '') + inner + '</div>'; }
  var MPAGES = [null,
    function () {
      return '<div class="xm-cv"><span class="tag">샤오홍슈 체험단 · 매장 방문형</span><h2>중국인 고객이<br>검색하고, 저장하고,<br><em>찾아오게</em> 만듭니다</h2>' +
        '<p>여행 전 샤오홍슈에서 먼저 검색하는 중국 고객에게 실제 체험 후기 노트로 브랜드와 매장을 보여드립니다.</p>' +
        '<div class="pics"><img src="' + img('n1') + '" alt=""><img src="' + img('n2') + '" alt=""><img src="' + img('fb1') + '" alt=""></div>' +
        '<div class="chips"><span>자체 모집 · 계정 검수</span><span>후보 2배수 선택</span><span>원어민 직원 관리</span><span>실시간 리포트</span></div></div>';
    },
    function () {
      return mcard('WHY XIAOHONGSHU', '왜 샤오홍슈인가', '중국 고객은 한국에 오기 전 샤오홍슈에서 먼저 검색하고, 저장한 노트를 들고 찾아옵니다.',
        T.stats.map(function (x) { return '<div class="xm-stat"><div class="n">' + x.num + '<small>' + x.unit + '</small></div><div class="l">' + x.label.replace(/<br>/g, ' ') + '</div><div class="s">출처: ' + x.src + '</div></div>'; }).join('') +
        '<div class="xm-flow">' + T.flow.map(function (x) { return '<span>' + x + '</span>'; }).join('<i>→</i>') + '</div>');
    },
    function () {
      return mcard('WHO IT\'S FOR', '이런 브랜드에 맞습니다', '', '<ul class="xm-li">' + T.fits.map(function (x) { return '<li><b>' + x.title + '</b><span>' + x.desc + '</span><em>추천 · ' + x.rec + '</em></li>'; }).join('') + '</ul>' +
        '<div class="xm-box"><b>브랜드가 얻는 것</b><ul>' + T.gains.map(function (x) { return '<li><b style="display:inline">' + x[0] + '</b> ' + x[1] + '</li>'; }).join('') + '</ul></div>');
    },
    function () {
      return mcard('PRODUCTS & PRICING', '상품 구성 및 단가', '비용은 부가세 별도입니다.', PRODUCTS.map(function (x, i) {
        var ask = /문의|협의/.test(x.price);
        return '<div class="xm-pc' + (i === 0 ? ' hl' : '') + '"><div class="en">' + x.en.toUpperCase() + '</div><h4>' + x.name + '</h4><div class="pr">' + x.price + '<span>' + (x.tag || (ask ? x.unit : x.min + ' 기준 · ' + x.unit)) + '</span></div>' +
          '<dl><dt>대상</dt><dd>' + x.target + '</dd><dt>최소 수량</dt><dd>' + x.min + '</dd><dt>추가 1건</dt><dd>' + x.add + '</dd><dt>체험 방식</dt><dd>' + sp(x.way) + '</dd></dl></div>';
      }).join('') + '<div class="xm-box"><b>모든 상품에 포함</b>후보 2배수 프로필 제안 · 원고·이미지 사전 컨펌 · 원어민 직원 위챗 소통 · 발행·모니터링 · 구글 시트 실시간 리포트 · 결과 보고</div>' +
        '<div class="xm-box n"><b>유의사항</b><ul>' + P.notes.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>');
    },
    function () {
      return mcard('HOW WE RUN', '자체 모집 · 원어민 직접 관리', '', '<ul class="xm-li">' + T.strengths.map(function (x) { return '<li><b>' + x.no + ' ' + x.title + '</b><span>' + x.desc + '</span></li>'; }).join('') + '</ul>');
    },
    function () {
      return mcard('PROCESS', '진행 순서와 일정', '', '<ol class="xm-steps">' + T.steps.map(function (x) { return '<li><b>' + x[0] + '</b><span>' + x[1] + ' · ' + x[2] + '</span></li>'; }).join('') + '</ol>' +
        '<div class="xm-tl">' + T.timeline.map(function (x) { return '<div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>' +
        '<div class="xm-box"><b>브랜드가 준비할 것 3가지</b>' + T.prepare.join(' · ') + '<br>이 세 가지만 정해 주시면 견적과 일정을 하루 안에 드립니다.</div>');
    },
    function () {
      var c = T.caseOY;
      return mcard('CASE 01 · BEAUTY', c.title, '', '<div class="xm-ims"><img src="' + img('n1') + '" alt=""><img src="' + img('n2') + '" alt=""></div>' +
        '<table class="xm-mt"><thead><tr><th></th>' + c.cols.map(function (x) { return '<th>' + x + '</th>'; }).join('') + '</tr></thead><tbody>' + c.rows.map(function (r) { return '<tr' + (/좋아요|저장/.test(r[0]) ? ' class="hi"' : '') + '>' + r.map(function (v) { return '<td>' + v + '</td>'; }).join('') + '</tr>'; }).join('') + '</tbody></table>' +
        '<ul class="xm-li">' + c.why.map(function (x, i) { return '<li><span>' + (i + 1) + '. ' + x + '</span></li>'; }).join('') + '</ul><div class="xm-basis">' + c.basis + ' 1건의 사례이며 결과는 캠페인마다 다릅니다.</div>');
    },
    function () {
      return mcard('REFERENCE', '실제 집행 노트', '올리브영 · 다이소 · F&B 노트입니다. 얼굴은 가렸습니다.', '<div class="xm-ims c3">' + T.refs.oy.concat(T.refs.daiso, T.refs.fnb).map(function (k) { return '<img src="' + img(k) + '" alt="">'; }).join('') + '</div>');
    },
    function () {
      var C = T.contact;
      return mcard('FAQ', '자주 묻는 질문', '', '<ul class="xm-li">' + T.faq.map(function (x) { return '<li><b>Q. ' + x[0] + '</b><span>' + x[1] + '</span></li>'; }).join('') + '</ul>') +
        '<div class="xm-cta" style="margin-top:14px"><h3>우리 예산으로 몇 건 가능한지 받아보세요</h3><p>밀고 싶은 제품과 일정만 알려주시면 견적과 일정을 하루 안에 드립니다.</p>' +
        '<a class="btn" href="' + C.form + '" target="_blank" rel="noopener">상담 신청하기 →</a>' +
        '<ul><li><span>카카오톡</span><a href="' + C.kakao + '" target="_blank" rel="noopener">' + C.kakaoName + '</a></li><li><span>전화</span><a href="tel:' + C.tel + '">' + C.tel + '</a></li><li><span>메일</span><a href="mailto:' + C.mail + '">' + C.mail + '</a></li></ul></div>';
    }
  ];

  window.DECK_HTML = window.DECK_HTML || {};
  window.DECK_HTML.xiaohongshu = function (i) { return PAGES[i] ? PAGES[i]() : ''; };
  window.DECK_MOBILE = window.DECK_MOBILE || {};
  window.DECK_MOBILE.xiaohongshu = function (i) { return MPAGES[i] ? MPAGES[i]() : ''; };
})();
