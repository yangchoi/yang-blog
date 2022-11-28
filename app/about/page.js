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
      <h2>Yang Hyojeong</h2>
      <h1>Web Developer Perhaps</h1>
      <p>This is From about/page.js</p>
    </div>
  )
}
