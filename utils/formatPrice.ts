export const formatPrice = (price: string) =>
  Intl.NumberFormat("en-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2
  }).format(parseInt(price, 10));