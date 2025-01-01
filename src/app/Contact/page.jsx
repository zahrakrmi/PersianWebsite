
import React from 'react'
import { FaFax } from 'react-icons/fa';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { MdOutlineMail } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdLocationOn } from 'react-icons/md';

export default function Contact() {
    return (
        <section className='w-full justify-evenly flex flex-wrap  *:my-10'>
            <h2 className='w-full text-center text-3xl font-bold'>ارتباط با </h2>
            <h2 className='w-full mr-24 text-3xl font-bold'>تماس با اندیشه پرداز</h2>
            <div className='w-full md:w-5/12 *:flex *:items-center *:mx-2 *:my-5'>
                <h2 className='text-2xl'><MdLocationOn className='text-3xl mx-5 ' />	آدرس: تهران، خیابان کارگر شمالی، خیابان صدوقی، پلاک ۴۷، ساختمان اندیشه پرداز</h2>
                <p><IoCallOutline className='text-3xl mx-5 ' />تلفن: ۶۷۵۷۳(۰۲۱)</p>
                <p><FaEnvelopeOpenText className='text-3xl mx-5 ' />کد پستی: ۱۴۱۸۶۱۳۵۴۱</p>
                <p><FaFax className='text-3xl mx-5 ' />	فکس: ۶۶۱۲۲۳۴۱-۰۲۱</p>
                <p><MdOutlineMail className='text-3xl mx-5 ' />	ایمیل: info@andishehpardaz.ir</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.687492008505!2d51.383455275593064!3d35.70930717257821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e01599c8083e1%3A0x1f83393437e7b4a7!2z2LTYsdqp2Kog2KfZhtiv24zYtNmHINm-2LHYr9in2LI!5e0!3m2!1sen!2sfr!4v1735745201502!5m2!1sen!2sfr" width="600"
                height="450"
                style={{ border: 0 }} // تبدیل به یک شیء جاوااسکریپت
                allowFullScreen={true} // رفع خطای JSX
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>


        </section>
    )
}




