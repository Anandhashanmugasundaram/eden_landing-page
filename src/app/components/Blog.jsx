import React from 'react'

function Blog() {
  return (
    <>
      <div className="container mx-auto p-4 mt-6">
        <div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-semibold">OUR BLOG</p>
            <p className="font-bold text-3xl">Latest News</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
            {/* first one */}
            <div className="m-3">
              <div className="relative">
                <button className="bg-blue-900 absolute w-[30%] h-[7%] mt-3 -ml-2 rounded-r-full">
                  <p className="text-sm font-semibold text-white">20 APR</p>
                </button>
                <img src="/blog1.png" className="rounded-md" alt="blog1" />
                <p className="text-lg font-semibold absolute inset-10 mt-5 text-white">
                  The Covid-19 Epidemic In 2022
                  <br />
                  Is Back
                </p>
              </div>
              <div className="relative">
                <button className="bg-blue-900 absolute w-[30%] h-[14%] mt-3 -ml-2 rounded-r-full">
                  <p className="text-sm font-semibold text-white">20 APR</p>
                </button>
                <img src="/blog2.png" className="mt-4 rounded-md" alt="blog1" />
                <p className="text-lg font-semibold absolute inset-10 text-white">
                  The Covid-19 Epidemic In 2023
                  <br />
                  Is Back
                </p>
              </div>
            </div>

            {/* second one */}
            <div className="m-3">
              <div className="relative">
                <div className="h-48 overflow-hidden rounded-md">
                  <button className="bg-blue-900 absolute w-[30%] h-[5%] mt-3 -ml-2 rounded-r-full">
                    <p className="text-sm font-semibold text-white">20 APR</p>
                  </button>
                  <img
                    src="/blog1.png"
                    className="w-full h-full object-cover object-[50%_15%]"
                    alt="blog1"
                  />
                  <p className="text-lg font-semibold mt-3 absolute inset-10 text-white">
                    The Covid-19 Epidemic In 2022
                    <br />
                    Is Back
                  </p>
                </div>
                <div className="relative">
                  <button className="bg-blue-900 absolute w-[30%] h-[7%] mt-3 -ml-2 rounded-r-full">
                    <p className="text-sm font-semibold text-white">20 APR</p>
                  </button>
                  <img src="/blog3.png" className="mt-6 rounded-md" alt="blog1" />
                  <p className="text-lg font-semibold absolute mt-3 inset-10 text-white">
                    The Covid-19 Epidemic In 2023
                    <br />
                    Is Back
                  </p>
                </div>
              </div>
            </div>

            {/* third one */}
            <div className="m-3">
              <div className="relative">
                <button className="bg-blue-900 absolute w-[30%] h-[7%] mt-3 -ml-2 rounded-r-full">
                  <p className="text-sm font-semibold text-white">20 APR</p>
                </button>
                <img src="/blog1.png" className="rounded-md" alt="blog1" />
                <p className="text-lg font-semibold absolute inset-10 mt-3 text-white">
                  The Covid-19 Epidemic In 2022
                  <br />
                  Is Back
                </p>
              </div>
              <div className="relative">
                <button className="bg-blue-900 absolute w-[30%] h-[14%] mt-3 -ml-2 rounded-r-full">
                  <p className="text-sm font-semibold text-white">20 APR</p>
                </button>
                <img src="/blog2.png" className="mt-4 rounded-md" alt="blog1" />
                <p className="text-lg font-semibold absolute inset-10 text-white">
                  The Covid-19 Epidemic In 2023
                  <br />
                  Is Back
                </p>
              </div>
            </div>

            {/* fourth one */}
            <div className="m-3">
              <div className="relative">
                <div className="h-48 overflow-hidden rounded-md">
                  <button className="bg-blue-900 absolute w-[30%] h-[5%] mt-3 -ml-2 rounded-r-full">
                    <p className="text-sm font-semibold text-white">20 APR</p>
                  </button>
                  <img
                    src="/blog1.png"
                    className="w-full h-full object-cover object-[50%_15%]"
                    alt="blog1"
                  />
                  <p className="text-lg font-semibold mt-3 absolute inset-10 text-white">
                    The Covid-19 Epidemic In 2022
                    <br />
                    Is Back
                  </p>
                </div>
                <div className="relative">
                  <button className="bg-blue-900 absolute w-[30%] h-[7%] mt-3 -ml-2 rounded-r-full">
                    <p className="text-sm font-semibold text-white">20 APR</p>
                  </button>
                  <img src="/blog3.png" className="mt-6 rounded-md" alt="blog1" />
                  <p className="text-lg font-semibold absolute mt-3 inset-10 text-white">
                    The Covid-19 Epidemic In 2023
                    <br />
                    Is Back
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
