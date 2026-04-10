import { useForm } from "react-hook-form";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Upload, FileText, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ApplyJobDialog({ open, onClose }) {
  const { register, handleSubmit, watch, setValue } = useForm();
  const [file, setFile] = useState(null);
  const coverMessage = watch("coverMessage", "");

  const onSubmit = (data) => {
    if (!file) {
      alert("Please upload your resume");
      return;
    }
    console.log("Application submitted:", { ...data, resume: file.name });
    alert("✅ Application submitted successfully!");
    onClose();
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected?.type === "application/pdf" && selected.size <= 5 * 1024 * 1024) {
      setFile(selected);
      setValue("resume", selected);
    } else {
      alert("Only PDF file under 5MB is allowed");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Apply for Position</DialogTitle>
          <p className="text-sm text-muted-foreground">Complete the form below to submit your application</p>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Resume Upload */}
          <div>
            <label className="text-sm font-medium">
              Resume <span className="text-red-500">*</span>
            </label>
            {!file ? (
              <label className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary cursor-pointer block">
                <input type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
                <Upload className="h-12 w-12 mx-auto text-primary mb-3" />
                <p className="font-medium">Click to upload resume</p>
                <p className="text-xs text-muted-foreground">PDF only (Max 5MB)</p>
              </label>
            ) : (
              <div className="border border-border rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-10 w-10 text-primary" />
                  <div>
                    <p className="font-medium">{file.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {(file.size / (1024 * 1024)).toFixed(1)} MB
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => document.getElementById("resume-upload").click()}>
                    Reupload
                  </Button>
                  <Button type="button" variant="outline" size="sm" onClick={() => setFile(null)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}
            <input id="resume-upload" type="file" className="hidden" onChange={handleFileChange} />
          </div>

          {/* Cover Message */}
          <div>
            <label className="text-sm font-medium">Cover Message (Optional)</label>
            <Textarea
              {...register("coverMessage")}
              rows={5}
              placeholder="Write a brief message about why you're a great fit..."
              maxLength={500}
            />
            <p className="text-xs text-right text-muted-foreground mt-1">
              {coverMessage.length}/500 characters
            </p>
          </div>

          <div className="flex gap-3">
            <Button type="button" variant="outline" className="flex-1" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1">
              Submit Application
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
