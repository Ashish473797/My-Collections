export function discountInPercent(costPrice: number, sellingPrice: number): number {
    const discount = costPrice - sellingPrice;
    const discountPercent = (discount / costPrice) * 100;
    return Math.round(discountPercent);
  }