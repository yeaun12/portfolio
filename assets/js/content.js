window.PORTFOLIO_CONTENT = {
  hero: {
    titleHtml: '데이터를 통해<br><em>문제를 정리하고 해결하는</em> 사람입니다.',
    lead: '데이터 전처리·품질 점검·자동화 경험을 바탕으로 반복 작업을 구조화하고, LLM을 실제 데이터 업무에 적용하는 과정까지 경험했습니다.',
    pills: ['데이터 처리·분석', 'Python 활용', 'LLM 활용 경험']
  },

  strengths: [
    {
      number: '01',
      title: '반복 작업을 구조화합니다',
      description: '반복적인 데이터 처리 과정을 Python 기반의 자동화 흐름으로 바꾸는 업무를 수행했습니다.'
    },
    {
      number: '02',
      title: '데이터를 검증하며 다룹니다',
      description: '온라인 가격 데이터의 정제·전처리와 품질 점검, 결과 검증 업무를 수행했습니다.'
    },
    {
      number: '03',
      title: '새로운 도구를 업무에 적용합니다',
      description: 'LLaMA 3.1 8B와 vLLM 기반 추론 환경을 구축하고 대량 배치 추론 과정에 활용했습니다.'
    }
  ],

  work: {
    process: [
      { step: '01', title: '데이터 수집·불러오기', description: '일별 데이터를 불러와 월 단위 처리 흐름으로 구성.' },
      { step: '02', title: '데이터 병합', description: '일별 데이터를 월 단위로 병합하고 품목 정보를 연결.' },
      { step: '03', title: '정제·규칙 적용', description: '가격 관련 값과 상품명·단위 정보를 규칙에 따라 정리.' },
      { step: '04', title: '품질 점검', description: '이상치와 처리 결과를 점검해 분석 가능한 형태로 정리.' },
      { step: '05', title: '결과 출력', description: '처리 결과를 Excel 형태로 자동 출력.' }
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
    summary: '모델 자체를 개발한 경험이 아니라, 제한된 GPU 환경에서 LLM 추론 환경을 구성하고 오류 원인을 확인하며 실행 방식과 처리 성능을 개선한 경험으로 정리했습니다.'
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
  ],

  scope: {
    public: [
      '업무에서 수행한 역할과 기술',
      '데이터 처리 과정의 공개용 재구성 예시',
      '업무를 통해 확인된 강점'
    ],
    private: [
      '실제 회사 데이터와 내부 코드',
      '개인 연락처와 상세 개인정보',
      '비밀번호·토큰·API 키 등 비밀값'
    ]
  }
};
