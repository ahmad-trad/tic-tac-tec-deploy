import styles, {layout} from "../style";
import { card } from '../assets';
import Button from './Button';

function CardDeal() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          find a better card deal  <br className="sm:block hidden"/> in few easy steps
        </h2>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero pariatur accusamus nisi officiis, deleniti aperiam voluptatem magnam repudiandae fuga suscipit, aliquid asperiores architecto.
        </p>
        <Button style='mt-10'/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}

export default CardDeal