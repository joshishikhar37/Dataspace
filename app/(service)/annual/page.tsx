'use state'
import ServiceReuse from '@/components/serviceReuse';
import React from 'react'

const Annual = () => {
    const slides = [
        {
          image: "/abouthero.jpeg",
          caption: "Annual Maintance Service",
          description: "Optimize Your Infrastructure with Dataspace Annual Maintenance Services.",
        },
        
      ];
  return (
      <ServiceReuse slides={slides} />
  )
}

export default Annual;