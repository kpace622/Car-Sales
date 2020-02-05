export const ADD_ITEM = 'ADD_ITEM';
export const CALC_PRICE = 'CALC_PRICE';
export const CAR = 'CAR;'
export const FEATURES = 'FEATURES';

export const addItem = newCarFeature => {
    return {
        type: ADD_ITEM,
        payload: newCarFeature
    }
}

export const calcPrice = price => {
    return {
        type: CALC_PRICE,
        payload: price
    }
}

export const car = () => {
    return {
        type: CAR
    }
}

export const feature = () => {
    return {
        type: FEATURES
    }
}