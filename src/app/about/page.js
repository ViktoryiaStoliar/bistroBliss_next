import Image from "next/image";
import style from './about.module.scss';
import img from './assets/img.png';
import img2 from './assets/img2.png'

export default function About() {

    const arrItems = [
        { itemNumber: 3, text: 'Location' },
        { itemNumber: 1995, text: 'Founded' },
        { itemNumber: '65+', text: 'Staff Members' },
        { itemNumber: '100%', text: 'Satisfied Customers' },
    ]

    return (
        <>
            <div className={style.colorMainAbout}>
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
            </div>

            <section className={style.statistic}>

                <div className={style.textWrapper}>

                    <div className={style.text}>
                        <h1>A little information for our valuable guest</h1>
                        <p>At place, we believe that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.</p>
                    </div>

                    <div className={style.statisticsBlock}>
                        {arrItems.map((el, i) => (
                            <div className={style.item} key={i}>
                                <h2>{el.itemNumber}</h2>
                                <p>{el.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <Image src={img2} alt='food' />

            </section>

        </>
    )
}