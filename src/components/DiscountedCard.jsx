import Image from 'next/image';
import ProductImg from '../../public/assets/unsplash-product.jpg';
import Link from 'next/link';

export default function DiscountedCard() {
    return (
        <>
        <Link href="">
            <div className="flex-none hover:cursor-pointer">
                <div className="relative w-[158px] h-[208px] rounded-md px-4 bg-white flex flex-col gap-2 bg-white" >
                <div className="rounded-sm w-[55px] h-[20px] absolute top-[10px] right-0" style={{ backgroundColor: "#0A91AB" }}>
                    <p className="text-white text-sm text-center">-50%</p>
                </div>
                <div className="flex justify-center"><Image className="w-[125px] h-[125px] object-cover mt-4" src={ProductImg} alt="..." /></div>
                <h5 className="text-sm">Nama Produk</h5>
                <h4 className="font-semibold">Harga</h4>
                </div>
            </div>
            </Link>
        </>
    )
}