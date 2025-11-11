import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: '211 Samrat Nagar, Khajrana, Indore, M.P. 452016',
      color: 'text-primary',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 9770103319',
      color: 'text-accent',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'amazingangelsgroup@gmail.com',
      color: 'text-secondary',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: 'Monday to Friday: 9:00 AM - 4:00 PM',
      color: 'text-blue-600',
    },
  ];

  return (
    <section id="contact" className="py-10 lg:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center  mb-6 lg:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're here to answer your questions and welcome you to our community
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all hover:scale-105"
                >
                  <info.icon className={`h-8 w-8 ${info.color} mb-4`} />
                  <h4 className="font-bold mb-2">{info.title}</h4>
                  <p className="text-sm text-muted-foreground">{info.details}</p>
                </Card>
              ))}
            </div>

            {/* School Timings */}
            <Card className="p-8 bg-gradient-to-r from-primary to-blue-900 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-6">School Timings</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">Junior Section</p>
                  <p className="opacity-90">7:55 AM to 12:15 PM</p>
                </div>
                <div>
                  <p className="font-semibold text-lg">Middle & Senior Section</p>
                  <p className="opacity-90">12:15 PM to 04:15 PM</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell us how we can help you..."
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>

        {/* Map */}
        <Card className="mt-12 p-4 overflow-hidden">
          <div className="aspect-video w-full bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
              <p className="text-muted-foreground">
                211 Samrat Nagar, Khajrana, Indore, M.P. 452016
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
