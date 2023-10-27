import React from 'react'
import { FaHome } from 'react-icons/fa'
import {Link} from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex-colo gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
      <img src="/images/403.png" alt="Not Found" className="w-full h-96 object-contain" />
      <h1 className="lg:text-4xl font-bold">Page Not Found</h1>
      <p className="font-medium text-border italic leading-6">
        The Page you are looking for does not exist. You may have miss typed the URL
      </p>
      <Link to="/" className="bg-subMain transitions flex-rows gap-4 text-white hover:text-main font-medium py-2 px-6 rounded-md">
        <FaHome /> Home
      </Link>
    </div>
  )
}
