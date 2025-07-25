import {atom,selector} from "recoil"
export const counterAtom=atom({
    key:"count",
    default:0
})

export const iseven=selector(
    {
        key:"isEven",
        get:({get})=>{
            const count=get(counterAtom);
            const iseven=(count %2===0);
            return iseven;
        }
    }
)