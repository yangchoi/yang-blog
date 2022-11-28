import Image from 'next/image'
import profilePic from '../../public/images/profile.jpg'
import '../global.css'
import '@sakun/system.css'

export default function Page() {
  return (
    <div class="introduction">
      <Image
        src={profilePic}
        alt="Cat Drawing for profilePicture"
        width={300}
        automatically
        provided
      />
      <h1>Yang Hyojeong | Web Developer</h1>
    </div>
  )
}
