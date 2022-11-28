import Image from 'next/image'
import '../global.css'
import '@sakun/system.css'

export default function Page() {
  return (
    <Image
      src={profilePic}
      alt="Cat Drawing for profilePicture"
      width={500}
      automatically
      provided
    />
  )
}
