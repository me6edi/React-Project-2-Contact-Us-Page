import Button from "../Button/Button";
import "./ContactForm.css"; 
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const ContactForm = () => {
  return (
    <section className="container"> 
      <div className="contact_form"> 
        <div className="top-button">
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
        <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
      </div>
      <div className="contact_image"></div>
    </section>
  );
};

export default ContactForm;
