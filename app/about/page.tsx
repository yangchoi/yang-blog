import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile.jpg'

export default function Page() {
  return (
    <div className="introduction">
      <div className="introduction-head">
        <Image
          src={profilePic}
          alt="Profile picture"
          width={300}
          height={300}
        />
        <h2>Yang Hyojeong</h2>
        <p>Software Engineer</p>
      </div>

      <div className="separator"></div>

      <div className="introduction-section">
        <h3>Summary</h3>
        <p>
          Engineer with 5+ years of experience in data pipelines, batch
          processing, and cloud infrastructure operations. Led full development
          lifecycles from concept to production as a sole developer managing
          backend, data pipelines, and infrastructure.
        </p>
      </div>

      <div className="separator"></div>

      <div className="introduction-section">
        <h3>Technical Expertise</h3>
        <ul>
          <li><strong>Languages:</strong> Python, TypeScript, Bash, Ruby</li>
          <li><strong>Data / Pipeline:</strong> Airflow (MWAA), Batch Processing, ETL</li>
          <li><strong>Cloud:</strong> AWS (S3, ECS, Lambda, MWAA, Athena, CloudWatch)</li>
          <li><strong>DB:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
          <li><strong>Backend:</strong> NestJS, Django, DRF, Ruby on Rails</li>
          <li><strong>Frontend:</strong> Next.js, SvelteKit, React</li>
          <li><strong>AI Tools:</strong> Claude Code, GitHub Copilot, ChatGPT</li>
        </ul>
      </div>

      <div className="separator"></div>

      <div className="introduction-section">
        <h3>Careers</h3>

        <h4>DeSpread</h4>
        <p className="career-role">Software Engineer | 2025.09 - Present</p>
        <ul>
          <li>Operated Airflow-based batch pipelines for data collection and processing</li>
          <li>Designed Full Text Search API with Kiwi tokenizer</li>
          <li>Deployed services on AWS ECS with ArgoCD</li>
        </ul>

        <h4>Mediquitous</h4>
        <p className="career-role">Full Stack Software Engineer | 2022.10 - 2025.05</p>
        <ul>
          <li>Optimized query performance by 75% (12s → 3s) through SQL profiling</li>
          <li>Built AWS infrastructure monitoring dashboard</li>
          <li>Engineered data migration with consistency verification</li>
        </ul>

        <h4>SellerNote</h4>
        <p className="career-role">Back-End Developer | 2021.10 - 2022.09</p>
        <ul>
          <li>Built Order Management System integrating Coupang, Cafe24 APIs</li>
          <li>Implemented bulk Excel upload system (50MB+)</li>
          <li>Refactored OMS into standalone MSA service</li>
        </ul>

        <h4>Petner</h4>
        <p className="career-role">Back-End Developer | 2020.09 - 2021.10</p>
        <ul>
          <li>Redesigned settlement batch system for accurate tax computation</li>
          <li>Built async processing pipelines using Sidekiq</li>
          <li>Introduced TDD methodology reducing bug occurrence by 40%</li>
        </ul>
      </div>

      <div className="separator"></div>

      <div className="introduction-section">
        <h3>Education</h3>
        <p><strong>Korea National Open University</strong> - B.S. Computer Science (2022 - Present)</p>
        <p><strong>Chikushi Jogakuen University</strong> - Language Exchange, Japan (2018 - 2019)</p>
        <p><strong>Dong-A University</strong> - B.S. Management Information Systems (2015 - 2020)</p>
      </div>

      <div className="separator"></div>

      <div className="introduction-section">
        <h3>Languages</h3>
        <ul>
          <li><strong>Korean</strong> - Native</li>
          <li><strong>English</strong> - Intermediate</li>
          <li><strong>Japanese</strong> - Fluent</li>
        </ul>
      </div>

      <hr />
      <p>
        <Link href="https://github.com/YangChoi">GitHub</Link>
        {' | '}
        <Link href="https://www.linkedin.com/in/yanghyojeong/">LinkedIn</Link>
      </p>
    </div>
  )
}
