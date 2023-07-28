import Image from "next/image"

const ShareSection = () => {
  return (
    <section className="bg-green pt-24">
        <div className="container mx-auto flex flex-col-reverse items-center gap-24 lg:space-x-32 lg:flex-row">
            <Image className="max-w-full" src="/share.svg" width={390} height={648} alt="" />
            <div className="space-y-7">
                <h2 className="text-[32px] md:text-[48px] font-medium">Share your portfolio with the world</h2>
                <p className="text-[16px] md:text-[18px] text-neutralGray">All your projects in one simple link. share with recreuiters, friends, social media platforms or anywhere.</p>
                <button className="neo w-[226px] h-[55px] rounded-[10px]">Get started</button>
            </div>
        </div>
    </section>
  )
}

export default ShareSection