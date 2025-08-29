import React from 'react'

import { Project } from './types'

export const Project001: Project = {
  id: 'project-001',
  tags: ['C', '사이드 프로젝트'],
  title: '급여 관리 프로그램',
  subtitle: 'C 언어의 사용 경험과 숙련도를 높이기 위해 교육 과정 중 만든 프로젝트예요.',
  challenge: 'C',
  date: '2022. 06. 30. - 2022. 07. 01.',
  role: '전체 기획부터 구현까지 단독으로 진행했어요.',
  content: (
    <>
      <h1>📌 주요 업무</h1>
      <h2>직원 등록·계산·저장까지의 단일 플로우 구현</h2>
      <ul>
        <li>
          사용자 입력 기반의 직원 등록 로직 구현 — <code>q</code>/<code>Q</code> 입력 시 정상 종료
        </li>
        <li>등록 데이터로 직원 수, 최고 시급자(이름/급여), 전체 급여 합계를 계산해 출력</li>
        <li>
          결과 데이터를 텍스트 파일로 저장해 종료 후에도 기록을 확인할 수 있도록 데이터 보존 기능
          구현
        </li>
      </ul>

      <h1>💡 제작 중 어려웠던 점</h1>
      <h2>종료 조건과 연산자 실수로 인한 예외 처리</h2>
      <h3 className="bg-secondary/20">🚫 어려웠던 점</h3>
      <ul>
        <li>
          <code>"q"</code>로 시작하는 이름도 프로그램이 종료되는 버그가 있었어요.
        </li>
        <li>
          비교 연산자 <code>==</code>와 할당 연산자 <code>=</code> 혼동으로 의도치 않은 동작이
          발생했어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">✅ 문제 해결 방법</h3>
      <ul>
        <li>
          <code>info[i].name[0] == 'q' && info[i].name[1] == '\0'</code>처럼 종료 문자열 전체 일치
          여부로 조건을 세밀화했어요.
        </li>
        <li>
          컴파일러 경고를 적극 확인하고, <code>'q' == info[i].name[0]</code>처럼 상수를 좌측에 두는
          습관으로 오타 리스크를 낮췄어요.
        </li>
      </ul>
      <h3 className="bg-secondary/20">🌱 배운 점</h3>
      <ul>
        <li>입력 → 처리 → 저장으로 이어지는 기본 프로그램 구조를 직접 완성해 봤어요.</li>
        <li>
          사소한 조건/연산자 실수가 전체 흐름을 바꿀 수 있어, 예외와 종료 조건을 더 엄격히 다루게
          되었어요.
        </li>
      </ul>

      <h1>🚀 주요 성과 및 효과</h1>
      <h2>기초 탄탄화</h2>
      <ul>
        <li>데이터 흐름과 예외 처리의 기본기를 체득했어요.</li>
      </ul>
    </>
  ),
}
