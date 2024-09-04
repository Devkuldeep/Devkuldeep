import Image from "next/image";


export default function About() {
  return (<>

    <main className="flex min-h-screen flex-col items-center justify-between p-8 select-none w-full">

      <h3 id="about" className="lg:text-4xl text-3xl font-bold text-black">About Me</h3>

      <section className="pt-10  md:pt-0 sm:pt-16 2xl:pt-16">
      
        <div className="px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="grid items-center grid-cols-1 md:grid-cols-2">

            <div>
              <h2 className="text-xl font-semibold leading-tight text-slate-700   lg:text-xl mt-2 lg:mt-6">Kuldeep Patel - Aspiring Full Stack Developer
              </h2>
              <p className="max-w-lg mt-1 sm:mt-3 text-[16px] sm:text-[16px] leading-relaxed text-gray-600      whitespace-pre-line   ">
             


                  I’m a passionate Full Stack Developer with a solid foundation in web development and software engineering. Currently pursuing my MCA, I have a deep interest in coding, programming, and technology. My curiosity for understanding how things work quickly turned into a desire to create and innovate. I’m always eager to learn new technologies and build scalable, efficient software solutions.
              </p>

              <p className="mt-2 text-xl text-gray-600  md:mt-4">
                
                
                <span className="relative inline-block">
                  <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>

                  <span className="relative cursor-pointer select-none">Visit My <a href="https://www.linkedin.com/in/kuldeep-patel-09a0041a7/" title="linkedin"
                    className="transition-all duration-200 font-semibold text-sky-500  hover:text-sky-600  hover:underline"> Linkdin</a>  </span>
                </span>

                <br className="block sm:hidden " />
                

               <span className="inline-block mt-2 sm:m-4">
               Explore <a href="https://www.github.com/devkuldeep" title=""
                  className="transition-all duration-200 font-semibold text-sky-500  hover:text-sky-600  hover:underline"> Github</a>
               </span>
              </p>
            </div>  

            <div className="relative">
                <Image className="  " src="/about.png" alt="Image" width="600" height="600" />

                
            </div>

          </div>
        </div>
      </section>









      <section className="container mx-auto px-4 space-y-6 bg-slate-50 py-4 md:py-4 lg:py-8">

        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 id="about" className="lg:text-4xl text-3xl mt-2 font-bold text-black">Skills</h3>
{/* 
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">

          </p> */}

        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
              <Image src={"/frontend.png"} alt={"image"} className="object-contain mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">Frontend Development:</h3>
                <p className="text-sm text-muted-foreground"> Html  Css Javascript.</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
            <Image src={"/backend.png"} alt={"image"} className="object-contain mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">Backend Development:</h3>
                <p className="text-sm"> Nodejs  Expressjs Php.</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
            <Image src={"/git.png"} alt={"image"} className="object-contain mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">Version Control:</h3>
                <p className="text-sm text-muted-foreground">Git Github.</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
            <Image src={"/prob.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">Problem Solving: </h3>
                <p className="text-sm text-muted-foreground">DataStructure Algorithms.</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
            <Image src={"/db6.png"} alt={"image"} className="object-contain mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">Database Management:</h3>
                <p className="text-sm text-muted-foreground">Mongodb Mysql .</p>
              </div>
            </div>
          </div>

          <div
            className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between items-center rounded-md p-6">
            <Image src={"/api2.png"} alt={"image"} className="object-contain ab mx-auto" width={70} height={70}/>
              <div className="space-y-2">
                <h3 className="font-bold">API Integration:</h3>
                <p className="text-sm text-muted-foreground">Rest Api.</p>
              </div>
            </div>
          </div>

        </div>

      </section>

























      <>
       
        <section id="new-features" className="py-2 bg-white sm:py-10 lg:py-4">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold mt-4 mb-12 sm:mb-2 leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                Expertise
              </h2>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">

              </p>
            </div>
            <div className="grid grid-cols-1 mt-2 text-center sm:mt-4 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
              {/* Feature 1 */}
              <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <Image src={"/frontend4.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Web Developement
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Specializing in modern, responsive web applications using React, Next.js, and Node.js.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                <Image src={"/software4.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Software Architecture:
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Designing scalable systems with a focus on modularity and the MVC pattern.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="md:p-8 lg:p-14 md:border-l md:border-b md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-blue-200 flex justify-center items-center">
                <Image src={"/blockchain.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  Blockchain and Web3
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Knowledgeable in blockchain and Web3 for future-ready decentralized applications.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="md:p-8 lg:p-14 md:border-t md:border-r md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                <Image src={"/github.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  GitHub Integration:
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Expertise in integrating GitHub for smooth collaboration, version control, and deployment.
                </p>
              </div>
              {/* Feature 5 */}
              <div className="md:p-8 lg:p-14 md:border-t md:border-r  md:border-gray-200 flex flex-col justify-center items-center">
                <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                <Image src={"/cloud.png"} alt={"image"} className="object-contain  mx-auto" width={70} height={70}/>
                </div>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  cloud Integration:
                </h3>
                <p className="mt-2 text-base text-gray-600">
                  Expertise in integrating GitHub for smooth collaboration, version control, and deployment.
                </p>
              </div>




            </div>
          </div>
        </section>
      </>


























      <section className=" select-none cursor-pointer">
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
              <h2 className="font-heading mb-4 bg-orange-100 text-orange-900 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-sm font-semibold tracking-widest  uppercase title-font ">
                Why choose us?
              </h2>
              <p className="font-heading mt-8  sm:mt-2 text-xl  font-semibold tracking-tight leading-tight text-gray-900 sm:text-4xl capitalize">
                I know tech, I know the solutions. I am web expert.
              </p>
              <p className=" mt-2 sm:mt-2 max-w-2xl text-sm sm:text-lg text-gray-500 lg:mx-auto">
                i know how to handle projects in a effiecient way . i care for flexibility and scalibility.
              </p>
            </div>
            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Project Name 1:
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    Brief overview highlighting key features, technologies, and problem-solving approach.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Project Name 2:
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Key project focusing on challenges and solutions.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Project Name 3:
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    Showcasing expertise in a specific area like blockchain, frontend, or backend.
                  </dd>
                </div>
                <div className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                      <Image src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" width="300" height="300" />
                    </div>
                    <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">
                      Project Name 4:
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {" "}
                    A popular project demonstrating the use of cutting-edge technology or innovative approaches.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>




    </main>
  </>
  );
}
