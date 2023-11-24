import Image from "next/image";
import style from './style.module.scss';
import phone from './assetsTopBar/phone.svg';
import mail from './assetsTopBar/mail.svg';
import twitter from './assetsTopBar/twitter.png';
import facebook from './assetsTopBar/2.svg';
import instagram from './assetsTopBar/3.svg';
import github from './assetsTopBar/4.svg';
import food from './assets/japanese-food.png';
import Link from "next/link";

export default function Header() {

    const icons = [
        { iconPath: twitter, iconName: 'twitter' },
        { iconPath: facebook, iconName: 'facebook' },
        { iconPath: instagram, iconName: 'instagram' },
        { iconPath: github, iconName: 'github' }
    ]

    return (
        <>
            <div className={style.colorTopBar}>
                <div className={style.wrapperTopBar}>

                    <div className={style.contacts}>
                        <Image alt='phone' src={phone} />
                        <p>(414)857-0107</p>
                        <Image alt='mail' src={mail} />
                        <p>yummy@bistrobliss</p>
                    </div>

                    <div className={style.icons}>
                        {icons.map((el, i) => (
                            <Image src={el.iconPath} alt={el.iconName} key={i}></Image>
                        ))}
                    </div>

                </div>
            </div>
            <div className={style.colorHeader}>
                <div className={style.wrapperHeader}>

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
            </div>
        </>
    )
}