import { useParams } from "react-router-dom";


const calculateCategoryCounts = (Obj) => {
    const counts = {};
    Object.keys(Obj)?.forEach((mainCategory) => {
        counts[mainCategory] = Object.keys(Obj[mainCategory]).length;
    });
    return counts;
};

const getPath = () => {
const { cate, subcate, items, id } = useParams()

    if (cate && subcate && items) {
        return `/${cate}/${subcate}/${items}`;
    }
    if (cate && subcate) {
        return `/${cate}/${subcate}`;
    }
    if (cate) {
        return `/${cate}`;
    }
    return ``;
};

const getModelCounts = (modelsArray) => {
    return modelsArray?.reduce((acc, current) => {
        const model = current.model;
        if (!acc[model]) {
            acc[model] = 0;
        }
        acc[model] += 1;
        return acc;
    }, {});
};


const getCate = (cate) => {
    if (cate.endsWith('lar') || cate.endsWith('lər')) {
      return cate.slice(0, -3);
    }
    return cate;
  };

export {getModelCounts, getPath, calculateCategoryCounts , getCate}