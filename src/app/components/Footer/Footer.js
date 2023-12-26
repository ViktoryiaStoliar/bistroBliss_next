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
                                <div className={style.component}>
                                    <h1>Bistro Bliss</h1>
                                </div>
                            </div>
                            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                        </div>
                        <div className={style.column2}>
                            <div className={style.col2}>
                                <h3>Pages</h3>
                                <div className={style.list}>
                                    {pages.map((el, i) => <p key={i}>{el}</p>)}
                                </div>
                            </div>
                            <div className={style.col3}>
                                <h3>Utility Pages</h3>
                                <div className={style.list}>
                                    {utillity.map((el, i) => <p key={i}>{el}</p>)}
                                </div>
                            </div>
                        </div>
                        <div className={style.column3}>
                            <h3>Utility Pages</h3>
                            <div className={style.img}>
                                {img.map((el, i) => <Image key={i} src={el.imgPath} alt={el.imgName}></Image>)}
                            </div>
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
