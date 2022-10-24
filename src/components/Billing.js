import styles, {layout} from '../style';
import { apple, bill, google } from '../assets';

function Billing() {
  return (
    <section id='product' className={`${layout.sectionReverse}`} >
      <div className={`${layout.sectionImgReverse}`}>
        <img src={bill} alt='billing' className={`w-full h-full relative z-[5]`} />

        <div className='absolute z-[3] w-[50%] h-[50%] -left-1/2 top-0 white__gradient rounded-full '></div>
        <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 pink__gradient rounded-full '></div>
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          easily control your <br className="sm:block hidden" /> billing & invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae cupiditate nam alias rem velit iusto? Iure fugit, soluta maxime nostrum dicta, molestias libero voluptatum veritatis quod atque quam?
        </p>

        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img src={apple} alt='apple_stor' className={`w-[128px] h-[42px] mr-4 object-contain cursor-pointer`} />
          <img src={google} alt='goggle_stor' className={`w-[128px] h-[42px]  object-contain cursor-pointer`} />
        </div>
      </div>
    </section>
  )
}

export default Billing