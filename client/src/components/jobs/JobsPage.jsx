import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import JobFilters from "./JobFilters";
import JobCard from "./JobCard";
import ApplyJobDialog from "./ApplyJobDialog";

const mockJobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    posted: "Posted 2 days ago",
    description: "We're looking for an experienced Full Stack Developer to join our dynamic team. You'll be working on cutting-edge web applications using React, Node.js, and cloud technologies.",
    type: "Full-time",
    workMode: "Remote",
    skills: ["React", "Node.js", "TypeScript"],
    salary: "$120k - $180k",
    applicants: 47,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Design Studio Pro",
    location: "New York, NY",
    posted: "Posted 5 days ago",
    description: "Join our creative team to design intuitive and beautiful user experiences for our suite of SaaS products.",
    type: "Full-time",
    workMode: "Hybrid",
    skills: ["Figma", "Design Systems", "Prototyping"],
    salary: "$90k - $130k",
    applicants: 32,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "CloudScale Inc",
    location: "Austin, TX",
    posted: "Posted 1 week ago",
    description: "Build and maintain our cloud infrastructure using AWS, Kubernetes, and Terraform.",
    type: "Full-time",
    workMode: "Remote",
    skills: ["AWS", "Kubernetes", "Docker"],
    salary: "$130k - $170k",
    applicants: 61,
  },
  {
    id: 4,
    title: "Frontend Developer (React)",
    company: "Innovate Labs",
    location: "Seattle, WA",
    posted: "Posted 3 days ago",
    description: "We're seeking a talented Frontend Developer with strong React skills.",
    type: "Full-time",
    workMode: "On-site",
    skills: ["React", "JavaScript", "CSS"],
    salary: "$95k - $140k",
    applicants: 28,
  },
  {
    id: 5,
    title: "Data Scientist",
    company: "DataFlow Analytics",
    location: "Boston, MA",
    posted: "Posted 4 days ago",
    description: "Join our data science team to build predictive models and derive insights from large datasets.",
    type: "Full-time",
    workMode: "Hybrid",
    skills: ["Python", "Machine Learning", "SQL"],
    salary: "$110k - $160k",
    applicants: 39,
  },
];

export default function JobsPage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Dream Job
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Discover thousands of job opportunities from top companies. Your next career move starts here.
        </p>
      </section>

      <JobFilters />

      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Available Jobs</h2>
          <p className="text-sm text-muted-foreground mt-1">Showing 1,247 results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Button variant="outline" size="sm">
            Most Recent
            <ChevronDown className="ml-2 h-3 w-3" />
          </Button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid gap-6">
        {mockJobs.map((job) => (
          <JobCard key={job.id} job={job} onApply={handleApply} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <Button variant="outline" size="lg">
          Load More Jobs
        </Button>
        <p className="text-sm text-muted-foreground">Showing 5 of 1,247 jobs</p>
      </div>

      {/* Apply Dialog */}
      <ApplyJobDialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)} />
    </main>
  );
}
