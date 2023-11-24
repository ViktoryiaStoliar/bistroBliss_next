// import Header from "../components/Header/Header";
// import TopBar from "../components/TopBar/TopBar";
import style from './homePage.style.module.scss';
import Image from "next/image";
import mainDishes from './assets/foodMain.png';
import breakfast from './assets/breakfast.png';
import drinks from './assets/drinks.png';
import desserts from './assets/desserts.png';
import foodMain from './assets/foodMain.png'


export default function HomePage() {

    const arrMenu = [
        { imgPath: breakfast, imgAlt: 'Breakfast', name: 'Breakfast', text: 'In the new era of technology we look in the future with certainty and pride for our life.', btn: 'Explore Menu' },
        { imgPath: mainDishes, imgAlt: 'Main Dishes', name: 'Main Dishes', text: 'In the new era of technology we look in the future with certainty and pride for our life.', btn: 'Explore Menu' },
        { imgPath: drinks, imgAlt: 'Drinks', name: 'Drinks', text: 'In the new era of technology we look in the future with certainty and pride for our life.', btn: 'Explore Menu' },
        { imgPath: desserts, imgAlt: 'Desserts', name: 'Desserts', text: 'In the new era of technology we look in the future with certainty and pride for our life.', btn: 'Explore Menu' },

    ]

    return (
        <>
            <div className={style.hero}>
                <div className={style.container}>
                    <Image className={style.img} alt='foodMain' src={foodMain} />

                    <div className={style.wrapperInfo}>

                        <div className={style.block}>
                            <h1>Best food for your taste</h1>
                            <p>Discover delectable cuisine and unforgettable moments in our welcoming, culinary haven.</p>

                            <div className={style.btn}>
                                <div className={style.firstBtn}>Book A Table</div>
                                <div className={style.secondBtn}>Explore Menu</div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className={style.colorMenu} >
                    
                    <div className={style.menu}>
                        <div className={style.wrapperMenu}>
                            <h2>Browse Our Menu</h2>

                            <div className={style.card}>
                                {arrMenu.map((el, i) => (
                                    <div className={style.box} key={i}>
                                        < Image src={el.imgPath} alt={el.imgAlt} />
                                        <h4>{el.name}</h4>
                                        <p>{el.text}</p>
                                        <div className={style.btn}>{el.btn}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div >

                </div>
            </div >
        </>
    )
}