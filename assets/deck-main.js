/* 브랜올 매체 인프라 (메인 소개서) - HTML 슬라이드 데이터
 * 1920x1080 기준으로 그려지고 화면 크기에 맞게 자동 축소된다.
 * 내용(단가, 문구)을 고칠 때는 아래 SERVICES / PAGES 의 글자만 바꾸면 된다.
 *  - v: 값 배열(열 개수만큼) 또는 문자열 1개(전체 열 합치기)
 *  - 'V' = 체크 표시, 'X' = 미포함
 *  - doc: 상품소개서 버튼이 열 소개서 주소 (없으면 '별도문의' 표시)
 */
(function () {
  var SECTION = { viral: ['바이럴 마케팅', 3], influ: ['인플루언서 마케팅', 7], contents: ['콘텐츠 제작', 12], mix: ['미디어 믹스', 16], guide: ['업무 가이드라인', 18] };
  var WORK4 = function (a, b, c, d) { return { group: '업무진행', rows: [{ sub: '리스트 전달', v: a }, { sub: '원고 & 이미지 컨펌', v: b }, { sub: '게시물 발행', v: c }, { sub: '모니터링 & 결과보고', v: d }] }; };

  var S = {
    powerpage: {
      label: 'Viral Marketing', title: '인스타그램 파워페이지', small: '(매거진 채널 포함)', doc: 'instagram-powerpage',
      desc: ['검증된 SNS 파워페이지를 통해 브랜드의 인상을 각인시키고, 바이럴 효과를 극대화합니다.', '타깃 유저들의 자발적 참여와 공유로 자연스럽고 진정성 있는 홍보 효과를 기대할 수 있습니다.'],
      checks: [['게재 지면', '인스타그램 페이지'], ['게재 조건', '카드뉴스, 릴스 형식으로 업로드']],
      cols: ['파워페이지 채널', '매거진 채널'],
      rows: [{ k: '최소수량', v: ['1건', '1건'] }, { k: '비용(부가세 별도)', v: '매체별 상이' }, { sub: '추가 수량(1건)', v: '매체별 상이' },
        { group: '업무진행', rows: [{ sub: '리스트 전달', v: ['V', 'V'] }, { sub: '콘텐츠 제작', v: '별도' }, { sub: '게시물 발행', v: ['V', 'V'] }, { sub: '모니터링 & 결과보고', v: ['V', 'V'] }] }],
      notes: ['카드뉴스, 릴스 형태로 콘텐츠 전달 시 업로드가 가능합니다.', '콘텐츠 제작 비용은 별도로 발생합니다.', '채널과 톤앤매너가 맞지 않는 경우 업로드가 불가합니다.']
    },
    humor: {
      label: 'Viral Marketing', title: '인스타그램 유머페이지', small: '(돋보기 페이지)', doc: 'instagram-explore',
      desc: ['인스타그램 돋보기(탐색 탭) 노출에 최적화된 콘텐츠를 제작 및 업로드하여', '다양한 타깃에게 빠르고 자연스러운 확산(Spread)을 이끌어냅니다.'],
      checks: [['게재 지면', '인스타그램 페이지, 탐색 탭'], ['게재 조건', '카드뉴스, 릴스 형식으로 업로드']],
      cols: ['유머페이지(돋보기 페이지)'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '25만원' }, { sub: '추가 수량(1건)', v: '25만원' },
        { group: '업무진행', rows: [{ sub: '리스트 전달', v: 'V' }, { sub: '콘텐츠 제작', v: '별도' }, { sub: '게시물 발행', v: 'V' }, { sub: '모니터링 & 결과보고', v: 'V' }] }],
      notes: ['카드뉴스, 릴스 형태로 콘텐츠 전달 시 업로드가 가능합니다.', '콘텐츠 제작 비용은 별도로 발생합니다.']
    },
    shorts: {
      label: 'Viral Marketing', title: '유튜브 쇼츠 채널', doc: 'youtube-shorts',
      desc: ['자사 보유 및 제휴되어 있는 다양한 형태의 쇼츠 채널을 통해 쿠팡 링크, 플랫폼 링크 등을', '연결하여 콘텐츠 업로드를 통한 구매 전환이 가능한 서비스입니다.'],
      checks: [['게재 지면', '유튜브 채널'], ['게재 조건', '쇼츠 형식으로 업로드']],
      cols: ['유튜브 채널'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '60만원~' }, { sub: '추가 수량(1건)', v: '채널별 상이' },
        { group: '업무진행', rows: [{ sub: '리스트 전달', v: 'V' }, { sub: '콘텐츠 제작', v: '별도' }, { sub: '게시물 발행', v: 'V' }, { sub: '모니터링 & 결과보고', v: 'V' }] }],
      notes: ['공정위 지침에 따라 광고 표기가 필수로 진행됩니다.', '채널 보호, 저작권법에 따라 영상이 삭제될 수도 있습니다.']
    },
    xrt: {
      label: 'Viral Marketing', title: 'X(구 트위터) 대형 채널 RT', doc: 'x-rt',
      desc: ['트위터 일반 계정이 업로드한 게시글을 트위터 대형 채널에서 리트윗하여', '많은 트위터 유저들에게 인위적으로 노출시켜 버즈량을 증폭시킵니다.'],
      checks: [['게재 지면', 'X(구 트위터)'], ['게재 조건', '게시글 형식으로 업로드']],
      cols: ['대형 채널 RT'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '30만원~' }, { sub: '추가 수량(1건)', v: '채널별 상이' },
        { group: '업무진행', rows: [{ sub: '리스트 전달', v: 'V' }, { sub: '콘텐츠 제작', v: '포함' }, { sub: '게시물 발행', v: 'V' }, { sub: '모니터링 & 결과보고', v: 'V' }] }],
      notes: ['리트윗은 최소 3일, 트윗 원본은 최소 1개월 유지됩니다.', '트위터는 게시물 수정 기능이 없는 SNS입니다.']
    },
    cafe: {
      label: 'Viral Marketing', title: '카페 · 커뮤니티',
      desc: ['온라인 내 활동량이 많은 네이버, 다음 카페 및 각종 커뮤니티 내의 회원들을 타깃으로', '홍보성 게시물을 업로드하여 브랜드 인지 및 구매 전환을 유도합니다.'],
      checks: [['게재 지면', '네이버, 다음 및 각종 커뮤니티'], ['게재 조건', '회원 계정으로 업로드']],
      cols: ['정보성, 후기성', '핫딜 형태'],
      rows: [{ k: '최소수량', v: ['10건', '4건'] }, { k: '비용(부가세 별도)', v: ['70만원', '60만원'] }, { sub: '추가 수량(1건)', v: ['7만원', '15만원'] },
        WORK4(['V', 'V'], ['V', 'V'], ['V', 'V'], ['V', 'V'])],
      notes: ['홍보 소재에 따라 진행이 제한될 수 있습니다.', '게재일로부터 30일까지 A/S 가능합니다.', '카페별 진행 가능 여부가 상이합니다.']
    },
    press: {
      label: 'Viral Marketing', title: '언론 보도 발행',
      desc: ['100여 개의 제휴되어 있는 언론사를 통하여', '원하는 내용의 언론 보도를 공식적으로 발행하는 서비스'],
      checks: [['게재 지면', '네이버, 다음 등 뉴스 검색 지면'], ['매체 기준', '포털 사이트와 제휴된 온라인 매체']],
      cols: ['일반 보도 발행'],
      rows: [{ k: '최소수량', v: '5건' }, { k: '비용(부가세 별도)', v: '50만원~' }, { sub: '추가 수량(1건)', v: '10만원' },
        { group: '업무진행', rows: [{ sub: '온라인 언론사 리스트업', v: 'V' }, { sub: '발행 가능 매체 체크', v: 'V' }, { sub: '보도자료 작성 & 컨펌', v: 'V' }, { sub: '모니터링 & 결과보고', v: 'V' }] }],
      notes: ['기사 송출 이후에는 수정 또는 삭제가 임의로 불가능합니다.', '언론 매체 등급에 따라 비용이 상이할 수 있습니다.']
    },
    naver: {
      label: 'Influencer Marketing', title: '네이버 시딩(일반)', doc: 'naver-seeding',
      desc: ['블로그를 운영하는 실사용자 체험단을 통해 제품 및 서비스 후기를 다각도로 생성하고,', '네이버 검색결과 내 브랜드 정보 노출을 확대하는 서비스'],
      checks: [['게재 지면', '네이버 검색 지면'], ['게재 유형', '브랜드 검색 시 게시글 노출']],
      cols: ['배송/방문형'],
      rows: [{ k: '최소수량', v: '10건' }, { k: '비용(부가세 별도)', v: '3만원' }, { sub: '추가 수량(1건)', v: '3만원' }, WORK4('V', 'V', 'V', 'V')]
    },
    naverPower: {
      label: 'Influencer Marketing', title: '네이버 시딩', small: '(파워블로그·뷰스타·인플루언서)', doc: 'naver-seeding',
      desc: ['높은 방문자 수와 영향력을 갖춘 파워블로거를 통해 고품질의 브랜디드 콘텐츠를 제작하고,', '상위 노출을 통한 타깃 확산 및 검색 신뢰도를 강화하는 서비스'],
      checks: [['게재 지면', '네이버 검색 지면'], ['게재 유형', '지정 키워드 검색 시 게시글 노출']],
      cols: ['배송/방문형'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '25만원~' }, { sub: '추가 수량(1건)', v: '25만원~' }, WORK4('V', 'V', 'V', 'V')]
    },
    nano: {
      label: 'Influencer Marketing', title: '인스타그램(나노 · 2차활용 포함 인원)', doc: 'influencer-shortform',
      desc: ['브랜드 캠페인에 최적화된 마이크로 인플루언서를 활용하여 트렌디한', '이미지 및 릴스 콘텐츠를 제작하고, 인스타그램 채널 내 브랜드 인지도를 제고하는 서비스'],
      checks: [['게재 지면', '인스타그램(이미지, 릴스)'], ['섭외 기준', '팔로워 1만 미만 나노 인플루언서']],
      cols: ['이미지', '릴스'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: ['15만원~', '25만원~'] }, { sub: '2차활용/공동작업게시', v: '10만원' },
        WORK4(['V', 'V'], ['V', 'V'], ['V', 'V'], ['V', 'V'])],
      notes: ['소재에 따라 진행이 제한될 수 있습니다.', '간단한 가이드라인으로 진행됩니다.']
    },
    micro: {
      label: 'Influencer Marketing', title: '인스타그램(마이크로 · 메가)', doc: 'influencer-shortform',
      desc: ['나노 인플루언서의 친근한 바이럴 효과부터 메가 인플루언서의 강력한 대세감 형성까지,', '캠페인 목적에 맞춰 파급력을 극대화하는 맞춤형 마케팅 서비스'],
      checks: [['게재 지면', '인스타그램(이미지, 릴스)'], ['게재 유형', '팔로워 1만 이상 마이크로·메가 인플루언서']],
      cols: ['이미지', '릴스'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '인원별 상이' }, { sub: '2차활용/공동작업게시', v: '별도' },
        WORK4(['V', 'V'], ['V', 'V'], ['V', 'V'], ['V', 'V'])],
      notes: ['소재에 따라 진행이 제한될 수 있습니다.', '디테일한 가이드라인이 필요합니다.']
    },
    xseed: {
      label: 'Influencer Marketing', title: 'X(트위터) 시딩', doc: 'x-seeding',
      desc: ['텍스트 기반의 실시간 소통에 강한 X(트위터) 인플루언서를 활용하여 최신 트렌드 반영 및', '빠른 리트윗(RT) 확산을 유도하는 바이럴 서비스'],
      checks: [['게재 지면', 'X(트위터)'], ['게재 유형', '나노/마이크로 인플루언서']],
      cols: ['리뷰형'],
      rows: [{ k: '비용(부가세 별도)', v: '25만원~/1인' }, { k: '최소 진행 인원', v: '5인' }, { sub: 'RT 이벤트', v: '별도' }, WORK4('V', 'V', 'V', 'V')],
      notes: ['홍보 소재에 따라 진행이 제한될 수 있습니다.']
    },
    yttk: {
      label: 'Influencer Marketing', title: '유튜브 · 틱톡 시딩',
      desc: ['영향력 있는 숏폼 및 롱폼 영상 크리에이터와의 협업을 통해 몰입도 높은', '비주얼 콘텐츠를 제작하고, 잠재 고객의 구매 전환을 유도하는 서비스'],
      checks: [['게재 지면', '유튜브/틱톡'], ['게재 유형', '브랜드 콘텐츠 최적화 크리에이터']],
      cols: ['리뷰형/정보형'],
      rows: [{ k: '비용(부가세 별도)', v: '크리에이터별 상이' }, { k: '커버리지', v: '1인 1콘텐츠 발행' }, { sub: '추가 수량(1건)', v: '크리에이터별 상이' }, WORK4('V', 'V', 'V', 'V')],
      notes: ['홍보 소재에 따라 진행이 제한될 수 있습니다.']
    },
    free: {
      label: 'Influencer Marketing', title: '무가시딩 · 초청',
      desc: ['타깃 인플루언서에게 제품 선물 또는 오프라인 행사 초청 경험을 무상으로 제공하여', '자발적인 콘텐츠 발행 및 지속적인 브랜드 릴레이션을 구축하는 서비스'],
      checks: [['게재 지면', '노출 개런티 없음'], ['섭외 기준', '브랜드 또는 캠페인에 적합한 인플루언서']],
      cols: ['무가 시딩', '무가 초청'],
      rows: [{ k: '최소 진행 인원', v: ['10인', '행사별 가능 인원 상이'] }, { k: '비용(부가세 별도)', v: ['10만원', '25만원/1인'] }, { sub: '비용 산정 기준', v: ['전체 시딩 인원', '참석 인원'] },
        { group: '업무진행', rows: [{ sub: '리스트 전달', v: ['V', 'V'] }, { sub: '원고 & 이미지 컨펌', v: ['V', 'V'] }, { sub: '모니터링 & 결과보고', v: ['V', 'V'] }] }],
      notes: ['IG 기준 2주, YT 기준 4주간 모니터링이 진행됩니다.', '최소 인원은 10인 단위로만 증원 가능합니다.']
    },
    xhs: {
      label: 'Viral Marketing', title: '샤오홍슈 마케팅', doc: 'xiaohongshu',
      desc: ['F&B 매장 or 올리브영, 다이소 등 국내 방문하는 중국인(이주민, 유학생)을 타깃으로', '샤오홍슈 상에서 활성화된 인원을 모집하여 플랫폼 내 인지도 확산'],
      checks: [['게재 지면', '샤오홍슈 내 피드'], ['게재 유형', '피드 or 영상 형태로 제작']],
      cols: ['자유모집(팔로워 5만 ▽)', '팔로워 1만 이상 지정 모집'],
      rows: [{ k: '최소수량', v: ['10건', '10건'] }, { k: '비용(부가세 별도)', v: ['50만원', '100만원~'] }, { sub: '추가 수량(1건)', v: ['5만원', '10만원~'] },
        WORK4(['V', 'V'], ['V', 'V'], ['V', 'V'], ['V', 'V'])],
      notes: ['제품에 따라 진행이 제한될 수 있습니다.', '게재일로부터 30일 이내 삭제 시 A/S 가능합니다.']
    },
    card: {
      label: 'Contents Production', title: 'SNS 카드뉴스 제작',
      desc: ['가독성 높은 디자인과 체계적인 정보 전달 구성을 통해 브랜드 이슈 및 제품 정보를 소셜 채널에', '효과적으로 확산하는 가공 콘텐츠 서비스'],
      checks: [['특화 채널', '인스타그램, 틱톡, 스레드']],
      cols: ['파워페이지(캐러셀) 이미지 디자인'],
      rows: [{ k: '최소수량', v: '10건' }, { k: '비용(부가세 별도)', v: '5만원' }, { sub: '추가 수량(1건)', v: '5만원' },
        { group: '업무진행', rows: [{ sub: '이미지 개수', v: '5장 기준' }, { sub: '원고 & 이미지 컨펌', v: 'V' }, { sub: '게시물 발행', v: 'X' }] }],
      notes: ['제품에 따라 진행이 제한될 수 있습니다.', '게재일로부터 30일 이내 삭제 시 A/S 가능합니다.']
    },
    shortform: {
      label: 'Contents Production', title: '바이럴 숏폼 제작',
      desc: ['트렌디한 기획과 빠른 호흡의 연출로 트래픽 및 인게이지먼트를 극대화하고 유입 유도를 돕는', '숏폼 영상 제작 서비스'],
      checks: [['특화 채널', '네이버 클립, 유튜브 쇼츠, 인스타그램 릴스, 틱톡']],
      cols: ['숏폼 제작'],
      rows: [{ k: '최소수량', v: '1건' }, { k: '비용(부가세 별도)', v: '15만원~' }, { sub: '추가 수량(1건)', v: '15만원~' },
        { group: '업무진행', rows: [{ sub: '영상 개수', v: '1건' }, { sub: '영상 컨펌', v: 'V' }, { sub: '게시물 발행', v: 'X' }] }],
      notes: ['제품에 따라 진행이 제한될 수 있습니다.', '게재일로부터 30일 이내 삭제 시 A/S 가능합니다.']
    },
    film: {
      label: 'Contents Production', title: '브랜드 필름 제작',
      desc: ['브랜드의 고유한 아이덴티티와 스토리텔링을 고품질 영상 미학으로 구현하여', '브랜드 대세감 및 신뢰도를 제고하는 영상 제작 서비스'],
      checks: [['특화 채널', '유튜브 채널, 홈페이지 메인 영상, SNS 공식계정 브랜딩, 가맹점 광고 소재 등']],
      cols: ['영상 기획 & 촬영 및 편집'],
      rows: [{ k: '촬영 및 현장 연출', v: '레퍼런스별 상이' }, { k: '스튜디오 & 출장', v: '레퍼런스별 상이' },
        { k: '작업 범위', v: '기획 · 콘티\n영상 촬영\n영상 편집\n색보정 · 사운드 삽입\n출장비 · 진행비 포함' }],
      notes: ['계약금 50% 계약 시 선입금', '잔금 50% 최종 납품 후 7일 이내 지급', '수정 범위: 영상별 수정 2회 포함, 초과 수정은 별도 협의', '원본(촬영 소스) 제공은 별도 협의']
    },
    strategy: {
      label: 'Media Mix', title: '전략 제안 및 컨설팅',
      desc: ['캠페인 목표와 타깃 분석을 기반으로 체계적인 채널 믹스 및 예산 할당 가이드를 수립해 주는', '맞춤형 마케팅 전략 솔루션'],
      checks: [['제안 채널', '브랜드 방향에 맞는 형태의 채널로 제안']],
      cols: ['미디어 믹스 캠페인 제안'],
      rows: [{ k: '비용(부가세 별도)', v: '계약 후 안내' },
        { group: '업무진행', rows: [{ sub: '요청사항(RFP) 확인', v: 'V' }, { sub: '기획안(실행안) 작성', v: 'V' }, { sub: '사전 미팅', v: 'V' }, { sub: '담당자 배정', v: 'V' }] }],
      notes: ['계약금 선결제 후 캠페인이 시작됩니다.', '진행 이후 일방적인 취소 시 계약금은 환불되지 않습니다.']
    },
    perf: {
      label: 'Media Mix', title: '퍼포먼스 마케팅',
      desc: ['타깃 노출 정확도가 높은 타기팅 매체 집행을 통해 브랜드 캠페인의 목적과 광고 효율을', '극대화하는 서비스'],
      checks: [['제안 채널', '브랜드 방향에 맞는 형태의 채널로 제안']],
      cols: ['메타, 구글, 네이버 퍼포먼스 광고'],
      rows: [{ k: '최소 비용(부가세 별도)', v: '500만원부터\n(대행 수수료 15% 별도)' },
        { group: '업무진행', rows: [{ sub: '소재 검수 및 세팅', v: 'V' }, { sub: '게재 지면 보고', v: 'V' }, { sub: '모니터링', v: 'V' }, { sub: '주간, 월간 보고', v: 'V' }] }],
      notes: ['퍼포먼스의 경우 전액 선결제 후 캠페인이 시작됩니다.', '옥외광고 및 방송광고는 별도 협의가 필요합니다.']
    }
  };

  /* ---------- 공통 조각 ---------- */
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
  var CHECK_ICON = '<svg class="cb" viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="none" stroke="#9aa6c4" stroke-width="1.6"/><path d="M6.5 12.2l3.6 3.6L20 5.6" fill="none" stroke="#2b3570" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var TICK = '<svg class="tick" viewBox="0 0 16 16"><path d="M3 8.4l3.2 3.1L13 4.6" fill="none" stroke="#222" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function cell(v) {
    if (v === 'V') return TICK;
    if (v === 'X') return '<span class="xmark">X</span>';
    return esc(v).replace(/\n/g, '<br>');
  }
  function go(n, text, cls) { return '<a class="go ' + (cls || '') + '" data-go="' + n + '" href="#' + n + '">' + text + '</a>'; }
  function chrome(n, section) {
    return '<div class="sl-top">' + go(1, '브랜올 상품소개서', 'home') +
      (section ? go(SECTION[section][1], SECTION[section][0], 'sec') : '') +
      '<span class="pno">' + (n < 10 ? '0' : '') + n + '</span></div>' +
      '<div class="sl-foot">Think, Build, Grow<br>브랜드의 마케팅 방향을 설계하고 실행으로 옮겨 숫자로 증명합니다.</div>';
  }
  function header(s) {
    return '<div class="hd">' +
      (s.noPill ? '' : s.doc ? '<a class="pill" href="{{DOC:' + s.doc + '}}" target="_blank" rel="noopener">상품소개서</a>' : '<span class="pill off">별도문의</span>') +
      '<div class="lb">' + esc(s.label) + '</div>' +
      '<h2>' + esc(s.title) + (s.small ? '<small>' + esc(s.small) + '</small>' : '') + '</h2>' +
      '<p class="ds">' + s.desc.map(esc).join('<br>') + '</p>' +
      '<div class="cks">' + s.checks.map(function (c) { return '<div class="ck">' + CHECK_ICON + '<div><b>' + esc(c[0]) + '</b><span>' + esc(c[1]) + '</span></div></div>'; }).join('') + '</div>' +
      '</div>';
  }
  function vals(v, ncol) {
    if (typeof v === 'string') return '<td class="v" colspan="' + ncol + '">' + cell(v) + '</td>';
    return v.map(function (x) { return '<td class="v">' + cell(x) + '</td>'; }).join('');
  }
  function table(s) {
    var n = s.cols.length, h = '';
    h += '<table class="tb c' + n + '"><colgroup><col class="ck1"><col class="ck2">' + s.cols.map(function () { return '<col>'; }).join('') + '</colgroup>';
    h += '<thead><tr><th colspan="2">서비스</th>' + s.cols.map(function (c) { return '<th class="v">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>';
    s.rows.forEach(function (r, ri) {
      var isLast = ri === s.rows.length - 1;
      if (r.group) {
        r.rows.forEach(function (g, i) {
          h += '<tr class="grp' + (i === 0 ? ' first' : '') + '">' + (i === 0 ? '<td class="k' + (isLast ? ' endk' : '') + '" rowspan="' + r.rows.length + '">' + esc(r.group) + '</td>' : '') +
            '<td class="s">' + esc(g.sub) + '</td>' + vals(g.v, n) + '</tr>';
        });
      } else if (r.sub) {
        h += '<tr><td class="k"></td><td class="s">' + esc(r.sub) + '</td>' + vals(r.v, n) + '</tr>';
      } else {
        h += '<tr' + (String(r.v).indexOf('\n') > -1 ? ' class="tall"' : '') + '><td class="k" colspan="2">' + esc(r.k) + '</td>' + vals(r.v, n) + '</tr>';
      }
    });
    h += '</tbody>';
    if (s.notes) h += '<tfoot><tr><td class="k" colspan="2">유의사항</td><td class="nt" colspan="' + n + '"><ul>' + s.notes.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul></td></tr></tfoot>';
    return h + '</table>';
  }
  function half(s) { return '<section class="half">' + header(s) + table(s) + '</section>'; }
  function two(n, section, a, b) { return chrome(n, section) + '<div class="halves">' + half(S[a]) + half(S[b]) + '</div>'; }
  function divider(n, title, sub) {
    return '<div class="grad"></div><div class="sl-top light">' + go(1, '브랜올 상품소개서', 'home') + '</div>' +
      '<div class="dv"><h1>' + title + '</h1><p>' + sub + '</p></div>' +
      '<div class="sl-foot light">Think, Build, Grow<br>브랜드의 마케팅 방향을 설계하고 실행으로 옮겨 숫자로 증명합니다.</div>';
  }

  /* ---------- 특수 페이지 ---------- */
  function cover() {
    return '<div class="grad"></div><div class="cv">' +
      '<div class="cv-top">Think, Build, Grow<br>브랜드의 마케팅 방향을 설계하고 실행으로 옮겨 숫자로 증명합니다.</div>' +
      '<h1>브랜올 매체 인프라</h1>' +
      '<div class="cv-bl">Digital Marketing Agency<br>Final Update 2026</div>' +
      '<div class="cv-br">© 2026 Branall Co., Ltd. All rights reserved.</div></div>';
  }
  function services() {
    var cols = [
      ['바이럴 마케팅', [['인스타그램(파워페이지)', 4], ['인스타그램(유머페이지)', 4], ['유튜브 쇼츠 채널', 5], ['X(트위터) 대형채널 RT', 5], ['카페 · 커뮤니티 바이럴', 6], ['언론보도 발행', 6]]],
      ['인플루언서 마케팅', [['네이버 시딩(일반)', 8], ['네이버 시딩<small>(파블·뷰스타·인플루언서)</small>', 8], ['인스타그램(나노)', 9], ['인스타그램(마이크로·메가)', 9], ['X(트위터) 시딩', 10], ['유튜브 · 틱톡 시딩', 10], ['무가시딩 · 초청', 11], ['샤오홍슈', 11]]],
      ['콘텐츠 제작', [['AI 비주얼 제작', 13], ['SNS 카드뉴스 제작', 13], ['바이럴 숏폼 제작', 14], ['브랜드 필름 제작', 14], ['촬영 · 편집(셀프형, 방문형)', 15]]],
      ['미디어 믹스', [['전략 제안 및 컨설팅', 17], ['온 · 모바일 광고', 17]]],
      ['업무 가이드라인', [['유의사항 · 부대비용', 19], ['취소 · 안내사항', 19]]]
    ];
    var ARROW = '<svg viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#111"/><path d="M13.5 10l6 6-6 6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    return chrome(2) + '<div class="svc"><h2>전체 서비스</h2><div class="svc-cols">' + cols.map(function (c) {
      return '<div class="svc-col"><h3>' + c[0] + '</h3>' + c[1].map(function (it) {
        return '<a class="svc-it go" data-go="' + it[1] + '" href="#' + it[1] + '"><span>' + it[0] + '</span>' + ARROW + '</a>';
      }).join('') + '</div>';
    }).join('') + '</div></div>';
  }
  function aiVisual() {
    var s = { label: 'Contents Production', title: 'AI 비주얼 제작', desc: ['생성형 AI 기술을 활용해 브랜드 콘셉트에 최적화된 감각적인 스틸 이미지 및 모션 비주얼을', '기획·제작하는 고효율 콘텐츠 솔루션'], checks: [['특화 채널', '플랫폼 전 채널']] };
    return '<section class="half">' + header(s) +
      '<table class="tb ai"><colgroup><col class="ck1"><col><col><col></colgroup>' +
      '<thead><tr><th>서비스</th><th class="v">Still image</th><th class="v">Still image + Motion</th><th class="v">Short video</th></tr></thead><tbody>' +
      '<tr><td class="k">타입</td><td class="v">스틸 이미지</td><td class="v">스틸 이미지 + 모션</td><td class="v">숏폼 영상</td></tr>' +
      '<tr class="tall"><td class="k">작업 범위</td><td class="v">이미지 10컷 생성<br>레퍼런스 기반 기획 가능</td><td class="v">스틸 이미지 1컷 + 모션 콘텐츠 1건<br>레퍼런스 기반 기획 가능<br>영상 내 음원·효과음 미포함</td><td class="v">영상 1건 제작<br>레퍼런스 기반 기획 가능<br>AI 소스 생성 및 컷 편집<br>음원, 효과음 포함</td></tr>' +
      '<tr><td class="k">비용(부가세 별도)</td><td class="v">100만원 / 10EA</td><td class="v">100만원 / 2EA</td><td class="v">100만원~ / 1EA</td></tr>' +
      '</tbody><tfoot><tr class="tall"><td class="k">업무 진행</td><td class="v" colspan="2">&lt;이미지&gt;<br>제작 상담 → 시안 공유 → 1차 컨펌<br>→ 피드백/수정 → 최종본 납기</td><td class="v">&lt;영상&gt;<br>제작 상담 → 영상 컨펌<br>→ 피드백/수정 → 최종본 납기</td></tr></tfoot></table></section>';
  }
  function shoot() {
    var s = { label: 'Contents Production', title: '촬영 · 편집', desc: ['현장 방문 촬영부터 스튜디오 셀프 제작까지, 브랜드 환경과 니즈에 맞춘 맞춤형 촬영 및 후반 편집 통합 영상 제작 서비스'], checks: [['특화 채널', '바이럴 광고 소재, 퍼포먼스 광고 소재']],
      cols: ['셀프형', '방문형(올영 · 다이소)', '팝업 방문영상'],
      rows: [{ k: '최소수량', v: ['1건', '1건', '1건'] }, { k: '비용(부가세 별도)', v: ['25만원', '25만원', '30만원'] },
        { group: '업무진행', rows: [{ sub: '기획 · 촬영 · 편집', v: 'V' }, { sub: '얼굴 노출', v: '별도 협의' }, { sub: '게시물 발행', v: 'X' }, { sub: '제품 비용', v: '별도(매장 구입 시 별도 협의)' }] }],
      notes: ['소재에 따라 진행이 제한될 수 있습니다.', '방문형, 팝업의 경우 사전에 촬영 스케줄 협의가 필요합니다.'] };
    return '<section class="half wide">' + header(s) + table(s) + '</section>';
  }
  function guide() {
    var L = '<section class="half">' + header({ noPill: true, label: 'Guideline', title: '유의사항 · 부대비용', desc: ['원활한 업무 진행과 투명한 캠페인 운영을 위해 원고 사전 검수, 어레인지, 원고료 등', '관련 기준 및 항목별 실비 규정을 안내합니다.'], checks: [['청구 기준', '업무 개시 후 광고주 요청 또는 과실로 인한 업무 중단 시 발생합니다.']] }) +
      '<div class="ck solo">' + CHECK_ICON + '<div><b>취소 수수료</b></div></div>' +
      '<table class="tb gd"><colgroup><col style="width:33%"><col style="width:24%"><col></colgroup>' +
      '<thead><tr><th>서비스</th><th class="v">취소 단계</th><th class="v">비용(부가세 별도)</th></tr></thead><tbody>' +
      '<tr><td class="k">바이럴/인플루언서 마케팅</td><td class="v">-</td><td class="v">총 계약대금의 10% + 기진행 비용</td></tr>' +
      '<tr><td class="k" rowspan="2">미디어 믹스/퍼포먼스 대행</td><td class="v">캠페인 시작 전</td><td class="v">총 계약대금의 10%</td></tr>' +
      '<tr><td class="v">캠페인 시작 후</td><td class="v">총 계약대금의 30% + 기진행 비용</td></tr></tbody></table>' +
      '<div class="ck solo">' + CHECK_ICON + '<div><b>유의 사항</b></div></div>' +
      '<ol class="gd-list"><li>"총계약대금"은 광고주가 계약 또는 견적서의 내용에 따라 브랜올에게 지급하기로 한 금액을 의미하며, 원고료, 매체비 등의 금액을 모두 포함합니다.</li>' +
      '<li>아래 항목에서 1가지라도 해당될 경우 업무 개시로 간주합니다.<span>2-1. 보도자료 등 원고 작성 후 광고주에게 컨펌 요청한 경우</span><span>2-2. 매체 구좌 부킹이 완료된 경우</span><span>2-3. 1회 이상 인플루언서 리스트를 제안한 경우</span></li>' +
      '<li>기진행 비용은 원고료, 매체비, 택배비 등 이미 발생했거나 향후 지급이 불가피한 비용을 모두 포함합니다.</li></ol></section>';
    var items = [['서비스 안내', '줌 미팅 또는 대면 미팅을 통해 브랜올의 서비스를 안내드립니다.'], ['담당자 배정', '캠페인 수량과 상황에 맞게 팀 단위 담당자가 배정됩니다.'], ['비용 결제', '신규 거래처는 첫 진행 캠페인에 한해 100% 선결제로 진행됩니다.<br>(업무 순서) 견적서 컨펌 → 계산서 발행 → 대금 결제 → 담당자 배정'], ['계약 조건과 방식', '광고주 니즈에 따라 개별 계약 또는 전체 캠페인에 대한 계약이 가능합니다.']];
    var R = '<section class="half">' + header({ noPill: true, label: 'Guideline', title: '취소 · 안내사항', desc: ['업무 개시 시점 및 광고주 사정에 따른 취소 수수료 규정과', '신규 거래처 계약·결제 프로세스에 대한 안내를 제공합니다.'], checks: [] }) +
      '<div class="gd-steps">' + items.map(function (it) { return '<div class="ck">' + CHECK_ICON + '<div><b>' + it[0] + '</b><span>' + it[1] + '</span></div></div>'; }).join('') + '</div></section>';
    return chrome(19, 'guide') + '<div class="halves">' + L + R + '</div>';
  }

  var PAGES = [
    null,
    cover,
    services,
    function () { return divider(3, '바이럴 마케팅', '자발적 확산을 유도하는 소셜 버즈 창출'); },
    function () { return two(4, 'viral', 'powerpage', 'humor'); },
    function () { return two(5, 'viral', 'shorts', 'xrt'); },
    function () { return two(6, 'viral', 'cafe', 'press'); },
    function () { return divider(7, '인플루언서 마케팅', '파급력 있는 크리에이터 중심의 타깃 임팩트'); },
    function () { return two(8, 'influ', 'naver', 'naverPower'); },
    function () { return two(9, 'influ', 'nano', 'micro'); },
    function () { return two(10, 'influ', 'xseed', 'yttk'); },
    function () { return two(11, 'influ', 'free', 'xhs'); },
    function () { return divider(12, '콘텐츠 제작', '트렌디한 비주얼로 완성하는 브랜드 스토리텔링'); },
    function () { return chrome(13, 'contents') + '<div class="halves">' + aiVisual() + half(S.card) + '</div>'; },
    function () { return two(14, 'contents', 'shortform', 'film'); },
    function () { return chrome(15, 'contents') + '<div class="halves">' + shoot() + '</div>'; },
    function () { return divider(16, '미디어 믹스', '마케팅 시너지를 극대화하는 멀티 채널 포트폴리오'); },
    function () { return two(17, 'mix', 'strategy', 'perf'); },
    function () { return divider(18, '업무 가이드라인', '성공적인 협업을 위한 가이드 및 운영 기준'); },
    guide
  ];

  window.DECK_HTML = window.DECK_HTML || {};
  window.DECK_HTML.main = function (i) { return PAGES[i] ? PAGES[i]() : ''; };
})();
