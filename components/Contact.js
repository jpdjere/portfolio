const SectionIntro = () => {
  return (
    <div className="row section-intro">
      <div className="col-twelve">

        <h5>Contact</h5>
        <h1>Get in touch!</h1>
      </div> 
    </div> 
  )
}

const ContactInfo = () => {
  return (
    <div className="row contact-info">

      <div className="col-six tab-full collapse">
        <div className="icon">
          <i className="icon-mail"></i>
        </div>
        <h5>Email Me At</h5>
        <a href="mailto:jpdjeredjian@gmail.com">jpdjeredjian@gmail.com</a>
      </div>

      <div className="col-six tab-full">
        <div className="icon">
          <i className="icon-phone"></i>
        </div>
        <h5>Call Me At</h5>
        <p>Mobile: (+49) 162 231 4973 </p>
        <a href="https://api.whatsapp.com/send?phone=491622314973">Text me on WhatsApp</a>
      </div>
      
    </div> 
  )
}

export const Contact = () => {
  return (
    <section id="contact">
      <SectionIntro />
      <ContactInfo />
    </section>
  )
};