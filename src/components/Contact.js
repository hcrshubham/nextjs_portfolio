import { useEffect, useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert
import { fatchData } from "../utilits";
import Image from 'next/image';

const Contact = () => {
  const [data, setData] = useState({});
  const [submitted, setSubmitted] = useState(false); // Track form submission status

  useEffect(() => {
    const fetchData = async () => {
      setData(await fatchData("/static/info.json"));
    };
    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Submit the form using the fetch API
    fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3uI_C0d775tQyk6yeLwUdvj7f1ZQt_mbksgJg2SnCDiMD2g/formResponse",
      {
        method: "POST",
        body: new FormData(e.target),
        mode: "no-cors",
      }
    ).then(() => {
      // Show SweetAlert on successful submission
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully.",
        icon: "success",
        confirmButtonText: "OK",
        background: "#404352", // Custom background color
        color: "#ffffff", // Set text color to white
        customClass: {
          popup: 'border-light', // Add a light border class
        },
        willClose: () => {
          // Clear the form after the alert is closed
          e.target.reset();
          setSubmitted(true); // Update submission state
        },
      });
    });
  };

  return (
    <div className="dizme_tm_section" id="contact">
      <div className="dizme_tm_contact">
        <div className="container">
          <div className="dizme_tm_main_title" data-align="center">
            <span>Contact Me</span>
            <h3>I'm always open to discussing</h3>
            <p>
              Please fill out the form on this section to contact me. Or
              call between 10:00 a.m. and 8:00 p.m. ET, Monday through Friday.
            </p>
          </div>
          <div className="contact_inner">
            <div className="left wow fadeInLeft" data-wow-duration="1s">
              {data && data.contact && (
                <ul>
                  <li>
                    <div className="list_inner">
                      <div className="icon orangeBackground">
                        <i className="icon-location orangeText" />
                      </div>
                      <div className="short">
                        <h3>Address</h3>
                        <span>{data.contact.address}</span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon greenBackground">
                        <i className="icon-mail-1 greenText" />
                      </div>
                      <div className="short">
                        <h3>Email</h3>
                        <span>
                          <a href={`mailto:${data.contact.email}`}>
                            {data.contact.email}
                          </a>
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="list_inner">
                      <div className="icon purpleBackground">
                        <i className="icon-phone purpleText" />
                      </div>
                      <div className="short">
                        <h3>Phone</h3>
                        <span>{data.contact.phn}</span>
                      </div>
                    </div>
                  </li>
                </ul>
              )}
            </div>
            <div
              className="right wow fadeInRight"
              data-wow-duration="1s"
              id="contactForm"
            >
              <div className="fields">
                <form
                  id="contact_form"
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please fill required fields</span>
                  </div>
                  <div className="input_list">
                    <ul>
                      <li>
                        <div className="relative z-0 w-full group">
                          <input
                            id="name"
                            type="text"
                            name="entry.1239197453"
                            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                            placeholder="Name"
                            required
                          />
                          <label
                            htmlFor="name"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                          >
                          </label>
                        </div>
                      </li>
                      <li>
                        <div className="relative z-0 w-full group">
                          <input
                            id="email"
                            type="email"
                            name="entry.867592170"
                            className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                            placeholder="Email"
                            required
                          />
                          <label
                            htmlFor="email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                          >
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="message_area relative z-0 w-full group">
                    <input
                      id="message"
                      type="text"
                      name="entry.1645811488"
                      className="block py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                      placeholder="Message"
                      required
                    />
                    <label
                      htmlFor="message"
                      className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                    </label>
                  </div>
                  
                  <div className="dizme_tm_button mt-3">
                    <input
                      type="submit"
                      className="transition ease-in duration-200 font-semibold cursor-pointer border-color-910 hover:border-transparent px-6 py-2 rounded-lg border-[2px] hover:text-white dark:text-white transition-all duration-300 ease-in-out inline-block hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] rounded-lg"
                      value="Submit Now"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="brush_2 wow fadeInRight" data-wow-duration="1s">
              <Image src="/img/brushes/contact/2.png" alt="Brush 2" width={200} height={200} />
            </div>
          </div>
        </div>
        <div className="brush_1 wow fadeInLeft" data-wow-duration="1s">
          <Image src="/img/brushes/contact/1.png" alt="Brush 1" width={200} height={200} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
