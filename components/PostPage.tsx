"use client"
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import axios from "axios"
import { useToast } from "@/hooks/use-toast"
import { cn } from "@/lib/utils";
import { useState } from "react";


export default function PostPage() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [deadline,setDeadline] = useState(new Date);
  const [budget,setBudget] = useState("");
  const [contact, setContact] = useState("");

  const { toast } = useToast()

  const [loading,setLoading] = useState(false);
  const [dataSent,setSent] = useState(false);

  const data = {
    title: title,
    desc: desc,
    deadline : deadline,
    budget: budget,
    contact: contact    
  };

  const handleSubmit = async(e:any) =>{
        e.preventDefault();
        setLoading(true);
        await axios.post("/api/post",data);
        setLoading(false);
        setSent(true);
        toast({
            className: cn(
                'top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4'
              ),
            title: "Data added succesfully !",
            description: "Your data has been saved succesfully...",
          })
  }

  return (
    <form onSubmit={handleSubmit}>
    <div className="flex justify-center">
      <div className="flex flex-col max-w-xl bg-gradient-to-br from-[#fafafa] to-[#eaeaea] border-[0.5px] border-gray-400 rounded-md w-full mt-40 p-5 m-4" >
        <h2 className="text-2xl flex gap-2 items-center font-bold"> <NotebookPen /> Post your assignment: </h2>
        <hr className="mt-5 border-[1px] border-black opacity-10" />
        <div className="mt-5 flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-semibold">Title: </h2>
            <input onChange={(e)=>{setTitle(e.target.value)}} required className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-400 py-1 px-5 w-full" placeholder="Enter the topic or Name"></input>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-md font-semibold">Description: </h2>
            <textarea onChange={(e)=>{setDesc(e.target.value)}} required className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-400 py-1 px-5 w-full h-[100px]" placeholder="Enter the other neccesary details over here that would help to know more about the assingment..." />
          </div>
          <div className=" grid grid-cols-2 gap-2">
            <div className="flex flex-col gap-1">
              <h2 className="text-md font-semibold">Deadline: </h2>
              <input type="date" onChange={(e) => setDeadline(new Date(e.target.value))} required className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-400 py-1 px-5 w-full" placeholder="DD-MM-YYYY"></input>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="text-md font-semibold">Budget in ₹: </h2>
              <input type="number" onChange={(e)=>{setBudget(e.target.value)}} required placeholder="₹XXX/-" className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-400 py-1 px-5 w-full"></input>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-1">
              <h2 className="text-md font-semibold">Contact : </h2>
              <h2 className="text-xs opacity-50">*will not be shared with others, until you accept their's assignment proposal</h2>
            </div>
            <input onChange={(e)=>{setContact(e.target.value)}} required type="number" className="bg-[#f4f4f4] text-md rounded-md border-[0.5px] border-gray-400 py-1 px-5 w-full" placeholder="Enter your phone number."></input>
          </div>
        </div>
        <Button className="mt-5" type="submit"> POST </Button>
      </div>
    </div>
    </form>
  )
}
