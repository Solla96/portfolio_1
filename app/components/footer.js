import Link from 'next/link'

const Footer = () => {
  return(
    <footer>
      <div>
        <a href="#" ><img src="/images/github.svg" alt="logo" /></a>
        <a href="#" ><img src="/images/linkedin.svg" alt="logo" /></a>
        <a href="#" ><img src="/images/twitter.svg" alt="logo" /></a>
        <a href="#" ><img src="/images/facebook.svg" alt="logo" /></a>
        <hr />
        <Link href="#">Blog</Link>
        <Link href="#">Contact</Link>
        <p>©️{new Date().getFullYear()} Solla</p>
      </div>
    </footer>
  )
}

export default Footer