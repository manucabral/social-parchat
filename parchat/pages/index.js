import Head from "next/head"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Parchat</title>
      </Head>
      <Sidebar />
    </div>
  )
}
