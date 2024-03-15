import Button from "./Button";
import Input from "./Input";

const FooterForm = () => {
  return (
    <form>
      <h5>Contact Us</h5>
      <Input
        className="input-contact"
        type="email"
        placeholder="Your emails"
      ></Input>
      <textarea
        name="message"
        id="contact-message"
        placeholder="Your message"
      ></textarea>
      <Button className="btn-contact" type="submit">
        Send
      </Button>
    </form>
  );
};

export default FooterForm;
