import { about, contact, portfolio, home } from './globalConstants';

function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
    return o.reduce((res, key) => {
        res[key] = key;
        return res;
    }, Object.create(null));
}

const PageNames = strEnum([
    home,
    about,
    portfolio,
    contact
])

export type PageTypes = keyof typeof PageNames;
