import { Receive } from "iconsax-react";
import { OutlineButton } from "../ui/Button";

function CurrentBalance() {
    return (
        <div className='border text-gray-500 w-full h-fit p-3 rounded-2xl'>
            {/* header */}
            <div className="flex items-center justify-between">
                <div className="flex flex-col items-start justify-start gap-1">
                    <p>Account Balance</p>
                    <p className="text-2xl font-medium text-gray-700">Rs. 89,198.26</p>
                </div>

                <div className="flex items-center justify-between gap-4">
                    <OutlineButton className="h-20 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-md all-center">
                        <div className="rotate-180">
                            <Receive size={24} />
                        </div>
                        <span className="hidden md:inline text-lg">Send Money</span>
                    </OutlineButton>
                    <OutlineButton className="h-20 w-8 gap-1 md:w-auto md:border py-1 px-2 duration-200 hover:bg-gray-100 rounded-lg text-md all-center">
                        <Receive size={24} />
                        <span className="hidden md:inline text-lg">Receive Money</span>
                    </OutlineButton>
                </div>
            </div>
        </div>
    )
};

export default CurrentBalance;