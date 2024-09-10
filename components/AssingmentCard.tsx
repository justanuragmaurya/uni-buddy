import BlurFade from './magicui/blur-fade'
import { Button } from './ui/button'
import { BookOpen, IndianRupee, Timer } from 'lucide-react'

function AssingmentCards({ data ,index}: any) {
    return (
        <div className='p-5 m-5 bg-gradient-to-br from-[#fafafa] via-[#fafafa] to-[#e3e3e3] border-gray-400 rounded-md border-[0.5px] flex flex-col justify-between hover:shadow-xl transition-all'>
            <div>
            <h2 className='text-xl font-bold flex gap-2 items-center'><BookOpen /><span className='bg-gradient-to-r from-[#0e0e0e] to-[#3a3a3a] bg-clip-text text-transparent'>
            {data?.title}</span></h2>
            <hr className='border-[#0e0e0e] opacity-10 border-[1px] my-2' />
            <h2 className='text-sm flex'>{data?.description}</h2>
            </div>
            <div className='flex justify-between items-center mt-5'>
                <div className='flex flex-col text-sm text-gray-500 font-semibold justify'>
                    <div className='flex gap-2 items-center'>
                        <Timer size={18} className='text-black font-bold' />Deadline : <span className='text-[#0e0e0e] font-bold'>{data.deadline}</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <IndianRupee size={18} className='text-black font-bold' />Budget : <span className='text-[#0e0e0e] font-bold'>{data?.budget} rs</span>
                    </div>
                </div>
                <Button>Apply</Button>
            </div>
        </div>
    )
}

export default AssingmentCards
