import Image from 'next/image';
import ProductImg from '../../public/assets/unsplash-product.jpg';
import Link from 'next/link';

export default function ProductCardNoDiscount() {
    return (
        <>
            <Link href="">
                <div className="flex-none hover:cursor-pointer">
                    <div className="w-[152px] h-[240px] rounded-md px-4 bg-white flex flex-col gap-2 bg-white" >
                        <div className="flex justify-center"><Image className="w-[125px] h-[125px] object-cover mt-4" src={ProductImg} alt="..." /></div>
                        <div className="flex flex-col gap-1">
                            <h5 className="text-sm">Nama Produk</h5>
                            <h4 className="font-semibold">Harga</h4>
                        </div>
                        <h5 className="text-sm text-end" style={{ color: "#61646B" }}>Terjual</h5>
                    </div>
                </div>
            </Link>
        </>
    )
}