import Image from 'next/image';
import style from './style.module.scss';
import food from './assets/food.svg';
import eggs1 from './assets/eggs1.svg';
import free2 from './assets/free2.svg';
import salat3 from './assets/salat3.svg';
import pancakes4 from './assets/pancakes4.svg';


const Footer = () => {

    const pages = ['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'];
    const utillity = ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'];
    const img = [
        { imgPath: eggs1, imgName: 'eggs1' }, { imgPath: free2, imgName: 'free2' },
        { imgPath: salat3, imgName: 'salat3' }, { imgPath: pancakes4, imgName: 'pancakes4' }
    ];

    return (
        <>
            <div className={style.mainWrapper}>
                <div className={style.content}>
                    <div className={style.top}>
                        <div className={style.column1}>
                            <div className={style.logo}>
                                <Image src={food} alt='food'></Image>
                                <h1>Bistro Bliss</h1>
                            </div>
                            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                        </div>
                        <div className={style.column2}>
                            <p>Pages</p>
                            {pages.map((el, i) => <p key={i}>{el}</p>)}
                        </div>
                        <div className={style.column3}>
                            <p>Utility Pages</p>
                            {utillity.map((el, i) => <p key={i}>{el}</p>)}
                        </div>
                        <div className={style.column4}>
                            <p>Utility Pages</p>
                            {img.map((el, i) => <Image key={i} src={el.imgPath} alt={el.imgName}></Image>)}
                        </div>
                    </div>

                    <div className={style.bottom}>
                        <p>Copyright © 2023 Hashtag Developer. All Rights Reserved</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Footer;
