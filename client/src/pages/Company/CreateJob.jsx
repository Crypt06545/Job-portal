import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Plus, X, Send } from "lucide-react";

export default function CreateJob() {
  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      jobTitle: "",
      jobType: "",
      workMode: "",
      category: "",
      experience: "",
      city: "",
      salaryMin: "",
      salaryMax: "",
      salaryPeriod: "yearly",
      description: "",
      requirements: "",
      benefits: "",
      vacancies: 1,
      deadline: "",
    },
  });

  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js"]);
  const [skillInput, setSkillInput] = useState("");

  const onSubmit = (data) => {
    console.log("New Job Data:", { ...data, skills });
    alert("✅ Job posted successfully!");
  };

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/company-dashboard" className="hover:text-primary">Dashboard</Link>
          <span>›</span>
          <span className="font-medium text-foreground">Create Job</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Post a New Job</h1>
            <p className="text-muted-foreground">Fill in the details to create a new job posting</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/company-dashboard">
              <X className="h-4 w-4 mr-2" />
              Cancel
            </Link>
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Basic Information */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Basic Information</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="jobTitle">Job Title *</Label>
              <Input id="jobTitle" placeholder="e.g. Senior Full Stack Developer" {...register("jobTitle", { required: true })} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Job Type *</Label>
                <Controller
                  name="jobType"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                        <SelectItem value="internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
              <div>
                <Label>Work Mode *</Label>
                <Controller
                  name="workMode"
                  control={control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select work mode" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="on-site">On-site</SelectItem>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Category *</Label>
                <Controller name="category" control={control} render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="design">Design</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                )} />
              </div>
              <div>
                <Label>Experience Level *</Label>
                <Controller name="experience" control={control} render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger><SelectValue placeholder="Select experience level" /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                      <SelectItem value="mid">Mid Level (2-5 years)</SelectItem>
                      <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                      <SelectItem value="lead">Lead (10+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                )} />
              </div>
            </div>
          </div>
        </Card>

        {/* Location & Salary */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Location & Compensation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <Label htmlFor="city">Location *</Label>
              <Input id="city" placeholder="e.g. San Francisco" {...register("city", { required: true })} />
            </div>
            <div>
              <Label htmlFor="salaryMin">Minimum Salary ($)</Label>
              <Input id="salaryMin" type="number" placeholder="100000" {...register("salaryMin")} />
            </div>
            <div>
              <Label htmlFor="salaryMax">Maximum Salary ($)</Label>
              <Input id="salaryMax" type="number" placeholder="150000" {...register("salaryMax")} />
            </div>
          </div>
        </Card>

        {/* Job Description */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Job Description</h2>
          <div className="space-y-6">
            <div>
              <Label htmlFor="description">Job Description *</Label>
              <Textarea id="description" rows={8} placeholder="Describe the role..." {...register("description", { required: true })} />
            </div>
            <div>
              <Label htmlFor="requirements">Requirements & Qualifications</Label>
              <Textarea id="requirements" rows={6} placeholder="List required skills..." {...register("requirements")} />
            </div>
            <div>
              <Label htmlFor="benefits">Benefits & Perks</Label>
              <Textarea id="benefits" rows={5} placeholder="What we offer..." {...register("benefits")} />
            </div>
          </div>
        </Card>

        {/* Required Skills */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Required Skills</h2>
          <div className="flex gap-2 mb-4">
            <Input
              value={skillInput}
              onChange={(e) => setSkillInput(e.target.value)}
              placeholder="Type a skill and press Add"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addSkill())}
            />
            <Button type="button" onClick={addSkill}>
              <Plus className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="badge badge-secondary inline-flex items-center gap-1">
                {skill}
                <button type="button" onClick={() => removeSkill(skill)}>
                  <X className="h-3 w-3" />
                </button>
              </span>
            ))}
          </div>
        </Card>

        {/* Application Settings */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-6">Application Settings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="vacancies">Number of Vacancies</Label>
              <Input id="vacancies" type="number" min="1" defaultValue="1" {...register("vacancies")} />
            </div>
            <div>
              <Label htmlFor="deadline">Application Deadline *</Label>
              <Input id="deadline" type="date" {...register("deadline", { required: true })} />
            </div>
          </div>
        </Card>

        {/* Form Actions */}
        <Card className="p-6">
          <div className="flex justify-end gap-3">
            <Button variant="outline" asChild>
              <Link to="/company-dashboard">Cancel</Link>
            </Button>
            <Button type="submit">
              <Send className="h-4 w-4 mr-2" />
              Publish Job
            </Button>
          </div>
        </Card>
      </form>
    </main>
  );
}
