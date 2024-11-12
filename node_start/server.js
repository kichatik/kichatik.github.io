const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    console.log(req.url);

    // Обрабатываем запросы на статические файлы
    if (req.url === '/style.css') {
        // Читаем CSS файл и отправляем его с правильным типом контента
        fs.readFile(path.join(__dirname, 'style.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Server Error');
                return;
            }
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else if (req.url === '/') {
        // Отдаем картинку
        fs.readFile(path.join(__dirname, 'ad.jpg'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Server Error');
                return;
            }
            res.setHeader('Content-Type', 'image/jpeg');
            res.end(data);
        });
    } else {
        // Отдаем HTML-страницу
        res.write('<html>');
        res.write('<head><link rel="stylesheet" type="text/css" href="./style.css"></head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node.js server!</h1>');
        res.write('<h2>This is a page with a background and an image!</h2>');
        res.write('<div class="box">');
        res.write('<img src="ad.jpg" alt="Image" />'); // Здесь нужно исправить на правильный путь к картинке
        res.write('<h3>Here is an image with a red box around it</h3>');
        res.write('</div>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
});

// Слушаем на порту 3000
server.listen(4000, () => {
    console.log('Server is running on http://localhost:4000');
});
