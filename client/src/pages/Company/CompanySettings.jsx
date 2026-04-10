import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Phone,
  Mail,
  Globe,
//   Linkedin,
//   Twitter,
//   Facebook,
//   Instagram,
//   Github,
  Camera,
  Upload,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function CompanySettings() {
  const { register, handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      companyName: "TechCorp Solutions",
      industry: "Information Technology",
      companySize: "201-500",
      companyType: "private",
      website: "https://techcorp.example.com",
      foundedYear: "2015",
      about: `TechCorp Solutions is a leading technology company specializing in innovative software solutions. We are committed to delivering cutting-edge products and services that help businesses transform digitally.`,
      phone: "+1 (555) 123-4567",
      hrEmail: "hr@techcorp.com",
      supportEmail: "support@techcorp.com",
    //   linkedin: "https://linkedin.com/company/techcorp",
    //   twitter: "https://twitter.com/techcorp",
    //   facebook: "https://facebook.com/techcorp",
    //   instagram: "https://instagram.com/techcorp",
    //   github: "https://github.com/techcorp",
    },
  });

  const [logoPreview, setLogoPreview] = useState(null);

  const onSubmit = (data) => {
    console.log("Company settings saved:", data);
    alert("✅ Company settings saved successfully!");
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogoPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <Link to="/company-dashboard" className="hover:text-primary">Dashboard</Link>
          <span className="text-muted-foreground">›</span>
          <span className="font-medium text-foreground">Company Settings</span>
        </div>
        <h1 className="text-3xl font-bold">Company Settings</h1>
        <p className="text-muted-foreground">Manage your company profile and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-1">
          <Card className="p-4">
            <nav className="space-y-1">
              <a href="#company-info" className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-accent rounded-md">
                <Building2 className="h-4 w-4" /> Company Info
              </a>
              <a href="#contact" className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors">
                <Phone className="h-4 w-4" /> Contact Details
              </a>
              <a href="#social" className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-accent rounded-md transition-colors">
                <Globe className="h-4 w-4" /> Social Media
              </a>
            </nav>
          </Card>

          {/* Quick Info Card */}
          <Card className="p-6 mt-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Building2 className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold mb-1">TechCorp Solutions</h3>
              <p className="text-xs text-muted-foreground mb-4">Premium Member</p>
              <div className="w-full space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Jobs</span>
                  <span className="font-medium">24</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Applicants</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium">Jan 2024</span>
                </div>
              </div>
            </div>
          </Card>
        </aside>

        {/* Main Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* ==================== COMPANY INFORMATION ==================== */}
            <Card className="p-6" id="company-info">
              <h2 className="text-xl font-semibold mb-6">Company Information</h2>

              {/* Logo Upload */}
              <div className="mb-8">
                <Label className="mb-2 block">Company Logo</Label>
                <div className="flex items-start gap-6">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center overflow-hidden">
                      {logoPreview ? (
                        <img src={logoPreview} alt="Logo Preview" className="h-full w-full object-cover" />
                      ) : (
                        <Building2 className="h-12 w-12 text-white" />
                      )}
                    </div>
                    <Button
                      type="button"
                      size="icon"
                      className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full shadow-lg"
                      onClick={() => document.getElementById("logoUpload").click()}
                    >
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="flex-1">
                    <input
                      type="file"
                      id="logoUpload"
                      accept="image/*"
                      className="hidden"
                      onChange={handleLogoUpload}
                    />
                    <Button type="button" variant="outline" onClick={() => document.getElementById("logoUpload").click()}>
                      <Upload className="h-4 w-4 mr-2" />
                      Upload Logo
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2">
                      Recommended size: 200x200px. Max file size: 2MB. JPG, PNG, SVG
                    </p>
                  </div>
                </div>
              </div>

              {/* Company Name & Industry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="companyName" className="mb-2">Company Name <span className="text-red-500">*</span></Label>
                  <Input id="companyName" {...register("companyName", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="industry" className="mb-2">Industry <span className="text-red-500">*</span></Label>
                  <Input id="industry" {...register("industry", { required: true })} />
                </div>
              </div>

              {/* Size & Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label className="mb-2">Company Size</Label>
                  <Controller
                    name="companySize"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1-10 employees</SelectItem>
                          <SelectItem value="11-50">11-50 employees</SelectItem>
                          <SelectItem value="51-200">51-200 employees</SelectItem>
                          <SelectItem value="201-500">201-500 employees</SelectItem>
                          <SelectItem value="501-1000">501-1000 employees</SelectItem>
                          <SelectItem value="1000+">1000+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <div>
                  <Label className="mb-2">Company Type</Label>
                  <Controller
                    name="companyType"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup</SelectItem>
                          <SelectItem value="private">Private Company</SelectItem>
                          <SelectItem value="public">Public Company</SelectItem>
                          <SelectItem value="non-profit">Non-Profit</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
              </div>

              {/* Website & Founded Year */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="website" className="mb-2">Website <span className="text-red-500">*</span></Label>
                  <Input id="website" type="url" {...register("website", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="foundedYear" className="mb-2">Founded Year</Label>
                  <Input id="foundedYear" {...register("foundedYear")} />
                </div>
              </div>

              {/* About Company */}
              <div className="mt-6">
                <Label htmlFor="about" className="mb-2">About Company <span className="text-red-500">*</span></Label>
                <Textarea id="about" rows={6} {...register("about", { required: true })} />
              </div>

              {/* Headquarters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                  <Label htmlFor="city" className="mb-2">City</Label>
                  <Input id="city" {...register("city")} defaultValue="San Francisco" />
                </div>
                <div>
                  <Label htmlFor="state" className="mb-2">State/Province</Label>
                  <Input id="state" {...register("state")} defaultValue="California" />
                </div>
                <div>
                  <Label htmlFor="country" className="mb-2">Country</Label>
                  <Input id="country" {...register("country")} defaultValue="United States" />
                </div>
              </div>
            </Card>

            {/* ==================== CONTACT INFORMATION ==================== */}
            <Card className="p-6" id="contact">
              <h2 className="text-xl font-semibold mb-6">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="phone" className="mb-2">Phone Number <span className="text-red-500">*</span></Label>
                  <Input id="phone" {...register("phone", { required: true })} />
                </div>
                <div>
                  <Label htmlFor="hrEmail" className="mb-2">HR Department Email</Label>
                  <Input id="hrEmail" type="email" {...register("hrEmail")} />
                </div>
              </div>
            </Card>

            {/* ==================== SOCIAL MEDIA ==================== */}
            <Card className="p-6" id="social">
              <h2 className="text-xl font-semibold mb-6">Social Media Links</h2>
              <div className="space-y-6">
                <div className="relative">
                  {/* <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
                  <Input className="pl-10" placeholder="LinkedIn Profile" {...register("linkedin")} />
                </div>
                <div className="relative">
                  {/* <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
                  <Input className="pl-10" placeholder="Twitter / X Profile" {...register("twitter")} />
                </div>
                <div className="relative">
                  {/* <Facebook className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
                  <Input className="pl-10" placeholder="Facebook Page" {...register("facebook")} />
                </div>
                <div className="relative">
                  {/* <Instagram className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
                  <Input className="pl-10" placeholder="Instagram Profile" {...register("instagram")} />
                </div>
                <div className="relative">
                  {/* <Github className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
                  <Input className="pl-10" placeholder="GitHub Organization" {...register("github")} />
                </div>
              </div>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button type="submit" size="lg">
                <i data-lucide="save" className="h-4 w-4 mr-2"></i>
                Save Changes
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
