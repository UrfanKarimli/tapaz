import { Link } from 'react-router-dom'
import hobbi from '@/assets/img/katalog/hobbi.png'
import biznes from '@/assets/img/katalog/biznes.png'
import elektronika from '@/assets/img/katalog/elektronika.png'
import heyvan from '@/assets/img/katalog/heyvan.png'
import iselani from '@/assets/img/katalog/is-elani.png'
import magaza from '@/assets/img/katalog/magaza.png'
import neqliyyat from '@/assets/img/katalog/neqliyyat.png'
import sexsiesya from '@/assets/img/katalog/sexsi-esya.png'
import usaq from '@/assets/img/katalog/usaq.png'
import velosiped from '@/assets/img/katalog/velosiped.png'
import xidmetler from '@/assets/img/katalog/xidmetler.png'

const Links = [
    {
        id: 1,
        name: 'Nəqliyyat',
        url: 'elan/neqliyyat',
        img:neqliyyat
    }, {
        id: 2,
        name: 'Elektronika',
        url: 'elan/elektronika',
        img:elektronika
    }, {
        id: 3,
        name: 'Xidmətlər',
        url: 'elan/xidmətlər',
        img: xidmetler
    }, {
        id: 4,
        name: 'Biznes',
        url: 'elan/biznes',
        img:biznes
    }, {
        id: 5,
        name: 'Şəxsi əşyalar',
        url: 'elan/şəxsi-əşyalar',
        img:sexsiesya
    }, {
        id: 6,
        name: 'Hobbi və Asudə',
        url: 'elan/hobbi-asude',
        img: hobbi
    }, {
        id: 7,
        name: 'Uşaq aləmi',
        url: 'elan/uşaq-aləmi',
        img:usaq
    }, {
        id: 8,
        name: 'Heyvanlar',
        url: 'elan/heyvanlar',
        img: heyvan
    }, {
        id: 9,
        name: 'İş elanları',
        url: 'elan/iş-elanları',
        img: iselani
    }, {
        id: 10,
        name: 'Mağazalar',
        url: 'elan/mağazalar',
        img: magaza
    }, {
        id: 11,
        name: 'Velosipedlər',
        url: 'elan/velosipedlər',
        img: velosiped
    },
]

const HeadNav = () => {
    return (
        <section id='head-nav'>
            <div className='bg-[#f1f3f7] py-5'>
                <div className="flex flex-wrap gap-8 container">
                    {
                        Links.map((item) => (
                            <Link className='w-[90px] group  flex-col justify-center' key={item.id} to={item.url}>
                                <div className=' group-hover:border-[#ff4f08] flex items-center justify-center bg-white p-4 border border-solid border-[#eaebf2] rounded-lg w-[90px] h-[90px] transition-all duration-300 ease-in-out'>
                                    <img src={item.img} className='h-12 w-12 object-cover object-center' alt="" />
                                </div>
                                <span className='font-arial text-center flex justify-center text-sm text-[#212c3a] group-hover:text-[#ff4f08] align-top h-[34px] transition-all duration-300 ease-in-out'>
                                    {
                                        item.name
                                    }
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default HeadNav