import styles, {layout} from "../style";
import { features } from '../constants/index';
import Button from './Button';

const FeaturesCard = ({icon, index, title, content}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index === features.length - 1 ? 'mb-0' : 'mb-6'} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
      <img src={icon} alt={`icon-${index}`}  className={`w-[50%] h-[50%] object-contain`}/>
    </div>
    <div className="flex flex-col flex-1 ml-3">
      <h4 className="font-poppins font-semibold text-white text-[1.1rem] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[1rem] leading-[21px]">
        {content}
      </p>
    </div>
  </div>
)

function Business() {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          you do the business, <br className="sm:block hidden" /> we'll handle the money
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque reprehenderit delectus voluptatum quas nostrum praesentium error ipsum saepe deleniti, optio a soluta eligendi tempore molestias?
        </p>
        <Button style="mt-5" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) =>(
          <FeaturesCard key={feature.id} {...feature}  index={index}/>
        ))}
      </div>
    </section>
  )
}

export default Business