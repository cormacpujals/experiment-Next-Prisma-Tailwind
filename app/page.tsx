import Link from "next/link"
import Form from "./Form";

async function getPosts() {
  //const url = `https://${process.env.VERCEL_URL}/api/getPosts`;
  const url = `https://fullstack-next-prisma-tailwind-nvcsxgraj-cormacpujals.vercel.app/api/getPosts`;
  const res = await fetch(url);
  if(!res.ok) {
   console.log(res);
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
