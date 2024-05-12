import Heading from "./Heading";

const Newsletter = () => {
  return (
    <div className="max-w-6xl px-4 py-10 mx-auto sm:px-6 lg:px-8 lg:pt-[80px] lg:pb-[150px]">
      <div className="max-w-xl mx-auto text-center">
        <Heading
          title={"Our Newsletter "}
          des={"Subscribe to our newsletter for special offers"}
        />

        <form>
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3 -mt-[30px] md:-mt-[70px]">
            <div className="w-full">
              <label htmlFor="hero-input" className="sr-only">
                Search
              </label>
              <input
                type="text"
                id="hero-input"
                name="hero-input"
                className="block w-full px-4 py-3 text-sm bg-[#ECFAFB] border-[#ECFAFB] rounded-full focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                placeholder="Enter your email"
              />
            </div>
            <a
              className="inline-flex items-center justify-center w-full px-6 py-3 text-sm font-semibold text-white bg-blue-600 border border-transparent rounded-full sm:w-auto whitespace-nowrap gap-x-2 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Subscribe
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
