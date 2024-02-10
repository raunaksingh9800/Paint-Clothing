import { Image , SegmentedControl,Text, Button,Rating,Accordion,Divider,Modal,PinInput, Skeleton } from '@mantine/core';
import {IconShoppingBag} from '@tabler/icons-react'
import './product.css'
import {isMobile} from 'react-device-detect';
import { useDisclosure } from '@mantine/hooks';
import React, {useState, useEffect, useRef} from 'react';
import { Carousel } from '@mantine/carousel';

import { modals } from '@mantine/modals';
import CarouselSet from './Carousel'
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
    document.title = "Product Page";
    const [reloadKey, setReloadKey] = useState(0);
    const [height, seth] = useState(599.99)
    const [heightm, sethm] = useState(299.99)
    useEffect(() => {
        setReloadKey(prevKey => prevKey + 1);
    }, [])
    const divRef = useRef(null);
    const handleRemove = () => {
        if (divRef.current) {
          divRef.current.remove();
        }
      };
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
            delayfuction()
        
    },[])

    function delayfuction() {
        setTimeout(() => {
          // Code to run after 2 seconds
          
          setIsLoading(false)
          handleRemove()
          if(localStorage.getItem("cookies")==false){
            openModal()
          }
          if(localStorage.getItem("cookies")==null){
            openModal()
          }
          
 
        }, 500);
      }
      const openModal = () =>
      modals.openConfirmModal({
        title: "Please confirm your action",
        children: (
          <Text size="sm">
            By using this website, you agree to our use of cookies to enhance your browsing experience. 
            For more information, please refer to our cookie policy.
          </Text>
        ),
        labels: { confirm: "Accept cookies", cancel: "Cancel" },
        onCancel: () => {
            localStorage.setItem("cookies", false )
            window.location.reload()
        },
        onConfirm: () => {
            localStorage.setItem("cookies", false )
            window.location.reload()
        },

      })
    

    const LoadingMobile = () => <div class='p-8'>
        <div class='pt-10'><Skeleton height={heightm} mb="xl" /></div>
        <div class='pt-6'><Skeleton height={8} mt={0} width="30%"  /></div>
        <Skeleton height={8} mt={25} width="50%" radius="xl" />
        <Skeleton height={8} mt={6} width="90%" radius="xl" />
        <Skeleton height={8} mt={6} width="90%" radius="xl" />
        <Skeleton height={8} mt={6} width="90%" radius="xl" />
    </div>;

    const LoadingDesktop = () => <div class='w-[100vw] h-[100vh] flex flex-row duration-300 transition-all ease-in'>
        <div class='w-[50vw] h-auto pt-28 pl-8'>
            <Skeleton height={600} width="100%" mb="xl" />
        </div>
        <div class='w-[50vw] h-auto pt-24 pl-9'> 
            <Skeleton height={20} mt={25} width="20%" radius="xl" />
            <Skeleton height={8} mt={60} width="40%" radius="xl" />
            <Skeleton height={15} mt={20} width="30%" radius="xl" />
            <Skeleton height={8} mt={10} width="60%" radius="xl" />
            <Skeleton height={8} mt={10} width="60%" radius="xl" />
            <Skeleton height={8} mt={10} width="60%" radius="xl" />
            <Skeleton height={8} mt={10} width="60%" radius="xl" />
            <Skeleton height={40} mt={50} width="70%" radius="sm" />
            <Skeleton height={8} mt={60} width="30%" radius="xl" />
            <Skeleton height={8} mt={10} width="70%" radius="xl" />
            <Skeleton height={8} mt={10} width="80%" radius="xl" />
            <Skeleton height={8} mt={10} width="10%" radius="xl" />

        </div>
    </div>;

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
        <>
        <div class='w-screen h-[1000vh] bg-white fixed'  ref={divRef} style={{opacity: isLoading ? '100%' : '0%', zIndex:isLoading ? '10' : '-1'}} ><LoadingMobile /></div>
        <div class='w-screen h-auto flex flex-col'>
             <Modal opened={opened} onClose={close}  title="Change Pincode">
                <div class='w-auto h-auto flex flex-col justify-center items-center' >
                    <PinInput length={6} autoFocus  type="number" name='pincode' inputMode="numeric"
                        onChange={setpincode}
                        onComplete={close} />
                    <div class='pt-5'>
                        <Button variant="outline" color="gray" onClick={close}>Change</Button>
                        </div>
                    </div>
            </Modal>
                <div id='leftIMG' class='w-screen h-[50vh] bg-slate-0  flex justify-center items-center pr-4 pl-4 pt-14'>
                <Carousel slideGap="md" withIndicators withControls={false} loop height={300} >
                        <Carousel.Slide>
                            <Image
                            radius="md"
                            h={300}
                            src="https://images.unsplash.com/photo-1707307006036-22663ea0c88d?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                            radius="md"
                            h={300}
                            src="https://images.unsplash.com/photo-1707464568815-7fb6b6ea3e2a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    
                            
                            />
                        </Carousel.Slide>
                        <Carousel.Slide>
                            <Image
                            radius="md"
                            h={300}
                            src="https://images.unsplash.com/photo-1707249700537-7a2e4004a139?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            
                            />
                        </Carousel.Slide>

                    </Carousel>
                </div>
                <div id='rightD' class='w-[100vw] h-[80vh] bg-slate-0 flex flex-col items-center'>
                    <div class='w-[90vw] h-[37.5rem] bg-slate-0 flex flex-col'>

                    <p class='text-3xl'>Image Collection</p>
                    <p class=' text-sm opacity-30 pt-5'>MRP inclusive of all taxes</p>
                    <p class=' text-3xl pt-2'>Rs. 799.00</p>
                    <p class=' text-sm pt-5'>Sizes</p>
                    <div class='h-auto w-[60vw] pt-2'>
                        <SegmentedControl  size="sm" fullWidth data={['XS', ' S', ' M', 'XL', 'XXL']} />
                    </div>
                    <div class='pt-6 w-100% h-auto'>

                            <button id='buttonForMobile' fullWidth color='gray'  style={{padding: '8px'}}  >BUY <IconShoppingBag id='icon' size={17} /></button>
                    
                    </div>
                    <div class='w-full h-auto text-[12px] pt-1 text-right cursor-pointer' onClick={open} > Delivery to {pincode}, <b>Change?</b></div>
                    <div class='pt-6 w-100% h-auto flex flex-row items-center'><Rating value={3.5} fractions={2} readOnly color="gray" /><p class='pl-2 text-sm'>2K Rating</p></div>
                    <div class='pt-5'><Divider my="md" /> </div>
                    <Accordion  radius="xs"  variant="separated"  transitionDuration={500}>
                        {items}
                    </Accordion>
                    </div>
                </div>
           
        </div>
        
        </>
    );
   }
   else {
    return(

    
    <>
        <div class='w-[100vw] h-[100vh] bg-white fixed z-50' ref={divRef}  style={{opacity: isLoading ? '100%' : '0%', zIndex:isLoading ? '10' : '-1'}} ><LoadingDesktop /></div>
         <div class='w-screen h-screen flex flex-row'  >
          <Modal opened={opened} onClose={close} title="Change Pincode" centered>
                <div class='w-auto h-auto flex flex-col justify-center items-center' >
                    <PinInput length={6} autoFocus type="number" name='address' inputMode="numeric" title='address'
                        onChange={setpincode}
                        onComplete={close} />
                    <div class='pt-5'>
                        <Button variant="outline" color="gray" onClick={close}>Change</Button>
                        </div>
                    </div>
            </Modal>
            <div  id='leftIMG' class='w-[60vw] h-screen bg-slate-0 flex justify-center items-center pl-[40px]'>
                <div class=''> <CarouselSet  key={reloadKey} wi={true}  h={height} /></div>
               
            </div>
            <div id='rightD' class='w-[40vw] h-screen bg-slate-0 flex flex-col justify-center pl-[30px]' >
                <div class='w-[30vw] h-[37.5rem] bg-slate-0 flex flex-col pt-[15px]'>

                    <p class='text-3xl'>Image Collection</p>
                    <p class=' text-sm opacity-30 pt-5'>MRP inclusive of all taxes</p>
                    <p class=' text-3xl pt-2'>Rs. 799.00</p>
                    <p class=' text-sm pt-5'>Sizes</p>
                    <div class='h-auto w-[20vw] pt-2'>
                        <SegmentedControl  size="sm" fullWidth data={['XS', ' S', ' M', 'XL', 'XXL']} />
                    </div>
                    <div class='pt-6 w-100% h-auto'><Button id='buttonForMobile' fullWidth variant="filled" color="gray" style={{padding: '12px'}}  rightSection={<IconShoppingBag size={14} />} >BUY</Button></div>
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