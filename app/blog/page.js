import Link from 'next/link'
import Image from 'next/image'
import fs from "fs"
import path from "path"
import matter from  "gray-matter"
// import Pagination from "../components/pagination"
// import { getAllBlogs, blogsPerPage } from "../utils/mdQueries"

async function getAllBlogs() {
    const files = fs.readdirSync(path.join("data"))
    const blogs = files.map((fileName) => {
        const slug = fileName.replace(".md", "")
        const fileData = fs.readFileSync(
            path.join("data" , fileName),
            "utf-8"
        )
        const { data } = matter(fileData)
        return{
            frontmatter: data,
            slug: slug,
        }
    })
    const orderedBlogs = blogs.sort((a, b) => {
        return b.frontmatter.id - a.frontmatter.id
    })
    return{
        blogs: orderedBlogs
    }
}

const Blog = async() => {
    const { blogs } = await getAllBlogs()
    console.log(blogs)
    return (
        <>
            <div className='wrapper'>
                <div className='container'>
                <h1>Blog page</h1>
                    {blogs.map((blog, index) =>
                    <div key={index} className='blogCard'>
                    <div className='cardContainer'>
                        <h2>{blog.frontmatter.title}</h2>
                        <p>{blog.frontmatter.excerpt}</p>
                        <p>{blog.frontmatter.date}</p>
                        <Link href={`/blog/${blog.slug}`}>Read More</Link>
                    </div>
                    <div className='blogImg'>
                        <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
                    </div>
                </div>
            )}
        </div>
        {/* <Pagination  numberPages={numberPages} /> */}
        </div>
        </>
    )
}

export default Blog

// import Link from 'next/link'
// import Image from 'next/image'
// // import Pagination from "../components/pagination"
// // import { getAllBlogs, blogsPerPage } from "../utils/mdQueries"

// export const metadata = {
//     title: "ブログ",
//     description: "これはブログページです",
// }

// const Blog = async() => {
//     const { blogs, numberPages } = await getAllBlogs()
//     const limitedBlogs = blogs.slice(0, blogsPerPage)
//     return (
//         <>
//         <div className="wrapper">
//             <div className="container">   
//                 <h1>Blog</h1>
//                 <p>エンジニアの日常生活をお届けします</p>
//                     {limitedBlogs.map((blog, index) => 
//                         <div key={index} className="blogCard"> 
//                             <div className="cardContainer">
//                                 <h2>{blog.frontmatter.title}</h2>
//                                 <p>{blog.frontmatter.excerpt}</p>
//                                 <p>{blog.frontmatter.date}</p>
//                                 <Link href={`/blog/${blog.slug}`}>Read More</Link>
//                             </div>
//                             <div className="blogImg">
//                                 <Image src={blog.frontmatter.image} alt="card-image" height={300} width={1000} quality={90} priority={true} />
//                             </div>
//                         </div>
//                     )}  
//             </div>  
//             <Pagination numberPages={numberPages} />
//         </div>
//         </> 
//     )
// }

// export default Blog