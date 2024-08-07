'use client'

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In architecto.",
    href: ''
  },
  {
    num: "02",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In architecto.",
    href: ''
  },
  {
    num: "03",
    title: "Logo Design",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In architecto.",
    href: ''
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In architecto.",
    href: ''
  },
];

import { motion } from 'framer-motion';


const Services = () => {
  return <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
    <div className="container max-auto">
      <motion.div>
        
      </motion.div>
    </div>
  </section>;
}

export default Services;
