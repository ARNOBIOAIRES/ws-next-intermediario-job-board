import JobItem from "@/components/cards/job-item";

export const dynamic = "force-dynamic";

async function fetchJobs() {
  const res = await fetch("https://apis.codante.io/api/job-board/jobs");

  if (!res.ok) {
    throw new Error("Failed to fetch jobs");
  }

  return res.json();
}

export default async function Vagas() {
  const jobsData = await fetchJobs();
  const jobs = jobsData.data;

  return (
    <main className="">
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {jobs.map((job: any) => (
          <JobItem key={job.id} job={job} />
        ))}
      </div>
    </main>
  );
}
