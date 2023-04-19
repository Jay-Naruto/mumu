import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Mumu</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='section1' >
        <img className='img1'  src='./mumu1.png' alt=''/>
        <img className='img2'  src='./mumu3.png' alt=''/>

           <div className='section1Container' >
            <div  className='section1ContainerTitle' >
             $mumu
            </div>
            <div  className='section1ContainerAddress' >
              Contract address : 0xAadDA4286642c25e0b9e74cf3303BB3f6f3214c8
            </div>
            <div  className='section1ContainerBtns' >
<button>
  View chart
</button>
<button>
  buy now
</button>
            </div>

           </div>
      </div>

      <div  className='section2body' >

      <div  className='section2' >
          <div  className='section2Container' >
               <div  className='section2AboutImg' >
                <img src='./mumu2.png' alt=''/>
               </div>
               <div  className='section2About' >
                   <div className='section2AboutTitle'>
                    About Us
                   </div>
                   <div className='section2AboutText'>
                   Introducing Mumu-based Bull Coin, the cryptocurrency that's udderly ridiculous! This coin is mooving up in the world of meme coins with its hilarious bull-themed design and pun-tastic name. You'll feel like you're grazing on green pastures as you watch your investment grow. So don't be a calf-hearted investor - join the herd and buy some Mumu-based bull  Coin today!
                   </div>
               </div>
          </div>

          <div className='section2features'>
          <div className='section2featuresbox'>
                      <img src='./features1.png' alt=''/>
                      <div>
                      Burnable Same
                      </div>
                    </div>  

                                  <div className='section2featuresbox'>
                      <img src='./features1.png' alt=''/>
                      <div>
                      Renounced Ownership
                      </div>
                    </div>  

                                  <div className='section2featuresbox'>
                      <img src='./features1.png' alt=''/>
                      <div>
                      Locked Liquidity
                      </div>
                    </div>        
          </div>
      </div>
      </div>

     </>
  )
}
