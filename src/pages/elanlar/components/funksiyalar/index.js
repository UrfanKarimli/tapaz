
const calculateCategoryCounts = (Obj) => {
    const counts = {};
    Object.keys(Obj)?.forEach((mainCategory) => {
        counts[mainCategory] = Object.keys(Obj[mainCategory]).length;
    });
    return counts;
};



const getModelCounts = (arr) => {
    return arr?.reduce((acc, current) => {
        const model = current.model;
        if (!acc[model]) {
            acc[model] = 0;
        }
        acc[model] += 1;
        return acc;
    }, {});
};

const getFuels = (arr) => {
    return arr?.reduce((acc, current) => {
        const fuel_type = current.fuel_type;
        if (!acc[fuel_type]) {
            acc[fuel_type] = 0;
        }
        acc[fuel_type] += 1;
        return acc;
    }, {});
};

const getTransmission = (arr) => {
    return arr?.reduce((acc, current) => {
        const transmission = current.transmission;
        if (!acc[transmission]) {
            acc[transmission] = 0;
        }
        acc[transmission] += 1;
        return acc;
    }, {});
};
const getBodytype = (arr) => {
    return arr?.reduce((acc, current) => {
        const body_type = current.body_type;
        if (!acc[body_type]) {
            acc[body_type] = 0;
        }
        acc[body_type] += 1;
        return acc;
    }, {});
};
const getColors = (arr) => {
    return arr?.reduce((acc, current) => {
        const color = current.color;
        if (!acc[color]) {
            acc[color] = 0;
        }
        acc[color] += 1;
        return acc;
    }, {});
};

const getNew = (arr) => {
    return arr?.reduce((acc, current) => {
        const is_new = current.is_new;
        if (!acc[is_new]) {
            acc[is_new] = 0;
        }
        acc[is_new] += 1;
        return acc;
    }, {});
};

const getCate = (cate) => {
    if (cate.endsWith('lar') || cate.endsWith('lər')) {
        return cate.slice(0, -3);
    }
    return cate;
};

export { getModelCounts, calculateCategoryCounts, getCate, getColors, getFuels, getTransmission, getBodytype , getNew }