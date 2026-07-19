import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 relative"
    >
      <Container>

        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
        />

        <div className="grid lg:grid-cols-2 gap-16">

          <ContactInfo />

          <ContactForm />

        </div>

      </Container>
    </section>
  );
}

export default Contact;