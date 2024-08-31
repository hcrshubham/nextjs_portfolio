import React from 'react';
import Image from 'next/image';

const ServicePopup = ({ data, open, close }) => {
  return (
    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        {data && (
          <div className="description_wrap">
            <div className="service_popup_informations">
              <div className="image">
                {/* Main image */}
                <Image
                  src="img/thumbs/4-2.jpg"
                  alt="Service Image"
                  layout="fill" // Adjust as needed
                  objectFit="cover" // Adjust as needed
                  className="service-popup-img" // Add a class for styling if needed
                />
                <div
                  className="main"
                  style={{
                    backgroundImage: `url(${data.img})`,
                    backgroundSize: 'cover', // Adjust as needed
                    backgroundPosition: 'center', // Adjust as needed
                    width: '100%',
                    height: '100%'
                  }}
                />
              </div>
              <div className="main_title">
                <h3>{data.title || "Title"}</h3>
                <span className="price">
                  Starts from <span>${data.price}</span>
                </span>
              </div>
              <div className="descriptions">
                {data.dec && data.dec.map((dec, i) => <p key={i}>{dec}</p>)}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicePopup;
