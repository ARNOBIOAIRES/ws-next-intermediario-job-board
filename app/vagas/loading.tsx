import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div>
      <h2 className="font-display mb-12 text-2xl font-bold">Todas as Vagas</h2>
      <div className="space-y-8">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton key={index} className="h-[60px] w-full" />
        ))}
      </div>
    </div>
  );
}
