import {
  WEBSITE_DESCRIPTION,
  WEBSITE_TITLE,
} from '@/constants/project.constants'
import '@/styles/globals.css'
import { ReactNode } from 'react'
import { SharedBaseLayout } from '../components/sharedBaseLayout'

export const metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return <SharedBaseLayout>{children}</SharedBaseLayout>
}
