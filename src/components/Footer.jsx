'use client'
import Image from "next/image";
import PlayStore from "../../public/assets/DLGoogle.png"
import AppStore from "../../public/assets/DLIOS.png"
import BCA from "../../public/assets/payment/bca.png"
import Mandiri from "../../public/assets/payment/mandiri.png"
import BRI from "../../public/assets/payment/bri.png"
import BNI from "../../public/assets/payment/bni.png"
import DANA from "../../public/assets/payment/dana.png"
import Gopay from "../../public/assets/payment/gopay.png"
import Alfamart from "../../public/assets/payment/alfamart.png"
import Visa from "../../public/assets/payment/visa.png"
import Mastercard from "../../public/assets/payment/mastercard.png"
import Gosend from "../../public/assets/delivery/gosend.png"
import Grab from "../../public/assets/delivery/grabexpress.png"
import JNE from "../../public/assets/delivery/jne.png"
import JNT from "../../public/assets/delivery/jnt.png"
import Sicepat from "../../public/assets/delivery/sicepat.png"
import ISO from "../../public/assets/security/iso.png"
import VerifVisa from "../../public/assets/security/verifiedvisa.png"
import Tiktok from "../../public/assets/tiktok.png"
import Instagram from "../../public/assets/insta.png"
import Facebook from "../../public/assets/facebook.png"
import Youtube from "../../public/assets/youtube.png"

export default function Footer() {
    return (
        <footer className="p-4 sm:p-16 mt-5 flex flex-col gap-5">
            <div className="sm:flex sm:gap-6">
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-md py-2">Layanan Pelanggan</h5>
                    <p className="text-sm border-b-2">Pusat Bantuan</p>
                    <p className="text-sm border-b-2">Cara Pembelian</p>
                    <p className="text-sm border-b-2">Pengiriman</p>
                    <p className="text-sm border-b-2">Pengembalian Barang dan Dana</p>
                    <p className="text-sm border-b-2">Metode Pembayaran</p>
                    <p className="text-sm border-b-2">Hubungi Kami</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-md py-2">Jelajahi idshop</h5>
                    <p className="text-sm border-b-2">Tentang Kami</p>
                    <p className="text-sm border-b-2">Kebijakan Privasi</p>
                    <p className="text-sm border-b-2">Karir</p>
                    <p className="text-sm border-b-2">Blog</p>
                    <p className="text-sm border-b-2">idshop Security</p>
                    <p className="text-sm border-b-2">id Mall</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h5 className="font-semibold text-md py-2">Unduh Aplikasi</h5>
                    <div className="flex gap-2.5">
                        <Image src={PlayStore} width={154.21} height={55} alt="playstore" />
                        <Image src={AppStore} width={154.21} height={55} alt="appstore" />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-md py-2">Metode Pembayaran</h5>
                <div className="grid grid-cols-4 gap-2 pr-4 sm:flex">
                    <Image src={BCA} width={50} height={25} alt="payment BCA" />
                    <Image src={Mandiri} width={50} height={25} alt="payment Mandiri" />
                    <Image src={BRI} width={50} height={25} alt="payment BRI" />
                    <Image src={BNI} width={50} height={25} alt="payment BNI" />
                    <Image src={Gopay} width={50} height={25} alt="payment Gopay" />
                    <Image src={DANA} width={50} height={25} alt="payment DANA" />
                    <Image src={Alfamart} width={50} height={25} alt="payment Alfamart" />
                    <Image src={Visa} width={50} height={25} alt="payment Visa" />
                    <Image src={Mastercard} width={50} height={25} alt="payment Mastercard" />
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <h5 className="font-semibold text-md py-2">Jasa Pengiriman</h5>
                <div className="grid grid-cols-4 gap-2 pr-4 sm:flex">
                    <Image src={JNE} width={50} height={25} alt="delivery jne" />
                    <Image src={Sicepat} width={50} height={25} alt="delivery sicepat" />
                    <Image src={JNT} width={50} height={25} alt="delivery jnt" />
                    <Image src={Gosend} width={50} height={25} alt="delivery gosend" />
                    <Image src={Grab} width={50} height={25} alt="delivery grab" />
                </div>
            </div>
            <div className="flex flex-col gap-2 border-b-2" style={{paddingBottom: 15}}>
                <h5 className="font-semibold text-md py-2">Keamanan dan Privasi</h5>
                <div className="grid grid-cols-4 gap-2 pr-4 sm:flex">
                    <Image src={ISO} width={50} height={25} alt="security iso" />
                    <Image src={VerifVisa} width={50} height={25} alt="security Visa" />
                </div>
            </div>
            <div className="sm:items-center sm:flex sm:justify-between">
            <p className="pb-3">© idshop 2024. Hak Cipta Dilindungi</p>
            <div className="flex flex-col gap-2" style={{paddingBottom: 15}}>
                <h5 className="font-semibold text-md">Ikuti Kami</h5>
                <div className="flex gap-2">
                    <Image src={Tiktok} width={30} height={30} alt="social tiktok" />
                    <Image src={Instagram} width={30} height={30} alt="social insta" />
                    <Image src={Youtube} width={42.84} height={30} alt="social youtube" />
                    <Image src={Facebook} width={30} height={30} alt="social facebook" />
                </div>
            </div>
            </div>
        </footer>
    )
}