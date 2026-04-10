import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  Building2,
  MapPin,
  Clock,
  DollarSign,
  BarChart3,
  Calendar,
  Users,
  Globe,
  Briefcase,
  Bookmark,
//   Linkedin,
//   Twitter,

  Link as LinkIcon,
  Flag,
  Code,
  Layout,
  Cpu,
} from "lucide-react";
import ApplyJobDialog from "@/components/jobs/ApplyJobDialog";

export default function JobDetailsPage() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);

  const handleApply = () => {
    setIsApplyOpen(true);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">
          Jobs
        </Link>
        <span className="text-muted-foreground">›</span>
        <Link to="/category/technology" className="hover:text-foreground">
          Technology
        </Link>
        <span className="text-muted-foreground">›</span>
        <span className="font-medium text-foreground">Senior Full Stack Developer</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ==================== MAIN CONTENT ==================== */}
        <div className="lg:col-span-2 space-y-6">
          {/* Job Header */}
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="h-20 w-20 rounded-lg bg-secondary flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-primary" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Senior Full Stack Developer</h1>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <Link to="/company-profile" className="text-lg font-medium hover:text-primary">
                        TechCorp Solutions
                      </Link>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        San Francisco, CA
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Posted 2 days ago
                      </span>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" title="Save job">
                    <Bookmark className="h-6 w-6" />
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Full-time</Badge>
                  <Badge variant="outline">Remote</Badge>
                  <Badge variant="outline">Senior Level</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Job Overview */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Job Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Job Type</p>
                  <p className="font-medium">Full-time</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">San Francisco, CA (Remote)</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Salary</p>
                  <p className="font-medium">$120k - $180k / year</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Experience</p>
                  <p className="font-medium">5+ years</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Application Deadline</p>
                  <p className="font-medium">December 31, 2025</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Applicants</p>
                  <p className="font-medium">47 applications</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Job Description */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Job Description</h2>
            <div className="prose prose-sm max-w-none text-foreground space-y-4">
              <p>
                We're looking for an experienced Full Stack Developer to join our dynamic team at TechCorp Solutions.
                You'll be working on cutting-edge web applications using React, Node.js, and cloud technologies to
                build scalable solutions that impact millions of users.
              </p>
              <p>
                As a Senior Full Stack Developer, you will lead the design and implementation of new features, mentor
                junior developers, and work closely with product managers and designers to deliver exceptional user
                experiences.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-3">Required Qualifications</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>5+ years of professional software development experience</li>
                <li>Strong proficiency in JavaScript/TypeScript, React, and Node.js</li>
                <li>Experience with modern frontend frameworks and state management</li>
                <li>Solid understanding of RESTful APIs and microservices architecture</li>
                <li>Experience with SQL and NoSQL databases (PostgreSQL, MongoDB, etc.)</li>
                <li>Proficiency with Git and version control workflows</li>
                <li>Strong problem-solving skills and attention to detail</li>
                <li>Excellent communication and collaboration skills</li>
              </ul>

              <h3 className="text-lg font-semibold mt-6 mb-3">What We Offer</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Competitive salary range: $120,000 - $180,000 per year</li>
                <li>Comprehensive health, dental, and vision insurance</li>
                <li>401(k) with company match</li>
                <li>Flexible remote work policy</li>
                <li>Generous PTO and paid holidays</li>
                <li>Professional development budget</li>
                <li>Latest tech equipment and tools</li>
                <li>Collaborative and inclusive work environment</li>
              </ul>
            </div>
          </Card>

          {/* Required Skills */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Required Skills</h2>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "TypeScript", "JavaScript", "REST API", "PostgreSQL", "MongoDB", "Git", "Docker", "AWS", "Microservices", "Redux"].map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Similar Jobs */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Similar Jobs</h2>
            <div className="space-y-4">
              {/* Similar Job 1 */}
              <div className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    <Link to="/job-details" className="hover:underline">Backend Developer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">CloudScale Inc • Austin, TX • Remote</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">$110k - $160k</span>
                    <Link to="/job-details" className="text-sm text-primary hover:underline">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Similar Job 2 */}
              <div className="flex gap-4 border-b pb-4 last:border-0 last:pb-0">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Layout className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    <Link to="/job-details" className="hover:underline">Frontend Developer (React)</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Innovate Labs • Seattle, WA • On-site</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">$95k - $140k</span>
                    <Link to="/job-details" className="text-sm text-primary hover:underline">View Details</Link>
                  </div>
                </div>
              </div>

              {/* Similar Job 3 */}
              <div className="flex gap-4 last:border-0">
                <div className="h-12 w-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">
                    <Link to="/job-details" className="hover:underline">Software Engineer</Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">Tech Innovations • Boston, MA • Hybrid</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-primary">$105k - $155k</span>
                    <Link to="/job-details" className="text-sm text-primary hover:underline">View Details</Link>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ==================== SIDEBAR ==================== */}
        <div className="lg:col-span-1 space-y-6">
          {/* Apply Now (Sticky) */}
          <Card className="p-6 lg:sticky lg:top-24">
            <div className="space-y-4">
              <div className="text-center pb-4 border-b">
                <p className="text-2xl font-bold text-primary mb-1">$120k - $180k</p>
                <p className="text-sm text-muted-foreground">Per year</p>
              </div>

              <Button onClick={handleApply} className="w-full text-base h-11">
                <span className="mr-2">📤</span>
                Apply Now
              </Button>

              <div className="pt-4 border-t space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Applicants</span>
                  <span className="font-medium">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Posted</span>
                  <span className="font-medium">2 days ago</span>
                </div>
              </div>
            </div>
          </Card>

          {/* About Company */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">About Company</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">TechCorp Solutions</h4>
                  <p className="text-sm text-muted-foreground">Technology & Software</p>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                TechCorp Solutions is a leading technology company specializing in enterprise software solutions.
                We help businesses transform their operations through innovative technology.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <a href="#" className="text-primary hover:underline">www.techcorp.com</a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">500-1000 employees</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Founded in 2010</span>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/company-profile">View Company Profile</Link>
              </Button>
            </div>
          </Card>

          {/* Share Job */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Share this Job</h3>
            <div className="grid grid-cols-4 gap-2">
              <Button variant="outline" size="icon">
                <Building2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Building2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Building2 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Building2 className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Report Job */}
          <Button variant="ghost" className="w-full text-muted-foreground hover:text-foreground flex items-center justify-center gap-2">
            <Flag className="h-4 w-4" />
            Report this job
          </Button>
        </div>
      </div>

      {/* Apply Dialog */}
      <ApplyJobDialog open={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </main>
  );
}
