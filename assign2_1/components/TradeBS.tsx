import React from 'react'
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
  { id: 1, name: 'USDT', unavailable: false },
  { id: 2, name: 'BTC', unavailable: false },
]

const TradeBS = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0])
  const [selectedPersons, setSelectedPersons] = useState(people[0])
  return (
    // <div className="flex pt-11">
    //   <form className="flex justify-between ">
    //     <div className="px-32">
    //       <h3 className="text-2xl font-bold text-left mb-2">Amount</h3>
    //       <input
    //         type="text"
    //         placeholder="Amount"
    //         className="p-3 rounded shadow w-96 relative">
    //       </input>
    //       <div className="absolute w-3/12 ml-72 -mt-11">
    //         <Listbox value={selectedPerson} onChange={setSelectedPerson}>
    //           <Listbox.Button className="relative border-2 text-lightblue w-1/4 cursor-default rounded-lg bg-white py-1 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">{selectedPerson.name}</Listbox.Button>
    //           <Listbox.Options>
    //             {people.map((person) => (
    //               <Listbox.Option className="pl-3 bg-white w-1/4 px-3 py-3"
    //                 key={person.id}
    //                 value={person}
    //                 disabled={person.unavailable}
    //               >
    //                 {person.name}
    //               </Listbox.Option>
    //             ))}
    //           </Listbox.Options>
    //         </Listbox>
    //       </div>
    //       <div className="pt-4">
    //         <button className="rounded bg-green-500 text-white px-12 py-2 w-96">Buy</button>
    //       </div>
    //     </div>


    //     <div className="justify-around">
    //       <h3 className="text-2xl font-bold text-left mb-2">Amount</h3>
    //       <input
    //         type="text"
    //         placeholder="Amount"
    //         className="p-3 rounded shadow w-96 relative">
    //       </input>
    //       <div className="absolute w-3/12 ml-72 -mt-11">
    //         <Listbox value={selectedPersons} onChange={setSelectedPersons}>
    //           <Listbox.Button className="relative border-2 text-lightblue w-1/4 cursor-default rounded-lg bg-white py-1 pl-3 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">{selectedPersons.name}</Listbox.Button>
    //           <Listbox.Options>
    //             {people.map((person) => (
    //               <Listbox.Option className="relative pl-3 bg-white w-1/4 px-3 py-3"
    //                 key={person.id}
    //                 value={person}
    //                 disabled={person.unavailable}
    //               >
    //                 {person.name}
    //               </Listbox.Option>
    //             ))}
    //           </Listbox.Options>
    //         </Listbox>
    //       </div>
    //       <div className="pt-4">
    //         <button className="rounded bg-red-700 text-white px-12 py-2 w-96 ">Sell</button>
    //       </div>
    //     </div>
    //   </form>
    // </div>

    <div className="rounded-lg w-full max-w-4xl p-12 z-20 relative">
      <form>
        <div className="flex flex-col sm:flex-row justify-between mb-5">
          <div className="max-w-4xl w-full p-2">
            <p className="text-left text-2xl font-bold">Amount</p>
            <input
              className="p-3 mt-5 rounded shadow w-full"
              type="text"
              placeholder="Amount"
            />

            {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="absolute top-auto text-blue-400 bg-white border-blue-400 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USDT<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BTC</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USDT</a>
                </li>
              </ul>
            </div> */}

            <div className="pt-2">
              <button className="text-center p-3 mt-5 rounded shadow w-full bg-green-500 text-white">
                Buy
              </button>
            </div>
          </div>
          <div className="max-w-4xl w-full p-2">
            <p className="text-left text-2xl font-bold">Amount</p>
            <input
              className="p-3 mt-5 rounded shadow w-full relative"
              type="text"
              placeholder="Amount"
            />

            {/* <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="absolute text-blue-400 bg-white border-blue-400 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">USDT<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
              <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">BTC</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">USDT</a>
                </li>
              </ul>
            </div> */}

            <div className="pt-2">
              <button className="text-center p-3 mt-5 rounded shadow w-full bg-red-700 text-white">
                Sell
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TradeBS