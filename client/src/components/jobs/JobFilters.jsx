import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

export default function JobFilters() {
  return (
    <div className="card p-6">
      <div className="space-y-4">
        {/* Search Bar (Design only) */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs by title, skill..."
                className="input pl-10 w-full outline-none border-none bg-background"
                disabled
              />
            </div>
          </div>
          <Button className="h-10 px-6" disabled>
            <Search className="h-4 w-4 mr-2" />
            Search Jobs
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border">
          <span className="text-sm font-medium text-muted-foreground">Filters:</span>

          {/* Job Type */}
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full-time">Full-time</SelectItem>
              <SelectItem value="part-time">Part-time</SelectItem>
              <SelectItem value="contract">Contract</SelectItem>
              <SelectItem value="internship">Internship</SelectItem>
            </SelectContent>
          </Select>

          {/* Experience Level */}
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Experience Level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="entry">Entry Level</SelectItem>
              <SelectItem value="mid">Mid Level</SelectItem>
              <SelectItem value="senior">Senior Level</SelectItem>
              <SelectItem value="lead">Lead/Principal</SelectItem>
            </SelectContent>
          </Select>

          {/* Salary Range */}
          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Salary Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-50">$0 - $50k</SelectItem>
              <SelectItem value="50-100">$50k - $100k</SelectItem>
              <SelectItem value="100-150">$100k - $150k</SelectItem>
              <SelectItem value="150+">$150k+</SelectItem>
            </SelectContent>
          </Select>

          {/* Skills */}
          <Select>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Skills" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="node">Node.js</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="typescript">TypeScript</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="ghost" size="sm" className="text-muted-foreground">
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}
