import React from 'react'

import { Project } from './types'

export const Project001: Project = {
  id: 'project-001',
  tags: ['C', '사이드 프로젝트'],
  title: '급여 관리 프로그램',
  subtitle: 'C 언어의 사용 경험과 숙련도를 높이기 위해 교육 과정 중 만든 프로젝트예요.',
  challenge: 'C',
  date: '2022. 06. 30. - 2022. 07. 01.',
  role: '사이드 프로젝트로 전부 제가 진행하였어요.',
  content: (
    <>
      <h1>📌 주요 업무</h1>
      <ul>
        <li>
          사용자로부터 직원 정보를 입력받고, <code>q</code> 또는 <code>Q</code> 입력 시 종료되도록
          로직 구성
        </li>
        <li>입력된 정보를 바탕으로 직원 수, 최고 시급 직원의 이름 및 급여, 전체 급여 합산 출력</li>
        <li>결과 데이터를 텍스트 파일로 저장하여 데이터 보존 처리 구현</li>
      </ul>

      <h1>💡 프로젝트를 통해 얻은 경험</h1>
      <ul>
        <li>
          단순한 실습을 넘어 다양한 기능을 결합하여 하나의 프로그램을 완성하는 과정을 경험했어요.
        </li>
        <li>
          종료 조건을 구현하는 과정에서 <code>"q"</code>로 시작하는 이름도 프로그램을 종료시키는
          문제를 발견했고, <code>info[i].name[0] == 'q' && info[i].name[1] == '\0'</code>와 같은
          조건식을 통해 정확하게 처리하는 방법을 배웠어요.
        </li>
        <li>
          조건문 작성 중 <code>==</code>를 <code>=</code>로 잘못 작성하여 디버깅에 시간이 걸렸고,
          이를 통해 컴파일러가 감지할 수 있도록 == 비교 연산자의 피연산자 순서를 바꾸는 팁(
          <code>'q' == info[i].name[0]</code>)을 익혔어요.
        </li>
      </ul>
    </>
  ),
}
