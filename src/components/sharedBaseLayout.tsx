'use client'

import { PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from 'recoil'
import { WEBSITE_LOGO } from '../constants/project.constants'
import { InterFont, ManropeFont } from './fonts'

export function SharedBaseLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href={WEBSITE_LOGO} />
      </head>
      <body
        style={{ height: '100vh', width: '100vw' }}
        className={`${InterFont.className} ${ManropeFont.className}`}
        suppressHydrationWarning={true}
      >
        <div className="relative flex h-full w-full flex-col bg-photon-blue-darker">
          <Toaster
            position="bottom-right"
            reverseOrder={false}
            toastOptions={{
              error: {
                style: {
                  border: '1px solid #ff0000',
                },
              },
              success: {
                style: {
                  border: '1px solid #00ff00',
                },
              },
            }}
          />
          <RecoilRoot>{children}</RecoilRoot>
        </div>
      </body>
    </html>
  )
}
