import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile.jpg'
import '../global.css'
import '@sakun/system.css'

export default function Page() {
  return (
    <div class="introduction">
      <div class="introduction-head">
        <Image
          src={profilePic}
          alt="Cat Drawing for profilePicture"
          width={300}
          automatically
          provided
        />
        <h2>Yang Hyojeong</h2>
        <h1>Web Developer Perhaps</h1>
      </div>
      <div className="separator"></div>
      <div class="introduction-skills">
        <h3>Main Skills</h3>
        <ul>
          <li>Python, Django Restful Framework</li>
          <li>TypeScript, JavaScript</li>
          <li>MySQL, PostgreSQL</li>
        </ul>
        <h1>Experiences</h1>
        <ul>
          <li>NestJS with TypeScript</li>
          <li>Ruby on Rails</li>
        </ul>
        <h1>Learning</h1>
        <ul>
          <li>Svelte</li>
          <li>Next.js</li>
        </ul>
      </div>
      <div className="separator"></div>
      <div class="introduction-careers">
        <h3>Careers</h3>
        <h1>Mediquitous</h1>
        <p>2022.10 - present</p>

        <h1>Sellernote</h1>
        <p>2021.10 - 2022.09</p>

        <h1>Petner</h1>
        <p>2020.09 - 2021.10</p>
      </div>
      <div className="separator"></div>
      <div class="introduction-degrees">
        <h3>Education</h3>
        <h1>筑紫女学園大学 Language Exchange Programm</h1>
        <p>2019.09 - 2020.02</p>
      </div>
      <hr />
      <p>
        More Information HERE 👉👉
        <Link href="https://docs.google.com/document/d/1kstIvuthLIDqVqEXc_6I2Xg9bInYSsE6ryuBPyJftTQ/edit#heading=h.qmoe6gd4lvf">
          📩 Resume 📩
        </Link>
      </p>
    </div>
  )
}
