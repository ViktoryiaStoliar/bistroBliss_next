import Image from "next/image";
import style from './about.module.css';
import img from './assets/img.png';
import img2 from './assets/img2.png'

export default function About() {
    return (
        <>
            <section className={style.mainAbout}>
                <div className={style.content}>
                    <Image src={img} alt='food' />
                    <div className={style.infoContent}>
                        <h1>We provide healthy food for your family.</h1>
                        <h2>Our story began with a vision to create a unique dining experience that merges fine dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary culture, we aim to honor our local roots while infusing a global palate.</h2>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                </div>
            </section>

            <section className={style.statistic}>

                <div className={style.textWrapper}>
                    <div className={style.text}>
                        <h1>A little information for our valuable guest</h1>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>
                    <div className={style.statisticsBlock}>
                        <div className={style.item1}>
                            <h2>3</h2>
                            <p>Location</p>
                        </div>
                        <div className={style.item2}>
                            <h2>1995</h2>
                            <p>Founded</p>
                        </div>
                        <div className={style.item3}>
                            <h2>65+</h2>
                            <p>Staff Members</p>
                        </div>
                        <div className={style.item4}>
                            <h2>100%</h2>
                            <p>Satisfied Customers</p>
                        </div>
                    </div>

                </div>



                <Image src={img2} alt='food' />
            </section>

        </>
    )
}