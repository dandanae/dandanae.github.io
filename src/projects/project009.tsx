import { Project } from './types'

export const Project009: Project = {
  id: 'project-009',
  tags: ['Flutter', '유지보수', '회사 프로젝트'],
  title: '뷰티플레이스 애플리케이션',
  subtitle: '뷰티플레이스 애플리케이션의의 유지보수와 신규 기능 개발을 맡았어요.',
  challenge: '플레이스토어, 앱스토어 업로드',
  date: '2023. 09 ~ 2025. 07',
  image:
    'https://blog.kakaocdn.net/dna/r0dv4/btsP46hT9e4/AAAAAAAAAAAAAAAAAAAAABcQ8Fx9JjOpaYAu1trQVuJC2cY9gv2sy9dmYBsxFZhQ/img.webp?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1756652399&allow_ip=&allow_referer=&signature=Y9LUfi0XSCk9wRtUEcvYm3bwFFM%3D',
  links: [
    {
      title: 'Beauty Place - Google Play 앱',
      href: 'https://play.google.com/store/apps/details?id=com.pieapp.BeautyPlace&pcampaignid=web_share',
    },
    {
      title: 'App Store에서 제공하는 BeautyPlace',
      href: 'https://apps.apple.com/kr/app/beautyplace/id1562621370',
    },
  ],
  libraries: [],
  role: '유지보수와 신규 기능 개발을 담당했어요.',

  content: (
    <>
      <img src="https://www.pie.co.kr/assets/image/product/sunlike/mobile.png" />
      <h1>📌 주요 업무</h1>
      <h2>애플리케이션 기능 개선</h2>
      <ul>
        <li>패키지를 최신화하고 오류 수정</li>
        <li>전화번호 인증 기능 개선</li>
        <li>회원 탈퇴와 비밀번호 변경 기능 추가</li>
        <li>상품 상세 이동 기능을 구현</li>
        <li>스토어 배포까지 경험</li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>패키지 호환성과 인증</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>패키지 버전 차이로 충돌과 오류가 자주 발생했어요.</li>
        <li>전화번호 인증 과정에서 실패율이 높았어요.</li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>패키지를 최신화하고 호환성을 확인했어요.</li>
        <li>인증 실패 원인을 로그로 추적해 API 요청 로직을 개선했어요.</li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>패키지 관리와 애플리케이션 배포 프로세스를 경험했어요.</li>
        <li>UI 디테일 개선이 사용자 만족에 직접적으로 연결된다는 걸 느꼈어요.</li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>안정성 강화</h2>
      <ul>
        <li>앱의 안정성과 편의성을 높여 고객 불만을 줄이고 사용자 만족을 향상시켰어요.</li>
      </ul>
    </>
  ),
}
