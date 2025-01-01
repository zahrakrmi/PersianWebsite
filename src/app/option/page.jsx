'use client'
import Image from 'next/image'

export default function Business() {
    return (

        <>
            <section className='w-full h-full flex flex-wrap justify-center items-center py-20  bg-[#56adac]'>
                 <div className='flex flex-wrap justify-center items-center  mt-20 *:my-5' >
              <p className='text-xl md:text-3xl font-bold text-white w-full text-center '> برخی ویژگی های سامانه درگاه </p>
            </div>
            </section>

            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#f1f5fb]'>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/wp-content/uploads/2021/10/yekparche.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  یکپارچگی </h2>
                    <p className='text-2xl text-[#56adac] '>یکبار اطلاعات رو وارد کن و بینهایت از آنها استفاده کن</p>
                    <p className=' text-lg  '>دیگه نیازی به جدا وارد کردن اطلاعات در هر نرم افزار نیست، شما می توانید یک بار اطلاعات را وارد کرده و در هر کجای سیستم که تمایل داشتید از آن استفاده کنید به عنوان مثال قادر خواهید بود یک درخواست مناقصه رو به  یک پرونده حقوقی وصل کرده یا اطلاعات یک درخواست رو به یک قرارداد متصل کنید و …</p>
                </article>
            </section>
            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#f1f5fb]'>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  بایگانی و آرشیو الکترونیک اسناد </h2>
                    <p className='text-2xl text-[#56adac] '>زونکن ها از قفسه های شما نیز جمع می شوند
                    </p>
                    <p className=' text-lg  '>
                    تمامی اسناد و مستندات سازمانتان، نظیر اسناد شرکت در مناقصات، مستندات قراردادها، اطلاعات تامین کنندگان، پرونده های حقوقی و … رو در بخش آرشیو الکترونیک در پوشه های مشخص آپلود و ثبت کنید، پوشه ها را به هم انتقال دهید و از آنجا به راحتی اسناد را جستجو و پیدا کنید</p>
                </article>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/wp-content/uploads/2021/10/search.png" alt='lapotpo' />
                </figure>
            </section>
            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#f1f5fb]'>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/wp-content/uploads/2021/10/sooratjalaseh.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'>  تولید خودکار مکاتبات و مستندات </h2>
                    <p className='text-2xl text-[#56adac] '>سه صوته صورتجلسه بنویس!</p>
                    <p className=' text-lg  '>نیاز نیست که هر بار صفر تا صد صورتجلسه مد نظرتون رو بنویسید، کافیه که فقط یکبار قالب صورتجلسه رو در سیستم تعریف کنید،</p>
                </article>
            </section>
            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#f1f5fb]'>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'> تقویم یادآوری رویدادها </h2>
                    <p className='text-2xl text-[#56adac] '>دیگه تاریخ های مهم، از دستت در نمی ره!</p>
                    <p className=' text-lg  '>در داشبورد نرم افزار درگاه، تقویمی برای یادآوری رویدادها وجود داره که به شما نشون می ده که چه رویدادهایی در گذشته اتفاق افتاده است، چه رویدادهایی امروز اتفاق خواهد افتاد و چه رویدادهایی در آینده پیش روی شماست بدین ترتیب هیچ رویداد مهمی رو فراموش نخواهید کرد.</p>
                </article>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/wp-content/uploads/2021/10/taghvim.png" alt='lapotpo' />
                </figure>
            </section>
            <section className='w-full h-full flex flex-wrap justify-evenly py-20 bg-[#f1f5fb]'>
                <figure className='w-full md:w-5/12'>
                    <Image width={500} height={500} src="https://andishehpardaz.ir/wp-content/uploads/2021/10/modiriat.png" alt='lapotpo' />
                </figure>
                <article className='w-full md:w-5/12 *:m-5 py-14'>
                    <h2 className='text-3xl font-bold text-orange-400'> مدیریت برگزاری مناقصه </h2>
                    <p className='text-2xl text-[#56adac] '>به راحتی تشخیص بده هر مناقصه یا مزایده دقیقا در چه مرحله ای قرار داره</p>
                    <p className=' text-lg  '>با ورود به هر یک از درخواست ها به راحتی متوجه خواهید شد که آن درخواست در چه مرحله ای از کار قرار داره: درخواست اولیه، آگهی، ارزیابی کیفی، در حال برگزاری، لغو شده، تجدید شده، واگذاری یا …</p>
                </article>
            </section>



           
        
        </>
    )
}
