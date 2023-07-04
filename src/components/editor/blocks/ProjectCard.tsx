const ProjectCard = () => {
    return (
        <div className="flex items-center gap-4 rounded-[20px] border-[#afafaf] border-[1px] overflow-hidden">
            <img className="w-[175px] h-[195px] object-cover" src="data:image/jpeg;base64,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tOy7TqWemKYaCBvnXpXSuIcrlso13CXk55YyaBtyA3RbQ9EmolvKpxU/46fybf6apcVg11s9AUW3QZxnu8lXtdqdaXh7gBAjCd5OvNd08jfKvF467ilxLhgiWisIqwWZwfNAnYV1WuH/AOzx/f43/l2f/tcruFd1WRRRRQhV7i/C77uGs3ciBYyZ3UTMyMu80yXguMkf7z1jXnbp/wCk6Hxq3ViKrOsrHGTPWVfp7RrMYGCMOCwiwIFDCRW1FWVQXLeUnI3id3E3rtrGtzbsCiHEYi3zagAZAtvQ+nejkzyO4naxVm5dxrG2hJuKMRiLnOAgjKVudEDUa7iK6jFEUInVYUQKHWRrW1FCFUTwXGSf956z/i3RP+UaDwp9wbhl9HLXruZSsBM7trI6RzePrqfis1WbZGNMiesq/U2jWewsMY8PcdCKKKKsqgimPEN18fhT6mPEN18fhTCRyWbNO0ppZp2lJAW1FFFCa8cUUUUIRRRRQhFPLKCDoNz1dwrFFCEstlc3mj1DtrK2V06I2HUOwUUUISrWEnzV27B31EvufTWaKELWtTRRQhYGJdJyOyzvlYifTFb/ADlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+dHzlf+2ue2351mihCx85X/trntt+ddY8hOJdxi87s0GzGZiY0ubTRRTCRyXYrNO0oopIC2ooooTX/2Q==" alt="" />
            <div className="space-y-4 py-4">
                <h1 className="text-[16px]">Landing page design</h1>
                <p className="text-[14px]">My full-stack marketing + brand design practise for game changers and big thinkers. I design under HEX now</p>
                <button>View project</button>
            </div>
        </div>
      );
}
 
export default ProjectCard;