import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { MapPin, Clock, Users, Building2 } from "lucide-react";

export default function JobCard({ job, onApply }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-lg bg-secondary flex items-center justify-center">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                <Link to="/job-details" className="hover:underline">
                  {job.title}
                </Link>
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Link to="/company-profile" className="hover:text-primary font-medium">
                  {job.company}
                </Link>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {job.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {job.posted}
                </span>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {job.description}
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{job.type}</Badge>
            <Badge variant="outline">{job.workMode}</Badge>
            {job.skills.map((skill, i) => (
              <Badge key={i} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-primary">
                {job.salary}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Users className="h-4 w-4" />
                {job.applicants} applicants
              </span>
            </div>

            <div className="flex gap-2">
              <Button asChild variant="outline" size="sm">
                <Link to="/job-details">View Details</Link>
              </Button>
              <Button size="sm" onClick={() => onApply(job)}>
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
