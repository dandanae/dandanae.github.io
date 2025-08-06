import { Project } from './types'

export const Project004: Project = {
  id: 'project-004',
  tags: ['AWS(RDS)', 'PHP', '사이드 프로젝트'],
  title: '자동차 운전 환경 제어 시스템',
  subtitle: '파이썬 OpenCV의 사용 경험과 숙련도를 높이기 위해 교육 과정 중 만든 5 인 프로젝트예요.',
  challenge: 'AWS(RDS), PHP',
  date: '2022. 10. 17. - 2022. 11. 11.',
  image: '',
  links: [],
  libraries: [],
  role: '서버 및 DB 관리를 맡았어요.',

  content: (
    <>
      <h1>👥 팀원</h1>
      <ul>
        <li>서버 및 DB 관리 1인</li>
        <li>아두이노 4인</li>
      </ul>
      <h1>📌 주요 업무</h1>
      <ul>
        <li>MySQL 기반의 데이터베이스 구조 설계</li>
        <li>PHP 기반 웹 서버 구축 및 프론트엔드 구현</li>
        <li>아두이노와 웹 서버 간 통신 로직 개발</li>
      </ul>
      <h1>💡 프로젝트를 통해 얻은 경험</h1>
      <ul>
        <li>
          팀원들이 로컬 MySQL 서버를 함께 사용하기 어려운 점을 해결하기 위해 <code>AWS RDS</code>를
          도입하여 협업 환경을 개선했어요.
        </li>
        <li>
          아두이노가 데이터베이스와 직접 연결하는 데 한계가 있어, 웹 서버를 중계 서버로 활용하여{' '}
          <code>HTTP 통신 방식</code>을 통해 데이터 흐름을 설계했어요.
        </li>
        <li>
          아두이노가 서버와 연결되어, 문자열 내에서 원하는 정보를 <code>indexOf</code>와{' '}
          <code>substring</code>을 활용하여 추출하는 파싱 로직을 구현했어요.
        </li>
        <li>
          PHP의 <code>mysqli_connect</code>와 <code>MySQL_query</code>를 활용하여 안정적인 DB 연결과
          데이터 처리 방식에 대한 경험을 쌓았어요.
        </li>
      </ul>
    </>
  ),
}
