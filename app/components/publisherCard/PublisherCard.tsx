import React from 'react';
import author from '../../../public/author.jpg'
import Image from 'next/image';
import Counter from '../counter/counter';

const PublisherCard = ({ name, designation, follower, article }: { name: string, designation: string, follower: string, article: string }) => {
    return (
        <div className='flex  bg-orange-800 px-8 py-3 rounded-2xl space-x-4'>
            {/* Image with follow */}
            <div className="flex flex-col items-center space-y-2">
                <div className="w-22 h-22 rounded-full overflow-hidden">
                    <Image
                        src={author}
                        alt="author"
                        width={88}
                        height={88}
                        className="object-cover w-full h-full"
                    />
                </div>
                <button className="px-3 py-1 text-white  text-sm">
                    Follow
                </button>
            </div>



            {/* detail section  */}
            <div className='flex flex-col justify-between   w-full'>
                {/* info */}
                <div className='flex flex-col overflow-ellipsis'>
                    <h3 className='text-xl font-medium block  '>{name}</h3>
                    <p className='text-white/50'>{designation}</p>

                </div>

                {/* subcriber  */}
                <div className='flex justify-between w-full max-w-56'>
                    {/* article */}
                    <Counter count={article} title='article' />
                    <Counter count={follower} title='follower' />

                </div>

            </div>

        </div >
    );
};

export default PublisherCard;