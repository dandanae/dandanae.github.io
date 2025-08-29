import { Project } from './types'

export const Project002: Project = {
  id: 'project-002',
  tags: ['C++', '사이드 프로젝트'],
  title: 'DVD 관리 프로그램',
  subtitle: 'C++의 사용 경험과 숙련도를 높이기 위해 교육 과정 중 만든 3 인 프로젝트예요.',
  challenge: 'C++',
  date: '2022. 08. 24. - 2022. 08. 25.',
  image: '',
  links: [],
  libraries: [],
  role: '메인 메뉴, 파일 입출력, 블랙리스트 관리 기능을 담당했어요.',

  content: (
    <>
      <h1>👥 팀원</h1>
      <ul>
        <li>메인 메뉴, 파일 입출력, 블랙리스트 관리 1 인</li>
        <li>고객 관리 1 인</li>
        <li>DVD 관리 1 인</li>
      </ul>

      <h1>📌 주요 업무</h1>
      <h2>메뉴/데이터/정책 전반 구현</h2>
      <ul>
        <li>프로그램의 메인 메뉴 UI와 흐름 구현</li>
        <li>고객·DVD 목록을 텍스트 파일로 저장/조회하는 입출력 기능 개발</li>
        <li>특정 고객에 대한 블랙리스트 등록 및 관리 기능 구현</li>
        <li>팀 코드 통합 시 함수명/구조 정리 등 코드 표준화</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>여러 사람의 코드 통합하기</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>기능 통합 시 함수/변수명 충돌과 파일 구조 불일치가 발생했어요.</li>
        <li>고객/블랙리스트/DVD 데이터가 흩어져 있어 구조적 관리가 어려웠어요.</li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>사전 네이밍 규칙과 파일 구조 원칙을 합의해 리팩토링했어요.</li>
        <li>
          핵심 엔티티를 <code>struct</code>로 모델링하고, 공통 헤더/개별 <code>.cpp</code> 분리로
          책임을 명확히 했어요.
        </li>
        <li>
          <code>switch-case</code>와 <code>함수 포인터</code>로 메뉴별 기능 분리·위임을 명확히
          했어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>협업에서 코드 표준화와 네이밍 합의가 통합 비용을 줄인다는 걸 체감했어요.</li>
        <li>데이터 구조화와 모듈 분리로 유지보수성과 확장성을 높일 수 있었어요.</li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>협업 효율 향상</h2>
      <ul>
        <li>이후 팀 프로젝트에서 코드 통합 시간을 단축할 수 있는 기반을 마련했어요.</li>
      </ul>
    </>
  ),
}
