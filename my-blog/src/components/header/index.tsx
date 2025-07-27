import { useState } from "react"


const NavBar = () => {
    const items = [
        {
            path: '/home',
            title: '首页'
        },
        {
            path: '/rindex',
            title: '索引',
            children: [
                {
                    path: '/category',
                    title: '分类'
                },
                {
                    path: '/tags',
                    title: '标签'
                },
                {
                    path: '/timeline',
                    title: '时间线'
                },
                {
                    path: '/reader',
                    title: '书友会'
                }
            ]
        },
        {
            path: '/essay',
            title: '随笔'
        },
        {
            path: '/message',
            title: '留言'
        },
        {
            path: '/links',
            title: '友链'
        },
        {
            path: '/about',
            title: '关于'
        },
        {
            path: '/frontend-nav',
            title: '前端导航',
            children: [
                {
                    path: '/project',
                    title: '作品'
                },
                {
                    path: '/tools',
                    title: '工具'
                },
                {
                    path: '/website',
                    title: '常用网站'
                }
            ]
        }
    ]

    // 导航栏滚动显示隐藏
    const [isShow, setIsShow] = useState(true)

    return <nav className={`shadow-sm w-full backdrop-blur-none bg-[var(--bgcolor-navbar-default)]  h-16 z-[1000] fixed top-0
        ${isShow
            ? 'fixed -top-16 transform duration-300 ease-in'
            : 'fixed top-0 transform duration-300 ease-in'
        }
          `}></nav>
}

export default NavBar