import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4">LWS Job Portal</h3>
            <p className="text-sm text-muted-foreground">
              Your trusted platform for finding the perfect job or the perfect candidate.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Job Seekers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/jobs" className="hover:text-foreground">Browse Jobs</Link></li>
              <li><Link to="/companies" className="hover:text-foreground">Companies</Link></li>
              <li><Link to="/career-advice" className="hover:text-foreground">Career Advice</Link></li>
              <li><Link to="/salary-guide" className="hover:text-foreground">Salary Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">For Employers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/post-job" className="hover:text-foreground">Post a Job</Link></li>
              <li><Link to="/candidates" className="hover:text-foreground">Browse Candidates</Link></li>
              <li><Link to="/pricing" className="hover:text-foreground">Pricing</Link></li>
              <li><Link to="/employer-resources" className="hover:text-foreground">Employer Resources</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 LWS Job Portal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
