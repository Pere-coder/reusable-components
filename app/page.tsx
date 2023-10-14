import Image from 'next/image'
import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center p-10 '>
     <p>Creating a super reusable React UI component together</p>
     <Button className='mt-5'>Click me</Button>
    </main>
  )
}
