import Image from "next/image"

const TemplateSection = () => {
  return (
    <section className="bg-lightGreen py-24">
        <div className="gap-24 container mx-auto flex flex-col items-center justify-between lg:space-x-32 lg:flex-row">
            <div className="space-y-7">
                <h1 className="text-[32px] md:text-[48px] font-medium">Choose a template that fits your style</h1>
                <p className="text-[16px] md:text-[18px] text-neutralGray">Our platform supports several portfolio templates that fits your style or need.</p>
                <button className="neo w-[226px] h-[55px] rounded-[10px]">Get started</button>
            </div>
            <Image className="max-w-full" src="/group 1.svg" width={399} height={436.42} alt="" />
        </div>
    </section>
  )
}

export default TemplateSection