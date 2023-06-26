import Link from 'next/link'

const Footer = () => {
  return(
    <footer>
      <div>
        <a href="https://github.com/Solla96" ><img src="/images/github.svg" alt="logo" /></a>
        <a href="https://jp.linkedin.com/" ><img src="/images/linkedin.svg" alt="logo" /></a>
        <a href="https://twitter.com/Solla009" ><img src="/images/twitter.svg" alt="logo" /></a>
        <a href="https://www.facebook.com/sota.uchibori.3/" ><img src="/images/facebook.svg" alt="logo" /></a>
        <hr />
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
        <p>©️{new Date().getFullYear()} Solla</p>
      </div>
    </footer>
  )
}

export default Footer