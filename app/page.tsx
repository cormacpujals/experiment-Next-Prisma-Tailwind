import Link from "next/link"
import Form from "./Form";

let port = process.env["PORT"] || "8080";

async function getPosts() {
  /*
  const res = await fetch(`http://localhost:${port}/api/getPosts`);
  if(!res.ok) {
   console.log(res) 
  }
  return res.json()
  */
 return {};
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
