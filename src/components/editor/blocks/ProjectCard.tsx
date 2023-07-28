const ProjectCard = () => {
    return (
        <div className="flex items-center gap-4 rounded-[20px] border-[#afafaf] border-[1px] overflow-hidden">
            <img className="w-[175px] h-[195px] object-cover" src="data:image/jpeg;" alt="" />
            <div className="space-y-4 py-4">
                <h1 className="text-[16px]">Landing page design</h1>
                <p className="text-[14px]">My full-stack marketing + brand design practise for game changers and big thinkers. I design under HEX now</p>
                <button>View project</button>
            </div>
        </div>
      );
}
 
export default ProjectCard;