console.log('sw.js загружен (но уже новый)')

self.addEventListener('install', (event) => {
    console.log('Установлен');
    console.dir(event);
});

self.addEventListener('activate', (event) => {
    console.log('Активирован');
    console.dir(event);
});

self.addEventListener('fetch', (event) => {
    console.log('Происходит запрос на сервер');
    console.dir(event);
});