import React from 'react'
import img1 from '../images/img1.gif'
import img2 from '../images/img2.gif'


const people = [
  {
    name: 'Leslie Alexander',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {name: 'Michael Foster',
    role: 'Co-Founder / CTO',
    imageUrl:
      '	https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
},
{
  name: 'Dries Vincent',
    role: 'Business Relations',
    imageUrl:'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
},
{
  name: 'Lindsay Walton  ',
    role: 'Front-end Developer    ',
    imageUrl:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
]

export const AboutPage = () => {
  return (
    <>
    <section className='sectiona'>
    <div className='h1-c'><h1 className='h1-a1'>About us</h1></div>
      <div className='img-a-c'>
        <img className='img-a' src={img1} alt="" />
      </div>
      
      <p className='p-a'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem reprehenderit nulla ipsa omnis architecto
         beatae corporis. Quasi magnam eius maxime consequatur nemo, aliquid molestias impedit saepe quod et doloribus!</p>
      <div className='cont-a'>
        <img className='img2-a' src={img2} alt="" />
        <h1 className='h1-a'>Our people</h1>
        <p className='p2-a'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium non ad adipisci ipsum vero? Ut,
           assumenda iure nesciunt explicabo reiciendis debitis qui quia dolor maxime deserunt neque, quaerat labore!</p>
      </div>
      </section>
      <div className="bg-black-700 py-24 mt-20 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-white">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-2xl font-semibold leading-7 tracking-tight text-white">{person.name}</h3>
                  <p className="text-lg font-semibold leading-6 text-purple-900">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <section className="relative isolate overflow-hidden bg-black-700 px-6 py-24 sm:py-32 lg:px-8">
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black-900 shadow-xl sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
              molestiae. Numquam corrupti in laborum sed rerum et corporis.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Leslie Alexander</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-purple-900">CEO of Workcation</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
    </>
  )
}
