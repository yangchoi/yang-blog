import Image from 'next/image'
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
          <li>TDD with Jest</li>
          <li>Ruby on Rails</li>
        </ul>
        <h1>Learning</h1>
        <ul>
          <li>Svelte</li>
          <li>Next.js</li>
        </ul>
        <h1>Interests</h1>
        <ul>
          <li>SQL performance about speed, efficiency and structure</li>
          <li>
            Data Structure and Algorithm with C++/Python for Code performance
          </li>
          <li>Better TDD with Unit Test and E2E Test</li>
          <li>Better TeamWork with Better Communication</li>
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
    </div>
  )
}
