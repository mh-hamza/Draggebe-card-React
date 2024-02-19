import React, { useState } from 'react';
import { useRef } from 'react';
import Card from './Card'


const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },

    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },

    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },

    },
  ]

  useState()

  return (
    <div ref={ref} className='top-0 left-0 fixed w-full h-full z-[3] flex gap-10 flex-wrap p-5'>
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}

    </div>
  )
}

export default Foreground