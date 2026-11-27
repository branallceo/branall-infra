/* 일본 인플루언서 시딩 상품소개서 - HTML 슬라이드 (1920x1080 기준, 화면 크기에 맞게 자동 축소)
 * - 틀: 샤오홍슈 상품소개서(deck-xiaohongshu.js)와 같은 구조
 * - 단가: assets/prices.js 의 PRICES.jp (메인 소개서와 같이 씀)
 * - 문구/수치: 아래 T 객체만 고치면 PC·모바일 화면에 같이 반영된다.
 * - 원가·수수료·운영 플랫폼 이름은 넣지 않는다. 사례(9쪽)는 자료가 모이면 T.cases 를 채운다.
 */
(function () {
  var P = window.PRICES.jp;
  var N = 10;
  var A = '#d9452b';
  var IMG = function (k) { return (window.JP_IMG_BASE || 'img/') + k; };

  var T = {
    title: '일본 인플루언서 시딩 상품소개서',
    contact: {
      form: 'https://www.branall.co.kr/contact.html',
      kakao: 'https://pf.kakao.com/_QLwxlX', kakaoName: '@브랜올',
      tel: '070-4108-2296', mail: 'contact@branall.co.kr'
    },
    stats: [
      { num: '6,600', unit: '만 명', label: '일본 인스타그램 월간 사용자<br>뷰티 · 패션 · 맛집 정보의 출발점', src: 'Meta 발표(2023.11), Gaiax 2026년 11월 SNS 사용자 정리' },
      { num: '94.8', unit: '%', label: '일본 여성 중 화장품 · 스킨케어를 살 때<br>SNS · 리뷰 입소문을 참고하는 비율', src: 'Creative Group, 2025 미용 입소문 소비자 조사(n=800, 2025.07)' },
      { num: '365', unit: '만 명', label: '2025년 방한 일본인 관광객<br>13년 만에 역대 최대', src: '한국관광공사, 방한 일본시장 확대 보고서(2026.03)' }
    ],
    flow: ['인스타에서 발견', '저장 · 검색', '@cosme · Qoo10에서 비교', '구매 · 방한 때 매장 방문'],
    fits: [
      { icon: 'box', title: '일본 진출 초기 브랜드', desc: '일본에 아직 후기가 없는 K뷰티 · 제품 브랜드. 현지 인플루언서의 실사용 후기부터 쌓습니다.', rec: '자유모집 · 지정모집' },
      { icon: 'cart', title: 'Qoo10 · 라쿠텐 · 아마존 입점 브랜드', desc: '국제배송 없이 인플루언서가 브랜드 스토어에서 직접 사고 게시합니다. 구매는 브랜드 매출로 잡힙니다.', rec: '자유모집(현지 구매형)' },
      { icon: 'store', title: '한국 매장 · 팝업 · 올리브영 입점', desc: '한국에 여행 온 일본인 인플루언서가 매장을 찾아와 체험하고 현장 후기를 올립니다. 팝업은 오픈 전 배송형 사전 홍보와 함께 하면 좋습니다.', rec: '방문형 · 팝업은 배송형과 함께' }
    ],
    gains: [
      ['일본어 실사용 후기', '일본 소비자가 직접 쓴 사진 · 영상 후기가 브랜드 이름으로 검색됩니다.'],
      ['유통 제안 자료', '모인 후기와 결과 리포트를 일본 유통 · 입점 제안 자료로 쓸 수 있습니다.'],
      ['방한 고객 동선', '여행 전 저장한 게시물이 한국에서 찾아갈 매장 리스트가 됩니다.']
    ],
    incl: ['응모자 프로필 제안 · 브랜드 선택', '캠페인 일본어 번역 · 등록', '인플루언서 소통 · 일정 관리', '일본 광고 규정 사전 검수', '게시 URL 확인 · 모니터링', '결과 리포트 제공'],
    steps: [
      ['캠페인 설계', '상품 · 인원 · 일정 확정', '한국어로 요청'],
      ['모집 · 선정', '일본어로 캠페인 공개', '응모자 중 브랜드 선택'],
      ['배송 · 방문', '제품 발송 · 현지 구매', '또는 매장 방문'],
      ['게시 · 검수', '【PR】 표기 확인', '게시 URL 검수'],
      ['리포트', '도달 · 조회 · 반응', '최종 결과 보고']
    ],
    timeline: [
      ['1~2주', '모집 · 선정'],
      ['+1주', '배송 도착 · 방문'],
      ['+2~4주', '게시 완료'],
      ['게시 후', '리포트 · 3개월 유지']
    ],
    prepare: [
      ['제품 정보', '제품명 · 설명 · 상세페이지(Qoo10 등) 주소'],
      ['사진 3장 이상', '첫 장이 모집 화면 썸네일이 됩니다'],
      ['게시 형식', '릴스인지 피드인지 꼭 정해 주세요'],
      ['꼭 넣을 말 · 해시태그', '해시태그 3개 이상, 강조할 포인트 1~2개'],
      ['쓰면 안 되는 표현', '효능 단정, 비교 광고 등 브랜드 기준'],
      ['방문형이라면', '주소 · 방문 가능 일시 · 제공 메뉴/제품']
    ],
    safe: [
      { no: '01', title: '실제 계정 데이터로 검수', desc: '인플루언서가 앱에서 직접 연동한 실제 계정 데이터로 팔로워와 반응을 확인합니다. 무단 수집 데이터는 쓰지 않습니다.' },
      { no: '02', title: '일본 광고 규정 준수', desc: '캡션 첫 줄 【PR】 표기, 효능 단정 · "최고 · 1위" 표현 금지, 보정한 비포애프터 금지를 게시 전에 확인합니다.' },
      { no: '03', title: '노쇼 · 미게시 관리', desc: '게시 기한을 넘기면 기록이 남고, 반복하면 참여가 제한됩니다. 빈자리는 다시 모집해 채웁니다.' },
      { no: '04', title: '보상은 게시 확인 후 지급', desc: '인플루언서 보상과 구매비 환급은 게시를 확인한 뒤 정산합니다. 해외 송금 같은 번거로운 절차가 없습니다.' }
    ],
    kpis: [['참여자', '10명'], ['게시물', '10건'], ['도달', '—'], ['조회', '—'], ['반응', '—'], ['CPM · CPV · CPE', '—']],
    reportItems: ['캠페인 요약: 참여자 · 게시물 수', '도달 · 조회 · 좋아요 · 저장 · 댓글', '비용 효율: CPM · CPV · CPE', '반응 좋은 게시물 TOP', '인플루언서별 실적과 게시 링크'],
    /* 사례: 지금은 직원 설명용으로 일본 인플루언서 플랫폼(인플러즈) 사례를 빌려 씀. 외부용으로 바꿀 때는
     * casesInternal 을 false 로 바꾸고 cases 를 브랜올 자체 사례(스튜디오17 등)와 img 파일로 교체한다. */
    casesInternal: true,
    cases: [
      { tag: '자유모집 · 무상 배송형', title: 'bussi (K-코스메)', desc: '팔로워 1만 이하, 브랜드 감성에 맞는 크리에이터만 골라 무상 PR', result: '무상 PR 11명', img: 'bussi' },
      { tag: '지정모집 · 유상 배송 + 방문', title: 'SELENT ÉTHER (핸드백)', desc: '팔로워 10만 안팎 미들급과 보수를 주고 반복 협업, 장기 관계로', result: '건당 보수 10만엔 · 반복 협업', img: 'selent' },
      { tag: '방문형 · 팝업', title: '이삭토스트 (F&B 팝업)', desc: '팝업 오픈 이틀 전 문의 → 캠페인 개설 → 오픈 당일 현장 PR', result: '문의부터 현장 PR까지 2일', img: 'isaac' },
      { tag: '배송 + 방문 혼합 · 팝업', title: '부산 산책 POP UP', desc: '개최 전 사전 배송 PR 20명 + 개최 후 현장 방문 PR 20명', result: '10개 브랜드 · 평일 4일 · 방문객 약 600명', img: 'busan' }
    ],
    faq: [
      ['인플루언서를 직접 고를 수 있나요?', '네. 응모한 인플루언서의 프로필과 계정 지표를 먼저 보여드리고, 브랜드가 최종 선택합니다.'],
      ['일본어를 못해도 되나요?', '네. 한국어로 요청하시면 캠페인 번역과 인플루언서 소통은 저희가 맡습니다.'],
      ['진행 기간은 얼마나 걸리나요?', '모집 1~2주, 배송 · 게시까지 2~4주로 전체 4~6주를 잡습니다. 세일 · 팝업 일정이 있다면 6주 전에 시작하세요.'],
      ['제품은 어떻게 보내나요?', '선정된 인플루언서에게 일본으로 발송합니다. 일본에서 이미 판매 중이면 현지 구매형으로 배송 없이 진행할 수 있습니다.'],
      ['게시물을 광고에 써도 되나요?', '게시물 2차 활용(광고 · 상세페이지)은 인플루언서 동의가 필요해 별도로 문의해 주세요.'],
      ['세금계산서 발행되나요?', '네. 견적서 확정 → 계산서 발행 → 결제 순으로 진행합니다. 신규 거래처는 첫 캠페인에 한해 선결제입니다.']
    ]
  };

  /* ---------- 공통 스타일 ---------- */
  var CSS = '' +
  '.jp{position:absolute;inset:0;background:#fff;color:#141414;word-break:keep-all}' +
  '.jp *{box-sizing:border-box}' +
  '.jp-top{position:absolute;left:110px;right:110px;top:40px;height:34px;display:flex;align-items:center;gap:14px;font-size:17px;color:#777;z-index:3}' +
  '.jp-top .flag{background:linear-gradient(90deg,#1b2a4a,#d9452b,#e8873a);color:#fff;font-weight:800;font-size:15px;padding:5px 10px;border-radius:5px;letter-spacing:.02em}' +
  '.jp-top b{color:#141414;font-weight:700;letter-spacing:.04em}' +
  '.jp-top .pn{margin-left:auto;font-weight:600;color:#999}' +
  '.jp.dark .jp-top{color:rgba(255,255,255,.75)} .jp.dark .jp-top b{color:#fff} .jp.dark .jp-top .pn{color:rgba(255,255,255,.6)}' +
  '.jp-foot{position:absolute;left:110px;right:110px;bottom:34px;display:flex;justify-content:space-between;font-size:15px;color:#999}' +
  '.jp.dark .jp-foot{color:rgba(255,255,255,.6)}' +
  '.jp-hd{position:absolute;left:110px;right:110px;top:120px}' +
  '.jp-hd .k{font-size:18px;font-weight:800;color:' + A + ';letter-spacing:.12em}' +
  '.jp-hd h2{font-size:54px;font-weight:800;letter-spacing:-.03em;margin-top:12px;line-height:1.2}' +
  '.jp-hd p{font-size:23px;color:#5a5a5a;margin-top:14px;line-height:1.5}' +
  '.jp-body{position:absolute;left:110px;right:110px;top:330px;bottom:96px}' +
  '.jp-src{font-size:15px;color:#999;line-height:1.5}' +
  /* 표지 */
  '.jp-cv{background:radial-gradient(70% 90% at 100% 100%,rgba(232,135,58,.55) 0%,rgba(232,135,58,0) 60%),radial-gradient(80% 110% at 100% 0%,#d9452b 0%,rgba(217,69,43,0) 55%),linear-gradient(135deg,#0b1428 0%,#14223f 45%,#24375e 100%);color:#fff}' +
  '.jp-cv .txt{position:absolute;left:110px;top:230px;width:930px}' +
  '.jp-cv .tag{display:inline-block;font-size:21px;font-weight:700;padding:9px 18px;border:1.5px solid rgba(255,255,255,.5);border-radius:999px}' +
  '.jp-cv h1{font-size:92px;font-weight:800;line-height:1.15;letter-spacing:-.04em;margin-top:34px}' +
  '.jp-cv h1 em{font-style:normal;color:#ff9a80}' +
  '.jp-cv .sub{font-size:27px;line-height:1.55;margin-top:30px;color:rgba(255,255,255,.88)}' +
  '.jp-cv .chips{display:flex;gap:12px;margin-top:44px;flex-wrap:wrap}' +
  '.jp-cv .chips span{font-size:19px;font-weight:600;background:rgba(255,255,255,.12);padding:11px 18px;border-radius:10px}' +
  '.jp-cv .note{position:absolute;left:110px;bottom:84px;font-size:16px;color:rgba(255,255,255,.6)}' +
  /* 표지 오른쪽: 인스타 게시물 화면 예시 */
  '.jp-ph{position:absolute;width:330px;border-radius:30px;background:#fff;color:#141414;box-shadow:0 30px 60px rgba(0,0,0,.45);overflow:hidden;font-size:15px}' +
  '.jp-ph .u{display:flex;align-items:center;gap:10px;padding:14px 16px}' +
  '.jp-ph .u i{width:34px;height:34px;border-radius:50%;background:conic-gradient(#1b2a4a,#d9452b,#e8873a,#f3b24a,#1b2a4a);padding:2px;display:block}' +
  '.jp-ph .u i:after{content:"";display:block;width:100%;height:100%;border-radius:50%;background:#e9e3ef;border:2px solid #fff}' +
  '.jp-ph .u b{font-size:15px;font-weight:700}' +
  '.jp-ph .u span{margin-left:auto;font-size:12px;color:#999;border:1px solid #ddd;border-radius:6px;padding:2px 6px}' +
  '.jp-ph .im{aspect-ratio:4/5;display:flex;align-items:flex-end;padding:16px;font-size:14px;font-weight:700;color:rgba(255,255,255,.9)}' +
  '.jp-ph .ic{display:flex;gap:14px;padding:12px 16px 4px;font-size:20px}' +
  '.jp-ph .cap{padding:4px 16px 18px;font-size:14px;line-height:1.55;color:#333}' +
  '.jp-ph .cap b{color:' + A + '}' +
  '.jp-ph .cap em{font-style:normal;color:#00376b}' +
  /* 통계 */
  '.jp-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}' +
  '.jp-stat{border:1px solid #eee;border-radius:24px;padding:40px 40px 32px;background:#fff;box-shadow:0 10px 30px rgba(0,0,0,.04);display:flex;flex-direction:column;height:470px}' +
  '.jp-stat .n{font-size:104px;font-weight:800;color:' + A + ';letter-spacing:-.04em;line-height:1}' +
  '.jp-stat .n small{font-size:40px;margin-left:6px}' +
  '.jp-stat .l{font-size:24px;font-weight:600;line-height:1.5;margin-top:26px;color:#222}' +
  '.jp-stat .jp-src{margin-top:auto;padding-top:18px;border-top:1px solid #f0f0f0}' +
  '.jp-flow{display:flex;align-items:center;gap:14px;margin-top:50px;background:#fbf1ec;border-radius:18px;padding:26px 36px}' +
  '.jp-flow .t{font-size:20px;font-weight:800;color:' + A + ';margin-right:16px;white-space:nowrap}' +
  '.jp-flow span{font-size:22px;font-weight:600}' +
  '.jp-flow i{font-style:normal;color:#eea590;font-size:24px}' +
  /* 업종 */
  '.jp-fits{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}' +
  '.jp-fit{border-radius:24px;background:#f7f7f8;padding:40px 40px 34px;height:390px;display:flex;flex-direction:column}' +
  '.jp-fit .ic{width:64px;height:64px;border-radius:16px;background:linear-gradient(135deg,#1b2a4a,#d9452b);display:flex;align-items:center;justify-content:center}' +
  '.jp-fit .ic svg{width:34px;height:34px}' +
  '.jp-fit h3{font-size:30px;font-weight:800;margin-top:24px;letter-spacing:-.02em}' +
  '.jp-fit p{font-size:20px;line-height:1.6;color:#555;margin-top:12px}' +
  '.jp-fit .rec{margin-top:auto;font-size:18px;font-weight:700;color:' + A + '}' +
  '.jp-gains{display:grid;grid-template-columns:auto 1fr 1fr 1fr;gap:20px;margin-top:40px;align-items:stretch}' +
  '.jp-gains .t{background:#141414;color:#fff;border-radius:18px;padding:0 30px;display:flex;align-items:center;font-size:22px;font-weight:800}' +
  '.jp-gains div.g{border:1px solid #eee;border-radius:18px;padding:28px 30px;min-height:150px}' +
  '.jp-gains .g b{display:block;font-size:22px;font-weight:800}' +
  '.jp-gains .g span{display:block;font-size:18px;color:#666;line-height:1.5;margin-top:6px}' +
  /* 단가 */
  '.jp-price{display:grid;grid-template-columns:repeat(3,1fr);gap:26px}' +
  '.jp-pc{border-radius:24px;border:1.5px solid #ececec;overflow:hidden;display:flex;flex-direction:column}' +
  '.jp-pc.hl{border-color:' + A + ';box-shadow:0 14px 36px rgba(217,69,43,.12)}' +
  '.jp-pc .h{position:relative;padding:28px 32px 22px;background:#fafafa;border-bottom:1px solid #eee}' +
  '.jp-pc.hl .h{background:#fbf1ec}' +
  '.jp-pc .h .en{font-size:15px;font-weight:800;letter-spacing:.1em;color:' + A + '}' +
  '.jp-pc .h h3{font-size:34px;font-weight:800;margin-top:6px}' +
  '.jp-pc .h .tg{font-size:19px;color:#555;margin-top:6px}' +
  '.jp-pc .pr{padding:24px 32px 6px;display:flex;align-items:baseline;gap:12px}' +
  '.jp-pc .pr b{font-size:56px;font-weight:800;letter-spacing:-.03em}' +
  '.jp-pc .pr span{font-size:19px;color:#777}' +
  '.jp-pc dl{padding:6px 32px 26px;display:grid;grid-template-columns:120px 1fr;row-gap:12px;font-size:19px}' +
  '.jp-pc dt{color:#888}' +
  '.jp-pc dd{font-weight:600;color:#222;line-height:1.45}' +
  '.jp-incl{display:grid;grid-template-columns:1.25fr 1fr;gap:26px;margin-top:26px}' +
  '.jp-incl .bx{border-radius:20px;padding:22px 30px;background:#f7f7f8}' +
  '.jp-incl .bx b{font-size:19px;font-weight:800;display:block;margin-bottom:10px}' +
  '.jp-incl .bx ul{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:6px 20px}' +
  '.jp-incl .bx.n ul{grid-template-columns:1fr}' +
  '.jp-incl li{font-size:18px;color:#444;line-height:1.5;padding-left:26px;position:relative}' +
  '.jp-incl .bx.y li:before{content:"";position:absolute;left:0;top:6px;width:16px;height:9px;border-left:3px solid ' + A + ';border-bottom:3px solid ' + A + ';transform:rotate(-45deg)}' +
  '.jp-incl .bx.n{background:#fff8f0}' +
  '.jp-incl .bx.n b{color:#b45309}' +
  '.jp-incl .bx.n li:before{content:"·";position:absolute;left:8px;top:-2px;font-weight:800;color:#b45309}' +
  /* 진행 */
  '.jp-steps{display:grid;grid-template-columns:repeat(5,1fr)}' +
  '.jp-step{position:relative;background:#f7f7f8;padding:36px 30px 30px 54px;height:220px;clip-path:polygon(0 0,calc(100% - 30px) 0,100% 50%,calc(100% - 30px) 100%,0 100%,30px 50%)}' +
  '.jp-step:first-child{padding-left:32px;clip-path:polygon(0 0,calc(100% - 30px) 0,100% 50%,calc(100% - 30px) 100%,0 100%)}' +
  '.jp-step.on{background:' + A + ';color:#fff}' +
  '.jp-step .s{font-size:15px;font-weight:800;letter-spacing:.1em;color:' + A + '}' +
  '.jp-step.on .s{color:#ffd5c8}' +
  '.jp-step h4{font-size:27px;font-weight:800;margin-top:8px}' +
  '.jp-step p{font-size:17px;line-height:1.5;margin-top:8px;color:#555}' +
  '.jp-step.on p{color:#fff}' +
  '.jp-tl2{display:grid;grid-template-columns:1.45fr 1fr;gap:28px;margin-top:44px}' +
  '.jp-tl{border:1px solid #eee;border-radius:24px;padding:30px 40px;display:flex;flex-direction:column;justify-content:center}' +
  '.jp-tl .t{font-size:21px;font-weight:800}' +
  '.jp-tl .bar{margin-top:44px;height:6px;background:linear-gradient(90deg,#f3cdbf,' + A + ');border-radius:3px}' +
  '.jp-tl .pts{display:grid;grid-template-columns:repeat(4,1fr);margin-top:-23px}' +
  '.jp-tl .pt i{display:block;width:20px;height:20px;border-radius:50%;background:#fff;border:5px solid ' + A + '}' +
  '.jp-tl .pt b{display:block;font-size:30px;font-weight:800;margin-top:16px;color:' + A + '}' +
  '.jp-tl .pt span{display:block;font-size:19px;color:#444;margin-top:4px}' +
  '.jp-kr{background:#141414;color:#fff;border-radius:24px;padding:30px 36px;display:flex;flex-direction:column;justify-content:center}' +
  '.jp-kr .t{font-size:16px;font-weight:800;letter-spacing:.1em;color:#ff9a80}' +
  '.jp-kr b{display:block;font-size:32px;font-weight:800;line-height:1.35;margin-top:10px}' +
  '.jp-kr p{font-size:18px;color:rgba(255,255,255,.75);margin-top:14px;line-height:1.55}' +
  /* 준비물 */
  '.jp-prep{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}' +
  '.jp-pi{border:1px solid #eee;border-radius:20px;padding:32px 34px;height:205px;position:relative}' +
  '.jp-pi .no{position:absolute;right:26px;top:22px;font-size:34px;font-weight:800;color:#f3cdbf}' +
  '.jp-pi b{display:block;font-size:25px;font-weight:800}' +
  '.jp-pi span{display:block;font-size:19px;color:#555;margin-top:10px;line-height:1.5}' +
  '.jp-pi.v{background:#fbf1ec;border-color:#f3cdbf}' +
  '.jp-tip{margin-top:40px;border-radius:20px;background:#141414;color:#fff;padding:26px 34px;display:flex;align-items:center;gap:26px}' +
  '.jp-tip .t{font-size:16px;font-weight:800;letter-spacing:.1em;color:#ff9a80;white-space:nowrap}' +
  '.jp-tip p{font-size:20px;line-height:1.55}' +
  /* 안심 포인트 */
  '.jp-str{display:grid;grid-template-columns:repeat(4,1fr);gap:24px}' +
  '.jp-st{border-radius:24px;border:1px solid #eee;padding:38px 32px;height:380px;display:flex;flex-direction:column;background:#fff}' +
  '.jp-st .no{font-size:46px;font-weight:800;color:' + A + ';letter-spacing:-.02em}' +
  '.jp-st h3{font-size:27px;font-weight:800;margin-top:20px;letter-spacing:-.02em}' +
  '.jp-st p{font-size:19px;color:#555;line-height:1.6;margin-top:12px}' +
  '.jp-pr{margin-top:40px;display:grid;grid-template-columns:1fr 1fr;gap:24px}' +
  '.jp-pr .bx{border-radius:20px;padding:24px 30px;font-size:19px;line-height:1.55}' +
  '.jp-pr .ok{background:#f0f8f2} .jp-pr .ok b{color:#1f8a3b}' +
  '.jp-pr .no{background:#fff3f3} .jp-pr .no b{color:#d23}' +
  '.jp-pr b{display:block;font-size:19px;font-weight:800;margin-bottom:6px}' +
  '.jp-pr code{font-family:inherit;background:#fff;border:1px solid #e3e3e3;border-radius:6px;padding:1px 8px;margin-right:6px;font-weight:700}' +
  /* 리포트 */
  '.jp-rp{display:grid;grid-template-columns:1.5fr 1fr;gap:34px}' +
  '.jp-dash{border:1px solid #e6e6e6;border-radius:24px;padding:28px 30px;background:#fbfbfc}' +
  '.jp-dash .hd{display:flex;justify-content:space-between;align-items:center;font-size:19px;font-weight:800}' +
  '.jp-dash .hd span{font-size:15px;font-weight:600;color:#999}' +
  '.jp-kpi{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}' +
  '.jp-kpi div{background:#fff;border:1px solid #eee;border-radius:14px;padding:16px 18px}' +
  '.jp-kpi span{display:block;font-size:15px;color:#888}' +
  '.jp-kpi b{display:block;font-size:30px;font-weight:800;margin-top:4px;color:#141414}' +
  '.jp-dash table{width:100%;border-collapse:collapse;font-size:16px;margin-top:18px;background:#fff;border-radius:14px;overflow:hidden}' +
  '.jp-dash th{background:#f6ece7;color:#8a2f1d;font-weight:700;text-align:left;padding:11px 16px}' +
  '.jp-dash td{padding:11px 16px;border-top:1px solid #f0f0f0;color:#444}' +
  '.jp-dash .blur{filter:blur(3.5px)}' +
  '.jp-dash .ok{color:#1f8a3b;font-weight:700} .jp-dash .ing{color:#c07a00;font-weight:700}' +
  '.jp-ri{border-radius:24px;background:#141414;color:#fff;padding:32px 34px}' +
  '.jp-ri .t{font-size:16px;font-weight:800;letter-spacing:.1em;color:#ff9a80}' +
  '.jp-ri b{display:block;font-size:30px;font-weight:800;line-height:1.35;margin-top:10px}' +
  '.jp-ri ol{list-style:none;margin-top:20px;counter-reset:r}' +
  '.jp-ri li{counter-increment:r;font-size:20px;padding:11px 0 11px 46px;position:relative;border-top:1px solid rgba(255,255,255,.12)}' +
  '.jp-ri li:before{content:counter(r);position:absolute;left:0;top:10px;width:30px;height:30px;border-radius:50%;background:' + A + ';font-size:16px;font-weight:800;display:flex;align-items:center;justify-content:center}' +
  '.jp-ri p{font-size:16px;color:rgba(255,255,255,.65);margin-top:16px;line-height:1.5}' +
  /* 사례 (빈칸) */
  '.jp-cases{display:grid;grid-template-columns:repeat(' + 4 + ',1fr);gap:22px}' +
  '.jp-case{border:2.5px dashed #efbfae;border-radius:24px;height:600px;display:flex;flex-direction:column;padding:26px 24px;background:#fffaf7}' +
  '.jp-case.real{border:1px solid #eee;background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.05);height:auto}' +
  '.jp-case.real .rs{margin-top:10px}' +
  '.jp-case .ph img{width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:10px;display:block}' +
  '.jp-int{position:absolute;right:110px;top:118px;background:#141414;color:#fff;border-radius:12px;padding:12px 18px;font-size:17px;font-weight:700;line-height:1.45;text-align:right}' +
  '.jp-int b{color:#ff9a80}' +
  '.jp-case .tg{font-size:17px;font-weight:800;color:' + A + '}' +
  '.jp-case .ph{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0}' +
  '.jp-case .ph i{aspect-ratio:1/1;border-radius:10px;background:repeating-linear-gradient(45deg,#f8e5dc,#f8e5dc 10px,#fbf1ec 10px,#fbf1ec 20px);display:block}' +
  '.jp-case .rs{margin-top:auto;border-top:1px solid #efbfae;padding-top:12px;font-size:17px;font-weight:800;color:#d9452b}' +
  '.jp-case b{font-size:23px;font-weight:800;letter-spacing:-.02em}' +
  '.jp-case span{font-size:16.5px;color:#666;margin-top:6px;line-height:1.5;min-height:50px}' +
  /* FAQ + CTA */
  '.jp-end{display:grid;grid-template-columns:1.25fr 1fr;gap:40px;height:100%}' +
  '.jp-faq dt{font-size:21px;font-weight:800;padding-top:13px}' +
  '.jp-faq dt:before{content:"Q.";color:' + A + ';margin-right:10px}' +
  '.jp-faq dd{font-size:18px;color:#555;line-height:1.5;padding:5px 0 13px 36px;border-bottom:1px solid #eee}' +
  '.jp-cta{border-radius:28px;background:radial-gradient(90% 90% at 100% 0%,#d9452b 0%,rgba(217,69,43,0) 60%),linear-gradient(135deg,#0b1428,#1f3157);color:#fff;padding:46px;display:flex;flex-direction:column}' +
  '.jp-cta .k{font-size:16px;font-weight:800;letter-spacing:.12em;color:#ff9a80}' +
  '.jp-cta h3{font-size:42px;font-weight:800;line-height:1.3;margin-top:14px;letter-spacing:-.03em}' +
  '.jp-cta p{font-size:19px;color:rgba(255,255,255,.8);margin-top:14px;line-height:1.55}' +
  '.jp-cta .btn{margin-top:30px;display:flex;align-items:center;justify-content:center;height:72px;border-radius:16px;background:' + A + ';color:#fff;font-size:24px;font-weight:800}' +
  '.jp-cta ul{list-style:none;margin-top:auto}' +
  '.jp-cta li{display:flex;justify-content:space-between;font-size:20px;padding:14px 0;border-top:1px solid rgba(255,255,255,.15)}' +
  '.jp-cta li span{color:rgba(255,255,255,.6)}' +
  '.jp a,.jm a{color:inherit;text-decoration:none}' +
  /* ===== 모바일 ===== */
  '.jm{background:#fff;border-radius:16px;padding:22px 18px 20px;box-shadow:0 4px 14px rgba(20,26,60,.07);border:1px solid #eee;color:#141414}' +
  '.jm *{box-sizing:border-box}' +
  '.jm .k{font-size:12px;font-weight:800;color:' + A + ';letter-spacing:.1em}' +
  '.jm h3{font-size:22px;font-weight:800;line-height:1.3;margin:6px 0 8px;letter-spacing:-.02em;word-break:keep-all}' +
  '.jm .d{font-size:14px;line-height:1.6;color:#555;word-break:keep-all}' +
  '.jm-cv{border-radius:16px;overflow:hidden;color:#fff;padding:26px 20px 22px;background:radial-gradient(80% 110% at 100% 0%,#d9452b 0%,rgba(217,69,43,0) 55%),linear-gradient(135deg,#0b1428 0%,#14223f 45%,#24375e 100%)}' +
  '.jm-cv .tag{display:inline-block;font-size:12px;font-weight:700;padding:5px 10px;border:1px solid rgba(255,255,255,.5);border-radius:999px}' +
  '.jm-cv h2{font-size:30px;font-weight:800;line-height:1.24;margin-top:18px;letter-spacing:-.03em}' +
  '.jm-cv h2 em{font-style:normal;color:#ff9a80}' +
  '.jm-cv p{font-size:14.5px;line-height:1.55;margin-top:12px;color:rgba(255,255,255,.85)}' +
  '.jm-cv .chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:14px}' +
  '.jm-cv .chips span{font-size:12px;font-weight:600;background:rgba(255,255,255,.14);padding:6px 9px;border-radius:7px}' +
  '.jm-stat{padding:14px 0;border-bottom:1px solid #f0f0f0}' +
  '.jm-stat .n{font-size:38px;font-weight:800;color:' + A + ';letter-spacing:-.03em;line-height:1.1}' +
  '.jm-stat .n small{font-size:17px;margin-left:3px}' +
  '.jm-stat .l{font-size:14.5px;font-weight:600;line-height:1.5;margin-top:6px}' +
  '.jm-stat .s{font-size:11.5px;color:#999;margin-top:4px;line-height:1.4}' +
  '.jm-flow{display:flex;flex-wrap:wrap;gap:4px 6px;align-items:center;background:#fbf1ec;border-radius:12px;padding:12px;margin-top:12px;font-size:13px;font-weight:600}' +
  '.jm-flow i{font-style:normal;color:#eea590}' +
  '.jm-li{list-style:none;margin-top:12px}' +
  '.jm-li li{padding:12px 0;border-top:1px solid #f0f0f0}' +
  '.jm-li li b{display:block;font-size:15.5px;font-weight:800}' +
  '.jm-li li span{display:block;font-size:13.5px;color:#555;line-height:1.55;margin-top:3px;word-break:keep-all}' +
  '.jm-li li em{display:inline-block;font-style:normal;font-size:12px;font-weight:700;color:' + A + ';margin-top:6px}' +
  '.jm-pc{border:1.5px solid #ececec;border-radius:14px;padding:16px;margin-top:12px}' +
  '.jm-pc.hl{border-color:' + A + '}' +
  '.jm-pc .en{font-size:11px;font-weight:800;color:' + A + ';letter-spacing:.08em}' +
  '.jm-pc h4{font-size:19px;font-weight:800;margin-top:2px}' +
  '.jm-pc .pr{font-size:28px;font-weight:800;margin-top:8px;letter-spacing:-.02em}' +
  '.jm-pc .pr span{font-size:13px;color:#777;font-weight:500;margin-left:6px}' +
  '.jm-pc dl{display:grid;grid-template-columns:76px 1fr;row-gap:6px;font-size:13.5px;margin-top:10px}' +
  '.jm-pc dt{color:#888} .jm-pc dd{font-weight:600;word-break:keep-all}' +
  '.jm-box{border-radius:12px;padding:12px 14px;margin-top:12px;background:#f7f7f8;font-size:13px;line-height:1.6}' +
  '.jm-box b{display:block;margin-bottom:4px;font-size:13px}' +
  '.jm-box.n{background:#fff8f0;color:#4a3a28} .jm-box.n b{color:#b45309}' +
  '.jm-box ul{list-style:none} .jm-box li:before{content:"· "}' +
  '.jm-steps{list-style:none;margin-top:12px;counter-reset:s}' +
  '.jm-steps li{counter-increment:s;position:relative;padding:10px 0 10px 40px;border-top:1px solid #f0f0f0}' +
  '.jm-steps li:before{content:counter(s);position:absolute;left:0;top:11px;width:28px;height:28px;border-radius:50%;background:' + A + ';color:#fff;font-size:13px;font-weight:800;display:flex;align-items:center;justify-content:center}' +
  '.jm-steps b{display:block;font-size:15px;font-weight:800} .jm-steps span{font-size:13px;color:#555}' +
  '.jm-tl{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:12px}' +
  '.jm-tl div{background:#fbf1ec;border-radius:10px;padding:10px 6px;text-align:center}' +
  '.jm-tl b{display:block;color:' + A + ';font-size:14px;font-weight:800} .jm-tl span{display:block;font-size:11.5px;color:#444;margin-top:3px;line-height:1.35;word-break:keep-all}' +
  '.jm-case{border:2px dashed #efbfae;border-radius:12px;padding:14px;margin-top:10px;background:#fffaf7;font-size:13.5px}' +
  '.jm-case b{display:block;color:' + A + ';font-size:12px;margin-bottom:4px}' +
  '.jm-cta{border-radius:16px;padding:22px 18px;color:#fff;background:radial-gradient(90% 90% at 100% 0%,#d9452b 0%,rgba(217,69,43,0) 60%),linear-gradient(135deg,#0b1428,#1f3157)}' +
  '.jm-cta h3{font-size:22px;font-weight:800;line-height:1.3}' +
  '.jm-cta p{font-size:13.5px;color:rgba(255,255,255,.8);margin-top:8px;line-height:1.55}' +
  '.jm-cta .btn{display:flex;align-items:center;justify-content:center;height:48px;border-radius:12px;background:' + A + ';color:#fff;font-size:16px;font-weight:800;margin-top:16px}' +
  '.jm-cta ul{list-style:none;margin-top:14px}' +
  '.jm-cta li{display:flex;justify-content:space-between;font-size:14px;padding:10px 0;border-top:1px solid rgba(255,255,255,.15)}' +
  '.jm-cta li span{color:rgba(255,255,255,.6)}' +
  '.jm-cta a{color:#fff;text-decoration:none}';
  (function () { var s = document.createElement('style'); s.textContent = CSS; document.head.appendChild(s); })();

  var ICONS = {
    box: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/><path d="M12 11v10"/></svg>',
    cart: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.5 11h11L21 7H6.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></svg>',
    store: '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 9l1.5-5h13L20 9"/><path d="M4 9h16v2a3 3 0 0 1-6 0 3 3 0 0 1-4 0 3 3 0 0 1-6 0V9z"/><path d="M5 13v7h14v-7"/></svg>'
  };
  var pad = function (n) { return (n < 10 ? '0' : '') + n; };
  function top(n) {
    return '<div class="jp-top"><span class="flag">JAPAN · Instagram</span><a class="go home" data-go="1" href="#1"><b>BRANALL GLOBAL</b></a><span>· ' + T.title + '</span><span class="pn">' + pad(n) + ' / ' + pad(N) + '</span></div>';
  }
  function foot() { return '<div class="jp-foot"><span>www.branall.co.kr</span><span>© BRANALL Co., Ltd. · 비용은 부가세 별도</span></div>'; }
  function head(k, h, p) { return '<div class="jp-hd"><div class="k">' + k + '</div><h2>' + h + '</h2>' + (p ? '<p>' + p + '</p>' : '') + '</div>'; }
  function page(n, k, h, p, body, top2) {
    return '<div class="jp">' + top(n) + head(k, h, p) + '<div class="jp-body"' + (top2 ? ' style="top:' + top2 + 'px"' : '') + '>' + body + '</div>' + foot() + '</div>';
  }
  var PRODUCTS = [P.free, P.pick, P.visit];
  var br = function (s) { return String(s).replace(/\n/g, '<br>'); };
  var sp = function (s) { return String(s).replace(/\n/g, ' '); };
  var priceSub = function (x) { return x.tag || (x.min + ' 기준 · ' + x.unit); };

  /* 표지 오른쪽 게시물 화면 예시 (실제 게시물 아님) */
  function phone(x, y, z, w, grad, label, user, cap) {
    return '<div class="jp-ph" style="left:' + x + 'px;top:' + y + 'px;z-index:' + z + ';width:' + w + 'px"><div class="u"><i></i><b>' + user + '</b><span>PR</span></div>' +
      '<div class="im" style="background:' + grad + '">' + label + '</div><div class="ic">♡ 💬 ↗<span style="margin-left:auto">🔖</span></div><div class="cap">' + cap + '</div></div>';
  }

  /* ---------- PC 페이지 ---------- */
  var PAGES = [null,
    /* 1 표지 */
    function () {
      return '<div class="jp jp-cv dark">' + top(1) +
        '<div class="txt"><span class="tag">일본 인플루언서 시딩 · 방문형 마케팅</span>' +
        '<h1>일본 소비자가<br>믿는 사람의 후기로<br><em>먼저 알게</em> 만듭니다</h1>' +
        '<p class="sub">일본 현지 인플루언서가 직접 써보고 찍은 인스타그램 후기로<br>일본 진출 초기 브랜드의 첫 신뢰를 쌓아 드립니다.</p>' +
        '<div class="chips"><span>일본 현지 인플루언서</span><span>한국어로 요청 · 일본어로 진행</span><span>【PR】 규정 검수</span><span>결과 리포트</span></div></div>' +
        '<div style="position:absolute;right:110px;top:150px;width:720px;height:820px">' +
          (T.casesInternal
            ? phone(0, 140, 1, 300, 'linear-gradient(transparent 62%,rgba(0,0,0,.5)),url(' + IMG('jp-ref-bussi-4.jpg') + ') center/cover', 'K-코스메 · 배송형', 'creator_sample_A', '<b>【PR】</b> 韓国コスメの新作を使ってみました。朝のスキンケアに…<br><em>#韓国コスメ #スキンケア</em>') +
              phone(250, 0, 3, 330, 'linear-gradient(transparent 62%,rgba(0,0,0,.5)),url(' + IMG('jp-ref-busan-1.jpg') + ') center/cover', '팝업 · 방문형', 'creator_sample_B', '<b>【PR】</b> 韓国ブランドのポップアップに行ってきました！<br><em>#韓国コスメ #ポップアップ</em>') +
              phone(470, 260, 2, 280, 'linear-gradient(transparent 62%,rgba(0,0,0,.5)),url(' + IMG('jp-ref-selent-1.jpg') + ') center/cover', '패션 · 유상', 'creator_sample_C', '<b>【PR】</b> 毎日使えるバッグ。<br><em>#バッグ #今日のコーデ</em>')
            : phone(0, 140, 1, 300, 'linear-gradient(160deg,#f6d5e3,#e9a4c4 55%,#c86b9b)', '스킨케어 · 배송형', 'creator_sample_A', '<b>【PR】</b> 韓国コスメの新作を使ってみました。朝のスキンケアに…<br><em>#韓国コスメ #スキンケア</em>') +
          phone(250, 0, 3, 330, 'linear-gradient(160deg,#ffe0c2,#f7a86b 55%,#d9663b)', '올리브영 · 방문형', 'creator_sample_B', '<b>【PR】</b> ソウル旅行でオリーブヤングに行ってきました！購入品は…<br><em>#韓国旅行 #オリヤン</em>') +
          phone(470, 260, 2, 280, 'linear-gradient(160deg,#dcd3f5,#a690e0 55%,#6e55b8)', '팝업 · 방문형', 'creator_sample_C', '<b>【PR】</b> 聖水のポップアップへ。<br><em>#ソンス #韓国カフェ</em>')) +
        '</div>' +
        '<div class="note">' + (T.casesInternal ? '내부 설명용 · 오른쪽 사진은 일본 인플루언서 플랫폼(인플러즈) 집행 사례이며 계정명은 가렸습니다. 외부 공유 금지.' : '오른쪽은 게시물 형태를 보여주는 화면 예시입니다. 실제 게시물과 결과는 상담 때 보여드립니다.') + '</div>' +
        foot() + '</div>';
    },
    /* 2 왜 일본 */
    function () {
      var s = T.stats.map(function (x) { return '<div class="jp-stat"><div class="n">' + x.num + '<small>' + x.unit + '</small></div><div class="l">' + x.label + '</div><div class="jp-src">출처: ' + x.src + '</div></div>'; }).join('');
      var f = '<div class="jp-flow"><span class="t">일본 소비자의 구매 동선</span>' + T.flow.map(function (x) { return '<span>' + x + '</span>'; }).join('<i>→</i>') + '</div>';
      return page(2, 'WHY JAPAN', '왜 일본 인플루언서인가', '일본 소비자는 광고보다 실제로 써본 사람의 후기를 믿고, 인스타그램에서 먼저 찾아봅니다.', '<div class="jp-stats">' + s + '</div>' + f);
    },
    /* 3 이런 브랜드 */
    function () {
      var f = T.fits.map(function (x) { return '<div class="jp-fit"><div class="ic">' + ICONS[x.icon] + '</div><h3>' + x.title + '</h3><p>' + x.desc + '</p><div class="rec">추천 상품 · ' + x.rec + '</div></div>'; }).join('');
      var g = '<div class="jp-gains"><div class="t">브랜드가 얻는 것</div>' + T.gains.map(function (x) { return '<div class="g"><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>';
      return page(3, 'WHO IT\'S FOR', '이런 브랜드에 맞습니다', '일본에서 처음 알려야 하는 제품, 이미 팔고 있는 제품, 한국에서 일본인 손님을 받는 매장 모두 가능합니다.', '<div class="jp-fits">' + f + '</div>' + g);
    },
    /* 4 상품 · 단가 */
    function () {
      var c = PRODUCTS.map(function (x, i) {
        return '<div class="jp-pc' + (i === 0 ? ' hl' : '') + '"><div class="h"><div class="en">' + x.en.toUpperCase() + '</div><h3>' + x.name + '</h3><div class="tg">' + x.target + '</div></div>' +
          '<div class="pr"><b>' + x.price + '</b><span>' + priceSub(x) + '</span></div>' +
          '<dl><dt>최소 수량</dt><dd>' + x.min + '</dd><dt>추가 1건</dt><dd>' + x.add + '</dd><dt>진행 방식</dt><dd>' + br(x.way) + '</dd><dt>결과물</dt><dd>인스타그램 피드 또는 릴스</dd></dl></div>';
      }).join('');
      var incl = '<div class="jp-incl"><div class="bx y"><b>모든 상품에 포함</b><ul>' + T.incl.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>' +
        '<div class="bx n"><b>유의사항</b><ul>' + P.notes.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div></div>';
      return page(4, 'PRODUCTS & PRICING', '상품 구성 및 단가', '제품만 보낼지, 보상을 더할지, 한국 매장으로 초대할지에 따라 고르거나 섞어서 진행합니다. (비용 부가세 별도)', '<div class="jp-price">' + c + '</div>' + incl, 300);
    },
    /* 5 진행 순서 · 일정 */
    function () {
      var st = '<div class="jp-steps">' + T.steps.map(function (x, i) { return '<div class="jp-step' + (i === 0 ? ' on' : '') + '"><div class="s">STEP ' + pad(i + 1) + '</div><h4>' + x[0] + '</h4><p>' + x[1] + '<br>' + x[2] + '</p></div>'; }).join('') + '</div>';
      var tl = '<div class="jp-tl"><div class="t">세일 · 팝업 일정이 있다면, 6주 전에 시작하세요</div><div class="bar"></div><div class="pts">' + T.timeline.map(function (x) { return '<div class="pt"><i></i><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div></div>';
      var kr = '<div class="jp-kr"><div class="t">KOREAN ONLY</div><b>브랜드는 한국어로만<br>소통하면 됩니다</b><p>캠페인 번역, 인플루언서 질문 응대, 일정 조율, 게시 확인까지 저희가 일본어로 진행합니다.</p></div>';
      return page(5, 'PROCESS', '진행 순서와 일정', '모집부터 리포트까지 한 흐름으로 진행합니다. 배송형은 일본 도착 시간까지 계산해 일정을 잡습니다.', st + '<div class="jp-tl2">' + tl + kr + '</div>');
    },
    /* 6 준비물 */
    function () {
      var p = T.prepare.map(function (x, i) { return '<div class="jp-pi' + (i === 5 ? ' v' : '') + '"><div class="no">' + pad(i + 1) + '</div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('');
      var tip = '<div class="jp-tip"><div class="t">TIP</div><p>캠페인은 한 번 공개되면 화면에서 바로 고치기 어렵습니다. 그래서 공개 전에 위 내용을 한 번에 확정하고, 일본 광고 규정에 맞는지 저희가 먼저 검수합니다.</p></div>';
      return page(6, 'WHAT WE NEED', '브랜드가 준비할 것', '아래 내용만 주시면 견적과 일정을 하루 안에 드립니다.', '<div class="jp-prep">' + p + '</div>' + tip);
    },
    /* 7 안심 포인트 */
    function () {
      var s = T.safe.map(function (x) { return '<div class="jp-st"><div class="no">' + x.no + '</div><h3>' + x.title + '</h3><p>' + x.desc + '</p></div>'; }).join('');
      var pr = '<div class="jp-pr"><div class="bx ok"><b>이렇게 씁니다</b><code>【PR】</code>캡션 첫 줄에 협찬 표기 · 사용감과 개인 느낌 중심 · 실제 사용 장면</div>' +
        '<div class="bx no"><b>이렇게는 쓰지 않습니다</b><code>最高</code><code>No.1</code>최고 · 1위 단정, 효능 보장 표현, 보정한 비포애프터 사진</div></div>';
      return page(7, 'SAFE & COMPLIANT', '안심하고 맡기셔도 되는 이유', '일본은 협찬 표기 규정(2023년 10월 시행)이 엄격합니다. 브랜드가 문제 되지 않도록 게시 전에 확인합니다.', '<div class="jp-str">' + s + '</div>' + pr);
    },
    /* 8 리포트 */
    function () {
      var kpi = '<div class="jp-kpi">' + T.kpis.map(function (x) { return '<div><span>' + x[0] + '</span><b>' + x[1] + '</b></div>'; }).join('') + '</div>';
      var tb = '<table><thead><tr><th>인플루언서</th><th>형식</th><th>게시일</th><th>게시 링크</th><th>상태</th></tr></thead><tbody>' +
        '<tr><td class="blur">@creator_01</td><td>릴스</td><td>—</td><td class="blur">instagram.com/p/xxxx</td><td class="ok">게시 완료</td></tr>' +
        '<tr><td class="blur">@creator_02</td><td>피드</td><td>—</td><td class="blur">instagram.com/p/yyyy</td><td class="ok">게시 완료</td></tr>' +
        '<tr><td class="blur">@creator_03</td><td>릴스</td><td>—</td><td>—</td><td class="ing">배송 도착</td></tr></tbody></table>';
      var dash = '<div class="jp-dash"><div class="hd">캠페인 결과 리포트<span>화면 예시 · 수치는 캠페인마다 다릅니다</span></div>' + kpi + tb + '</div>';
      var ri = '<div class="jp-ri"><div class="t">REPORT</div><b>결과를 그대로<br>공유할 수 있게 드립니다</b><ol>' + T.reportItems.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ol><p>인플루언서 계정과 연동된 데이터로 집계합니다. 일본 유통 · 입점 제안 자료에 그대로 붙여 쓸 수 있습니다.</p></div>';
      return page(8, 'REPORT', '결과 리포트', '게시물 링크와 반응 수치를 한 장으로 정리해 드립니다.', '<div class="jp-rp">' + dash + ri + '</div>', 300);
    },
    /* 9 사례 */
    function () {
      var c = T.cases.map(function (x) {
        var ph = x.img ? [1, 2, 3, 4, 5, 6].map(function (n) { return '<img src="' + IMG('jp-ref-' + x.img + '-' + n + '.jpg') + '" alt="">'; }).join('') : '<i></i><i></i><i></i><i></i><i></i><i></i>';
        return '<div class="jp-case' + (x.img ? ' real' : '') + '"><div class="tg">' + x.tag + '</div><b style="margin-top:8px">' + x.title + '</b><span>' + x.desc + '</span><div class="ph">' + ph + '</div><div class="rs">' + x.result + '</div></div>';
      }).join('');
      var intl = T.casesInternal ? '<div class="jp-int"><b>내부 설명용 · 외부 공유 금지</b><br>일본 인플루언서 플랫폼(인플러즈) 집행 사례입니다. 브랜올 집행 사례 아님</div>' : '';
      var sub = T.casesInternal ? '상품별로 실제 일본 인플루언서 게시물이 어떻게 나오는지 보여주는 참고 사례입니다.' : '브랜올이 일본 인플루언서와 실제로 진행한 캠페인입니다.';
      return page(9, 'CASE', T.casesInternal ? '상품별 집행 사례' : '진행 사례', sub, intl + '<div class="jp-cases">' + c + '</div>', 300).replace(intl + '<div class="jp-cases">', '<div class="jp-cases">').replace('<div class="jp-body"', intl + '<div class="jp-body"');
    },
    /* 10 FAQ + 상담 */
    function () {
      var q = '<dl class="jp-faq">' + T.faq.map(function (x) { return '<dt>' + x[0] + '</dt><dd>' + x[1] + '</dd>'; }).join('') + '</dl>';
      var C = T.contact;
      var cta = '<div class="jp-cta"><div class="k">CONTACT</div><h3>우리 제품으로<br>몇 명 가능한지 받아보세요</h3><p>제품과 원하는 일정만 알려주시면<br>견적과 일정을 하루 안에 드립니다.</p>' +
        '<a class="btn" href="' + C.form + '" target="_blank" rel="noopener">상담 신청하기 →</a>' +
        '<ul><li><span>카카오톡</span><a href="' + C.kakao + '" target="_blank" rel="noopener">' + C.kakaoName + '</a></li><li><span>전화</span><a href="tel:' + C.tel + '">' + C.tel + '</a></li><li><span>메일</span><a href="mailto:' + C.mail + '">' + C.mail + '</a></li></ul></div>';
      return page(10, 'FAQ & CONTACT', '자주 묻는 질문', '', '<div class="jp-end"><div>' + q + '</div>' + cta + '</div>', 240);
    }
  ];

  /* ---------- 모바일 ---------- */
  function mcard(k, h, d, inner) { return '<div class="jm"><div class="k">' + k + '</div><h3>' + h + '</h3>' + (d ? '<p class="d">' + d + '</p>' : '') + inner + '</div>'; }
  var MPAGES = [null,
    function () {
      return '<div class="jm-cv"><span class="tag">일본 인플루언서 시딩 · 방문형</span><h2>일본 소비자가<br>믿는 사람의 후기로<br><em>먼저 알게</em> 만듭니다</h2>' +
        '<p>일본 현지 인플루언서가 직접 써보고 찍은 인스타그램 후기로 일본 진출 초기 브랜드의 첫 신뢰를 쌓아 드립니다.</p>' +
        '<div class="chips"><span>일본 현지 인플루언서</span><span>한국어로 요청</span><span>【PR】 규정 검수</span><span>결과 리포트</span></div></div>';
    },
    function () {
      return mcard('WHY JAPAN', '왜 일본 인플루언서인가', '일본 소비자는 광고보다 실제로 써본 사람의 후기를 믿고, 인스타그램에서 먼저 찾아봅니다.',
        T.stats.map(function (x) { return '<div class="jm-stat"><div class="n">' + x.num + '<small>' + x.unit + '</small></div><div class="l">' + x.label.replace(/<br>/g, ' ') + '</div><div class="s">출처: ' + x.src + '</div></div>'; }).join('') +
        '<div class="jm-flow">' + T.flow.map(function (x) { return '<span>' + x + '</span>'; }).join('<i>→</i>') + '</div>');
    },
    function () {
      return mcard('WHO IT\'S FOR', '이런 브랜드에 맞습니다', '', '<ul class="jm-li">' + T.fits.map(function (x) { return '<li><b>' + x.title + '</b><span>' + x.desc + '</span><em>추천 · ' + x.rec + '</em></li>'; }).join('') + '</ul>' +
        '<div class="jm-box"><b>브랜드가 얻는 것</b><ul>' + T.gains.map(function (x) { return '<li><b style="display:inline">' + x[0] + '</b> ' + x[1] + '</li>'; }).join('') + '</ul></div>');
    },
    function () {
      return mcard('PRODUCTS & PRICING', '상품 구성 및 단가', '비용은 부가세 별도입니다.', PRODUCTS.map(function (x, i) {
        return '<div class="jm-pc' + (i === 0 ? ' hl' : '') + '"><div class="en">' + x.en.toUpperCase() + '</div><h4>' + x.name + '</h4><div class="pr">' + x.price + '<span>' + priceSub(x) + '</span></div>' +
          '<dl><dt>대상</dt><dd>' + x.target + '</dd><dt>최소 수량</dt><dd>' + x.min + '</dd><dt>추가 1건</dt><dd>' + x.add + '</dd><dt>진행 방식</dt><dd>' + sp(x.way) + '</dd></dl></div>';
      }).join('') + '<div class="jm-box"><b>모든 상품에 포함</b>' + T.incl.join(' · ') + '</div>' +
        '<div class="jm-box n"><b>유의사항</b><ul>' + P.notes.map(function (t) { return '<li>' + t + '</li>'; }).join('') + '</ul></div>');
    },
    function () {
      return mcard('PROCESS', '진행 순서와 일정', '', '<ol class="jm-steps">' + T.steps.map(function (x) { return '<li><b>' + x[0] + '</b><span>' + x[1] + ' · ' + x[2] + '</span></li>'; }).join('') + '</ol>' +
        '<div class="jm-tl">' + T.timeline.map(function (x) { return '<div><b>' + x[0] + '</b><span>' + x[1] + '</span></div>'; }).join('') + '</div>' +
        '<div class="jm-box"><b>브랜드는 한국어로만 소통하면 됩니다</b>캠페인 번역, 인플루언서 응대, 일정 조율, 게시 확인까지 저희가 일본어로 진행합니다.</div>');
    },
    function () {
      return mcard('WHAT WE NEED', '브랜드가 준비할 것', '아래 내용만 주시면 견적과 일정을 하루 안에 드립니다.', '<ul class="jm-li">' + T.prepare.map(function (x) { return '<li><b>' + x[0] + '</b><span>' + x[1] + '</span></li>'; }).join('') + '</ul>');
    },
    function () {
      return mcard('SAFE & COMPLIANT', '안심하고 맡기셔도 되는 이유', '', '<ul class="jm-li">' + T.safe.map(function (x) { return '<li><b>' + x.no + ' ' + x.title + '</b><span>' + x.desc + '</span></li>'; }).join('') + '</ul>');
    },
    function () {
      return mcard('REPORT', '결과 리포트', '게시물 링크와 반응 수치를 한 장으로 정리해 드립니다.', '<ol class="jm-steps">' + T.reportItems.map(function (x) { return '<li><span>' + x + '</span></li>'; }).join('') + '</ol>');
    },
    function () {
      return mcard('CASE', T.casesInternal ? '상품별 집행 사례' : '진행 사례', T.casesInternal ? '내부 설명용 · 외부 공유 금지. 일본 인플루언서 플랫폼(인플러즈) 집행 사례입니다.' : '', T.cases.map(function (x) { return '<div class="jm-case"><b>' + x.tag + '</b>' + x.title + ' · ' + x.desc + (x.img ? '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px;margin-top:8px">' + [1,2,3].map(function (n) { return '<img src="' + IMG('jp-ref-' + x.img + '-' + n + '.jpg') + '" style="width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:6px">'; }).join('') + '</div>' : '') + '<div style="color:#d9452b;font-weight:800;margin-top:6px">' + x.result + '</div></div>'; }).join(''));
    },
    function () {
      var C = T.contact;
      return mcard('FAQ', '자주 묻는 질문', '', '<ul class="jm-li">' + T.faq.map(function (x) { return '<li><b>Q. ' + x[0] + '</b><span>' + x[1] + '</span></li>'; }).join('') + '</ul>') +
        '<div class="jm-cta" style="margin-top:14px"><h3>우리 제품으로 몇 명 가능한지 받아보세요</h3><p>제품과 원하는 일정만 알려주시면 견적과 일정을 하루 안에 드립니다.</p>' +
        '<a class="btn" href="' + C.form + '" target="_blank" rel="noopener">상담 신청하기 →</a>' +
        '<ul><li><span>카카오톡</span><a href="' + C.kakao + '" target="_blank" rel="noopener">' + C.kakaoName + '</a></li><li><span>전화</span><a href="tel:' + C.tel + '">' + C.tel + '</a></li><li><span>메일</span><a href="mailto:' + C.mail + '">' + C.mail + '</a></li></ul></div>';
    }
  ];

  window.DECK_HTML = window.DECK_HTML || {};
  window.DECK_HTML.japan = function (i) { return PAGES[i] ? PAGES[i]() : ''; };
  window.DECK_MOBILE = window.DECK_MOBILE || {};
  window.DECK_MOBILE.japan = function (i) { return MPAGES[i] ? MPAGES[i]() : ''; };
})();
