console.log('Hello, world!');
const params = new URL(import.meta.url).searchParams;
params.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
