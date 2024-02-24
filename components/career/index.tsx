import NewsLatterBox from "./NewsLatterBox";

const Career = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-xl bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need to join in our team.
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Submit your resume . Our team will contact you as soon as possible.
              </p>
              {/* <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input type="text" placeholder="Enter your name" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none rounded" />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input type="email" placeholder="Enter your email" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none" />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="message" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Message
                      </label>
                      <textarea name="message" rows={5} placeholder="Enter your Message" className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="shadow-submit dark:shadow-submit-dark rounded bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                      Send
                    </button>
                  </div>
                </div>
              </form> */}
              <iframe
              title="Contact Form"
              style={{ border: 'none', width: '100%',height: '950px' }} className="rounded-2xl"
              src="https://opnform.com/forms/career-application-2cug7u"
              allowFullScreen
              loading="lazy"
            ></iframe>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
        {/* Embedded Google Map */}
        <div className="w-full px-4 lg:w-full xl:w-full mt-10">
          <iframe title="Google Map" width="100%" height="400" loading="lazy" allowFullScreen src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7834.685477282134!2d76.94876499148225!3d10.93746165688487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85be463ad5329%3A0x4e24a2f7d6051657!2sFresh%20Spar%20Education!5e0!3m2!1sen!2sin!4v1707495188077!5m2!1sen!2sin" className="rounded-2xl"></iframe>

          
        </div>
      </div>
    </section>
  );
};

export default Career;
