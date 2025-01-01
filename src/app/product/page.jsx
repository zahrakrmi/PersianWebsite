'use client'
import Image from 'next/image'
import SimplePaper from '../customers/page';

export default function Business() {
    return (

        <>
            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#56adac]'>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/banner/banner-55.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-white'> سامانه درگاه  </h2>
                    <p className=' text-lg text-white'>نرم افزاری یکپارچه برای<br />
                        مدیریت معاملات، مدیریت قرارداد ها،دعاوی حقوقی و املاک
                    </p>
                    <figure className='w-full md:w-5/12'>
                        <Image width={200} height={200} src="https://andishehpardaz.ir/dargah/assets/images/feature/downarrow5.png" alt='lapotpo' />
                    </figure>
                    <button className='bg-white text-[#56adac] p-5 mx-5 font-bold text-xl rounded-2xl'>درخواست دمو</button>
                    <button className='border text-white p-5 font-bold text-xl rounded-2xl'>دریافت کاتالوگ </button>
                </article>
            </section>

            <section className='w-full h-full flex flex-wrap justify-evenly py-20 '>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/banner/banner-76.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  مستقیم با تامین کننده ها در ارتباط باش  </h2>
                    <p className=' text-lg text-[#56adac]  '>پورتال تامین کنندگان (منبع یابی مناقصه و مزایده)، پل ارتباطی میان شما و تامین کنندگانتان</p>
                </article>
            </section>

            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#56adac] '>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  وندور لیست خودتو داشته باش!  </h2>
                    <p className='text-2xl text-white '>لیست تولید کننده، توزیع کننده و فروشندگان معتبر حوزه ی کاری خودت رو ایجاد کن</p>
                    <p className=' text-lg text-white '>اطلاعات اشخاص حقیقی و حقوقی (شرکت ها، مدیران، گواهی نامه ها، آگهی ها، اطلاعات شناسنامه ای، تحصیلی، سوابق کاری و ...) همه و همه در این بخش قابل ثبته.</p>
                </article>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/banner/banner-73.png" alt='lapotpo' />
                </figure>
            </section>


            <section className='w-full h-full flex flex-wrap justify-evenly py-20 '>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/banner/banner-74.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>بهترین تامین کننده رو پیدا کن!</h2>
                    <p className='text-2xl text-[#56adac] '>تامین کننده هاتو ارزیابی کن و بهشون امتیاز بده</p>
                    <p className=' text-lg text-[#56adac]  '> شما می تونید معیارهای ارزیابی کیفی و فنی مد نظرتون رو تعریف کنید. تامین کنندگان شما هم خواهند توانست با وارد شدن به پورتال خودشون، فرم های ارزیابی کیفی و فنی ایجاد شده توسط شما رو پر کنند و با تشخیص خودتون اون ها رو به صورت الکترونیکی و یا فیزیکی براتون ارسال کنند. </p>
                </article>
            </section>

            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#56adac] '>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  کار اینجا تموم نمی شه!  </h2>
                    <p className='text-2xl text-white '>نرم افزار مدیریت امور قراردادها</p>
                    <p className=' text-lg text-white '>قراردادهات رو ثبت کن و به تمامی فرایندهای مرتبط با قراردادهات در همین سیستم رسیدگی کن

                        تمامی مراحل پس از ثبت قرارداد نظیر متمم ها و الحاقیه ها، تغییر مقادیر، مابه التفاوت و تعدیل ها، تاخیرات و تعلیق ها و ... همه و همه در این بخش رسیدگی خواهد شد.</p>
                </article>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/banner/banner11/banner11.png" alt='lapotpo' />
                </figure>
            </section>


            <section className='w-full h-full flex flex-wrap justify-evenly py-20 '>
            <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/dargah/assets/images/etemad.png" alt='dargah' />
                </figure>
           <SimplePaper />
            </section>
        </>
    )
}
