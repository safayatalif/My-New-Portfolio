import SectionHeading from '../../components/SectionHeading'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Contact = () => {
  return (
    <div className="h-full py-8">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <SectionHeading>Get in Touch</SectionHeading>

        <div className="max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-white/70 mb-6">Feel free to reach out for collaboration, opportunities, or just a chat about tech and innovation.</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Email</p>
                <a href="mailto:safayatalif2021@gmail.com" className="text-accent hover:text-accent/80 transition">
                  safayatalif2021@gmail.com
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Phone</p>
                <a href="tel:+8801518957121" className="text-accent hover:text-accent/80 transition">
                  +880 151 895 7121
                </a>
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-widest mb-1">Location</p>
                <p className="text-white">Nikunjo 2, Dhaka, Bangladesh</p>
              </div>
              <div>
                <p className="text-white/60 text-sm uppercase tracking-widest mb-2">Links</p>
                <div className="flex gap-4">
                  <a href="#" className="text-accent hover:text-accent/80 transition text-sm">GitHub</a>
                  <a href="#" className="text-accent hover:text-accent/80 transition text-sm">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="w-full grid grid-cols-1 gap-4">
            <label className="sr-only" htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Your name" className="input" required />

            <label className="sr-only" htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="Your email" className="input" required />

            <label className="sr-only" htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Tell me about your project" className="textarea" required></textarea>

            <button type="submit" className="btn bg-accent text-primary rounded-lg font-semibold hover:opacity-90 transition-all">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
