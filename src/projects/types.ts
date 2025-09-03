import React from 'react'

export type ProjTag =
  | '개발'
  | '유지보수'
  | '사이드 프로젝트'
  | '회사 프로젝트'
  | 'C'
  | 'C++'
  | 'C#'
  | 'PHP'
  | 'React'
  | 'Flutter'
  | 'AWS(RDS)'
  | 'AWS(EC2)'
  | 'AWS(ECR-ECS)'

export interface ProjLink {
  title: string
  href: string
  icon?: string
}

export interface ProjTask {
  title: string
  lists: React.ReactNode[]
}

export interface ProjHardTask {
  title: string
  problems: React.ReactNode[]
  solutions: React.ReactNode[]
  learningPoints: React.ReactNode[]
}

export interface ProjResult {
  title: string
  lists: React.ReactNode[]
}

export interface Project {
  id: string
  tags: ProjTag[]
  title: string
  subtitle: string
  challenge: string
  date: string
  role: string
  tasks: ProjTask[]
  hardTasks: ProjHardTask[]
  results: ProjResult[]

  content?: React.ReactNode
  image?: string
  links?: ProjLink[]
  libraries?: ProjLink[]
}

export const projectTags: Record<ProjTag, { color: string }> = {
  개발: {
    color: 'bg-blue-100 text-blue-800',
  },
  유지보수: {
    color: 'bg-yellow-100 text-yellow-800',
  },
  '사이드 프로젝트': {
    color: 'bg-green-100 text-green-800',
  },
  '회사 프로젝트': {
    color: 'bg-gray-200 text-gray-800',
  },
  C: {
    color: 'bg-purple-100 text-purple-800',
  },
  'C++': {
    color: 'bg-purple-100 text-purple-800',
  },
  'C#': {
    color: 'bg-purple-100 text-purple-800',
  },
  PHP: {
    color: 'bg-teal-100 text-teal-800',
  },
  React: {
    color: 'bg-cyan-100 text-cyan-800',
  },
  Flutter: {
    color: 'bg-sky-100 text-sky-800',
  },
  'AWS(RDS)': {
    color: 'bg-orange-100 text-orange-800',
  },
  'AWS(EC2)': {
    color: 'bg-orange-100 text-orange-800',
  },
  'AWS(ECR-ECS)': {
    color: 'bg-orange-100 text-orange-800',
  },
}
