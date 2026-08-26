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
      title: '문제를 끝까지 해결합니다',
      icon: '<span class="icon-code">&lt;/&gt;</span>',
      description: '예상하지 못한 제약이나 오류가 발생해도 원인을 확인하고 실행 가능한 방법을 찾아 최종 결과까지 연결합니다.',
      examples: [
        'GPU 환경 변경에 따른 LLM 실행 문제 해결',
        '추론 환경 및 배치 처리 방식 개선',
        '모델 추론부터 후처리·결과 추출까지 완료'
      ]
    }
  ],
  work: {
    process: [
      { step: '01', title: '데이터 입력', description: '일별로 수집된 온라인 가격 데이터를 불러와 처리 대상을 구성' },
      { step: '02', title: '월 단위 데이터 구성', description: '여러 일자의 데이터를 월 단위로 병합하고 품목 정보를 연결' },
      { step: '03', title: '상품 정보 정제', description: '상품명에서 g·kg·ml·L·개·팩·봉 등의 단위 정보를 찾아 규칙에 맞게 정리하고 비교 가능한 형태로 변환' },
      { step: '04', title: '가격 데이터 검증', description: '가격 관련 값을 점검하고 품목별 그룹 기준으로 이상치를 확인' },
      { step: '05', title: '결과 자동 생성', description: '처리 결과를 정해진 형태의 Excel 파일로 자동 생성' }
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
    intro: 'LLaMA 3.1 8B와 vLLM을 활용해 입력 데이터를 추론하고, 후처리를 거쳐 최종 결과를 생성하는 흐름을 구성했습니다. GPU 환경 변경 과정에서 발생한 제약은 실행 조건과 배치 처리 방식을 조정해 해결했습니다.',
    process: [
      { step: '01 · INPUT', title: '입력 데이터 구성', description: '추론 대상 데이터를 JSON 형태로 구성.' },
      { step: '02 · SETUP', title: '추론 환경 구성', description: 'LLaMA 3.1 8B와 vLLM 기반 실행 환경 구성.' },
      { step: '03 · INFERENCE', title: '모델 추론', description: '배치 단위로 데이터를 입력해 모델 추론 수행.' },
      { step: '04 · POST', title: '후처리', description: '추론 결과를 필요한 형태로 정리하고 후처리.' },
      { step: '05 · OUTPUT', title: '결과 추출', description: '후처리된 결과를 최종 데이터로 저장·추출.' }
    ],
    issues: [
      ['GPU 환경 변경', 'A100에서 V100으로 전환되며 실행 조건 차이 확인'],
      ['dtype 호환성', 'V100 환경에 맞춰 bf16 대신 fp16 적용'],
      ['GPU 메모리 제약', '메모리 사용 설정과 실행 조건 조정'],
      ['처리 속도 저하', '단건 중심 처리에서 배치 처리 방식으로 개선']
    ],
    input: 'JSON 형태의 입력 데이터',
    inference: 'LLaMA 3.1 8B · vLLM · Batch Inference',
    output: '후처리된 최종 결과 데이터',
    performanceBefore: '약 12초 / 건',
    performanceAfter: '평균 약 0.04초 / 건',
    summary: '환경 오류 해결 자체에 그치지 않고, 추론 환경을 안정화한 뒤 모델 추론과 후처리를 거쳐 최종 결과를 추출하는 과정까지 완료했습니다.'
  },
  experience: [
    {
      date: '2024.06 — 2024.12',
      title: '사회통계 관련 업무',
      description: '저출생 관련 지표 관련 데이터 분석과 육아휴직통계 검증 업무를 수행했습니다.'
    },
    {
      date: '2025.01 — 2025.11',
      title: '온라인 가격 데이터 관련 업무',
      description: 'Python 기반 데이터 정제·전처리 자동화, Excel 결과 출력, LLM 활용 및 내부용 GUI 제작 업무를 수행했습니다.'
    }
  ]
};