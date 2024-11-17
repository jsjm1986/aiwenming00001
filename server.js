const express = require('express');
const app = express();
const path = require('path');

// 设置静态文件目录
app.use(express.static(__dirname));

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 