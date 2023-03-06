"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import { useRecoilState } from "recoil";
import { subscribeModalAtom } from "../atoms/modals";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isModalOpen, setModalOpen] = useRecoilState(subscribeModalAtom);

  useEffect(() => {
    console.log({ isModalOpen });
  }, [isModalOpen]);

  return (
    <main>
      <p>Salve rapaziada no NV99</p>
      <button
        onClick={() => {
          setModalOpen((current) => !current);
        }}
      >
        BOTAO
      </button>
    </main>
  );
}
