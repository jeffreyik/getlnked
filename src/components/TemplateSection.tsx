import Image from "next/image"

const TemplateSection = () => {
  return (
    <section className="bg-lightGreen py-24">
        <div className="container mx-auto flex items-center justify-between space-x-32">
            <div className="space-y-7">
                <h1 className="text-[48px] font-medium">Choose a template that fits your style</h1>
                <p className="text-[16px] text-neutralGray">Our platform supports several portfolio templates that fits your style or need.</p>
                <button className="neo w-[226px] h-[55px] rounded-[10px]">Get started</button>
            </div>
            <Image src="/assets/group 1.svg" width={399} height={436.42} alt="" />
        </div>
    </section>
  )
}

export default TemplateSection