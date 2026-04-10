import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Eye,
  Edit,
  Trash2,
  CheckCircle,
  PlayCircle,
  PauseCircle,
  Filter,
  ArrowUpDown,
  MapPin,
  Briefcase,
  Plus,
} from "lucide-react";

export default function ManageJobs() {
  const [selectedRows, setSelectedRows] = useState([]);

  const jobs = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      status: "active",
      applicants: 24,
      posted: "Nov 28, 2025",
      expires: "Dec 28, 2025",
    },
    {
      id: 2,
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      status: "active",
      applicants: 18,
      posted: "Nov 25, 2025",
      expires: "Dec 25, 2025",
    },
    {
      id: 3,
      title: "Backend Engineer",
      location: "Austin, TX",
      type: "Full-time",
      status: "active",
      applicants: 32,
      posted: "Nov 20, 2025",
      expires: "Dec 20, 2025",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Seattle, WA",
      type: "Full-time",
      status: "expiring",
      applicants: 15,
      posted: "Nov 15, 2025",
      expires: "Dec 5, 2025",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      location: "Los Angeles, CA",
      type: "Full-time",
      status: "draft",
      applicants: 0,
      posted: "Nov 30, 2025",
      expires: "-",
    },
    {
      id: 6,
      title: "Product Manager",
      location: "Boston, MA",
      type: "Full-time",
      status: "closed",
      applicants: 45,
      posted: "Oct 15, 2025",
      expires: "Nov 15, 2025",
    },
  ];

  const toggleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(jobs.map((j) => j.id));
    } else {
      setSelectedRows([]);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Manage Jobs</h1>
          <p className="text-muted-foreground">View and manage all your job postings</p>
        </div>
        <Button asChild>
          <Link to="/create-job">
            <Plus className="h-4 w-4 mr-2" />
            Create New Job
          </Link>
        </Button>
      </div>

      {/* Filters */}
      <Card className="p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Input placeholder="Search jobs by title, location..." className="pl-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Status
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </Card>

      {/* Jobs Table */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="py-4 px-6 text-left">
                  <Checkbox onCheckedChange={toggleSelectAll} />
                </th>
                <th className="py-4 px-6 text-left text-sm font-medium">Job Title</th>
                <th className="py-4 px-6 text-left text-sm font-medium">Status</th>
                <th className="py-4 px-6 text-left text-sm font-medium">Applicants</th>
                <th className="py-4 px-6 text-left text-sm font-medium">Posted Date</th>
                <th className="py-4 px-6 text-left text-sm font-medium">Expires</th>
                <th className="py-4 px-6 text-right text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-accent transition-colors">
                  <td className="py-4 px-6">
                    <Checkbox checked={selectedRows.includes(job.id)} />
                  </td>
                  <td className="py-4 px-6">
                    <Link to="/job-details" className="font-medium hover:text-primary">
                      {job.title}
                    </Link>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        {job.type}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    {job.status === "active" && <Badge className="bg-green-100 text-green-800">Active</Badge>}
                    {job.status === "expiring" && <Badge className="bg-yellow-100 text-yellow-800">Expiring Soon</Badge>}
                    {job.status === "draft" && <Badge className="bg-gray-100 text-gray-800">Draft</Badge>}
                    {job.status === "closed" && <Badge className="bg-red-100 text-red-800">Closed</Badge>}
                  </td>
                  <td className="py-4 px-6 font-medium">{job.applicants}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{job.posted}</td>
                  <td className="py-4 px-6 text-sm text-muted-foreground">{job.expires}</td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </main>
  );
}
