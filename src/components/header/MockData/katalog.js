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
        description: 'Tap.az avtomobil almaq və ya satmaq istəyənləri bir araya gətirir. Yeni və sürülmüş nəqliyyat vasitələrini, avtomobillər üçün ehtiyat hissə və aksesuarları əla qiymətlərlə alın və ya satın.',
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
        description: 'Tap.az telefonlar və planşetlərdən çeşidli aksesuarlara qədər hər növ yeni və işlənmiş elektronika məhsulları üzrə çox sərfəli təkliflərin ünvanıdır – həm alıcılar, həm də satıcılar üçün sərfəli.',
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
        description: 'Tap.az-da təqdim olunan çoxsaylı xidmətlərdən (elektrik, fotoqraf, repetitor və s.) yararlana və ya mütəxəssisi olduğunuz sahə üzrə xidmətlərinizi təklif edərək davamlı qazanc əldə edə bilərsiniz.',
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
        description: 'Tap.az-da biznes xidmətləri – Maliyyə, mühasibatlıq, hüquqi dəstək və marketinq sahələrində peşəkar həllər. Biznesinizi inkişaf etdirmək üçün etibarlı tərəfdaş',
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
        description: 'Tap.az istifadəçiləri burada yeni və işlənmiş geyimlərini, aksesuarlarını və digər əşyalarını sataraq gəlir əldə edir, həmçinin itirdikləri və ya tapdıqları əşyalar barədə elanlar yerləşdirir.',
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
        description: 'Asudə vaxtınızda məşğul olmaq üçün maraqlı hobbi axtarırsınız? Yaxın həftələrdə səyahətə çıxmaq istəyirsiniz? Bəs ürəyinizə yatan bir insanla tanış olmaq necə? Elədirsə, bura tam sizlikdir.',
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
        description: 'Tap.az-da hər yaşda uşaqlar üçün axtardığınız əşyaları (oyuncaqlar, geyim, usaq belekleri və s.) tapa və ya sata bilərsiniz. Məhsullar olduqca sərfəli qiymətə təqdim olunur və qısa müddətdə alıcı tapır.',
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
        description: 'Tap.az müxtəlif heyvanlar üçün yeni sahib tapmaqda və ya onlara sahiblənməkdə sizə yardımçı olacaq. Burada axtardığınız heyvan növlərini, onlar üçün müxtəlif qida, əşya və oyuncaqları tapa bilərsiniz.',
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
        description: 'Tap.az hər zaman olduğu kimi iş var və ya is axtariram deyənlərin işini asanlaşdırır. Yeni is elanlari 2022 mövsümü üzrə daim yenilənir, yüzlərlə şəxs isə qısa zamanda axtardığı vakansiyalar üzrə iş tapır.',
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
        description: 'Tap.az-da velosipedlər – Şəhər, dağ və idman velosipedləri. Müxtəlif modellər və sərfəli qiymətlərlə rahat və sürətli seçimlər!',
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
