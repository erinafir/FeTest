'use client'
import { Tabs } from "flowbite-react";
import react from "react";
import CaretDown from "../../public/assets/icons/defCaretDown.png"
import CaretUp from "../../public/assets/icons/defCaretUp.png"
import Image from "next/image";


export function TabsTopUp() {
    const [isDropdownOpen, setIsDropdownOpen] = react.useState(false)

    return (
        <section className="p-4 bg-white rounded-sm sm:px-16">
        <Tabs aria-label="Tabs with underline" variant="underline">
            <Tabs.Item active title="Pulsa" >
                <div className="flex flex-col gap-2 sm:flex-row">
                    <input type="text" name="search" className="w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nomor telepon" style={{ height: 44, maxWidth: 735, maxHeight: 56 }} />
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="w-full text-white justify-between font-medium rounded-md text-sm px-2 py-2.5 text-center inline-flex items-center relative"
                        type="button"
                        style={{ width: '100%', height: 44, borderWidth: 1, borderColor: "#AFB1B6" }}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >


                        <p style={{ color: "#61646B" }}>10.000</p>

                        {!isDropdownOpen ? <><Image src={CaretDown} width={24} height={24} alt="caretDown" /></> : <><Image src={CaretUp} width={24} height={24} alt="caretUp" /></>}

                    </button>

                    {isDropdownOpen && (<div className="absolute top-[700px] right-[185px] rounded-md mt-2 " style={{ width: 445, maxWidth: 735, backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                        <div className="px-4 py-2 flex flex-col">
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">10.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">20.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">50.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">100.000</p></button>
                        </div>
                    </div>)}

                    {isDropdownOpen && (<div className="w-full rounded-md mt-1 sm:hidden" style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                        <div className="px-4 py-2 flex flex-col">
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">10.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">20.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">50.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">100.000</p></button>
                        </div>
                    </div>)}

                    <button href="" className="text-white rounded-md px-3 py-1" style={{ backgroundColor: "#0A91AB", height: 44, width: 80 }}><p className="text-sm">Beli</p></button>
                </div>
            </Tabs.Item>
            <Tabs.Item title="Paket data" >
            <div className="flex flex-col gap-2 sm:flex-row">
                    <input type="text" name="search" className="w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Nomor telepon" style={{ height: 44, maxWidth: 735, maxHeight: 56 }} />
                    <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="dropdown"
                        className="w-full text-white justify-between font-medium rounded-md text-sm px-2 py-2.5 text-center inline-flex items-center relative"
                        type="button"
                        style={{ width: '100%', height: 44, borderWidth: 1, borderColor: "#AFB1B6" }}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                    >


                        <p style={{ color: "#61646B" }}>Paket Seminggu - 20.000</p>

                        {!isDropdownOpen ? <><Image src={CaretDown} width={24} height={24} alt="caretDown" /></> : <><Image src={CaretUp} width={24} height={24} alt="caretUp" /></>}

                    </button>

                    {isDropdownOpen && (<div className="absolute top-[700px] right-[185px] rounded-md mt-2 " style={{ width: 445, maxWidth: 735, backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                        <div className="px-4 py-2 flex flex-col">
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Seminggu - 20.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Bulanan - 50.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Bulanan OMG - 78.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Berkah 54.000</p></button>
                        </div>
                    </div>)}

                    {isDropdownOpen && (<div className="w-full rounded-md mt-1 sm:hidden" style={{ backgroundColor: "white", borderWidth: 1, borderColor: "#AFB1B6" }}>
                        <div className="px-4 py-2 flex flex-col">
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Seminggu - 20.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Bulanan - 50.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Bulanan OMG - 78.000</p></button>
                            <button className="focus:border-l-4 focus:border-cyan-600"><p className="py-1 text-sm">Paket Berkah 54.000</p></button>
                        </div>
                    </div>)}

                    <button href="" className="text-white rounded-md px-3 py-1" style={{ backgroundColor: "#0A91AB", height: 44, width: 80 }}><p className="text-sm">Beli</p></button>
                </div>
            </Tabs.Item>
            <Tabs.Item title="Listrik PLN" >

            </Tabs.Item>
            <Tabs.Item title="Uang Elektronik" >

            </Tabs.Item>
            <Tabs.Item title="Air PDAM" >

            </Tabs.Item>
        </Tabs>
        </section>
    );
}
