'use client'
import React from 'react'

import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div>
          <div className="text-lg">검색</div>
        </div>
        <div>
          <div className="relative">
            {/* <Search className="text-muted-foreground absolute top-3 left-3 h-4 w-4" />
             <Input placeholder="포스트 검색..." className="pl-10" /> */}
          </div>
        </div>
      </div>

      {/* Profile */}
      <div>
        <div>
          <div className="flex items-center gap-2 text-lg">
            {/* <User className="h-5 w-5" /> */}
            프로필
          </div>
        </div>
        <div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-600 font-bold text-white">
              김개발
            </div>
            <h3 className="mb-1 font-semibold">김개발</h3>
            <p className="text-muted-foreground mb-3 text-sm">Frontend Developer</p>
            <p className="text-sm leading-relaxed">
              사용자 중심의 웹 애플리케이션을 만드는 것을 좋아합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="ring-secondary/30 rounded-xl p-4 ring">
        <div>
          <div className="text-lg font-semibold">카테고리</div>
        </div>
        <div>
          <div className="space-y-2">
            {categories.map((category: any) => (
              <Link
                href={`/category/${encodeURIComponent(category.name)}`}
                key={category.name}
                className="group flex cursor-pointer items-center justify-between rounded-xl px-4 py-2 transition-colors duration-300"
              >
                <span className="group-hover:text-secondary text-sm transition-all duration-300 group-hover:text-lg group-hover:font-semibold">
                  {category.name}
                </span>
                <div className="border-b-primary/40 mx-2 w-full border-b border-dashed" />
                <span className="ring-primary/40 text-primary min-w-7 rounded-full px-2 text-center text-sm ring">
                  {category.count}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
