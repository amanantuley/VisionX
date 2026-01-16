import { RecommendationForm } from "@/components/recommendation-form";
import { Camera } from "lucide-react";

export default function RecommendPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
                <Camera className="h-12 w-12 text-primary"/>
            </div>
          <h1 className="text-4xl md:text-5xl font-headline font-bold">AI Camera Recommendation</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Not sure which camera is right for you? Describe your photography or videography needs, and our AI assistant will recommend the perfect Sony camera model.
          </p>
        </div>
        <RecommendationForm />
      </div>
    </div>
  );
}
