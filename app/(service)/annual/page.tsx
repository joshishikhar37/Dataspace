'use state'
import Plans from '@/components/Plans';
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
    <><ServiceReuse slides={slides} /><Plans /></> 
  )
}

export default Annual;