import Link from "next/link"
import Form from "./Form";

async function getPosts() {
  /*
  // const url = "https://fullstack-next-prisma-tailwind-ka02srpb5-cormacpujals.vercel.app"
  const url = "http://localhost:3000"
  // const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  const res = await fetch(`${url}/api/getPosts`);
  if(!res.ok) {
   console.log(res);
  }
  return res.json();
  */

  return Promise.resolve([{"id":1,"title":"Cats","content":"Cats are the best ","published":false},{"id":3,"title":"Dogs","content":null,"published":false},{"id":4,"title":"test","content":null,"published":false},{"id":5,"title":"working?","content":null,"published":false},{"id":6,"title":"test","content":null,"published":false},{"id":7,"title":"another test 4 u","content":null,"published":false}]);
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
