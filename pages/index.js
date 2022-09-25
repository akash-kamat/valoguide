import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <Link href="/agents" >Agents</Link>
      <Link href="/maps" >Maps</Link>
      <Link href="/weapons" >Weapons</Link>
      <Link href="/ranks" >Ranks</Link>
    </div>
  )
}
