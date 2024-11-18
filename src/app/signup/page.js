import Form from 'next/form'

export default function Home() {
  const analyzeSentiment = async() => {

  }

  return (
    <Form className='w-fit flex flex-col m-auto mt-14 gap-5'>
      <input className='rounded-md bg-zinc-300 text-zinc-900 placeholder:text-zinc-500 px-5 py-1 font-light font-sans' placeholder='username' name="username"/>
      <input className='rounded-md bg-zinc-300 text-zinc-900 placeholder:text-zinc-500 px-5 py-1 font-light font-sans' placeholder='email' type="email" name="email"/>
      <input className='rounded-md bg-zinc-300 text-zinc-900 placeholder:text-zinc-500 px-5 py-1 font-light font-sans' placeholder='password' name="password"/>
      <button type="submit" className="bg-zinc-700 rounded-xl w-1/2 m-auto py-1 font-bold font-sans">Sign up</button>
    </Form>
  );
}