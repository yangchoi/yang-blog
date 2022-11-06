import Image from 'next/image'
import utilStyles from '../styles/utils.module.css'

export const introduce = 'Web Developer who loves to learn something new.'
const HomeLayout = ({ introduce }) => {
  return (
    <main>
      <div class="alert-box outer-border scale-down">
        <div class="inner-border">
          <div class="alert-contents">
            <section class="field-row">
              <Image
                priority
                class="square"
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt=""
              />
              <p class="alert-text">{introduce}</p>
            </section>
            <section class="field-row">
              <button class="btn">Cancel</button>
              <button class="btn">OK</button>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomeLayout
