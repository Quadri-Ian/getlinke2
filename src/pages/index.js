import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from 'components/navbar.js';
import Link from 'next/link';
import LogosAndLines from '../../components/logosAndLines';
import { useInView } from 'react-intersection-observer'; // Import the useInView hook


export default function Home() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();
  const [ref5, inView5] = useInView();
  const [ref6, inView6] = useInView();
  const [ref7, inView7] = useInView();
  const [ref8, inView8] = useInView();



  // Define a class name based on inView for each div
  const fadeInClass1 = inView1 ? 'visible' : '';
  const fadeInClass2 = inView2 ? 'visible' : '';
  const fadeInClass3 = inView3 ? 'visible' : '';
  const fadeInClass4 = inView4 ? 'visible' : '';
  const fadeInClass5 = inView5 ? 'visible' : '';
  const fadeInClass6 = inView6 ? 'visible' : '';
  const fadeInClass7 = inView7 ? 'visible' : '';
  const fadeInClass8 = inView8 ? 'visible' : '';

  useEffect(() => {
    // Your code here, you can use inView1, inView2, inView3
    // to determine when to apply the fadeInClass to each div
  }, [inView1, inView2, inView3, inView4, inView5, inView6, inView7, inView8]);
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    // Set the target date and time for the countdown
    const targetDate = new Date('2023-12-31T23:59:59').getTime();
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  
  // FAQs data
  const [faqs, setFaqs] = useState([
    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },

    {
      question: "Can I work on a project I started before the hackathon?",
      answer: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.",
      isOpen: false,
    },
    // Add more FAQs here
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

// ... (rest of your code)

    
  
  return (
    <div className="">
      
      <div className=" absolute top-[15%] left-[12%]" >
      <Image
      src="/wstar.png"
        alt="underline"
        width={40}
        height={40}
        className="w-4 fixed star"
      />
      </div>
      <div className=" absolute  top-[45%] left-[82%]" >
      <Image
        src="/pstar.png"
        alt="underline"
        width={40}
        height={40}
        className="w-4 fixed z-0 star"
      />
      </div>
      <div className=" absolute top-[50%] left-[40%]">
      <Image
        src="/wstar.png"
        alt="underline"
        width={40}
        height={40}
        className="w-2 fixed z-0 star"
      />
      </div>

      <div className=" absolute  bottom-[15%] left-[90%]" >
      <Image
        src="/wstar.png"
        alt="underline"
        width={40}
        height={40}
        className="w-4 fixed z-0 star"
      />
      </div>

      <div className='z-50 border-b-[1px] border-gray-600 fixed top-0 w-full bg-opacity-75 backdrop-blur-lg'>
            <Navbar />
      </div>
      {/* Hero div (Mobile) */}
      <div className="z-20 relative hero text-white pt-6 pb-0 border-b-[1px] border-gray-600 mt-20 ">
  <div className="flex flex-col items-center text-center md:text-right text-sm px-8 italic md:items-end md:text-2xl lg:text-4xl relative ">
    Igniting a revolution in HR innovation
    <Image
      src="/Vector4.svg"
      alt="underline"
      width={40}
      height={40}
      className=" w-24 ml-36 md:w-40 lg:w-60"
    />
  </div>
  <div className="space-y-4 lg:flex w-full lg:border-b-[1px] border-gray-600">
    <div className="px-10 md:px-24 text-center lg:ml-20 xl:ml-36 lg:text-left pt-10 md:pt-16 lg:px-0 w-full space-y-8 xl:space-y-20">
      <div className="space-y-4">
        <div className="lg:">
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold xl:text-[80px] whitespace-nowrap">
            getlinked Tech
            <Image
              src="/bulb.png"
              alt="Lightbulb"
              width={100}
              height={100}
              className="inline -mt-10 -ml-8 md:-mt-[73px] md:-ml-[52px] lg:-ml-[63px] lg:-mt-[80px] xl:-ml-20 xl:-mt-[110px] w-4 md:w-8 xl:w-12 "
            />
          </div>
          <div className="text-3xl md:text-5xl lg:text-6xl flex-nowrap whitespace-nowrap font-bold lg:w-full xl:text-[80px]">
            Hackathon <span className="text-techpurple">1.0</span>
            <Image
              src="/chain.png"
              alt="Clip"
              width={500}
              height={500}
              className="inline w-6 md:w-12 lg:w-16 xl:w-20"
            />
            <Image
              src="/fire.png"
              alt="Fire"
              width={500}
              height={500}
              className="inline w-6 md:w-12 lg:w-16 xl:w-20"
            />
          </div>
        </div>
        <p className="text-white text-sm md:text-lg lg:text-1xl xl:text-2xl md:px-20 lg:px-0">Participate in getlinked Tech Hackathon 2023, stand a chance to win a Big prize</p>
        <div>
          <button 
          className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink to-techpurple text-white" 
          href="/register">
            Register
          </button>
        </div>
      </div>
            <div className="numberment text-3xl lg:text-7xl text-white">
              {timeLeft.hours < 10 ? '0' : ''}{timeLeft.hours}<span className="text-sm">H  </span>
              {timeLeft.minutes < 10 ? '0' : ''}{timeLeft.minutes}<span className="text-sm">M  </span>
              {timeLeft.seconds < 10 ? '0' : ''}{timeLeft.seconds}<span className="text-sm">S</span>
            </div>
          </div>

    <div className=" text-white flex w-full">
      <div className=" relative image-slide">
        <Image
          src="/Hackathonguy.png"
          alt="Hero Image"
          width={828}
          height={715}
          className="object-fit"
        />

      <Image
        src="/imageHover.png"
        alt="Hero Image"
        width={500}
        height={500}
        className="absolute top-0 w-[70%] h-full  object-contain glitch image-spin-pulse"
      />        
      </div>



    </div>
  </div>
</div>
      <div className='relative' >
      <div ref={ref1} className={` fade-in-element ${fadeInClass1} flex flex-col lg:flex-row w-full my-4 px-10 lg:space-x-10 space-y-8 items-center py-12 border-b-[1px] border-gray-600`}>
        <div className=' flex flex-col mb-[125px] lg:mb-[230px]  flex-1 xl:px-24'>
            <Image
            src='/bigidea.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
            <p className='inline -mt-[125px] ml-20 text-white text-sm w-20 text-center  top-1/2 left-[35%] lg:-mt-[230px] lg:ml-[185px] lg:text-lg xl:-mt-[300px] xl:ml-[240px]'>The Big idea!</p>
        </div>
        <div className='text-center flex-1 md:px-24 lg:text-left'>
          <div className='text-white text-lg'>
            <h3>Introduction to getlinked <br/> <span className='text-techpurple'>techHackathon 1.0</span></h3>
          </div>
          <p className='text-white text-sm'>
              Our tech hackathon is a melting pot of 
              visionaries, and its purpose is as clear as day:
              to shape the future. Whether you&apos;re a coding
              genius, a design maverick, or a concept 
              wizard, you&apos;ll have the chance to transform 
              your ideas into reality. Solving real-world 
              problems, pushing the boundaries of 
              technology, and creating solutions that can 
              change the world, that&apos;s what we&apos;re all about!
          </p>
        </div>
      </div>        
      </div>


      <div id="fadeInOnScroll" ref={ref2} className={`relative fade-in-element ${fadeInClass2} flex flex-col lg:flex-row w-full my-4 py-12 px-10 space-y-8 items-center border-b-[1px] border-gray-600 `}>
        <div className=' flex-1 xl:px-24'>
            <Image
            src='/lady.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>
        <div className='text-center flex-1 md:px-24 lg:text-left'>
          <div className='text-white text-lg'>
            <h3>Rule and <br/><span className='text-techpurple'>Guidelines</span></h3>
          </div>
          <p className='text-white text-sm'>
              Our tech hackathon is a melting pot of 
              visionaries, and its purpose is as clear as day:
              to shape the future. Whether you&apos;re a coding
              genius, a design maverick, or a concept 
              wizard, you&apos;ll have the chance to transform 
              your ideas into reality. Solving real-world 
              problems, pushing the boundaries of 
              technology, and creating solutions that can 
              change the world, that&apos;s what we&apos;re all about!
          </p>
        </div>
      </div>

      <div id='overview' ref={ref3}  className={`relative fade-in-element ${fadeInClass3} flex flex-col lg:flex-row w-full my-4 py-12 px-10 space-y-8 items-center border-b-[1px] border-gray-600 `}>
        <div className=' flex-1 xl:px-12'>
            <Image
            src='/twopersons.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>
        <div className='text-center  flex-1 text-sm md:px-20 xl:px-12 space-y-4 lg:text-left'>
          <div className='text-white text-lg '>
            <h3>Judging Criteria <br/><span className='text-techpurple'>Key Attributes</span></h3>
          </div>
        <div className='text-center lg:text-left text-sm space-y-3'>

          <p className='text-white text-sm'>
          <span className='text-techpink'>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the 
          solution. Consider whether it addresses a 
          real-world problem in a novel way or introduces innovative features.
          </p>
          
          <p className='text-white text-sm'>
          <span className='text-techpink'>Functionality:</span> Assess how well the solution works. Does it 
          perform its intended functions effectively and without major issues? Judges would consider the 
          completeness and robustness of the solution.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Impact and Relevance:</span> Determine the potential impact of the solution in the real world. Does it address a 
          significant problem, and is it relevant to the target audience? Judges would assess the potential social, economic, or environmental benefits.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Technical Complexity:</span> Evaluate the technical sophistication of the solution. Judges would consider the complexity of the code, 
          the use of advanced technologies or algorithms, and the scalability of the solution.
          </p>

          <p className='text-white'>
          <span className='text-techpink'>Adherence to Hackathon Rules:</span> Judges will Ensure that the team adhered to the rules and guidelines of the hackathon, including deadlines, use of specific technologies or APIs, and any 
              other competition-specific requirements.
          </p>          
          </div>

          <button className="px-12 rounded-md py-3 bg-gradient-to-r from-techpink  to-techpurple text-white">Read More</button>


        </div>
      </div>

      <div id='faqs' ref={ref4} className={ `relative fade-in-element ${fadeInClass4}  flex flex-col justify-center md:flex-row w-full my-4 py-12 px-10 space-y-8 items-center border-b-[1px] border-gray-600`}>

        <div className='text-center flex-1 lg:px-24 xl:px-24 md:text-left py-4'>
          <div className='text-white text-lg'>
            <h3>Frequently Ask<br/><span className='text-techpurple'>Question</span></h3>
          </div>
          <p className='text-white text-sm'>
          We got answers to the questions that you might
          want to ask about getlinked Hackathon 1.0
          </p>

          <div>
      {/* FAQs Section */}
            <div className="my-6 mx-auto lg:px- md:text-left">
              <section className="">
                <div  className="lg:space-y-8">
                  {faqs.map((faq, index) => (
                    <div key={index} className="rounded-none border border-t-0 border-l-0 text-sm txt-white border-r-0 border-techpurple">
                      <div className="mb-0" id={`flush-heading${index}`}>
                        <button
                          className="flex w-full items-center justify-between rounded-none border-0 py-1 text-sm text-white text-left transition"
                          type="button"
                          onClick={() => toggleFAQ(index)}
                        >
                          {faq.question}
                          <FontAwesomeIcon
                            icon={faq.isOpen ? "fa-solid fa-minus" : "fa-solid fa-plus"}
                            className="text-techpurple"
                          />
                        </button>
                      </div>
                      {faq.isOpen && (
                        <div id={`flush-collapse${index}`} className="py-2 text-left text-white">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className=' flex-1 xl:px-24'>
          <div className='z-0 relative md:ml-10 w-full '>
            <h1 className='questions absolute -top-10 text-7xl lg:text-[150px] text-[#A866FD]'>?</h1>
            <h1 className='questions absolute  -top-16 left-20 lg:-top-24 lg:left-24  text-8xl lg:text-[200px] text-techpurple'>?</h1>
            <h1 className='questions absolute  left-40 -top-10 lg:-top-10 lg:left-64 text-7xl lg:text-[150px] text-[#A866FD]'>?</h1>

          </div>
          <div className='mt-2 relative'>
            <Image
            src='/thinking.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover z-10'
            />
          </div>

        </div>
      </div>

      <div id='timeline' ref={ref5} className={`relative md:px-12 fade-in-element ${fadeInClass5}`}>
        <div className='py-20 text-white text-center px-12 md:px-24'>
          <h4 className='text-techpurple'>Timeline</h4>
          <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
        </div>
        {/* mobile Timeline */}
        <div className='space-y-3 lg:hidden'>

        <div className='flex h-28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to registerr
          </p>            
          </div>

        <div className='text-techpurple '>
          <p>November 18, 2023</p>
        </div>          
        </div>     
       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Teams Registration begins</h5>
          <p>
          Interested teams can now show their interest in the
          getlinked tech hackathon 1.0 2023 by proceeding to register
          </p>
           
          </div>
        <div className='text-techpurple pt-4'>
          <p>November 18, 2023</p>
        </div>           
        </div>  

       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Teams Registration ends</h5>
          <p>
          Interested Participants are no longer Allowed
          to register
          </p>
             
          </div>
        <div className='text-techpurple pt-4'>
          <p>November 18, 2023</p>
        </div>         
        </div>  

       
        </div>

        <div className='flex h28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Announcement of the accepted teams and ideas</h5>
          <p>
          All teams whom idea has been accepted into 
          getlinked tech hackathon 1.0 2023 are formally 
          announced
          </p>            
          </div>

        <div className='pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

       
        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Getlinked Hackathon 1.0 Offically Begins</h5>
          <p>
          Accepted teams can now proceed to build 
          their ground breaking skill driven solutions
          </p>            
          </div>

        <div className='text-techpurple pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

        </div>

        <div className='flex h-28'>
        <div className='flex flex-col justify-center space-y-3 items-center'>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div> 

        <div className='text-sm text-white px-3 flex flex-col justify-between'>
          <div>
          <h5 className='text-techpurple'>Demo Day</h5>
          <p>
          Teams get the opportunity to pitch their 
          projects to judges. The winner of the 
          hackathon will also be announced on this day
          </p>            
          </div>
        <div className='text-techpurple pt-4'>
          <p>November 18, 2023</p>
        </div>          
        </div>  

       
        </div>          
        </div>

        {/* pc timeline */}
      <div className={` hidden text-[16px] px-24 space-y-3 lg:block`}>

      <div className='flex h-[130px] space-x-6  w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>1</p>
        </div>
             
        <div className='pt-4 font-bold flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-6  w-full'>
        <div className='text-techpurple text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>2</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>
        <div className='flex h-[130px] space-x-6  w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>3</p>
        </div>
             
        <div className='pt-4 flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-6  w-full'>
        <div className='text-techpurple font-bold text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>4</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>

        <div className='flex h-[130px] space-x-6  w-full'>
        <div className=' text-white px-3 flex-1 text-right self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>5</p>
        </div>
             
        <div className='pt-4 flex-1 text-left text-techpurple self-end '>
          <p>November 18, 2023</p>
        </div> 
        </div>

        <div className='flex h-[130px] space-x-6 w-full'>
        <div className='text-techpurple text-right pt-4 flex-1 self-end mr-12'>
          <p>November 18, 2023</p>
        </div> 

        <div className='flex flex-col justify-center space-y-3 items-center -1 '>
          <div className='w-1 h-full bg-techpurple'></div>
          <p className='px-2 text-white bg-gradient-to-r from-techpink  to-techpurple rounded-full'>6</p>
        </div>
             
        <div className=' text-white px-3 flex-1 text-left self-end'>
          <h5 className='text-techpurple text-[24px]'>Hackathon 1.0 Announcement</h5>
          <p>
          The getlinked tech hackathon 1.0 is formally announced
          to the general public and teams begin to get ready to register
          </p>     
        </div>
        </div>
      </div>
      </div>



      {/* prizes */}
      <div ref={ref6} className={`relative fade-in-element ${fadeInClass6} py-24  md:px-20`}>
        <div className='text-white text-center lg:text-left items-end px-8 lg:px-24 justify-end'>
          <h5 className='text-[20px] lg:text-[32px]'>Prizes and <br/> <span className='text-techpurple'>Rewards</span></h5>
          <p className='text-lg'>Highlight of the prizes or rewards for winners 
            and for participants.
          </p>
        </div>

      <div className='flex flex-col lg:flex-row px-10 lg:space-x-4 space-y-24'>
        <div className='lg:w-[40%]'>
        <Image
            src='/cup.png'
            alt='big idea'
            width={500}
            height={500}
            className='w-full h-full object-cover'
            />
        </div>

<div className='flex space-x-2 lg:space-x-4 pt-12 w-full items-center lg:w-[60%] justify-center'>
  {/* Silver Medal */}
  <div className='card h-[125px] w-[100px] px-4 lg:w-[110] lg:h-[155px] xl:w-[212px] xl:h-[296px] flex text-[12px] flex-col justify-center items-center text-white border rounded-lg border-techpurple hover:scale-105 hover:-translate-y-2 transition-transform'>
    <Image
      src='/silver_medal.png'
      alt='big idea'
      width={500}
      height={500}
      className='w-20 h-20 xl:w-[180px] xl:h-[180px] -mt-20 xl:-mt-48  object-cover'
    />
    <p className='xl:text-[36px] lg:text-lg pt-4'>2nd</p>
    <p className='xl:text-[24px] '>Runner</p>
    <p className='text-techpurple text-sm lg:text-lg xl:text-[36px]'>N300,000</p>
  </div>

  {/* Gold Medal */}
  <div className='card h-[147px] px-4 w-[100px] lg:h-[170px] xl:w-[230px] xl:h-[346px] flex text-[12px] flex-col justify-center items-center text-white border rounded-lg border-[#903AFF] hover:scale-105 hover:-translate-y-2 transition-transform'>
    <Image
      src='/gold_medal.png'
      alt='big idea'
      width={500}
      height={500}
      className='w-[70px] h-[125px] xl:w-[296px] xl:h-[296px] overflow-visible -mt-28 xl:-mt-56 -top-[55%] object-cover'
    />
    <p className='xl:text-[36px] px-4 lg:tex-lg pt-4'>1st</p>
    <p className='xl:text-[24px] lg:text-lg'>Runner</p>
    <p className='text-[#903AFF] text-sm lg:text-lg xl:text-[36px]'>N400,000</p>
  </div>

  {/* Bronze Medal */}
  <div className='card1st px-4 h-[125px] w-[100px] lg:w-[110] lg:h-[145px] xl:w-[212px] xl:h-[296px] flex text-[12px] flex-col justify-center items-center text-white border rounded-lg border-techpurple hover:scale-105 hover:-translate-y-2 transition-transform'>
    <Image
      src='/bronze_medal.png'
      alt='big idea'
      width={500}
      height={500}
      className='w-20 h-20 xl:w-[180px] xl:h-[180px] -mt-20 xl:-mt-48 object-cover'
    />
    <p className='xl:text-[36px] lg:text-lg pt-4'>3st</p>
    <p className='xl:text-[24px] '>Runner</p>
    <p className='text-techpurple text-sm lg:text-lg xl:text-[36px]'>N150,000</p>
  </div>
</div>

      </div>        
      </div>

      <div ref={ref7} className={`relative fade-in-element ${fadeInClass7} py-12 border-b-[1px] border-gray-600 backdrop-blur-lg`}>
        <div className='text-white p-6 space-y-4'>
        <h5 className=''>Partners and Sponsors</h5>
        <p>Getlinked Hackathon 1.0 is honored to have the following major 
              companies as its partners and sponsors</p>
        </div>
        <div className='px-6 md:w-1/2 lg:w-1/3 mx-auto pt-4'> 
    <LogosAndLines />

        </div>
</div>

    {/* prvacy div */}
    <div ref={ref8} className={`relative fade-in-element ${fadeInClass8} space-y-14 lg:flex items-center py-12 backdrop-blur-md px-10`}>
        <div className='text-white text-center lg:text-left space-y-8 pt-6 lg:flex-1'>
          <div> 
            <h5 className='md:text-lg lg:text2xl'>Privacy Policy and <br/> <span className='text-techpurple'>Terms</span></h5>
            <p className='text-[12px]'>Last updated on September 12, 2023</p>
          </div> 
          <div>
            <p className='text-sm'>
            Below are our privacy & policy, which outline a 
              lot of goodies. it’s our aim to always take of our 
              participant
            </p>
          </div>
          <div className='privacy rounded-lg border-[1px] border-techpurple p-4 text-left space-y-6 xl:w-[569px] xl:h-[608px] lg:p-20'> 
            <div className='text-white'>
              <p>
              At getlinked tech Hackathon 1.0, we 
                value your privacy and are committed 
                to protecting your personal information.
                This Privacy Policy outlines how we collect,
                use, disclose, and safeguard your data 
                when you participate in our tech hackathon 
                event. By participating in our event, you 
                consent to the practices described in this 
                policy.
              </p>
            </div>
            <div className='space-y-8'>
                <div>
              <h5 className='text-techpurple'>Licensing Policy</h5>
              <h1>Here are terms of our Standard License:</h1>                    
                </div>

              <div className='text-white space-y-6 text-sm'>
              <div className='flex text-white items-center space-x-4'>
              <FontAwesomeIcon className='text-white bg-green-500 p-[2px] rounded-full' icon="fa-solid fa-check" />
              <p>The Standard License grants you a 
                non-exclusive right to navigate and 
                register for our event
                </p>
              </div>  

                <div className='flex text-white items-center space-x-4'>
              <FontAwesomeIcon className='text-white bg-green-500 p-[2px] rounded-full' icon="fa-solid fa-check" />
              <p>You are licensed to use the item available at any free source
                  sites, for your project developement
                </p>
              </div>               
              </div>
                <div className='flex justify-center '>
                <button className="px-6 rounded-md py-2 bg-gradient-to-r from-techpink ju text-center  to-techpurple text-white">Read More</button>
                </div>
            </div>
          </div>
        </div>


        <div className='privacy2  w-full lg:flex-1 items-center py-4'>
        <div className=''>

            <Image
            src="/lockman.png"
            alt="Logo 6"
            width={500}
            height={500}
            className="w-[262px] h-[351px] pt-28 over overflow-visible top-24 mx-auto lg:w-[559px] lg:h-[749px]  object-cover"
            />
        </div>            
        </div>

    </div>

    {/* footer */}
    <div className='relative foot p-8 text-sm space-y-12 pt-20 mt-10'>
      <div className='space-y-6 lg:flex space-x-8'>
      <div className='text-white space-y-6 lg:flex-1'>
        {/* logo */}
        <div className="text-md md:text-1xl font-bold">get<span className='text-techpurple'>linked</span></div>
        {/* info */}
        <p className=''>
        Getlinked Tech Hackathon is a technology
        innovation program established by a group 
        of organizations with the aim of showcasing 
        young and talented individuals in the field 
        of technology
        </p>
      {/* terms/privacy */}
      <div className='flex space-x-4 items-center'>
        <p>Terms of use</p>
        <div className='w-1 h-6 bg-techpurple'></div>
        <p>Privacy Policy</p>
      </div>
      </div>

      {/* links */}
      <div className='space-y-2 lg:flex-1'>
        <h5 className='text-techpurple'>Useful Links</h5>
        <ul className='text-white space-y-2'>
          <li>Overview</li>
          <li>Timeline</li>
          <li>FAQs</li>
          <li>Register</li>

        </ul>
        <div className='flex space-x-4'>
        <p className='text-techpurple text-sm'>Follow us</p>
        <div className='flex text-white space-x-2'>
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </div>
        </div>
      </div>

        {/* contact */}
      <div className='space-y-2 text-sm lg:flex-1'>
        <h5 className='text-techpurple'>Contact Us</h5>
        <div className='flex space-x-4 text-white'>
          <Image
          src='call.svg'
          alt='call'
          width={12}
          height={12}
          className='text-black'
          />
          <p>+234 679 81819</p>
        </div>

        <div className='flex space-x-4 text-white'>
        <FontAwesomeIcon icon="fa-solid fa-location-dot" />
          <p className='w-2/3'>27,Alara Street
            Yaba 100012
            Lagos State
            </p>
        </div>
      </div>
    </div> 

      <div>
          <p className='text-white text-sm text-center pt-8'>
          All rights reserved. © getlinked Ltd.
          </p>
      </div>       
      </div>




    </div>
  );
}

