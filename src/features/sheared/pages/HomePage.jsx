import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function HomePage(){

    return (
        <>
            <section className="w-full min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 px-6 py-12 md:px-8 lg:px-10 xl:px-14">
  <div className="container max-w-6xl mx-auto space-y-6 md:space-y-10">
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Welcome to ApartmentPay</h1>
      <p className="text-lg md:text-xl text-white">Make your monthly apartment payments a breeze!</p>
    </div>
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      
    <RegisterForm/>
    <LoginForm/>

    </div>
  </div>
</section>
        </>
    )
}