import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Modal(props) {
  const {modalOpen, handleModalToggle, taglist} = props;
  const taglistRendered = taglist && taglist.map((tag, index) => {
    return (
      <a key={index} className="text-blue-400" href="#">
        #{tag} &nbsp;
      </a>
    )
  })

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={null} onClose={handleModalToggle}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto" onClick={handleModalToggle}>
          <div className="flex items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/*The actual modal starts here*/}
              <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all m-3">
                {/*Project Header*/}
                <div className="bg-white px-4 pt-5 pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                        Project 1
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          This is an explanation of project 1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/*Project Details*/}
                <div className="bg-white px-4 py-5 w-full">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        {taglistRendered}
                    </p>
                </div>

                {/*Project Gallery*/}
                <div className="bg-gray-50 px-4 py-5 sm:p-0 min-w-[400px] aspect-square">
                    <img src="https://picsum.photos/400/" alt="project 1" className="w-full h-full object-cover object-center" />
                </div>



                {/*Project Social*/}
                <div className="bg-gray-50 px-6 py-3 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-sm font-medium text-white hover:bg-red-700 ml-3 w-auto"
                    onClick={handleModalToggle}
                  >
                    Like
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-0 ml-3 w-auto"
                    onClick={handleModalToggle}
                  >
                    Comment
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}