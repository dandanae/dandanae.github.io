import { Project } from './types'

export const Project014: Project = {
  id: 'project-014',
  tags: ['React', 'AWS(ECR-ECS)', '개발', '회사 프로젝트'],
  title: 'PIE EVENT',
  subtitle:
    'PIE와 JANUS Pro에 대한 퀴즈를 풀면 추첨을 통해 상품을 주는 이벤트를 위한 페이지를 개발했어요.',
  challenge: 'middleware 관리',
  date: '2025. 04 - 2025. 04.',
  image: '',
  links: [],
  libraries: [
    { title: '@tanstack/react-query', href: 'https://www.npmjs.com/package/@tanstack/react-query' },
    { title: 'mui', href: 'https://mui.com/' },
    { title: 'material-symbols', href: 'https://www.npmjs.com/package/material-symbols' },
    { title: '@use-funnel/browser', href: 'https://www.npmjs.com/package/@use-funnel/browser' },
    { title: 'framer-motion', href: 'https://www.npmjs.com/package/framer-motion' },
    { title: 'next-intl', href: 'https://www.npmjs.com/package/next-intl' },
    { title: 'tailwind-variants', href: 'https://www.npmjs.com/package/tailwind-variants' },
    { title: 'clsx', href: 'https://www.npmjs.com/package/clsx' },
    { title: 'tailwind-merge', href: 'https://www.npmjs.com/package/tailwind-merge' },
  ],
  role: '프론트엔드 개발 및 UI/UX를 총괄했어요.',

  tasks: [
    {
      title: 'PIE EVENT 퀴즈',
      lists: [
        'PIE 회사의 JANUS Pro에 대한 퀴즈를 만들어 풀 수 있도록 했어요.',
        <>
          <code>json</code>으로 다국어에 대응할 수 있도록 만들었어요.
        </>,
        '응모가 완료되면 수집한 이메일로 응모 번호를 전송해요.',
      ],
    },
    { title: '전시회 등록 / 관리', lists: ['자주 가는 전시회를 등록하고 관리할 수 있어요.'] },
    {
      title: '응모 일정 등록 / 관리',
      lists: ['등록된 전시회를 선택해 기간을 정하면 퀴즈 페이지가 열려요.'],
    },
    {
      title: '추첨',
      lists: [
        <>
          <code>framer-motion</code>의 애니메이션 효과를 통해 추첨할 때 긴장감을 유도했어요.
        </>,
      ],
    },
  ],
  hardTasks: [
    {
      title: '하나의 로드밸런서에 두 개의 도메인',
      problems: [
        '이벤트 서버는 항상 켜둘 필요가 없어 기존 서버를 함께 사용하기로 했어요.',
        <>
          단일 로드밸런서에서 <code>event.pie.co.kr</code> 도메인을 별도로 연결해{' '}
          <code>/event</code> 경로만 접근 가능하도록 분기 처리가 필요했어요.
        </>,
      ],
      solutions: [
        <>
          Next.js <code>middleware</code>를 활용해 도메인·경로 기반 분기를 구현했어요.
        </>,
        <>
          <code>X-Forwarded-Host</code> 헤더를 함께 고려하여 프록시 환경에서도 안정적으로 동작하도록
          했어요.
        </>,
        <>
          사용자 경험을 고려해 퍼블릭 페이지는 <code>redirect</code>, API/정적 리소스는{' '}
          <code>rewrite</code>로 처리 기준을 명확히 했어요.
        </>,
        '허용 경로 화이트리스트 방식으로 정규식을 단순화하고 성능 저하를 방지했어요.',
        '누락 케이스 확인을 위해 최소한의 메타데이터(호스트, 경로)를 로깅하고 알림을 추가했어요.',
      ],
      learningPoints: [
        '실무에서 도메인/라우팅 분기 시 보안, 성능, 접근성을 함께 고려하는 운영 패턴을 익혔어요.',
        '웹 표준 가이드라인에 따라 접근 경로를 일관성 있게 유지하는 것이 UX 신뢰성에 직결됨을 체감했어요.',
      ],
    },
  ],
  results: [
    {
      title: '전문적 이미지를 넘어, 친근한 참여 기회 제공',
      lists: [
        'PIE와 JANUS Pro를 기술 중심이 아닌 퀴즈 이벤트 형식으로 풀어내어 사용자 접근 장벽을 낮췄어요.',
        '전문적인 기기라는 인식 때문에 일반 고객 참여가 저조했지만, 이벤트를 통해 가볍게 즐길 수 있는 분위기를 조성했어요.',
        '응모와 추첨 과정을 통해 고객과 직접적으로 연결되는 경험을 제공했어요.',
        '결과적으로 제품 인지도를 넓히고, 잠재 고객층까지 친근하게 다가가는 접점을 새롭게 창출했어요.',
      ],
    },
  ],

  // content: <></>,
}
