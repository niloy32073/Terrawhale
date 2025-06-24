

const CollapsNav = ({isOpen, setIsOpen , children}) => {
    return (
        <main
        className={
          " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg left-0 absolute bg-[#111827]  z-[1000]  h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
   
          <article className="relative w-screen max-w-lg pb-2 flex flex-col space-y-2 overflow-y-scroll h-full">
            <header className="p-6 font-bold mb-2 text-lg backdrop-blur-xl backdrop-brightness-150">Header</header>
             {children} 
          </article>
        </section>
  
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    );
}

export default CollapsNav;
