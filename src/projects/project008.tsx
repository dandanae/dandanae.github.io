import { Project } from './types'

export const Project008: Project = {
  id: 'project-008',
  tags: ['React', '유지보수', '회사 프로젝트'],
  title: 'PIE Partner Website',
  subtitle: '고객사 파트너 전용 사이트를 유지보수하고 기능을 개선했어요.',
  challenge: 'Lalavel',
  date: '2023. 08 ~ 2025. 07',
  image: 'https://partner.pie.co.kr/images/front_logo_main_en.png',
  links: [{ title: 'PIE PARTNER', href: 'https://partner.pie.co.kr/' }],
  libraries: [],
  role: '유지보수와 추가 기능 개발을 담당했어요.',

  content: (
    <>
      <h1>📌 주요 업무</h1>
      <h2>UX 개선과 기능 확장</h2>
      <ul>
        <li>UI 구조를 개선하고 여러 기능 통합</li>
        <li>회원 탈퇴와 제품 그룹 복사 기능 추가</li>
        <li>레거시 코드 분석·리팩토링</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>레거시 코드 리딩</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>
          프로젝트가 Laravel 기반으로 오래 유지되면서, 문서화 부족과 복잡한 비즈니스 로직 때문에
          코드를 이해하는 데 시간이 많이 걸렸어요.
        </li>
        <li>
          UI 구조도 일관성이 부족해 새로운 기능을 추가할 때 예기치 못한 사이드이펙트가 발생하기
          쉬웠어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>
          컴포넌트를 단위별로 분리하고 <code>props</code>와 상태 관리를 명확히 정리했어요.
        </li>
        <li>중복되는 로직은 유틸 함수로 추출해 재사용성을 높였어요.</li>
        <li>
          UI 개선 과정에서 접근성 가이드(WAI-ARIA, 시멘틱 태그)를 참고해 레거시 구조를 점진적으로
          교체했어요.
        </li>
        <li>요구사항 변경 시 우선순위를 설정하고 점진적으로 적용해 리스크를 줄였어요.</li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>
          레거시 코드를 다룰 때는 단순히 오류를 수정하는 것을 넘어, <b>구조 개선과 표준화</b>를
          병행해야 유지보수성이 높아진다는 걸 배웠어요.
        </li>
        <li>작은 단위부터 리팩토링을 적용하면 안정적으로 개선할 수 있다는 자신감을 얻었어요.</li>
        <li>
          UX와 접근성을 고려한 리팩토링이 장기적으로 사용자 만족도와 개발 효율 모두에 기여한다는 걸
          체감했어요.
        </li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>사용자 경험 향상</h2>
      <ul>
        <li>UX 개선으로 사용자 만족도를 높이고 고객사 요구사항을 충족했어요.</li>
      </ul>
    </>
  ),
}
