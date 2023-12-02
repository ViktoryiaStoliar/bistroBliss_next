import style from './menu.module.scss';
import Image from 'next/image';
// import FriedEggs from './assets/Fried Eggs.png';
// import HawaiianPizza from './assets/Hawaiian Pizza.png';
// import MartinezCoctail from './assets/Martinez Coctail.png';
// import ButterscotchCake from './assets/Butterscotch Cake.png';
// import MintLemonade from './assets/Mint Lemonade.png';
// import ChocolateIcecream from './assets/Chocolate Icecream.png';
// import CheeseBurger from './assets/Cheese Burger.png';
// import ClassicWaffles from './assets/Classic Waffles.png';
import arrCard from '@/storage/menuCard.js'

export default function Menu() {

    // const arrCard = [
    //     { img: FriedEggs, price: '$ 9.99', title: 'Fried Eggs', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: HawaiianPizza, price: '$ 15.99', title: 'Hawaiian Pizza', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: MartinezCoctail, price: '$ 7.25', title: 'Martinez Coctail', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: ButterscotchCake, price: '$ 20.99', title: 'Butterscotch Cake', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: MintLemonade, price: '$ 5.89', title: 'Mint Lemonade', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: ChocolateIcecream, price: '$ 18.05', title: 'Chocolate Icecream', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: CheeseBurger, price: '$ 12.55', title: 'Cheese Burger', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' },
    //     { img: ClassicWaffles, price: '$ 12.99', title: 'Classic Waffles', description: 'Made with eggs, lettuce, salt, oil and other ingredients.' }
    // ];

    return (
        <>
            <div className={style.content}>

                <div className={style.text}>
                    <h1>Our Menu</h1>
                    <p>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                </div>

                <div className={style.cards}>

                    {arrCard.map((el) => (
                        <div className={style.card} key={el.id}>
                            <Image src={el.img} alt={el.title} />
                            <h3>{el.price}</h3>
                            <h2>{el.title}</h2>
                            <p>{el.description}</p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}