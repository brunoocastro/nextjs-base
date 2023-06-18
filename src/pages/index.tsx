'use client'

import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { subscribeModalAtom } from '../atoms/modals'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isModalOpen, setModalOpen] = useRecoilState(subscribeModalAtom)

  useEffect(() => {
    console.log({ isModalOpen })
  }, [isModalOpen])

  return (
    <main>
      <p>Teste de página inicial</p>
      <button
        onClick={() => {
          setModalOpen((current) => !current)
        }}
      >
        BOTAO
      </button>
    </main>
  )
}
