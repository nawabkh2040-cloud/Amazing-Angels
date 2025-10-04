import { FileText, Calendar, CheckCircle2, Clock, DollarSign, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';

const Admissions = () => {
  const requirements = [
    'Vaccination certificates',
    'Birth certificate',
    'Medical Certificate confirming good health',
    'School transfer, character, and attendance certificates (if applicable)',
    'Three latest passport size photographs',
  ];

  const steps = [
    {
      icon: FileText,
      title: 'Application',
      description: 'Complete admission form accurately with all required information',
    },
    {
      icon: CheckCircle2,
      title: 'Documents',
      description: 'Submit all necessary documents and certificates',
    },
    {
      icon: Calendar,
      title: 'Assessment',
      description: 'Applicants for Class II-VIII may undergo an assessment test',
    },
    {
      icon: DollarSign,
      title: 'Fee Payment',
      description: 'Complete admission formalities and pay prescribed fees',
    },
  ];

  return (
    <section id="admissions" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Admissions</span> Open
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our community of excellence - Academic session starts April 1st
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center">Admission Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all hover:scale-105 relative"
              >
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {index + 1}
                </div>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Information Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Age Requirements */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold">Age Requirements</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Children should be around <span className="font-bold text-primary">3 years of age</span> for Class Nursery admission.
            </p>
            <p className="text-muted-foreground">
              The admission process for the academic session commences on <span className="font-bold text-primary">April 1st</span>.
            </p>
          </Card>

          {/* Office Timings */}
          <Card className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-accent" />
              <h3 className="text-2xl font-bold">Office Timings</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">Admission Forms Accepted:</p>
                <p className="text-muted-foreground">9:00 AM to 1:00 PM (Working Days)</p>
              </div>
              <div>
                <p className="font-semibold">Principal Visiting Hours:</p>
                <p className="text-muted-foreground">10:30 AM to 2:00 PM</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Required Documents */}
        <Card className="p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Required Documents</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {requirements.map((req, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{req}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Important Notes */}
        <Card className="p-8 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-6 w-6 text-amber-600 mt-1" />
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-900">Important Notes</h3>
              <div className="space-y-3 text-amber-900">
                <p>• Forms must be completed accurately and signed before submission</p>
                <p>• Incomplete applications will not be considered</p>
                <p>• Incorrect information will result in automatic disqualification</p>
                <p>• After test results, complete formalities within 7 days</p>
                <p>• Seats available under RTE Act 2009 for economically weaker sections</p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl hover:scale-105 transition-all text-lg px-12 py-6"
          >
            Download Admission Form
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
