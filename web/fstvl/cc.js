let tglNow = new Date();
let waktuBatas = new Date("2025-08-05T23:59:59");
if (tglNow.getTime() >= waktuBatas.getTime()) {
  document.location.href = 'https://suspend-web.pages.dev';
} else {
  console.log('Server aktif');
}