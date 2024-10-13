import hobbi from '@/assets/img/katalog/hobbi.png'
import biznes from '@/assets/img/katalog/biznes.png'
import elektronika from '@/assets/img/katalog/elektronika.png'
import heyvan from '@/assets/img/katalog/heyvan.png'
import iselani from '@/assets/img/katalog/is-elani.png'
import neqliyyat from '@/assets/img/katalog/neqliyyat.png'
import sexsiesya from '@/assets/img/katalog/sexsi-esya.png'
import usaq from '@/assets/img/katalog/usaq.png'
import velosiped from '@/assets/img/katalog/velosiped.png'
import xidmetler from '@/assets/img/katalog/xidmetler.png'

export const katalogData = [
    {
        id: 1,
        name: 'Nəqliyyat',
        path: 'Nəqliyyat',
        img: neqliyyat,
        subCategories: [
            {
                id: 1,
                name: 'Avtomobillər',
                path: 'Avtomobillər',
                items: [
                    { id: 1, path: 'Mercedes', itemName: 'Mercedes' },
                    { id: 2, path: 'Audi', itemName: 'Audi' },
                    { id: 3, path: 'BMW', itemName: 'BMW' }
                ]
            },
            {
                id: 2,
                name: 'Motosikletlər',
                path: 'Motosikletlər',
                items: [
                    { id: 1, path: 'Yamaha', itemName: 'Yamaha' },
                    { id: 2, path: 'Honda', itemName: 'Honda' }
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'Elektronika',
        path: 'Elektronika',
        img: elektronika,
        subCategories: [
            {
                id: 1,
                name: 'Telefonlar',
                path: 'Telefonlar',
                items: [
                    { id: 1, path: 'Apple', itemName: 'iPhone' },
                    { id: 2, path: 'Samsung', itemName: 'Samsung' }
                ]
            },
            {
                id: 2,
                name: 'Kompüterlər',
                path: 'Kompüterlər',
                items: [
                    { id: 1, path: 'MacBook', itemName: 'MacBook' },
                    { id: 2, path: 'Dell', itemName: 'Dell' }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'Xidmətlər',
        path: 'Xidmətlər',
        img: xidmetler,
        subCategories: [
            {
                id: 1,
                name: 'Təmir',
                path: 'Təmir',
                items: [
                    { id: 1, path: 'Avtomobil təmiri', itemName: 'Avtomobil təmiri' },
                    { id: 2, path: 'Ev təmiri', itemName: 'Ev təmiri' }
                ]
            },
            {
                id: 2,
                name: 'Təhsil',
                path: 'Təhsil',
                items: [
                    { id: 1, path: 'Dərslər', itemName: 'Dərslər' },
                    { id: 2, path: 'Təlimlər', itemName: 'Təlimlər' }
                ]
            }
        ]
    },
    {
        id: 4,
        name: 'Biznes',
        path: 'Biznes',
        img: biznes,
        subCategories: [
            {
                id: 1,
                name: 'Ofis Əşyaları',
                path: 'Ofis Əşyaları',
                items: [
                    { id: 1, path: 'Masa', itemName: 'Masa' },
                    { id: 2, path: 'Stul', itemName: 'Stul' }
                ]
            },
            {
                id: 2,
                name: 'Reklam və Marketinq',
                path: 'Reklam və Marketinq',
                items: [
                    { id: 1, path: 'Reklam kampaniyaları', itemName: 'Reklam kampaniyaları' },
                    { id: 2, path: 'Marketinq strategiyaları', itemName: 'Marketinq strategiyaları' }
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'Şəxsi əşyalar',
        path: 'Şəxsi əşyalar',
        img: sexsiesya,
        subCategories: [
            {
                id: 1,
                name: 'Paltar',
                path: 'Paltar',
                items: [
                    { id: 1, path: 'Köynək', itemName: 'Köynək' },
                    { id: 2, path: 'Şalvar', itemName: 'Şalvar' }
                ]
            },
            {
                id: 2,
                name: 'Aksesuarlar',
                path: 'Aksesuarlar',
                items: [
                    { id: 1, path: 'Saat', itemName: 'Saat' },
                    { id: 2, path: 'Eynək', itemName: 'Eynək' }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'Hobbi və Asudə',
        path: 'Hobbi və Asudə',
        img: hobbi,
        subCategories: [
            {
                id: 1,
                name: 'İdman',
                path: 'İdman',
                items: [
                    { id: 1, path: 'Futbol Topu', itemName: 'Futbol Topu' },
                    { id: 2, path: 'Boks Əlcəyi', itemName: 'Boks Əlcəyi' }
                ]
            },
            {
                id: 2,
                name: 'Əl İşləri',
                path: 'Əl İşləri',
                items: [
                    { id: 1, path: 'Rəsm', itemName: 'Rəsm' },
                    { id: 2, path: 'Toxumalar', itemName: 'Toxumalar' }
                ]
            }
        ]
    },
    {
        id: 7,
        name: 'Uşaq aləmi',
        path: 'Uşaq aləmi',
        img: usaq,
        subCategories: [
            {
                id: 1,
                name: 'Oyuncaq',
                path: 'Oyuncaq',
                items: [
                    { id: 1, path: 'Maşın', itemName: 'Maşın' },
                    { id: 2, path: 'Lego', itemName: 'Lego' }
                ]
            },
            {
                id: 2,
                name: 'Geyim',
                path: 'Geyim',
                items: [
                    { id: 1, path: 'Uşaq Geyimi', itemName: 'Uşaq Geyimi' },
                    { id: 2, path: 'Ayakkabılar', itemName: 'Ayakkabılar' }
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'Heyvanlar',
        path: 'Heyvanlar',
        img: heyvan,
        subCategories: [
            {
                id: 1,
                name: 'Ev Heyvanları',
                path: 'Ev Heyvanları',
                items: [
                    { id: 1, path: 'İt', itemName: 'İt' },
                    { id: 2, path: 'Pişik', itemName: 'Pişik' }
                ]
            },
            {
                id: 2,
                name: 'Təsərüfat Heyvanları',
                path: 'Təsərüfat Heyvanları',
                items: [
                    { id: 1, path: 'At', itemName: 'At' },
                    { id: 2, path: 'İnək', itemName: 'İnək' }
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'İş elanları',
        path: 'İş elanları',
        img: iselani,
        subCategories: [
            {
                id: 1,
                name: 'Tam Zamanlı',
                path: 'Tam Zamanlı',
                items: [
                    { id: 1, path: 'Mühəndis', itemName: 'Mühəndis' },
                    { id: 2, path: 'Satış Meneceri', itemName: 'Satış Meneceri' }
                ]
            },
            {
                id: 2,
                name: 'Yarı Zamanlı',
                path: 'Yarı Zamanlı',
                items: [
                    { id: 1, path: 'Ofis Köməkçisi', itemName: 'Ofis Köməkçisi' },
                    { id: 2, path: 'Kuryer', itemName: 'Kuryer' }
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Velosipedlər',
        path: 'Velosipedlər',
        img: velosiped,
        subCategories: [
            {
                id: 1,
                name: 'Yol Velosipedləri',
                path: 'Yol Velosipedləri',
                items: [
                    { id: 1, path: 'Bianchi', itemName: 'Bianchi' },
                    { id: 2, path: 'Cannondale', itemName: 'Cannondale' }
                ]
            },
            {
                id: 2,
                name: 'Dağ Velosipedləri',
                path: 'Dağ Velosipedləri',
                items: [
                    { id: 1, path: 'Trek', itemName: 'Trek' },
                    { id: 2, path: 'Santa Cruz', itemName: 'Santa Cruz' }
                ]
            }
        ]
    },
];
