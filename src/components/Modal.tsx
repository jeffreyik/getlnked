interface modalInterface {
    text: string,
    toggleModal: boolean
}

const Modal = ({ text, toggleModal }: modalInterface) => {
    return ( 
        <>
            <div style={{display: toggleModal ? 'flex': 'none'}} className="w-full h-screen bg-neutralGray fixed flex items-center justify-center">
                <div className="bg-white w-[280px] h-[180px] rounded-2xl p-10">
                    { text }
                </div>
            </div>
        </>
     );
}
 
export default Modal;