import { SimpleGrid, Image, Text, SegmentedControl, Button,Rating,Accordion,Divider,Modal,PinInput, Skeleton } from '@mantine/core';
import {IconShoppingBag} from '@tabler/icons-react'
import {isMobile} from 'react-device-detect';
import { useDisclosure } from '@mantine/hooks';
import React, {useState, useEffect} from 'react';
import { Carousel } from '@mantine/carousel';
const groceries = [
    {
      emoji: '',
      value: 'Description & Fit',
      description:
        'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
      emoji: '',
      value: 'Material',
      description:
        'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
      emoji: '',
      value: 'Size Guide',
      description:
        'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
  ];



function Product() {

    const [opened, { open, close }] = useDisclosure(false);
    const [pincode, setpincode] = useState(560001)
    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
          <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
          <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
      ));
    

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

    
    <>

         <div class='w-screen h-screen flex flex-row' >
          <Modal opened={opened} onClose={close} title="Change Pincode" centered>
                <div class='w-auto h-auto flex flex-col justify-center items-center' >
                    <PinInput length={6} autoFocus 
                        onChange={setpincode} />
                    <div class='pt-5'>
                        <Button variant="outline" color="gray" onClick={close}>Change</Button>
                        </div>
                    </div>
            </Modal>
            <div  id='leftIMG' class='w-[60vw] h-screen bg-slate-0 flex justify-center items-center pl-10'>
                 <Carousel slideGap="md" height={600} >
                    <Carousel.Slide>
                        <Image
                        radius="md"
                        h={600}
                        src="https://images.unsplash.com/photo-1707307006036-22663ea0c88d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <div id='rightD' class='w-[40vw] h-screen bg-slate-0 flex flex-col justify-center pl-6' >
                <div class='w-[30vw] h-[37.5rem] bg-slate-0 flex flex-col'>

                    <p class='text-3xl'>Image Collection</p>
                    <p class=' text-sm opacity-30 pt-5'>MRP inclusive of all taxes</p>
                    <p class=' text-3xl pt-2'>Rs. 799.00</p>
                    <p class=' text-sm pt-5'>Sizes</p>
                    <div class='h-auto w-[20vw] pt-2'>
                        <SegmentedControl  size="sm" fullWidth data={['XS', ' S', ' M', 'XL', 'XXL']} />
                    </div>
                    <div class='pt-6 w-100% h-auto'><Button  fullWidth variant="filled" color="gray" rightSection={<IconShoppingBag size={14} />} >BUY</Button></div>
                    <div class='w-full h-auto text-[9px] pt-1 text-right cursor-pointer' onClick={open} > Delivery to {pincode}, <b>Change?</b></div>
                    <div class='pt-6 w-100% h-auto flex flex-row items-center'><Rating value={3.5} fractions={2} readOnly color="gray" /><p class='pl-2 text-sm'>2K Rating</p></div>
                    <div class='pt-5'><Divider my="md" /> </div>
                    <Accordion  radius="xs"  variant="separated"  transitionDuration={500}>
                        {items}
                     </Accordion>
                </div>
                
            </div>
            </div>
      
    </>
    )
   }
    


  }
  
  export default Product;