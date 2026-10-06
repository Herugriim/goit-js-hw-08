const categories = document.querySelector('#categories');

const items = categories.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

for (const item of items) {
  const text = item.querySelector('h2');
  console.log(`Category: ${text.textContent}`);
  const elements = item.querySelectorAll('li');
  console.log(`Elements: ${elements.length}`);
}
