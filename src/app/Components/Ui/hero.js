import Image from "next/image";


export default function Hero() {
  return (<>

    <div className=" w-full   m-auto sm:p-14 p-8">

      <section className="hero m-auto w-full">
        

        <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="bg-orange-800 order-2">
            <Image src="/kuldeep.jpeg"  alt="Kuldeep Dev" width="300" height="350" />
</div>
          <div className="order-1 lg:order-1  flex flex-col justify-center lg:items-start text-center sm:text-left ">
            <p className="mt-2 text-3xl font-semibold md:text-lg sm:text-sm text-black">Hi There</p>
            <p className="text-4xl font-bold md:text-7xl  text-black ">I&apos;m
              <span className="text-orange-500">Kuldeep Dev</span>.
            </p>
            <p className="text-3xl  md:text-3xl font-semibold text-black ">I am a {'FullStack Developer '} <span>

            </span></p>
            <p className="mt-2 lg:text-xl md:text-sm sm:text-xs text-black ">Designer and Developer devoted to
              crafting beautiful web experiences
              focused on simplicity and purpose.</p>
         
         
            <div className='flex items-center justify-center'>
              <button className="text-lg md:text-2xl bg-orange-300 text-slate-900 py-2 m-2 px-5 mt-10 hover:bg-orange-500 rounded-full outline-1  font-bold  transition-all duration-500" ><a href='/webdevelopment'>Projects</a></button>
              <button className="text-lg md:text-2xl bg-orange-300 text-black py-2 m-2 px-5 mt-10 font-bold  hover:bg-orange-500 rounded-full transition-all duration-500" > <a href='/cv.pdf'>CV ⬇️</a></button>
            </div>


          </div>
         
        </div>
      </section>

    </div>

  </>
  );
}
