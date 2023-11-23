import Image from "next/image";
import style from './style.module.css';
import food from './assets/japanese-food.png';
import Link from "next/link";

export default function Header() {
    return (
        <div className={style.wrapper}>
            <div className={style.header}>
                <div className={style.logo}>
                    <Image alt='japanese-food' src={food}></Image>
                    <h4>Bistro Bliss</h4>
                </div>

                <div className={style.menuMain}>
                    <div className={style.home}><Link href='/'>home</Link></div>
                    <div className={style.about}><Link href='/about'>about</Link></div>
                    <div className={style.menu}><Link href='/'>menu</Link></div>
                </div>

                <div className={style.button}>Book A Table</div>

            </div>
        </div>
    )
}