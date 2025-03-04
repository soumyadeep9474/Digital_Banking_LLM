import { Book, Diagram } from 'iconsax-react'
import RadialProgress from '../RadialProgress'

function CourseProgress() {
    return (
        <div className='border text-gray-500 w-full p-3 rounded-2xl'>
            {/* header */}
            <div className='flex items-center justify-between'>
                <div className='flex items-center text-sm gap-2'>
                    <Book size={18} />
                    <p className='text-gray-800 font-medium'>Saving Progress</p>
                </div>
                <button className='border px-2 py-1 rounded-lg text-xs'>
                    See all
                </button>
            </div>

            <hr className='bg-gray-400 my-4' />

            {/* content */}
            <div className='flex justify-between'>
                <div className='flex items-center gap-4'>
                    <RadialProgress />
                    <div className='space-y-1'>
                        <p className='text-sm text-gray-800 font-semibold'>Current Saving</p>
                        <p className='text-xs'>Track your savings growth and financial milestones.</p>
                        <p className='text-xs text-primary underline font-semibold underline-offset-2'>Manage Savings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseProgress