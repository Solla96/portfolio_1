const Contact = () => {
  return (
    <>
      <div>
        <div>
          <h1> Contact page</h1>
          <p> Please feel free to contact me. </p>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <textarea name="message" rows="10" id="textarea" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact