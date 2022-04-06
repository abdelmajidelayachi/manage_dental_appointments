import React from "react";

function Ads() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="http://localhost/php%20projects/Briefs/backend_dental-appointment/public/assets/images/child.jpg"
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-2xl font-medium title-font text-gray-900 mb-1 text-sm">
              Why choose
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              Our Qualified Dentist?
            </h1>

            <p className="leading-relaxed mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras urna
              dui, ornare id risus sit amet, porta lobortis tellus. Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Aliquam error id
              doloremque!
            </p>
            <div className="container ml-4">
              <ul className="list-disc">
                <li className="flex font-medium items-center mt-6">Teeth whitening</li>
                <li className="flex font-medium items-center mt-6">Modern Anesthetic</li>
                <li className="flex font-medium items-center mt-6">Quality Brackets</li>
                <li className="flex font-medium items-center mt-6">Root Canal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ads;
