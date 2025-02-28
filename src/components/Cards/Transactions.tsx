import Image from 'next/image';
import Avatar5 from '@/components/assets/avatars/avatar5.png';
import Avatar2 from '@/components/assets/avatars/avatar2.png';
import Avatar3 from '@/components/assets/avatars/avatar3.png';
import Avatar4 from '@/components/assets/avatars/avatar4.png';
import { Add } from 'iconsax-react';
function Transactions() {
    const avatars = [Avatar5, Avatar2, Avatar3, Avatar4];
    const transactions = [
        { name: 'Dwayne Johnson', amount: '-Rs. 412.00', balance: '13.54' },
        { name: 'Emma Watson', amount: '-Rs. 210.00', balance: '25.78' },
        { name: 'Chris Evans', amount: '-Rs. 567.00', balance: '18.65' },
        { name: 'Scarlett Johansson', amount: '-Rs. 390.00', balance: '21.44' },
        { name: 'Robert Downey Jr.', amount: '-Rs. 750.00', balance: '10.89' }
    ];
    return (
        <div className="border text-gray-500 w-ful p-3 rounded-2xl space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="font-medium">Quick Transfer</h3>
                <p className="text-sm">See all</p>
            </div>
            <div className="flex items-center justify-start gap-8">
                {avatars.map((avatar, index) => (
                    <Image
                        key={index}
                        src={avatar}
                        alt={`Avatar ${index + 1}`}
                        height={52}
                        width={52}
                        className="rounded-full"
                    />
                ))}
                <span className='bg-gray-200 border-full rounded-full w-52 h-10 flex items-center justify-center'>
                    <Add size={32} />
                </span>
            </div>
            <hr />

            <div className='flex flex-col items-start justify-center gap-2'>
                {transactions.map((transaction, index) => (
                    <div
                        className='flex items-center justify-between w-full select-none cursor-pointer bg-red-50 p-2 rounded-xl'
                        key={index}
                    >
                        <div className='flex items-center gap-2'>
                            <Image src={Avatar2} alt='loom' height={36} width={36} className='rounded-full' />
                            <div className='font-medium'>
                                <p className='text-sm text-gray-500'>Dwayne Johnson</p>
                                <p className='text-xs text-gray-700 font-medium'>13.54</p>
                            </div>
                        </div>
                        <p className='text-sm font-medium text-red-500'>-Rs. 412.00</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Transactions;