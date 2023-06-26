import Link from 'next/link'
import Image from 'next/image'
import heroPic from "../public/images/index-hero.jpg"
import profilePic from "../public/images/profile.png"
import logoPic from "../public/images/logo-w2.png"

export const metadata = {
  title: "Solla",
  description: "Solla's portfolio"
}

const Index = () => {
  return(
    <>
      <div className='hero'>
        <Image src={heroPic} alt="hero" />
        <div className='textContainer'>
          <Image src ={logoPic} alt ="logo" />
        </div>
      </div>
      <div className='container'>
        <div className='profile'>
          <div>
            <h2>JavaScript Developer</h2>
            <p>I've been learning JavaScript and Related technology since 2023.
            </p>
          </div>
          <div className='image-container'>
            <Image src={profilePic} alt="hero" />
          </div>
        </div>
    </div>
    <div className="skills">
      <h2>Skills</h2>
      <div className="skillsContainer">
      <div><img src="/images/javascript.svg" alt="javascript"/>
      <span>JavaScript / 3 months</span></div>
      <div><img src="/images/react.svg"alt="react"/>
      <span>React / 2 months</span></div>
      <div><img src="/images/gatsby.svg" alt="gatsby"/>
      <span>Gatsby / 1 months</span></div>
      <div><img src="/images/next.svg" alt="next"/>
      <span>Next.JS / 2 months</span></div>
      </div>
    </div>
    <div className='ctaButton'>
      <Link href="/contact">Contact me</Link>
    </div>
    </>
  )
}

export default Index