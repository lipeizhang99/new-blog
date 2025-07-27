import { Outlet } from "react-router-dom"
import { useState } from "react"
import NavBar from '@/components/header/index'   // 顶部导航栏
import { useSelector } from "react-redux"
import type { ModeState } from '@/types/comm.d.ts'
import Footer from '@/components/footer/index'
import './index.css'

const LayoutIndex = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const localMode = Number(localStorage.getItem('localmode'))
    const mode = useSelector((state: ModeState) => state.mode)

    return (
        <>
            {
                isLoaded ? (
                    <div className={`parent`}>
                        <div className={`${mode || localMode ? 'bg1' : 'bg0'}`}>
                            <NavBar></NavBar>
                            <main className="flex justify-between  w-full min-h-screen mx-auto lg:w-full">
                                <Outlet></Outlet>
                            </main>
                            <Footer></Footer>
                        </div>
                    </div>
                ) : (
                    <div className={`parent`}>
                        <div className={`${mode || localMode ? 'bg1' : 'bg0'}`}>
                            <main className="flex justify-between  w-full min-h-screen mx-auto lg:w-full">
                                <div className="flex items-center justify-center flex-col w-full" >
                                    <div>Hello</div>
                                    <p className="text-2xl mt-5">欢迎来到夜雨炊烟的小站</p>
                                </div>
                            </main>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default LayoutIndex