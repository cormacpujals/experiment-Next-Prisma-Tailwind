import Link from "next/link"
import Form from "./Form";

// return [{"id":1,"title":"Cats","content":"Cats are the best ","published":false},{"id":3,"title":"Dogs","content":null,"published":false},{"id":4,"title":"test","content":null,"published":false},{"id":5,"title":"working?","content":null,"published":false},{"id":6,"title":"test","content":null,"published":false},{"id":7,"title":"another test 4 u","content":null,"published":false}];
async function getPosts() {
  return Promise.resolve([]);
  // FU VERCEL

  const url = `https://${process.env.VERCEL_URL}/api/getPosts`;
  //const url = `https://fullstack-next-prisma-tailwind.vercel.app/api/getPosts`;
  try {
    const res = await fetch(url);
    if(!res.ok) {
      console.log(`ERROR: fetch ${url} -> result not ok: ${res}`);
      return [];
    }
    return res.json();
  } catch (e) {
    console.log(`ERROR: fetch ${url}:`, e);
  }
  return [];
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
