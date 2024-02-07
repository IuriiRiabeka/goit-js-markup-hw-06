function slugify(title) {

  const loweredCase = title.trim().toLowerCase();
  const slug = loweredCase.replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  return slug;
}

const title = 'Arrays for begginers';
const title2 = "English for developer";
const title3 = "Ten secrets of JavaScript";
const title4 = "How to become a JUNIOR developer in TWO WEEKS";

slugify(title)
console.log(slugify(title)); // "arrays-for-begginers"
console.log(slugify(title2)); // "english-for-developer"
console.log(slugify(title3)); // "ten-secrets-of-javascript"
console.log(slugify(title4)); // "how-to-become-a-junior-developer-in-two-weeks"