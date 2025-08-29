import React from 'react'

import Link from 'next/link'

const AboutProfile = () => {
  return (
    <div className="flex w-full items-center justify-between gap-5 pb-10">
      <div className="relative flex flex-col">
        <span className="text-4xl font-bold">김단해</span>
        <span className="text-foreground/70">
          저는 새로운 기술에 도전하는 것을 두려워하지 않아요!
        </span>

        <div className="mt-4 flex gap-3">
          <InfoContainer>
            <Github />
            <Link
              href="https://github.com/dandanae"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 text-sm"
            >
              Github
            </Link>
          </InfoContainer>

          <InfoContainer>
            <Icon icon="article_person" />
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=lleeve@naver.com&tf=cm"
              className="text-foreground/60 text-sm"
            >
              이력서
            </Link>
          </InfoContainer>

          <InfoContainer>
            <Icon icon="email" />
            <Link
              href="https://mail.google.com/mail/u/0/?fs=1&to=lleeve@naver.com&tf=cm"
              rel="noopener noreferrer"
              className="text-foreground/60 text-sm"
            >
              lleeve@naver.com
            </Link>
          </InfoContainer>

          <div className="flex items-center gap-1 rounded-lg">
            <Icon icon="location_on" />
            <span className="text-foreground/60 text-sm">수원, 대한민국</span>
          </div>
        </div>
      </div>

      <div className="from-primary to-secondary relative h-30 w-30 rounded-full bg-gradient-to-br" />
    </div>
  )
}

export default AboutProfile

const Github = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 98 96"
    className="!fill-primary"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
    />
  </svg>
)

const Icon = ({ icon }: { icon: string }) => (
  <span className="material-symbols-rounded text-primary !text-lg select-none">{icon}</span>
)

const InfoContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="click flex cursor-pointer items-center gap-1 rounded-lg">{children}</div>
)
