import { Ads } from '@/components/mockData';

const getFilteredData = ({ cate, subcate, items }) => {
    let filteredData = [];
    if (cate) {
        const filteredcate = Object.values(Ads[cate]);
        filteredData = filteredcate.flatMap(subObj => Object.values(subObj)).flat()
        if (cate && subcate) {
            filteredData = Object.values(Ads[cate][subcate]).flat();
            if (cate && subcate && items) {
                filteredData = Object.values(Ads[cate][subcate][items])
            }
        }
    } else {
        const filteredAll = Object.values(Ads);
        const final = filteredAll.flatMap(subObj => Object.values(subObj))
        filteredData = final.flatMap(subObj => Object.values(subObj)).flat()
    }
    return filteredData;
}

export default getFilteredData;
