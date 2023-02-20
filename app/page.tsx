import Link from "next/link"

export default function Home() {
  return (
    <main className="py-8 px-48">
      <Link href={"/dashboard"} className="bg-gray-500 text-white font-medium py-2 px-4 rounded-md">Go to the dashboard</Link>
    </main>
  )
}
