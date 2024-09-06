'use client'
import Image from "next/image";
import Link from "next/link";
import CartIcon from "../../public/assets/icons/defCart.png"
import Navi from "../../public/assets/icons/defList.png"
import Language from "../../public/assets/icons/defLanguage.png"
import CaretDown from "../../public/assets/icons/defCaretDown.png"
import CaretUp from "../../public/assets/icons/defCaretUp.png"
import Logo from "../../public/assets/logo.png"
import react from "react";
import { Drawer } from "flowbite-react";

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = react.useState(false)
    const [isDrawerOpen, setDrawerOpen] = react.useState(false)
    const handleClose = () => setDrawerOpen(false);


    return (
        <section className="p-2 w-full border-b" style={{ borderBottomColor: "#AFB1B6" }} >
            <div className="hidden sm:px-2 sm:flex sm:flex-row sm:items-center sm:gap-5 sm:justify-end" >
                <div >
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="text-white justify-around font-medium  rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
                        type="button"
                        style={{ width: 240, height: 44, borderWidth: 1, borderColor: "#AFB1B6" }}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >
                        <div className="flex items-center gap-1">
                            <Image src={Language} width={24} height={24} alt="language_icon" />
                            <p style={{ color: "#61646B" }}>Bahasa Indonesia</p>
                        </div>
                        {!isDropdownOpen ? <><Image src={CaretDown} width={24} height={24} alt="caretDown" /></> : <><Image src={CaretUp} width={24} height={24} alt="caretUp" /></>}

                    </button>
                    {isDropdownOpen && (<div className="absolute top-15 right-50 rounded-md mt-2" style={{ width: 240, backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                        <div className="px-4 py-2">
                            <p className="py-1 text-sm">Bahasa Indonesia</p>
                            <p className="py-1 text-sm">English</p>
                        </div>
                    </div>)}

                </div>
                <Link href="" className="text-white rounded-md px-3 py-1 text-center content-center" style={{ width: 77, height: 44, }}><p className="text-sm" style={{ color: "#0A91AB" }}>Masuk</p></Link>
                <Link href="" className="text-white rounded-md px-3 py-1 text-center content-center" style={{ backgroundColor: "#0A91AB", width: 77, height: 44, }}><p className="text-sm">Daftar</p></Link>
            </div>
            <div className="flex flex-row justify-center items-center gap-5" >
                <Image className="hidden sm:inline-block" src={Logo} width={171} height={54} alt="logo" />
                <input type="text" name="search" className="w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Cari di idshop" style={{ maxWidth: 735, maxHeight: 56 }} />
                <Link href="" className="text-white rounded-md px-3 py-1" style={{ backgroundColor: "#0A91AB" }}><p className="text-sm">Cari</p></Link>
                <Link href="" className=""><Image src={CartIcon} width={24} height={24} /></Link>
                <button onClick={() => setDrawerOpen(true)}><Image className="sm:hidden" src={Navi} width={24} height={24} alt="drawer" /></button>
            </div>

            {isDrawerOpen && (<Drawer className="w-full sm:hidden" open={isDrawerOpen} onClose={handleClose}>
                <Drawer.Header className="pb-10" titleIcon={() => <><Image className="" src={Logo} width={171} height={54} alt="logo" /></>} />
                <Drawer.Items >
                    
                        <button
                            id="dropdownDefaultButton"
                            data-dropdown-toggle="dropdown"
                            className="w-full text-white justify-between font-medium rounded-lg text-sm px-2 py-2.5 text-center inline-flex items-center"
                            type="button"
                            style={{ width: '100%', height: 44, borderWidth: 1, borderColor: "#AFB1B6" }}
                            onClick={() => setIsDropdownOpen((prev) => !prev)}
                        >
                            <div className="flex items-center gap-1">
                                <Image src={Language} width={24} height={24} alt="language_icon" />
                                <p style={{ color: "#61646B" }}>Bahasa Indonesia</p>
                            </div>
                            {!isDropdownOpen ? <><Image src={CaretDown} width={24} height={24} alt="caretDown" /></> : <><Image src={CaretUp} width={24} height={24} alt="caretUp" /></>}

                        </button>
                       
                        {isDropdownOpen && (<div className="w-full rounded-md mt-2" style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                            <div className="px-4 py-2">
                                <p className="py-1 text-sm">Bahasa Indonesia</p>
                                <p className="py-1 text-sm">English</p>
                            </div>
                        </div>)}

                        <div className="flex flex-col gap-2 mt-4">
                        <button href="" className="w-full text-white rounded-md px-3 py-1 text-center content-center" style={{ backgroundColor: "#0A91AB", height: 44, }}><p className="text-sm">Daftar</p></button>
                        <button href="" className="w-full rounded-md px-3 py-1 text-center content-center" style={{ height: 44, }}><p className="text-sm" style={{ color: "#0A91AB" }}>Masuk</p></button>
                    </div>
                </Drawer.Items>
            </Drawer>)}
        </section>
    );
}

