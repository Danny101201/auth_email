import { signIn, signOut, getSession } from "next-auth/react"
import type { NextApiResponse, NextApiRequest } from 'next'
import { json } from "stream/consumers"
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session =await getSession({req})
  if(!session) {
    res.status(401).json({error:'Unanthenticated user'})
  }else{
    res.status(200).json({ message: 'Success', session })
  }
}
export default handler