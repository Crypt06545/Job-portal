// RegisterCompany.jsx
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Building,
  Mail,
  Globe,
  Briefcase,
  Users,
  Calendar,
  MapPin,
  Shield,
  Lock,
  Eye,
  EyeOff,
  User,
  Zap,
  ChartLine,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterCompany = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      companyName: "",
      email: "",
      website: "",
      industry: "",
      companySize: "",
      foundedYear: "",
      location: "",
      description: "",
      password: "",
      confirmPassword: "",
      terms: false,
      verified: false,
      updates: false,
    },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Company registration data:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Add your registration logic here
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        {/* Page Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Register Your Company
          </h1>
          <p className="text-lg text-muted-foreground">
            Start hiring top talent for your organization
          </p>
        </div>

        {/* Account Type Toggle */}
        <div className="w-full text-center mb-8">
          <Card className="p-2 inline-flex mx-auto w-full max-w-md">
            <div className="grid grid-cols-2 gap-2 w-full">
              <Button variant="ghost" asChild className="w-full">
                <Link to="/register">
                  <User className="h-4 w-4 mr-2" />
                  Job Seeker
                </Link>
              </Button>
              <Button className="w-full">
                <Building2 className="h-4 w-4 mr-2" />
                Employer
              </Button>
            </div>
          </Card>
        </div>

        {/* Registration Card */}
        <Card className="p-8 md:p-10">
          <CardContent className="p-0">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Company Information Section */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Building className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Company Information</h2>
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="companyName" className="text-sm font-medium">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="companyName"
                      placeholder="e.g., TechCorp Solutions"
                      className="pl-10"
                      {...register("companyName", {
                        required: "Company name is required",
                        minLength: {
                          value: 2,
                          message: "Company name must be at least 2 characters",
                        },
                      })}
                    />
                  </div>
                  {errors.companyName && (
                    <p className="text-sm text-red-500">{errors.companyName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@company.com"
                      className="pl-10"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Website & Industry Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Website */}
                  <div className="space-y-2">
                    <label htmlFor="website" className="text-sm font-medium">
                      Company Website <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="website"
                        type="url"
                        placeholder="https://example.com"
                        className="pl-10"
                        {...register("website", {
                          required: "Website is required",
                          pattern: {
                            value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                            message: "Enter a valid URL",
                          },
                        })}
                      />
                    </div>
                    {errors.website && (
                      <p className="text-sm text-red-500">{errors.website.message}</p>
                    )}
                  </div>

                  {/* Industry */}
                  <div className="space-y-2">
                    <label htmlFor="industry" className="text-sm font-medium">
                      Industry <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="industry"
                      control={control}
                      rules={{ required: "Please select an industry" }}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="pl-10 relative">
                            <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance & Banking</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="education">Education</SelectItem>
                            <SelectItem value="retail">Retail & E-commerce</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.industry && (
                      <p className="text-sm text-red-500">{errors.industry.message}</p>
                    )}
                  </div>
                </div>

                {/* Company Size & Founded Year Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Company Size */}
                  <div className="space-y-2">
                    <label htmlFor="companySize" className="text-sm font-medium">
                      Company Size
                    </label>
                    <Controller
                      name="companySize"
                      control={control}
                      render={({ field }) => (
                        <Select onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger className="pl-10 relative">
                            <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
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

                  {/* Founded Year */}
                  <div className="space-y-2">
                    <label htmlFor="foundedYear" className="text-sm font-medium">
                      Founded Year
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="foundedYear"
                        type="number"
                        placeholder="e.g., 2010"
                        className="pl-10"
                        min={1800}
                        max={new Date().getFullYear()}
                        {...register("foundedYear", {
                          min: {
                            value: 1800,
                            message: "Year must be 1800 or later",
                          },
                          max: {
                            value: new Date().getFullYear(),
                            message: `Year cannot be in the future`,
                          },
                        })}
                      />
                    </div>
                    {errors.foundedYear && (
                      <p className="text-sm text-red-500">{errors.foundedYear.message}</p>
                    )}
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Headquarters Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="location"
                      placeholder="City, Country"
                      className="pl-10"
                      {...register("location", {
                        required: "Location is required",
                      })}
                    />
                  </div>
                  {errors.location && (
                    <p className="text-sm text-red-500">{errors.location.message}</p>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Company Description <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="description"
                    placeholder="Tell us about your company, mission, and what makes it a great place to work..."
                    className="min-h-[120px]"
                    {...register("description", {
                      required: "Company description is required",
                      minLength: {
                        value: 100,
                        message: "Description must be at least 100 characters",
                      },
                    })}
                  />
                  <p className="text-xs text-muted-foreground">
                    Minimum 100 characters. This will be displayed on your company profile.
                  </p>
                  {errors.description && (
                    <p className="text-sm text-red-500">{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Account Security Section */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 pb-2 border-b">
                  <Shield className="h-5 w-5 text-primary" />
                  <h2 className="text-lg font-semibold">Account Security</h2>
                </div>

                {/* Password Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a strong password"
                        className="pl-10 pr-10"
                        {...register("password", {
                          required: "Password is required",
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                          pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d).+$/,
                            message: "Password must contain letters and numbers",
                          },
                        })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {errors.password && (
                      <p className="text-sm text-red-500">{errors.password.message}</p>
                    )}
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Re-enter your password"
                        className="pl-10 pr-10"
                        {...register("confirmPassword", {
                          required: "Please confirm your password",
                          validate: (value) =>
                            value === password || "Passwords do not match",
                        })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4" />
                        ) : (
                          <Eye className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>
                <p className="text-xs text-muted-foreground -mt-2">
                  Password must be at least 8 characters with letters and numbers
                </p>
              </div>

              {/* Terms and Agreements */}
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2">
                  <Controller
                    name="terms"
                    control={control}
                    rules={{ required: "You must accept the terms of service" }}
                    render={({ field }) => (
                      <Checkbox
                        id="terms"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    )}
                  />
                  <label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-sm text-red-500 ml-6">{errors.terms.message}</p>
                )}

                <div className="flex items-start gap-2">
                  <Controller
                    name="verified"
                    control={control}
                    rules={{ required: "You must confirm authorization" }}
                    render={({ field }) => (
                      <Checkbox
                        id="verified"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    )}
                  />
                  <label htmlFor="verified" className="text-sm text-muted-foreground">
                    I confirm that I am an authorized representative of this company and have the
                    right to register on its behalf
                  </label>
                </div>
                {errors.verified && (
                  <p className="text-sm text-red-500 ml-6">{errors.verified.message}</p>
                )}

                <div className="flex items-start gap-2">
                  <Controller
                    name="updates"
                    control={control}
                    render={({ field }) => (
                      <Checkbox
                        id="updates"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="mt-1"
                      />
                    )}
                  />
                  <label htmlFor="updates" className="text-sm text-muted-foreground">
                    Send me product updates, hiring tips, and promotional offers via email
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full h-11 text-base mt-2"
                disabled={isSubmitting}
              >
                <Building2 className="h-4 w-4 mr-2" />
                {isSubmitting ? "Registering..." : "Register Company"}
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-card text-muted-foreground font-medium">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Sign In Link */}
            <div className="mt-8 text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline font-medium">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Benefits for Employers */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Access Top Talent</h3>
              <p className="text-xs text-muted-foreground">
                Connect with thousands of qualified candidates actively looking for opportunities
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Easy Job Posting</h3>
              <p className="text-xs text-muted-foreground">
                Post jobs in minutes with our intuitive interface and smart templates
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <ChartLine className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm mb-1">Smart Analytics</h3>
              <p className="text-xs text-muted-foreground">
                Track applications and optimize your hiring with detailed insights
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterCompany;
