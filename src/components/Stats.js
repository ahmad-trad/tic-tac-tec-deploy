import styles from "../style";
import { stats } from '../constants/index';

function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`} >
      {stats.map((stats) =>(
        <div key={stats.id} className={`flex-1 flex justify-center items-center gap-1`}>
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leadind-[43px] text-white">
            {stats.value}
          </h4>
          <p className="uppercase font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leadind-[21px] text-gradient ml-3">{stats.title}</p>
        </div>
      ))}
    </section>
  )
}

export default Stats