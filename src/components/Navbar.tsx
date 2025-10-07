import { Home, BookOpen, Building2, Trophy, GraduationCap, Phone, Info } from 'lucide-react';
import { NavBar } from './ui/tubelight-navbar';

const Navbar = () => {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: Info },
    { name: 'Academics', url: '/academics', icon: BookOpen },
    { name: 'Facilities', url: '/facilities', icon: Building2 },
    { name: 'Activities', url: '/activities', icon: Trophy },
    { name: 'Admissions', url: '/admissions', icon: GraduationCap },
    { name: 'Contact', url: '/contact', icon: Phone },
  ];

  return <NavBar items={navItems} />;
};

export default Navbar;
