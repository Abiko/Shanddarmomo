import { reviews } from "@/lib/restaurant";

export function ReviewCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {reviews.map((review) => (
        <article
          key={review.text}
          className="interactive-card rounded-[1.35rem] border border-white/70 bg-white/88 p-5 shadow-[0_12px_30px_rgba(64,29,18,0.08)] ring-1 ring-amber-950/5 backdrop-blur"
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            <div className="flex gap-1 text-sm text-[#d94f20]" aria-label="5 star review">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <span className="rounded-full bg-[#fff1cf] px-2.5 py-1 text-xs font-black text-[#7a3c1c]">
              5.0
            </span>
          </div>
          <p className="text-lg font-black leading-6 text-[#33150d]">
            &quot;{review.text}&quot;
          </p>
          <p className="mt-3 text-sm font-semibold leading-6 text-[#775036]">
            {review.detail}
          </p>
          <p className="mt-5 text-sm font-black text-[#126b58]">
            {review.name}
          </p>
        </article>
      ))}
    </div>
  );
}
