import { Project } from './types'

export const Project007: Project = {
  id: 'project-007',
  tags: ['AWS(EC2)', '유지보수', '회사 프로젝트'],
  title: '사내 Rest API 유지보수',
  subtitle: '운영 중인 Rest API의 유지보수와 신규 기능 개발을 담당했어요.',
  challenge: 'AWS(EC2)',
  date: '2023. 06 ~ 2025. 07',
  image: '',
  links: [{ title: 'PIE PARTNER', href: 'https://partner.pie.co.kr/' }],
  libraries: [],
  role: '유지보수와 추가 기능 개발을 담당했어요.',

  content: (
    <>
      <h1>📌 주요 업무</h1>
      <h2>보안과 편의 기능 개선</h2>
      <ul>
        <li>결과 페이지에 생년월일 인증을 추가해 보안성 강화</li>
        <li>회원 탈퇴 기능과 아이템 그룹 복사 기능 개발</li>
        <li>운영 중 발생한 API 관련 버그 지속적 수정</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>이미지 보안 이슈</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>
          S3에 업로드된 이미지의 경로가 <code>bucket 이름</code>을 포함하여 노출되고 있었어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>
          php 파일이라 따로 관리하기에 어려움이 있어, <code>image.php</code> 파일을 따로 만들어
          이미지 파일을 분리했어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>보안을 강화하고, 사용자에게 안전하게 데이터를 제공하는 방법을 익혔어요.</li>
      </ul>

      <h2>운영 환경</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>AWS EC2, S3 환경에서의 접근 제어와 로그 관리가 미숙했어요.</li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>
          <code>AWS EC2</code> 기반 환경에서 <code>WinSCP</code>와 키 페어, 퍼미션 설정을 다루며{' '}
          실제 서버 접근과 파일을 전송했어요.
        </li>
        <li>
          DB 관리를 <code>DBeaver</code>로 일원화하여 운영 효율을 높였어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li></li>
        <li>
          운영 DB에 직접 접근하여 데이터 확인·수정 및 SQL 쿼리 작성을 하면서, 서비스 운영 관점의
          데이터 흐름을 이해했어요.
        </li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>안정적인 API 운영</h2>
      <ul>
        <li>API 보안성을 높이고 신규 기능을 제공해 서비스 만족도를 높였어요</li>
      </ul>
    </>
  ),
}
