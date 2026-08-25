window.PORTFOLIO_CONTENT = {
  hero: {
    titleHtml: '데이터를 통해 문제를 찾고,<br><em>효율적인 해결 방법으로 연결합니다.</em>',
    lead: '데이터를 분석하는 데서 그치지 않고, 반복되는 과정은 자동화하고 새로운 기술이 필요하면 직접 적용하며 더 나은 해결 방법을 고민합니다.',
    pills: ['Data Validation', 'Python Automation', 'LLM Inference']
  },
  strengths: [
    {
      number: '01',
      title: '문제를 발견합니다',
      icon: '<span class="icon-search">⌕</span>',
      description: '데이터의 값과 처리 결과를 꼼꼼히 확인하며 변화와 이상 여부를 점검하고, 문제의 원인이 되는 지점을 찾습니다.',
      examples: [
        '저출생 관련 후보 지표 자료 분석',
        '육아휴직통계 10년치 데이터 검증',
        '온라인 가격 데이터 품질 점검 및 이상치 확인'
      ]
    },
    {
      number: '02',
      title: '반복되는 문제를 구조화합니다',
      icon: '<span class="icon-cycle">↻</span>',
      description: '반복되는 데이터 처리 과정을 규칙으로 정리하고 Python으로 자동화해 더 효율적이고 일관된 흐름으로 바꿉니다.',
      examples: [
        '전처리·병합·정제·검증·결과 생성 자동화',
        '단위 변환과 규칙 적용 로직 코드화',
        '반복 작업의 처리 시간 단축'
      ]
    },
    {
      number: '03',
      title: '필요한 기술을 적용해 개선합니다',
      icon: '<span class="icon-code">&lt;/&gt;</span>',
      description: '새로운 기술이 필요한 상황에서는 직접 적용하고, 실제 실행 환경에서 발생하는 제약과 오류를 해결하며 개선합니다.',
      examples: [
        'LLaMA 3.1 8B + vLLM 추론 환경 구성',
        'GPU 환경 전환 과정의 실행 문제 해결',
        '배치 최적화로 추론 처리 속도 개선'
      ]
    }
  ],
  work: {
    process: [
      { step: '01', title: '데이터 입력', description: '일별로 수집된 온라인 가격 데이터를 불러와 처리 대상을 구성.' },
      { step: '02', title: '월 단위 데이터 구성', description: '여러 일자의 데이터를 월 단위로 병합하고 품목 정보를 연결.' },
      { step: '03', title: '상품 정보 정제', description: '상품명에서 g·kg·ml·L·개·팩·봉 등의 단위 정보를 찾아 규칙에 맞게 정리하고 비교 가능한 형태로 변환.' },
      { step: '04', title: '가격 데이터 검증', description: '가격 관련 값을 점검하고 품목별 그룹 기준으로 이상치를 확인.' },
      { step: '05', title: '결과 자동 생성', description: '처리 결과를 정해진 형태의 Excel 파일로 자동 생성.' }
    ],
    sampleInput: '입력 폴더 · sample_daily_data/',
    sampleOutput: '출력 파일 · monthly_result.xlsx',
    sampleRows: [
      ['A001', 'Sample A', '100g', '1,250', '정상'],
      ['A002', 'Sample B', '1개', '980', '정상'],
      ['A003', 'Sample C', '500ml', '2,100', '검토'],
      ['A004', 'Sample D', '1kg', '3,850', '정상']
    ]
  },
  llm: {
    intro: 'LLaMA 3.1 8B를 vLLM으로 실행하는 과정에서 GPU 환경 변화로 발생한 문제를 확인하고 실행 조건과 처리 방식을 조정했습니다.',
    process: [
      { step: '01 · START', title: '추론 환경 구성', description: 'LLaMA 3.1 8B와 vLLM을 활용해 대량 추론 환경을 구성.' },
      { step: '02 · CHANGE', title: 'GPU 환경 전환', description: 'A100에서 V100 환경으로 변경되며 실행 조건 차이를 확인.' },
      { step: '03 · ISSUE', title: '호환성·메모리 문제', description: 'bfloat16 미지원, OOM 등 GPU 제약과 실행 오류 발생.' },
      { step: '04 · SOLVE', title: '실행 조건 조정', description: 'fp16 적용, GPU 메모리 설정 조정과 실행 환경 호환성 점검.' },
      { step: '05 · OPTIMIZE', title: '배치 추론 개선', description: '단건 처리에서 배치 처리 중심으로 실행 구조를 개선.' }
    ],
    issues: [
      ['V100에서 bfloat16 미지원', 'dtype을 fp16으로 변경'],
      ['GPU 메모리 부족 / OOM', '메모리 사용 조건과 실행 설정 조정'],
      ['Engine 초기화 및 실행 오류', '가용 VRAM과 실행 환경 설정 점검'],
      ['tokenizer 등 호환성 문제', '모델·tokenizer 및 환경 구성 확인'],
      ['단건 추론 처리 속도 저하', '배치 처리 중심으로 추론 방식 개선']
    ],
    input: 'JSON 형태의 입력 데이터',
    inference: 'LLaMA 3.1 8B · vLLM · Batch Processing',
    output: '모델 추론 결과 저장',
    performanceBefore: '약 12초 / 건',
    performanceAfter: '평균 약 0.04초 / 건',
    summary: '제한된 GPU 환경에서 LLM 추론 환경을 구성하고 오류 원인을 확인하며 실행 방식과 처리 성능을 개선한 경험입니다.'
  },
  experience: [
    {
      date: '2024.06 — 2024.12',
      title: '사회통계 관련 업무',
      description: '저출생 관련 지표 자료 정리와 육아휴직통계 검증 업무를 수행했습니다.'
    },
    {
      date: '2025',
      title: '온라인 가격 데이터 관련 업무',
      description: 'Python 기반 데이터 정제·전처리 자동화, Excel 결과 출력, LLM 활용 및 내부용 GUI 제작 업무를 수행했습니다.'
    }
  ]
};