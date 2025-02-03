import { Link } from "react-router-dom"
import Logo from "../icons/logo"
import Button from "../components/Button"
import Links from "../components/Links"

function Home() {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute z-10 text-white w-screen h-screen">
                    <nav className="bg-pink-100 p-6 w-screen flex justify-between items-center">
                        <div className="flex gap-2 items-center text-pink-600 font-bold text-4xl">
                            <Logo size="size-8" color="pink"></Logo>
                            <div>HeartLink</div>
                        </div>
                        <div className="flex gap-6 text-pink-800 font-semibold justify-center items-center">
                            <Links to="/Features" >Features</Links>
                            <Links to="/Reviews">Reviews</Links>
                            <Links to="/Stories">Stories</Links>
                            <Links to="/Contacts">Contacts</Links>
                            <Button type="type1" size="sm" font="font-semibold">Sign In</Button>
                        </div>
                    </nav>
                    <section className="h-3/4 gap-8 flex flex-col justify-center items-center z-20">
                        <div className="flex flex-col items-center font-sans text-white text-8xl">
                            <div>Find Your Forever</div>
                            <div>Love</div>
                        </div>
                        <div className="flex justify-center items-center">
                            <Button type="type2" size="md" font="text-xl font-semibold" frontImage={<Logo size="size-6" color="pink"></Logo>}>Start Your Journey</Button>
                        </div>
                    </section>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-80"></div>
                <div className="bg-[url('src/images/background.png')] bg-cover bg-center h-screen"></div>
            </div>
        </>
    )
}
export default Home