import React from 'react';
import Image from 'next/image';
import style from './style.module.scss';
import food from './assets/food.svg';

const Footer = () => {

    const pages = ['Home', 'About', 'Menu', 'Pricing', 'Blog', 'Contact', 'Delivery'];
    const utillity = ['Start Here', 'Styleguide', 'Password Protected', '404 Not Found', 'Licenses', 'Changelog', 'View More'];


    return (
        <>
            <div className={style.mainWrapper}>
                <div className={style.content}>
                    <div className={style.top}>
                        <div className={style.column1}>
                            <div className={style.logo}>
                                < Image alt='food' src={food} />
                                <h1>Bistro Bliss</h1>
                            </div>
                            <p>In the new era of technology we look a in the future with certainty and pride to for our company and.</p>
                        </div>
                        <div className={style.column2}>
                            <p>Pages</p>
                            {pages.map((el, i) => <p key={i}>{el}</p>)}
                        </div>
                        <div className={style.column3}></div>
                        <div className={style.column4}></div>
                    </div>

                    <div className={style.bottom}></div>
                </div>
            </div>
        </>
    );
}

export default Footer;
