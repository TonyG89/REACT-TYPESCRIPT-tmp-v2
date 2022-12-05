import { CartItem } from "../redux/slices/types"

export const calcTotalPrice = (items:CartItem[]) => {
  console.log(items);
  
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}
