import React from 'react'

export default async function Page({ params }) {
  const { user_id } = await params; 

  return (
    <div className='w-3/4 m-auto'>
      <h1>User projects: { user_id }</h1>
    </div>
  )
}