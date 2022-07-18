import React, { useEffect, useState } from 'react'
import { getSession, useSession, signIn } from 'next-auth/react'
function Dashabord() {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const securPage = async () => {
      const session = await getSession();
      console.log(session);

      if (!session) {
        signIn()
        return
      }
      setLoading(false)
    }
    securPage()
  }, [])
  return (
    <div className='dashboard-container'>
      {loading && (
        <div className="loadingPage">
          <div className="loaderPage"></div>
        </div>
      )}
      Dashabord
    </div>
  )
}

export default Dashabord