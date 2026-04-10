import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useState } from "react";
import {
  Building2,
  MapPin,
  Users,
  Globe,
  Mail,
  Phone,

  Share2,
  Bookmark,
  Clock,
} from "lucide-react";
import ApplyJobDialog from "@/components/jobs/ApplyJobDialog";

export default function CompanyProfile() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsApplyOpen(true);
  };

  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      posted: "Posted 2 days ago",
      applicants: 47,
      salary: "$120k - $180k",
      type: "Full-time",
      mode: "Remote",
      skills: ["React", "Node.js", "TypeScript"],
    },
    {
      id: 2,
      title: "DevOps Engineer",
      location: "Austin, TX",
      posted: "Posted 1 week ago",
      applicants: 61,
      salary: "$130k - $170k",
      type: "Full-time",
      mode: "Remote",
      skills: ["AWS", "Kubernetes", "Docker"],
    },
    {
      id: 3,
      title: "Product Manager",
      location: "San Francisco, CA",
      posted: "Posted 3 days ago",
      applicants: 38,
      salary: "$140k - $190k",
      type: "Full-time",
      mode: "Hybrid",
      skills: ["Product Strategy", "Agile", "Leadership"],
    },
    {
      id: 4,
      title: "UI/UX Designer",
      location: "New York, NY",
      posted: "Posted 5 days ago",
      applicants: 29,
      salary: "$90k - $140k",
      type: "Full-time",
      mode: "Remote",
      skills: ["Figma", "Design Systems", "Prototyping"],
    },
  ];

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Company Header */}
      <Card className="p-8 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-xl bg-secondary flex items-center justify-center">
              <Building2 className="h-16 w-16 text-primary" />
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">TechCorp Solutions</h1>
                <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    Technology & Software
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    San Francisco, CA
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    500-1000 employees
                  </span>
                </div>
              </div>
              <Button variant="outline">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">About Company</h2>
            <div className="prose prose-sm text-foreground space-y-4">
              <p>TechCorp Solutions is a leading technology company specializing in enterprise software solutions...</p>
              <p>Our mission is to empower businesses through innovative technology solutions...</p>
              <p>At TechCorp, we believe in fostering a culture of innovation, collaboration...</p>
            </div>
          </Card>

          {/* Values */}
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: "lightbulb", title: "Innovation", desc: "We encourage creative thinking..." },
                { icon: "users", title: "Collaboration", desc: "Teamwork and open communication..." },
                { icon: "target", title: "Excellence", desc: "We strive for the highest quality..." },
                { icon: "heart", title: "Integrity", desc: "Honesty and transparency guide..." },
              ].map((value) => (
                <div key={value.title} className="flex gap-3">
                  <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                    <i data-lucide={value.icon} className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Open Positions */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Open Positions</h2>
              <span className="text-sm text-muted-foreground">15 jobs available</span>
            </div>
            <div className="space-y-4">
              {openPositions.map((job) => (
                <article key={job.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        <Link to="/job-details" className="hover:underline">{job.title}</Link>
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.posted}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.applicants} applicants
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-5 w-5" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {job.title.includes("Full Stack") && "We're looking for an experienced Full Stack Developer..."}
                    {job.title.includes("DevOps") && "Build and maintain our cloud infrastructure..."}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary">{job.type}</Badge>
                    <Badge variant="outline">{job.mode}</Badge>
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline">{skill}</Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <span className="text-sm font-semibold text-primary">{job.salary}</span>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" size="sm">
                        <Link to="/job-details">View Details</Link>
                      </Button>
                      <Button size="sm" onClick={() => handleApply(job)}>
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Button variant="outline" asChild>
                <Link to="/">View All Open Positions</Link>
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Globe className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Website</p>
                  <a href="#" className="text-primary hover:underline">www.techcorp.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="#" className="text-primary hover:underline">careers@techcorp.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="#" className="font-medium">+1 (415) 555-1234</a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">  LinkedIn </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">  Twitter </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">  Facebook </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">  Instagram </a>
              <a href="#" className="flex items-center gap-3 p-2 hover:bg-accent rounded-md">  GitHub </a>
            </div>
          </Card>
        </div>
      </div>

      <ApplyJobDialog open={isApplyOpen} onClose={() => setIsApplyOpen(false)} />
    </main>
  );
}
