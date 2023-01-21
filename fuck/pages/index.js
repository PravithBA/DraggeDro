import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { PannelAllowAnywhere } from "draggedro"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const itemStyle = {
    padding: '1rem',
    backgroundColor: 'black',
    display: 'inline-block',
    borderRadius: '1rem',
    width: "inline",
  };
  return (
    <>
      <PannelAllowAnywhere width="100vw" height="100vh">
        <div style={itemStyle}>Object 1</div>
        <div style={itemStyle}>Object 2</div>
      </PannelAllowAnywhere>
    </>
  );
}
