import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Users,
  Clock,
  Star,
  MapPin,
  Eye,
  Edit,
  Check,
  Download,
  Plus,
  List,
  Settings,
  Lightbulb,
  User,
} from "lucide-react";

export default function CompanyDashboard() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Welcome back, TechCorp! 👋</h1>
        <p className="text-muted-foreground">
          Here's what's happening with your job postings today
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Stat 1 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center">
              <Briefcase className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">24</h3>
          <p className="text-sm text-muted-foreground">Active Jobs</p>
        </Card>

        {/* Stat 2 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-green-100 flex items-center justify-center">
              <Users className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">156</h3>
          <p className="text-sm text-muted-foreground">Total Applicants</p>
        </Card>

        {/* Stat 3 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">32</h3>
          <p className="text-sm text-muted-foreground">Pending Reviews</p>
        </Card>

        {/* Stat 4 */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold mb-1">18</h3>
          <p className="text-sm text-muted-foreground">Shortlisted</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ==================== LEFT COLUMN ==================== */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Job Posts */}
          <Card>
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Job Posts</h2>
              <Link to="#" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>

            <div className="divide-y">
              {/* Job 1 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <Link to="/job-details" className="hover:text-primary">
                        Senior Full Stack Developer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        San Francisco, CA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Posted 2 days ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">24</span> applicants
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Job 2 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <Link to="/job-details" className="hover:text-primary">
                        Frontend Developer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Remote
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Posted 5 days ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">18</span> applicants
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Job 3 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <Link to="/job-details" className="hover:text-primary">
                        Backend Engineer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Austin, TX
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Posted 1 week ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">32</span> applicants
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              {/* Job 4 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">
                      <Link to="/job-details" className="hover:text-primary">
                        DevOps Engineer
                      </Link>
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        Seattle, WA
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" />
                        Full-time
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Posted 2 weeks ago
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">15</span> applicants
                  </span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Recent Applicants */}
          <Card>
            <div className="p-6 border-b flex items-center justify-between">
              <h2 className="text-xl font-semibold">Recent Applicants</h2>
              <Link to="#" className="text-sm text-primary hover:underline">
                View All
              </Link>
            </div>

            <div className="divide-y">
              {/* Applicant 1 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">Sarah Johnson</h3>
                        <p className="text-sm text-muted-foreground">
                          Applied for{" "}
                          <span className="font-medium text-foreground">Senior Full Stack Developer</span>
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">React</Badge>
                      <Badge variant="secondary">Node.js</Badge>
                      <Badge variant="secondary">AWS</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Shortlist
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicant 2 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">Michael Chen</h3>
                        <p className="text-sm text-muted-foreground">
                          Applied for{" "}
                          <span className="font-medium text-foreground">Frontend Developer</span>
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">5 hours ago</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Vue.js</Badge>
                      <Badge variant="secondary">TypeScript</Badge>
                      <Badge variant="secondary">CSS</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Shortlist
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Applicant 3 */}
              <div className="p-6 hover:bg-accent transition-colors">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-semibold mb-1">Emily Rodriguez</h3>
                        <p className="text-sm text-muted-foreground">
                          Applied for{" "}
                          <span className="font-medium text-foreground">Backend Engineer</span>
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground">1 day ago</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">Python</Badge>
                      <Badge variant="secondary">Django</Badge>
                      <Badge variant="secondary">PostgreSQL</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="text-xs">
                        <Check className="h-3 w-3 mr-1" />
                        Shortlist
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Eye className="h-3 w-3 mr-1" />
                        View Profile
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Download className="h-3 w-3 mr-1" />
                        Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ==================== RIGHT COLUMN (Sidebar) ==================== */}
        <div className="lg:col-span-1 space-y-6">
          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Post New Job
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <List className="h-4 w-4 mr-2" />
                Manage Jobs
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Users className="h-4 w-4 mr-2" />
                View Applicants
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Settings className="h-4 w-4 mr-2" />
                Company Settings
              </Button>
            </div>
          </Card>

          {/* Pro Tip Card */}
          <Card className="p-6 bg-blue-50 border-blue-200">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-900">Pro Tip</h4>
                <p className="text-sm text-blue-800">
                  Jobs with detailed descriptions get 40% more quality applicants. Keep your postings updated!
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
}
