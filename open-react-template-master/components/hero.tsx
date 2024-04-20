import VideoThumb from '@/public/images/man-getting-haircut-barbershop.jpg'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">


        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Welcome to Book My Cut</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Do you want your hair to be cut? Do you want to cut hair? Register here now and make it happen!</p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0" href="/signup">Register</a>
              </div>
              <div data-aos="fade-up" data-aos-delay="600">
                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="/learn-more">Learn more</a>
              </div>
            </div>
          </div>

          

        </div>

      </div>
    </section>
  )
}
