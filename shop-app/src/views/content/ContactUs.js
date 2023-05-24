import './ContactUs.css'
const Contact = () => {


  return (
    <div className='contactus'>
      {/* <h2 className="common-heading">Contact page</h2> */}

      <iframe
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Học Viện CN Bưu Chính Viễn Thông - Hà Đông, KM9, Hà Đông, Hà Nội&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

     
      <div className="container">
        
        <div className="contact-form">
          <h2>Contact</h2>
          <form
            action="http://localhost:5000/content/contact-us"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
        <aside>
          <p>Just hit Send on an empty form to see the invalid input animation</p>
          <p>Fill in the form fields to see the success animation (no real validation, any random input will do)</p>
        </aside>
      </div>
    </div>
  );
};

export default Contact;