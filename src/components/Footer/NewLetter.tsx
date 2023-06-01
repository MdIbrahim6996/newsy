
const NewLetter = () => {
  return (
    <div>
      <p className="text-white text-2xl font-semibold capitalize">email newsletter</p>
      <p className="text-white py-2">Subscribe to receive inspiration, news, and ideas in your inbox.</p>
      <form className="flex flex-col space-y-2">
        <input type="email" name="email" placeholder="Enter your email address"
        className="border-none outline-none p-3 rounded-md"
         />
         <button className="p-3 text-white bg-blue-500 rounded-md uppercase cursor-pointer" type="submit">subscribe</button>
      </form>
    </div>
  )
}

export default NewLetter
