import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Highlight from '../components/Highlight'
import React, { useState } from 'react'
import Modal from '../components/Modal'
import Project from '../components/Project'
import db from '../components/db'

export default function Home() {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalContent, setModalContent] = React.useState({});
  const handleModalToggle = (projectIndex) => {
    setModalContent(db[projectIndex]);
    setModalOpen(!modalOpen)
  }
  const database = db;

  const comingSoon = () => {
    alert('coming soon!')
  }
  return (
    <div className="border h-max w-screen bg-[#FAFAFA] mx-auto sm:max-w-4xl drop-shadow-xl">

      {/* Navbar section */}
      <nav className="bg-white px-[20px] h-[60px] flex flex-row items-center justify-between border-[1px]" >
        <span id="logo" className="font-['instagram-font'] text-2xl">Isaacgram</span>
        <div id="searchBarCapsule" className="hidden sm:flex items-center rounded-lg bg-[#EFEFEF] p-2">
          <svg aria-label="Search" color="#8e8e8e" fill="#8e8e8e" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M19 10.5A8.5 8.5 0 1110.5 2a8.5 8.5 0 018.5 8.5z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="16.511" x2="22" y1="16.511" y2="22"></line></svg>
          <input id="searchBar" type="text" className="ml-3 bg-[#EFEFEF]" placeholder="Search" />
        </div>
        <div id="navButtonsContainer" className="flex items-stretch w-[278px]">
          {/*icon svgs copy pasted from instagram site*/}
          <div id="navButtons" className="flex grow justify-between">
            <button onClick={comingSoon}>
              <svg aria-label="Home" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M9.005 16.545a2.997 2.997 0 012.997-2.997h0A2.997 2.997 0 0115 16.545V22h7V11.543L12 2 2 11.543V22h7.005z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
            </button>
            <button onClick={comingSoon}>
             <svg aria-label="Direct" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
            </button>
            <button onClick={comingSoon}>
              <svg aria-label="New Post" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg>
            </button>
            <button onClick={comingSoon}>
              <svg aria-label="Find People" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon><polygon fillRule="evenodd" points="10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056"></polygon><circle cx="12.001" cy="12.005" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle></svg>
            </button>
            <button onClick={comingSoon}>
              <svg aria-label="Activity Feed" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
            </button>
            <button onClick={comingSoon}>
              <img alt="github profile" src="https://avatars.githubusercontent.com/isaacdigs" className="rounded-full h-[24px]" />
            </button>
          </div>
        </div>
      </nav>

      {/*Header Section*/}
      <header className="m-6 sm:mb-16">
        <div id="profile" className="grid grid-cols-4">
          <div id="imageSection" className="sm:row-span-2 flex items-center justify-center">
            <img src="https://avatars.githubusercontent.com/isaacdigs" className="rounded-full w-[77px] h-[77px] sm:h-[150px] sm:w-[150px] border" alt="main profile" />
          </div>
          <section id="profileCombo" className="sm:items-center flex flex-col sm:flex-row ml-3 col-span-3">
            <div id="idGroup" className="flex flex-row mb-2 sm:mb-0">
              <h1 className="text-2xl mb-[8px]">Isaac Chung</h1>
              <svg aria-label="Options" className="ml-2" color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </div>
            <div id="buttonGroup" className="flex flex-row sm:ml-4">
              <button className="font-semibold text-sm border px-12 py-1 rounded-md">Message</button>
              <button className="border ml-2 px-2 py-1 rounded-md">
                <svg aria-label="Following" color="#262626" fill="#262626" height="15" role="img" viewBox="0 0 95.28 70.03" width="20"><path d="M64.23 69.98c-8.66 0-17.32-.09-26 0-3.58.06-5.07-1.23-5.12-4.94-.16-11.7 8.31-20.83 20-21.06 7.32-.15 14.65-.14 22 0 11.75.22 20.24 9.28 20.1 21 0 3.63-1.38 5.08-5 5-8.62-.1-17.28 0-25.98 0zm19-50.8A19 19 0 1164.32 0a19.05 19.05 0 0118.91 19.18zM14.76 50.01a5 5 0 01-3.37-1.31L.81 39.09a2.5 2.5 0 01-.16-3.52l3.39-3.7a2.49 2.49 0 013.52-.16l7.07 6.38 15.73-15.51a2.48 2.48 0 013.52 0l3.53 3.58a2.49 2.49 0 010 3.52L18.23 48.57a5 5 0 01-3.47 1.44z"></path></svg> 
              </button>
               <button className="border ml-2 px-2 py-1 rounded-md origin-center rotate-180">
                <svg aria-label="Down Chevron Icon" color="#262626" fill="#262626" height="12" role="img" viewBox="0 0 24 24" width="12"><path d="M21 17.502a.997.997 0 01-.707-.293L12 8.913l-8.293 8.296a1 1 0 11-1.414-1.414l9-9.004a1.03 1.03 0 011.414 0l9 9.004A1 1 0 0121 17.502z"></path></svg>
              </button>
            </div>
          </section>
          <div id="captionGroup" className="sm:mt-0 sm:col-span-3 col-span-4 flex flex-col mt-5 ml-3">
            <p id="name" className="font-semibold">정이삭</p>
            <p id="caption" className="">Design🎨 and Frontend Dev💻</p>
          </div>
        </div>
      </header>

      {/*Highlight Section*/}
      <section id="highlights" className="flex mt-5 ml-7">
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/3/38/HTML5_Badge.svg" alt="HTML5" caption="HTML5" />
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg" alt="CSS3" caption="CSS3" />
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/7/73/Javascript-736400_960_720.png" alt="Javascript" caption="Javascript" />
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" caption="React" />
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue" caption="Vuejs" />
        <Highlight src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind" caption="Tailwind" />
      </section>

      {/*Project Section*/}
      <section id="projects" className="flex flex-col mt-5 mx-7">

        {/*Tab section*/}
        <div id="toggler" className="h-12 border-y-2 my-3 flex flex-row sm:flex-row sm:justify-between w-full">
          <button className="w-1/3">projects</button>
          <button className="w-1/3">bio</button>
          <button className="w-1/3" onClick={handleModalToggle}>modal</button>
        </div>

        {/* Project Grid */}
        <div id="projectContainer" className="w-full grid grid-cols-3 sm:mb-24 mb-96">
          <Project projectIndex={db[0].index} projectName={db[0].title} handleModalToggle={handleModalToggle}/>
        </div>
      </section>

      {/*Hidden Modal*/}
      <Modal handleModalToggle={handleModalToggle} modalOpen={modalOpen} taglist={modalContent.tags} />
    </div>
  )
}
