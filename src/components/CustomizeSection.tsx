import Image from "next/image"

const CustomizeSection = () => {
  return (
    <section className="container mx-auto flex flex-col justify-center items-center space-y-10 py-24">
        <h1 className="text-[48px] text-center font-medium max-w-[708px]">Customize your site to showcase your best work</h1>
        <Image src="/assets/admin.svg" width={713} height={715.48} alt="" />
    </section>
  )
}

export default CustomizeSection