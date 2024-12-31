'use client';
import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    backgroundColor: "#51a0ae",
    // text: "ارسال در کمترین زمان",
    // text2: "با پیک موتوری مرسوله‌ها را سریع ارسال کنید",
  },
  {
    backgroundColor: "#4f5056",
    // text: "فرار از ترافیک شهر",
    // text2: "با تاکسی موتوری در کمترین زمان به مقصد برسید",
  },
  {
    backgroundColor: "#dddddd",
    // text: "حمل سریع بارهای سنگین",
    // text2: "با وانت، بارهای سنگین را آسان و مطمئن جابجا کنید",
  },
  {
    backgroundColor: "#112f45",
    // text: "حمل سریع بارهای سنگین",
    // text2: "با وانت، بارهای سنگین را آسان و مطمئن جابجا کنید",
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
        <div className="flex flex-wrap">
          {/* مربوط به پس‌زمینه اسلاید  */}
          <div
            className="md:w-5/12 w-full md:order-2 h-[100vh] flex justify-center items-center"
            style={{
              backgroundColor: slides[currentSlide].backgroundColor,
              width: "100%",
            }}
          >
            <h1 className="absolute top-44 left-5 text-9xl text-gray-800 text-opacity-25">
              Dargah <br/>
              integrated <br />
              andishehpardaz
            </h1>
            <h2 className=" absolute top-56 right-96 text-4xl font-bold text-white ">
            راهکار یکپارچه درگاه
            </h2>
            <p className=" absolute top-72 right-96 w-52 text-white text-xl">مدیریت برگزاری مناقصات و مزایدات ،تامین کنندگان، کنترل امور قراردادها،دعاوی حقوقی و املاک در یک نرم افزار</p>
            <button className="absolute top-[60%] right-[30%]  rounded-lg p-3 text-white bg-[#51a0ae]">
              درخواست دمو
            </button>
            <Image className="z-10 absolute top-52 left-96"
              src='/12.png'
              width={400}
              height={400}
              alt="img1"
             />
            <Image className=" absolute top-80 right-40"
              src='https://andishehpardaz.ir/wp-content/uploads/revslider/coffee_cup.png'
              width={500}
              height={500}
              alt="img1"
             />
            <Image className=" absolute left-5 top-3/4"
              src='https://andishehpardaz.ir/wp-content/uploads/revslider/wood_pencil.png'
              width={400}
              height={400}
              alt="img1"
             />
            <Image className=" absolute left-72 top-[80%]"
              src='https://andishehpardaz.ir/wp-content/uploads/revslider/eraser_pink.png'
              width={300}
              height={300}
              alt="img1"
             />
            {/* اینجا می‌توانید متن اضافی یا تصویر دیگری قرار دهید */}
          </div>

          <div className="w-full md:w-5/12 text-center ">
            <h2 className="text-2xl text-center w-full md:text-3xl">
              {slides[currentSlide].text}
            </h2>
            <p className="text-xl text-center w-full md:text-2xl text-gray-500">
              {slides[currentSlide].text2}
            </p>
            {/* <button className="bg-blue-500 p-5 rounded-xl text-white text-xl">
              ثبت درخواست
            </button> */}
          </div>
        </div>

        {/* دایره‌های نشان‌دهنده اسلاید */}
        <div className="absolute top-1/3 right-3 h-full p-2">
  <div className="hidden md:flex flex-col items-end  space-y-5">
    {slides.map((_, index) => (
      <div
        key={index}
        onClick={() => handleTimelineClick(index)}
        className={`h-3 w-3 rounded-2xl cursor-pointer ${
          currentSlide === index ? "bg-white" : "bg-slate-400"
        }`}
      />
    ))}
  </div>
</div>
      </section>
    </>
  );

  return (

    <>
      <section className="relative w-full md:pt-20">
        <div className="flex flex-wrap justify-evenly">
          <div className="md:w-5/12 w-full md:order-2">
            {/* <Image
              src={slides[currentSlide].image}
              alt={`Slide ${currentSlide}`}
              width={600}
              height={400}
              className="w-full h-auto"
            /> */}
          </div>

          <div className="w-full md:w-5/12 text-center py-20 *:my-5">
            <h2 className="text-2xl text-center w-full md:text-3xl">{slides[currentSlide].text}</h2>
            <p className="text-xl text-center w-full md:text-2xl text-gray-500">{slides[currentSlide].text2}</p>
            <button className="bg-blue-500 p-5 rounded-xl text-white text-xl">ثبت درخواست</button>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-2">
          <div className="hidden md:flex justify-center items-center ">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => handleTimelineClick(index)} // کلیک روی تایم‌لاین
                className={`h-5 w-5 mx-5 rounded-2xl cursor-pointer ${currentSlide === index ? "bg-black" : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full flex flex-wrap justify-evenly items-center mt-32 ">
        <div className="w-full md:w-5/12 relative">
        </div>

        <article className="w-full md:w-5/12 *:my-10 mt-20 md:mt-0 ">
        </article>

      </section>

      <section className="w-full mt-32  *:my-10">
      </section>
      <section className="w-full flex flex-wrap justify-evenly my-20"> 
      
      </section>
    </>
  );
}