import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import JobPostingCard from "./job-posting-card";
import CommentsSection from "./comments-section";
import { Suspense } from "react";
import JobDetailsSkeleton from "./job-details-skeleton";
import CommentsSkeleton from "./comments-skeleton";

export default async function JobPosting({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const jobId = (await params).id;

  return (
    <div className="mx-auto max-w-5xl">
      <div className="mb-6">
        <Link
          href="/vagas"
          className="text-muted-foreground hover:text-foreground inline-flex items-center"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Todas as Vagas
        </Link>
      </div>

      <Suspense fallback={<JobDetailsSkeleton />}>
        <JobPostingCard jobId={jobId} />
      </Suspense>
      <Suspense fallback={<JobDetailsSkeleton />}>
        <CommentsSection jobId={jobId} />
      </Suspense>
    </div>
  );
}
