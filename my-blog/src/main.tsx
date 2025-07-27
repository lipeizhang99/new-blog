import { createRoot } from 'react-dom/client'

import { ConfigProvider, message } from 'antd';
import zh_CN from 'antd/es/locale/zh_CN'
import './index.css'
import App from './App'
import 'flowbite';


message.config({
    top:60
})

createRoot(document.getElementById('root')).render(
    <ConfigProvider locale={zh_CN}>
        <App/>
    </ConfigProvider>
)