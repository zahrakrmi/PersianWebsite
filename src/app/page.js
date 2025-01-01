'use client';
import { useState, useEffect } from "react";
import Image from "next/image";
import ColumnsGrid from "./grid/page";
import SimplePaper from "./customers/page";
import ColumnsGrid2 from "./grid2/page";


const slides = [
  {
    backgroundColor: "#51a0ae"
  },
  {
    backgroundColor: "#4f5056"
  },
  {
    backgroundColor: "#dddddd"
  },
  {
    backgroundColor: "#112f45"
  },
];

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleTimelineClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="relative w-full h-full">
        <div className="flex flex-wrap h-full">
          {/* پس‌زمینه اسلاید */}
          <div
            className="relative  w-full md:order-2 flex justify-center items-center h-[100vh] bg-cover bg-center"
            style={{
              backgroundColor: slides[currentSlide].backgroundColor,
              backgroundImage: `url(${slides[currentSlide].backgroundImage || ""})`,
            }}
          >
            {/* محتوا */}
            <h1 className="absolute top-20 md:top-44 left-5 md:left-1 text-5xl md:text-9xl text-gray-800 text-opacity-25">
              Dargah <br />
              integrated <br />
              andisheh <br />
              pardaz
            </h1>
            <h2 className="absolute top-40 md:top-56 right-5 md:right-96 text-2xl md:text-4xl font-bold text-white">
              راهکار یکپارچه درگاه
            </h2>
            <p className="absolute top-60 md:top-72 right-5 md:right-96 w-48 md:w-52 text-white text-sm md:text-xl">
              مدیریت برگزاری مناقصات و مزایدات، تامین کنندگان، کنترل امور قراردادها، دعاوی حقوقی و املاک در یک نرم افزار
            </p>
            <button className="absolute top-[50%] md:top-[60%] right-[10%] md:right-[25%] rounded-lg px-4 py-2 md:p-3 text-white bg-[#51a0ae] cursor-pointer">
              درخواست دمو
            </button>
            <Image
              className="absolute top-36 md:top-52 left-20 md:left-96 w-[200px] h-[200px] md:w-[400px] md:h-[300px]"
              src="/12.png"
              width={400}
              height={300}
              alt="img1"
            />
            <Image
              className="absolute top-80 right-10 md:right-40"
              src="https://andishehpardaz.ir/wp-content/uploads/revslider/coffee_cup.png"
              width={300}
              height={300}
              alt="img1"
            />
            <Image
              className="absolute left-5 top-[70%]"
              src="https://andishehpardaz.ir/wp-content/uploads/revslider/wood_pencil.png"
              width={200}
              height={200}
              alt="img1"
            />
            <Image
              className="absolute left-40 md:left-72 top-[80%]"
              src="https://andishehpardaz.ir/wp-content/uploads/revslider/eraser_pink.png"
              width={150}
              height={150}
              alt="img1"
            />
          </div>

          {/* محتوا سمت چپ */}
          <div className="w-full md:w-5/12 text-center">
            <h2 className="text-xl md:text-3xl text-center w-full">{slides[currentSlide].text}</h2>
            <p className="text-sm md:text-2xl text-center w-full text-gray-500">
              {slides[currentSlide].text2}
            </p>
          </div>
        </div>

        {/* دایره‌های نشان‌دهنده اسلاید */}
        <div className="absolute top-1/3 right-3 h-full p-2">
          <div className="hidden md:flex flex-col items-end space-y-5">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleTimelineClick(index)}
                className={`h-3 w-3 rounded-2xl cursor-pointer ${currentSlide === index ? "bg-white" : "bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ///////section2///////////// */}
      <section className="w-full flex flex-wrap justify-evenly items-center mt-32 ">
        <article className="w-full md:w-5/12 *:my-10 mt-20 md:mt-0 ">
          <h2 className="text-2xl md:text-4xl font-bold">نرم افزار مدیریت معاملات و قراردادها</h2>
          <p className="text-xl md:text-2xl text-[#56adac] ">متخصصین اندیشه پرداز با تحلیل دقیق و پیش بینی کلیه نیازهای مربوط به فرایندهای معاملات و امور قراردادها و کنترل عملکرد پیمانکاران، نرم افزار یکپارچه درگاه را طراحی و ایجاد کرده اند.

            درگاه یک نرم افزار یکپارچه است که روند سخت برگزاری معاملات، مدیریت قراردادها و رسیدگی به تامین کنندگان را برای کاربران آسان تر کرده و مشکلاتی همچون نگهداری حجم بالای اسناد و مدارک کاغذی، فراموشی تاریخ های مهم، پیچیدگی و زمان بر بودن فرایند گزارش گیری، روند سخت بررسی پیشرفت پروژه ها، نبود تیپ های استاندارد و یکسان قرارداد، برآورد قیمت و مقدار بودجه و … را تسهیل می بخشد.</p>
          <button className=" p-2 text-[#56adac] rounded-xl text-xl">تمامی امکانات سامانه درگاه در یک نگاه... </button>
        </article>
        <div className="w-full md:w-5/12 relative">
          <ColumnsGrid />
        </div>
      </section>

      {/* ////////section3/////////// */}
      <section className="w-full mt-24 bg-[#f4f4f9]  *:my-10">
        <h5 className="w-full text-center text-xl text-gray-600 pt-5">مدیریت فرایندهای معاملاتی، قراردادها و حقوقی
        </h5>
        <h2 className="w-full text-center text-4xl font-bold">برخی از مشتریان درگاه
        </h2>
        <p className="w-full md:w-1/2 md:mr-80 text-center text-xl">
          دیگه استفاده از ابزار های قدیمی مثل اکسل یا نرم افزارهای رایگان مختلف را فراموش کنید! سامانه درگاه به شما امکان می دهد تا تمامی امور مربوط به معاملات و تامین کنندگان، قراردادها و دعاوی حقوقی خود را فقط و فقط در یک نرم افزار مدیریت کنید.
        </p>

        <article className="w-full flex flex-wrap *:w-full *:md:w-5/12 justify-evenly *:shadow-2xl *:my-5 *:rounded-xl">
          <SimplePaper />
        </article>
      </section>

      {/* ////////section4/////////// */}
      <section className="w-full mt-24  *:my-10">
        <h2 className="w-full text-center text-4xl font-bold">راهکار یکپارچه درگاه
        </h2>
        <p className="w-full md:w-1/2 md:mr-80 text-center text-xl">
          فرآیندهای معاملاتی در سامانه مدیریت داخلی از زمان ثبت درخواست از واحد متقاضی، شروع و پس از طی تشریفات مربوطه (برگزاری مناقصه، استعلام، مزایده یا حراج) با کمک پورتال تامین کنندگان ادامه می یابد. پس از آن فرآیندهای رسیدگی به قرارداد نیز انجام گرفته و در انتها با به پایان رسیدن قرارداد، پروسه در سامانه خاتمه خواهد یافت.
        </p>

        <ColumnsGrid2 />
      </section>
    </>
  );


}