function getRandomNumber() {
  return Math.floor(Math.random() * 1e6);
}

function generateRandomCategoryName() {
  const randomInt1 = getRandomNumber();
  const randomInt2 = getRandomNumber();
  return `random-${randomInt1}-${randomInt2}`;
}

export function categoryFactory() {
  return (categoryName = generateRandomCategoryName()) => ({
    id: getRandomNumber(),
    title: `mock ${categoryName}`,
    items: [
      {
        id: `category/${categoryName}/itemId/1`,
        name: `category/${categoryName}/itemId/1/name`,
        imageUrl: `category/${categoryName}/itemId/1/imageUrl`,
        price: 2,
      },
      {
        id: `category/${categoryName}/itemId/2`,
        name: `category/${categoryName}/itemId/2/name`,
        imageUrl: `category/${categoryName}/itemId/2/imageUrl`,
        price: 5,
      },
    ],
  });
}
