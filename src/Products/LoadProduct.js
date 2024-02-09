import { SimpleGrid, Image } from '@mantine/core';
import {isMobile} from 'react-device-detect';
import React from 'react';
import { Carousel } from '@mantine/carousel';

function Product() {


   if(isMobile){
    return (
        
        <div class='w-screen h-screen flex flex-col'>
             
                <div id='leftIMG' class='w-screen h-[50vh] bg-slate-300'></div>
                <div id='rightD' class='w-screen h-[50vh] bg-slate-900'></div>
           
        </div>
   
    );
   }
   else {
    return(

    
    <div class='w-screen h-screen flex flex-row'>
        
            <div  id='leftIMG' class='w-[55vw] h-screen  flex justify-center items-center absolute left-10'>
                 <Carousel slideGap="md" height={600} >
                    <Carousel.Slide>
                        <Image
                        radius="md"
                        h={600}
                        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-10.png"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                        radius="md"
                        h={600}
                        src="https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image
                        radius="md"
                        h={600}
                        src="https://images.unsplash.com/photo-1707249700537-7a2e4004a139?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                    </Carousel.Slide>

                </Carousel>
                        </div>
            <div id='rightD' class='w-[45vw] h-screen '></div>
       
    </div>
    )
   }
    


  }
  
  export default Product;