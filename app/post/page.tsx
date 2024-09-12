export default function PostPage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-3xl bg-[#fafafa] border-[0.5px] border-gray-400 rounded-md w-full mt-40 p-5 m-4" >
        <h2 className="text-2xl font-bold">Post your assignment : </h2>
        <hr className="mt-5 border-[1px] border-black opacity-10" />
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-semibold">Title: </h2>
            <input className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-300 py-1 px-5 w-full" placeholder="Enter the topic or Name"></input>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-semibold">Description: </h2>
            <textarea className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-300 py-1 px-5 w-full" placeholder="Enter the other neccesary details over here that would help to know more about the assingment..." />
          </div>
          <div className=" grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-md font-semibold">Deadline: </h2>
              <input type="date" className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-300 py-1 px-5 w-full" placeholder="DD-MM-YYYY"></input>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-md font-semibold">Budget in ₹: </h2>
              <input type="number" className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-300 py-1 px-5 w-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <h2 className="text-md font-semibold">Contact : </h2>
              <h2 className="text-xs opacity-50">*will not be shared with others, until you accept their's assignment proposal</h2>
            </div>
            <input type="number" className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-300 py-1 px-5 w-full" placeholder="Enter your phone number."></input>
          </div>

        </div>
      </div>
    </div>
  )
}