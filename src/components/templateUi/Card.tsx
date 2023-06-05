interface CardInterface {
    className: string | undefined;
    style: {} | undefined;
    id: string | undefined;
    children: React.ReactNode
}

const Card = () => {
    return ( 
        <div className='border-[1px] w-[100px] h-[100px]' >
            yo
        </div>
     );
}
 
export default Card;