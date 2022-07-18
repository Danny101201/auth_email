import React, { ReactNode } from 'react'
import Link from 'next/link'

import { signIn, signOut, useSession } from "next-auth/react"

function Navbar() {
  const { data, status } = useSession()
  console.log({ data, status })
  return (

    <div>
      <nav className='nav'>
        <div className='text'>
          <Link href="/">Auth</Link>
        </div>
        <div className={`links ${status === 'loading' && !data ? 'loading' : 'loaded'}`}>
          <div>
            <Link href="/dashboard">dashboard</Link>
          </div>
          <div>
            <Link href="/blog">blog</Link>
          </div>
          <div>
            {!data && (
              <Link href="#">
                <a href="" onClick={e => {
                  e.preventDefault()
                  signIn('github')
                }}>
                  signin
                </a>
              </Link>
            )
            }
          </div>
          {data && (
            <div className="signin_out">
              <Link href="#">
                <a href="" onClick={e => {
                  e.preventDefault()
                  signOut({ callbackUrl: '/' })
                }}>
                  signout
                </a>
              </Link>
              <div className="user-profile">
                <p>Hellow !! {data.user?.name}</p>
                <div className="img_container">
                  <img src={data?.user?.image as string} alt="" />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar