import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#academics' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Activities', href: '#activities' },
    { name: 'Admissions', href: '#admissions' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AAPS Logo" className="h-12 w-12 object-contain" />
              <div>
                <h3 className="font-bold text-lg">Amazing Angels</h3>
                <p className="text-sm opacity-90">Public School</p>
              </div>
            </div>
            <p className="text-sm opacity-90 mb-4">
              Empowering Minds, Enriching Lives. Quality education with 100% board exam success since 2017.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>211 Samrat Nagar, Khajrana, Indore, M.P. 452016</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+91 9770103319</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>amazingangelsgroup@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* School Timings */}
          <div>
            <h4 className="font-bold text-lg mb-4">School Timings</h4>
            <div className="space-y-3 text-sm opacity-90">
              <div>
                <p className="font-semibold opacity-100">Junior Section</p>
                <p>7:55 AM - 12:15 PM</p>
              </div>
              <div>
                <p className="font-semibold opacity-100">Middle & Senior</p>
                <p>12:15 PM - 04:15 PM</p>
              </div>
              <div>
                <p className="font-semibold opacity-100">Office Hours</p>
                <p>Mon-Fri: 9:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>
            © {new Date().getFullYear()} Amazing Angels Public School. All rights reserved.
          </p>
          <p className="mt-2">
            Managed by Al Raza Memorial Educational Society | Affiliated with MP State Board
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
