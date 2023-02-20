"use client"
import { useRouter } from "next/navigation";
import React, { useState } from 'react';

export default function FormPost() {
  const [title, setTitle] = useState("")
  const router = useRouter()
  // Create and submit post
  async function submitPost(e:React.FormEvent) {
    e.preventDefault()
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    })
    const res = await data.json()
    router.refresh()
    if (!res.ok) console.log(res)
  }

  return (
    <form onSubmit={submitPost}>
      <input 
      className="border-2 border-black rounded-md"
      type="text"
      onChange={(e) => setTitle(e.target.value)}
      value={title}
      /> &nbsp;
      <button type="submit">Make a new post</button>
    </form>
  )
}