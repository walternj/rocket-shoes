export const { format: formatPrice } = new Intl.NumberFormat('fr-FR', {
  style: 'currency',
  currency: 'EUR',
});
