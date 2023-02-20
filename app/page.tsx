import Link from "next/link"
import Form from "./Form";


async function getPosts() {
  const url = "https://fullstack-next-prisma-tailwind-ka02srpb5-cormacpujals.vercel.app";
  // const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  const res = await fetch(`${url}/api/getPosts`);
  if(!res.ok) {
   console.log(res) 
  }
  return res.json()
}

export default async function Home() {
  const data : {id: number, title: string, content: string}[] = await getPosts()
  console.log(data)
  return (
    <main className="px-4 py-4">
      <Form />
      {data.map(post => (
        <h1 className="text-lg py-6">{post.title}</h1>
      ))}
    </main>
  )
}
