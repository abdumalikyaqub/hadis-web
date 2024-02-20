import React from 'react'
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      {/* <div className="flex justify-center bg-slate-200 rounded-lg">
        <div className="grid grid-rows-2 grid-flow-col">
          <div className="row-span-2 text-[170px] font-serif">40</div>
          <div className="col-span-4 pt-16 text-[40px] font-light uppercase">хадисов</div>
          <div className="col-span-4 text-[40px] font-normal uppercase">имама ан-навави</div>
        </div>
      </div> */}

      <div className="relative px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-5">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="grid grid-rows-2 grid-flow-col">
                <div className="row-span-2 text-[170px] font-serif text-lime-600">40</div>
                <div className="col-span-4 pt-16 lg:text-[40px] md:text-[30px] sm:text-auto font-light text-left uppercase">
                  хадисов
                </div>
                <div className="col-span-4 lg:text-[40px] md:text-[30px] sm:text-auto font-normal uppercase">
                  имама ан-навави
                </div>
              </div>
            </div>
            <p className="mt-1 text-lg leading-8 text-gray-600">
            «Да порадует Аллах человека, который услышит от нас какие-нибудь слова и 
            запомнит их, чтобы передать другим, ибо может случиться так, что (человек) 
            передаст знание тому, кто обладает большим пониманием, чем он, и может быть так, 
            что носитель знания не обладает пониманием» (Тирмизи).
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/hadises"
                className="rounded-md bg-lime-500 px-10 py-2.5 text-md font-semibold text-black shadow-sm hover:bg-lime-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                БисмилЛях
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage