import newsLetterImage1 from "../../../assets/images/newsletter-image1.webp"
import newsLetterImage2 from "../../../assets/images/newsletter-image2.webp"


export default function NewsLetter() {
  return (
    <div className="flex flex-col lg:flex-row">
        <div
          className="basis-[50%] max-lg:py-48 bg-cover bg-center"
          style={{
            backgroundImage: `url(${newsLetterImage1})`,
          }}
        ></div>
        <div
          className="basis-[50%] flex flex-col gap-4 md:gap-6 py-32 lg:py-48 md:pl-24 bg-cover bg-center p-4"
          style={{
            backgroundImage: `url(${newsLetterImage2})`,
          }}
        >
          <h2 className="text-2xl lg:text-4xl font-semibold">Stay Connected</h2>
          <p className="text-sm md:text-base">
            Keep in touch with us by subscribing to our newletter
          </p>
          <label className="input lg:input-lg input-bordered flex items-center gap-2 lg:w-[60%]">
            <input type="text" className="grow" placeholder="Email" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </label>
        </div>
      </div>
  )
}
