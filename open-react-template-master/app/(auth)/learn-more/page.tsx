export const metadata = {
  title: 'Learn more',
  description: 'Page description',
}

import Link from 'next/link'

export default function LearnMore() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
          <h1 className='h1'>FAQ</h1>
          <br></br><br></br>
          <h5 className='h5'>1. How do I create an account?</h5>
            <p> To create an account, click on the "Sign Up" or "Register" button on the homepage.
              Choose your account type.
               Fill in the form. 
               Once you complete the form, your account will be ready to use. 
            </p>
            <br></br>
            <h5 className='h5'>2. What should I do if I encounter technical issues?</h5>
            <p> If you experience any technical issues, please contact our support team at bookmycut2@gmail.com.
               We will assist you as soon as possible. Leave your feedback and recommendations.
            </p>
            <br></br>
          <h5 className='h5'>3. How do I book an appointment?</h5>
            <p>You can book an appointment by choosing the barbershop you want to book at then clicking on the Book appointment button. This will take you to a page where you will choose the service, date, and time of your appointment.</p>
            <br></br>
          <h5 className='h5'>4. Can I cancel or reschedule my appointment?</h5>
            <p>Yes, you can cancel or reschedule your appointment. You can do that by clicking the cancel button. To reschedule, just book another appointment and make sure it is an hour prior.</p>
            <br></br>
          <h5 className='h5'>5. What services do you offer?</h5>
            <p>We offer a wide range of services including haircuts, styling, beard trims, and more. For more information, please contact the barber you are booking at.</p>
            <br></br>
          <h5 className='h5'>6. How much do your services cost?</h5>
            <p>Prices vary depending on the service and the barber. Please contact the barber for further info.</p>
            <br></br>
          <h5 className='h5'>7. What are the working hours?</h5>
            <p>Our platform standard is 9AM - 5PM. However, working hours may vary from one barbershop to the other.</p>
            <br></br>
          <h5 className='h5'>8. Do you accept walk-ins?</h5>
            <p>While we prefer appointments, many of our barbers accommodate walk-ins based on availability. Please contact the barber for further info.</p>
            <br></br>
          <h5 className='h5'>9. What should I do if I forgot my password?</h5>
            <p>If you forget your password, please contact our support team at bookmycut2@gmail.com. We will assist you as soon as possible.  </p>

          </div>
    

        </div>
      </div>
    </section>
  )
}
