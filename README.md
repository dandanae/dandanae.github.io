# 🌐 dandanae.github.io
개인 포트폴리오 및 블로그 사이트로 활용할 수 있는 **Next.js 기반 웹사이트**예요.  

📎 **블로그 바로 가기**  
👉 [https://dandanae.github.io/](https://dandanae.github.io/)

## ⚙️ 기술적 고려 사항
- **정적 페이지**  
  - `GitHub Pages` 특성상 서버 사이드 로직이 없으므로, 정적으로 빌드되는 구조를 설계했어요.
- **정적 빌드 + 배포**  
  - Next.js의 `App Router` + `MDX 파서` 조합으로 정적 빌드 후 배포해요.
- **SEO 최적화**  
  - `sitemap`, `robots.txt`, 메타데이터 설정으로 검색엔진 노출을 고려했어요.

## 📝 블로그 구조와 특징
- **MDX 기반 작성**  
  - Markdown 문법 + JSX 조합으로 포스트 작성 가능  
- **카테고리 구분**  
  - 폴더 단위로 카테고리를 관리해요.  
  - 파일명은 해당 글의 **slug**가 되고, 폴더 구조와 합쳐져 최종적으로 **페이지 경로(URL path)** 가 돼요.
    > `posts/frontend/react.mdx` → slug = `react` → 경로 = `/blog/frontend/react`

- **포스트 자동 수집**  
  - 파일을 읽어와 목록을 생성하는 헬퍼 함수를 사용해요:

    ```ts
    export const getAllFiles = async (dir: string): Promise<string[]> => {
      const dirents = await readdir(dir, { withFileTypes: true })
      const files = await Promise.all(
        dirents.map((dirent) => {
          const res = path.resolve(dir, dirent.name)
          return dirent.isDirectory() ? getAllFiles(res) : res
        }),
      )
      return Array.prototype.concat(...files)
    }
    ```

- **다크모드 지원**  
  - `next-themes`를 사용해 시스템 테마 연동 및 토글을 제공해요.  

- **반응형 레이아웃**  
  - 모바일 · 태블릿 · 데스크탑 환경에서 모두 최적화된 UI를 제공해요.  

## 🛠️ 기술 스택

### Next.js
- **Next.js v15**
  - `App Router`, `next export` 기반 정적 사이트

### MDX
- **라이브러리**: `@mdx-js/react`, `next-mdx-remote`  
- **플러그인**:  
  - remark: `remark-gfm`, `remark-breaks`  
  - rehype: `rehype-highlight`, `rehype-slug`, `rehype-autolink-headings`

### 스타일링 & UI
- **TailwindCSS v4**  
  - 플러그인: `tw-animate-css`, `tailwind-variants`, `class-variance-authority`
- **Framer Motion** – 애니메이션
- **Radix UI** – `react-collapsible`, `react-tooltip`
- **next-themes** – 다크모드 지원

## `ProjectCard` 컴포넌트
💻 **코드 보러 가기**  
👉 [ProjectCard](https://github.com/dandanae/dandanae.github.io/blob/main/src/app/about/components/projectCard/ProjectCard.tsx)  
👉 [ProjectContent](https://github.com/dandanae/dandanae.github.io/blob/main/src/app/about/components/projectCard/ProjectContent.tsx)

이 프로젝트에서는 프로젝트 소개용 **커스텀 카드 UI**를 직접 구현했어요.  
단순히 텍스트만 나열하는 게 아니라, **반응형 + 애니메이션 + 재사용성**을 모두 고려했어요.

- **공유 레이아웃 전환 (Shared layout)**
  - `framer-motion`의 `layoutId` + `AnimatePresence`로 카드 → 모달 사이가 부드럽게 전환돼요.
  - layoutId로 카드 ↔ 모달 사이를 자연스럽게 연결하는 shared element transition을 구현했어요.
- **접근성(ARIA)**
  - 카드에 `role="button"`, 모달에 `role="dialog" aria-modal="true"` 등 ARIA 속성을 세심하게 적용해 접근성 표준을 신경 쓰려고 노력했어요.
- **포커스/키보드 UX**
  - 모달이 열리면 오버레이에 포커스를 주고, `Escape`로 닫을 수 있어요.
- **바디 스크롤 락**
  - 모달이 열리면 `document.body.style.overflow='hidden'`으로 뒷배경 스크롤을 막아 UX를 해치지 않도록 했어요.
- **반응형/다크모드 최적화**
  - Tailwind 유틸 클래스로 다양한 뷰포트와 테마에서 자연스럽게 동작해요.
- **태그 칩 & 오버플로우 처리**
  - 태그가 많을 때 `+N` 뱃지와 호버 팝오버로 깔끔하게 숨김/표시함으로써 UI를 깨트리지 않도록 했어요. 

단순히 글만 있는 블로그가 아니라, 직접 만든 UI 컴포넌트를 통해 인터랙션과 디자인을 담아낸 게 특징이에요.

# 📌 앞으로 해보고 싶은 것들
- 댓글 기능  
- 검색 기능 (예: Fuse.js)  
- ~~비밀 글 (구조상 완벽하게는 어려울 것 같지만..)~~
