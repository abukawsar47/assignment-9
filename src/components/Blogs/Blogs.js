import React from 'react';

const Blogs = () => {

    return (
        <div className='blogs-container w-4/5 mx-auto my-4'>
            <>
                <h2 className='text-xl md:text-4xl'>1) What is Context API? </h2>
                <p className='my-3'><span className='text-xl font-bold text-red-600'>Ans:</span> রিঅ্যাক্ট কনটেক্সট এপিআই হল একটি রিঅ্যাক্ট অ্যাপের জন্য কার্যকরভাবে গ্লোবাল ভেরিয়েবল তৈরি করার একটি সিস্টেম ।  কনটেক্সট কে  অনেক জায়গায় ব্যবহার  করা যেতে পারে। এটি "প্রপ ড্রিলিং" বা গ্রান্ডপারেন্টস থেকে পেরেন্টস থেকে চিলড্রেন এর  কাছে ডাটা পাঠানোর  বিকল্প সিস্টেম।</p>
                <p>React.createContext () This provides a consumer and a provider.প্রদানকারী এমন একটি উপাদান যা এটির নাম অনুসারে তার সন্তানদের স্টেট প্রদান করে। এটি "স্টোর" করে রাখবে এবং সেই স্টোরের ডাটা প্রয়োজন হলে পেরেন্টস থেকে সমস্ত ডাটা নিয়ে ব্যবহার করা যায় ৷ ভোক্তা তার প্রয়োজন অনুসারে একটি উপাদান যা স্টেট গ্রহণ করে এবং ব্যবহার করে।</p>
            </>
            <>
                <h2 className='text-xl md:text-4xl mt-4'>2) What is the difference between inline and inline-block elements?</h2>
                <p className='my-3'><span className='text-xl font-bold text-red-600'>Ans:</span> Css box model অনুযায়ী html এর প্রতিটি এলিমেন্ট একেকটি স্কোয়ার বক্স। এর মধ্যে কিছু ব্লক লেভেল এলিমেন্ট আর কিছু inline .</p>
                <p className='my-3'>Block এলিমেন্ট নিজের প্রপার্টি আলাদা রাখে। যেমন:  heading , paragraph tag etc .</p>
                <p className='my-3'>Inline এলিমেন্ট নিজের প্রপার্টি আলাদা রাখে না। যেমন:  span , strong , small  tag etc.</p>
                <p className='my-3'>সাধারণত inline এলিমেন্ট কে ব্লক এলিমেন্ট এর মতো করার জন্য inline-block বেবহার করা হয়।  এর ফলে inline এলিমেন্ট ও ব্লক এলিমেন্ট এর মতো নিজের প্রপার্টি আলাদা করে ফেলে এবং সে একই এক লাইন এ থাকে।  </p>
            </>

        </div>
    );
};

export default Blogs;