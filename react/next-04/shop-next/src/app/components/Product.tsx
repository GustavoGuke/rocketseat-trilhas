import Image from "next/image";


export default function Product({camisa}: any) {
    return (
      <a href="" 
      className="relative flex items-center justify-center flex-col rounded-xl mt-10 bg-gradient-to-b from-green-800 to-blue-800 ml-10 ">
        <Image src={camisa}  alt="" className="object-cover h-400 w-full"/>
        <footer className="absolute bottom-1 left-1 right-1 flex items-center justify-between p-1  bg-slate-400 rounded-lg font-bold text-green500 ">
            <span>Camisa x</span>
            <span>Preço 19,90</span>
        </footer>
      </a>
    );
  }