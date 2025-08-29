import { Project } from './types'

export const Project003: Project = {
  id: 'project-003',
  tags: ['C#', '사이드 프로젝트'],
  title: '커피 매장 관리(POS) 프로그램',
  subtitle:
    'C# WinForm의 사용 경험과 숙련도를 높이기 위해 교육 과정 중 만든 4 not-even:인 프로젝트예요.',
  challenge: 'C# WinForm',
  date: '2022. 09. 19. - 2022. 09. 23.',
  image: '',
  links: [],
  libraries: [],
  role: '주문 관리를 담당했어요.',

  content: (
    <>
      <h1>👥 팀원</h1>
      <ul>
        <li>주문 관리 1 인</li>
        <li>재고 관리 1 인</li>
        <li>유저 관리 1 인</li>
        <li>매출 관리 1 인</li>
      </ul>

      <h1>📌 주요 업무</h1>
      <h2>POS 핵심 플로우와 데이터 영속화</h2>
      <ul>
        <li>MySQL 기반 DB 구조 설계 및 연동</li>
        <li>주문 관리 기능 구현 및 UI 연결</li>
        <li>프로그램과 DB 간 데이터 동기화 로직 개발</li>
        <li>팀 코드 통합과 기능별 UI 요소 정리 및 최종 수정</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>컴포넌트 선택·일관성 및 협업 통합</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>
          유사 기능을 <code>ListBox</code>와 <code>DataGridView</code> 등 서로 다른 UI로 구현해
          일관성이 깨졌어요.
        </li>
        <li>코드 통합 시 화면/상태 관리 기준이 달라 혼선이 있었어요.</li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>컴포넌트별 장단점을 비교해 표준 컴포넌트를 합의하고 화면을 재정렬했어요.</li>
        <li>
          <code>MySQL Workbench</code>로 스키마/테이블을 시각적으로 정의해 팀 공통 언어를
          만들었어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>동일 결과를 내는 다양한 UI 접근을 비교·판단하는 기준을 갖게 되었어요.</li>
        <li>
          DB 연동을 통한 영속성 보장과 화면 일관성이 현업 유지보수에 중요하다는 걸 체감했어요.
        </li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>실사용을 염두에 둔 설계</h2>
      <ul>
        <li>재실행 시에도 데이터가 유지되는 POS를 구현해 실무 친화적인 형태를 완성했어요.</li>
      </ul>
    </>
  ),
}
