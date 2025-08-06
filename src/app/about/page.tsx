import React from 'react'

import { AboutChallenge, AboutHeader, AboutProfile, AboutProject } from './components'

const page = () => {
  return (
    <div className="divide-primary/30 flex flex-col items-center gap-10 divide-y divide-dashed py-8">
      <AboutHeader />
      <AboutProfile />
      <AboutChallenge />
      <AboutProject />
    </div>
  )
}

export default page
