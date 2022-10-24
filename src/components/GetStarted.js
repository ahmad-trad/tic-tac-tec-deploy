import styles from '../style';
import { arrowUp } from '../assets';

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[1.1rem] mr-2 leading-[23px]'>
            <span className={`text-gradient`}>get</span>
          </p>
          <img src={arrowUp} alt='arrowUp' className = 'w-[22px] h-[22px] object-contain' />
        </div>
        <p className='font-poppins font-medium text-[1.1rem] leading-[23px]'>
          <span className='text-gradient'>started</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted