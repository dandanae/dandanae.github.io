import { Project } from './types'

export const Project004: Project = {
  id: 'project-004',
  tags: ['AWS(RDS)', 'PHP', '사이드 프로젝트'],
  title: '자동차 운전 환경 제어 시스템',
  subtitle: '아두이노와 웹 서버를 연동해 운전 환경을 제어하는 시스템을 개발한 5 인 프로젝트예요.',
  challenge: 'AWS(RDS), PHP',
  date: '2022. 10. 17. - 2022. 11. 11.',
  image: '',
  links: [],
  libraries: [],
  role: '서버 및 DB 관리를 담당했어요.',

  content: (
    <>
      <h1>👥 팀원</h1>
      <ul>
        <li>서버 및 DB 관리 1 인</li>
        <li>아두이노 하드웨어 및 센서 제어 4 인</li>
      </ul>

      <h1>📌 주요 업무</h1>
      <h2>웹-하드웨어 연동을 위한 백엔드/DB 설계</h2>
      <ul>
        <li>MySQL 기반 DB 스키마 설계 및 운영</li>
        <li>PHP 기반 웹 서버 구축 및 간단한 프론트엔드 구현</li>
        <li>아두이노와 서버 간 통신 로직(중계/파싱) 설계·개발</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>공유 DB, 중계 구조, 문자열 파싱</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>로컬 MySQL 공유로는 팀 동시 접근/협업이 어려웠어요.</li>
        <li>아두이노가 DB에 직접 연결할 수 없어 데이터 흐름이 단절됐어요.</li>
        <li>아두이노 측에서 서버 응답 중 필요한 정보만 안전하게 추출해야 했어요.</li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>
          <code>AWS RDS</code> 도입으로 팀원이 동시에 접근 가능한 협업 환경을 구성했어요.
        </li>
        <li>
          웹 서버를 중계 계층으로 두고 <code>HTTP</code> 통신으로 데이터를 주고받도록 설계했어요.
        </li>
        <li>
          아두이노에서 <code>indexOf</code>, <code>substring</code>으로 필요한 토큰을 파싱해
          안정화했어요.
        </li>
        <li>
          PHP의 <code>mysqli_connect</code>, <code>mysqli_query</code>로 DB 연결·쿼리 처리를
          표준화했어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>임베디드-웹-DB 간 계층 분리와 통신 프로토콜 설계 감각을 키웠어요.</li>
        <li>클라우드 DB 도입이 협업과 확장성에 얼마나 유리한지 경험했어요.</li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>안정적인 팀 개발 파이프라인</h2>
      <ul>
        <li>
          클라우드 기반 협업 환경에서 하드웨어/서버/DB를 유기적으로 연동해 기능 시연을 안정화했어요.
        </li>
      </ul>
    </>
  ),
}
