const AppLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="min-h-screen relative w-full flex flex-col items-center justify-center ">
            {children}
        </div>
     );
}
 
export default AppLayout;