import React from 'react'
import { getSession, getCsrfToken, signIn, useSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'
function Blog({ text }: { text: string }) {
  const session = useSession()
  async function myFunction() {
    const csrfToken = await getCsrfToken()
    /* ... */
    return csrfToken
  }


  return (
    <div>Blog - {text}</div>
  )
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  const csrfToken = await getCsrfToken()

  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin?callbackUrl=/blog',
        permanent: false
      }
    }
  }
  return {
    props: {
      session,
      text: session ? 'hasSession' : 'hasNotSession'
    }
  }

}

export default Blog
