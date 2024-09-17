import { Ads } from '@/components/mockData';

/**
 * Verilen parametrelere göre verileri filtreleyen fonksiyon
 * @param {Object} params - Parametreler
 * @param {string} [params.cate] - Kategori adı (örneğin, 'Transports', 'Electronica')
 * @param {string} [params.subcate] - Alt kategori adı (örneğin, 'cars', 'bikes', 'Phones', 'Computers')
 * @param {string} [params.item] - Spesifik bir öğe adı (örneğin, 'BMW', 'MacBook')
 * @returns {Array} - Filtrelenmiş veri arrayi
 */
const getFilteredData = ({ cate, subcate, item }) => {
    let filteredData = [];

    if (cate) {
        // Eğer sadece cate varsa
        if (Ads[cate]) {
            if (subcate) {
                // Eğer subcate varsa
                if (Ads[cate][subcate]) {
                    if (item) {
                        // Eğer item varsa
                        filteredData = Ads[cate][subcate][item] || [];
                    } else {
                        // Sadece subcate varsa
                        filteredData = Object.values(Ads[cate][subcate]).flat();
                    }
                }
            } else {
                // Sadece cate varsa
                filteredData = Object.values(Ads[cate]).flat().flat();
            }
        }
    } else {
        // Hiçbir parametre yoksa
        filteredData = Object.values(Ads).flatMap(category => 
            Object.values(category).flat()
        );
    }

    return filteredData;
}

export default getFilteredData;
