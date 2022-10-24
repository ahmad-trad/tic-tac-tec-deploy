import styles from '../style';
import { discount, robot } from '../assets';
import {GetStarted} from './index';

function Hero() {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
          <img src={discount} alt = "discount" className={`w-[32px] h-[32px]`} />
          <p className={`${styles.paragraph} ml-2`}>
            <span className={`text-white`}>20%</span> Discount For {" "}
            <span className='text-white'>1 month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            the next <br className='sm:block hodden' /> {" "}
            <span className='text-gradient'>generation</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[58px] text-[42px] text-white ss:leading-[100px] leading-[75px]'>payment method</h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis delectus dolorum mollitia numquam labore odit aliquam amet accusamus distinctio magni ad error, modi, quae odio, laboriosam totam optio architecto tenetur.</p>

      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt='robot' className='w-[100%] h-[100%] z-[5] relative' />
        
        <div className='absolute w-[40%] h-[40%] z-[0]  top-0 pink__gradient '></div>
        <div className='absolute w-[80%] h-[80%] z-[1]  bottom-40 white__gradient '></div>
        <div className='absolute w-[50%] h-[50%] z-[0]  bottom-20 right-20 blue__gradient '></div>
      </div>

      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero