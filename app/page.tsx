import Link from "next/link"
import Form from "./Form";

async function getPosts() {
  // const url = `https://${process.env.VERCEL_URL}/api/getPosts`;
  let url = `https://experiment-next-prisma-tailwind.vercel.app/api/getPosts`;
  // let url = `https://localhost:3000/api/getPosts`;
  const res = await fetch(url);
  if(!res.ok) {
    console.log(res)
  }
  return res.json();
}

export default async function Home() {
  const data : {id: number, title: string, content: string | null, published: boolean}[] = await getPosts()
  console.log(data);
  return (
    <main className="px-4 py-4">
      <Form />
      {data.map(post => (
        <h1 className="text-lg py-6">{post.title}</h1>
      ))}
    </main>
  )
}
