import ServiceReuse from '@/components/serviceReuse'
import React from 'react'

const Bare = () => {
    const slides = [
        {
          image: "/abouthero.jpeg",
          caption: "Bare Metal Server",
          description:
            "Introducing Dataspace Enterprise Secure Email: Elevate Your Communication with Unparalleled Protection.."
        },
      ];
  return (
    <div>      <ServiceReuse slides={slides} />
    </div>
  )
}

export default Bare