import { motion } from "framer-motion";
import styles from "../../style";
import { Logo } from "../../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`relative bg-gray-900 text-white overflow-hidden ${styles.paddingX}`}
    >
      {/* Gradient Orbs */}
      <div className='absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2' />
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2' />

      <div className=' mx-auto px-4 relative'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16'>
          {/* Company Info */}
          <div className='space-y-6'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={Logo} alt='' className='h-[7rem] mb-4 mx-auto' />
              <p className={`${styles.paragraph} mt-4`}>
                Empowering lives through compassionate care. We deliver
                personalized support for a healthier, more independent future.
              </p>
            </motion.div>

            {/* Social Links */}
            {/* <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <motion.a
                  key={social}
                  href={`#${social}`}
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  {/* Add your social icons here 
                  <div className="w-5 h-5 text-white/80" />
                </motion.a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Quick Links</h3>
            <ul className='space-y-4'>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Services</h3>
            <ul className='space-y-4'>
              {[
                {
                  name: "Participate Community",
                  link: "/services/participate-community",
                },
                {
                  name: "Assist Travel & Transport",
                  link: "/services/assist-travel-transport",
                },
                { name: "Respite Care", link: "/services/respite-care" },
                { name: "Household Tasks", link: "/services/household-tasks" },
              ].map((service) => (
                <motion.li
                  key={service.name}
                  whileHover={{ x: 5 }}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <Link to={service.link}>{service.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className='text-lg font-semibold mb-6'>Get in Touch</h3>
            <ul className='space-y-4'>
              {[
                { text: "Phone: 0452 489 098", link: "tel:0452489098" },
                { text: "Email: info@ableforall.com.au", link: "mailto:info@ableforall.com.au" },
              ].map((contact) => (
                <motion.li
                  key={contact}
                  whileHover={{ x: 5 }}
                  className='text-gray-400 hover:text-white transition-colors'
                >
                  <a href={contact.link}>{contact.text}</a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-20' />

        {/* Bottom Bar */}
        <div className='py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
          <div className='text-gray-400 text-sm'>
            © {new Date().getFullYear()} Able For All Care Services. All rights
            reserved.
          </div>

          {/* Legal Links */}
          <div className='flex gap-1 space-x-6 text-sm'>
            Created by
            <div>
              <a
                className='font-semibold underline'
                href='https://artisticweb.com.au'
              >
                {" "}
                Artistic Web
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
