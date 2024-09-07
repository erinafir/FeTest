import Image from "next/image";
import Tas from "../../public/assets/illusts/Bag.png"
import FemaleClothing from "../../public/assets/illusts/Dress.png"
import MaleClothing from "../../public/assets/illusts/T-Shirt.png"
import FemaleShoes from "../../public/assets/illusts/WomanShoe.png"
import MaleShoes from "../../public/assets/illusts/Shoe.png"
import Hobby from "../../public/assets/illusts/Hobby.png"
import FnB from "../../public/assets/illusts/FoodAndDrink.png"
import HomeAndLiving from "../../public/assets/illusts/HomeAndLiving.png"
import Laptop from "../../public/assets/illusts/Laptop.png"
import Mom from "../../public/assets/illusts/Baby.png"
import Beauty from "../../public/assets/illusts/MakeUp.png"
import Medicine from "../../public/assets/illusts/Medicine.png"

export default function CategoryGrid3() {
    return (
        <div className="grid grid-cols-3 bg-white rounded-sm sm:hidden">
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Tas} alt="..." />
                <h6 className="text-wrap text-center">Tas</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={FemaleClothing} alt="..." />
                <h6 className="text-wrap text-center">Pakaian Wanita</h6>
            </div>
            <div className="grid content-center border-b-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={MaleClothing} alt="..." />
                <h6 className="text-wrap text-center">Pakaian Pria</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={FemaleShoes} alt="..." />
                <h6 className="text-wrap text-center">Sepatu Wanita</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={MaleShoes} alt="..." />
                <h6 className="text-wrap text-center">Sepatu Pria</h6>
            </div>
            <div className="grid content-center border-b-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Hobby} alt="..." />
                <h6 className="text-wrap text-center">Hobi</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={FnB} alt="..." />
                <h6 className="text-wrap text-center">Makanan dan Minuman</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={HomeAndLiving} alt="..." />
                <h6 className="text-wrap text-center">Perlengkapan Rumah</h6>
            </div>
            <div className="grid content-center border-b-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Laptop} alt="..." />
                <h6 className="text-wrap text-center">Komputer dan Aksesoris</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Mom} alt="..." />
                <h6 className="text-wrap text-center">Ibu dan Anak</h6>
            </div>
            <div className="grid content-center border-b-2 border-r-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Beauty} alt="..." />
                <h6 className="text-wrap text-center">Perawatan dan Kecantikan</h6>
            </div>
            <div className="grid content-center border-b-2" style={{ width: 100, height: 120 }}>
                <Image className="justify-self-center" src={Medicine} alt="..." />
                <h6 className="text-wrap text-center">Kesehatan</h6>
            </div>
        </div>
    )
}