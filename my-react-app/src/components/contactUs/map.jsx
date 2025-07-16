import React from 'react';
import './map.css';

function GoogleMap() {
  return (
    <div  style={{ height:"100%", width: '100%' }} className='.map-container'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7731081263923!2d8.56244977357139!3d11.99019563563736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae817917cc54cd%3A0xe5e348abaf280cbd!2sAsma%27U%20Yakubu%20Street%2C%20Giginyu%2C%20Kano%20700213%2C%20Kano!5e0!3m2!1sen!2sng!4v1752682146470!5m2!1sen!2sng"
        width="100%"
        height="auto"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map Embed"
      ></iframe>
    </div>
  );
}

export default GoogleMap;

