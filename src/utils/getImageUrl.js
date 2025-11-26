function getImageUrl(image){
return new URL(`../assets/products/${image}`, import.meta.url).href;
}

export { getImageUrl };