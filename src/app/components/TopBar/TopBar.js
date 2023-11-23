import Image from 'next/image'
import style from '@/app/components/TopBar/style.module.css'
import phone from './assets/phone.svg';
import mail from './assets/mail.svg';
import twitter from './assets/twitter.png';
import facebook from './assets/2.svg';
import instagram from './assets/3.svg';
import github from './assets/4.svg';



export default function TopBar() {

    const icons = [
        { iconPath: twitter, iconName: 'twitter' },
        { iconPath: facebook, iconName: 'facebook' },
        { iconPath: instagram, iconName: 'instagram' },
        { iconPath: github, iconName: 'github' }
    ]

    return (
        <div className={style.wrapper}>

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
    )
} 