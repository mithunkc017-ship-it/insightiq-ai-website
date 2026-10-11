import React from 'react';
import { cn } from "@/lib/utils";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Testimonial = {
  quote: string;
  image: string;
  name: string;
  role: string;
  company?: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Efferd is so polished I might just retire and become a full-time potato farmer. The ecosystem is in safe hands.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    name: "Shadcn",
    role: "Founder",
    company: "Shadcn UI",
  },
  {
    quote:
      "Efferd is why I still have hair. No more pulling it out over centering divs or fighting with CSS grid.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    name: "Guillermo Rauch",
    role: "CEO",
    company: "Vercel",
  },
  {
    quote:
      "I tried to buy Efferd but they wouldn't sell. So I just bought Twitter instead to complain about it.",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150&auto=format&fit=crop&q=80",
    name: "Elon Musk",
    role: "CEO",
    company: "X.com",
  },
  {
    quote:
      "We just acquired Efferd for 3 gazillion dollars. We're calling it iEfferd. It's our best product yet.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    name: "Tim Cook",
    role: "CEO",
    company: "Apple",
  },
  {
    quote:
      "I'm considering shipping Efferd components with Prime delivery. 2-day shipping on beautiful UIs? Done.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    name: "Jeff Bezos",
    role: "Founder",
    company: "Amazon",
  },
  {
    quote:
      "We're rewriting OpenAI's entire frontend in Efferd. The AGI told us it's the only logical choice.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    name: "Sam Altman",
    role: "CEO",
    company: "OpenAI",
  },
  {
    quote:
      "We processed 100 petabytes of data to find the perfect UI library. The algorithm returned 'Efferd' with 99.9% confidence.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    name: "Sundar Pichai",
    role: "CEO",
    company: "Google",
  },
  {
    quote:
      "Our links might 404 sometimes, but thanks to Efferd, at least the 404 page looks absolutely stunning.",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&auto=format&fit=crop&q=80",
    name: "Steven Tey",
    role: "Founder",
    company: "Dub.co",
  },
  {
    quote:
      "It's so fast, I finished my UI sprint before my next meeting even started. Open source for the win.",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    name: "Peer Richelsen",
    role: "Co-Founder",
    company: "Cal.com",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-20 border-t-2 border-sky-200 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mx-auto flex max-w-sm flex-col items-center justify-center gap-4">
          <div className="flex justify-center">
            <div className="rounded-full border border-sky-300 bg-sky-100 px-4 py-1 text-xs font-mono uppercase text-sky-900 font-black shadow-xs">
              Testimonials
            </div>
          </div>

          <h2 className="font-black text-3xl tracking-tighter text-slate-950 lg:text-4xl text-center">
            What our users say
          </h2>
          <p className="text-center text-slate-700 text-sm font-medium">
            See what our customers have to say about us.
          </p>
        </div>

        <div
          className={cn(
            "mt-10 flex max-h-160 justify-center gap-6 overflow-hidden mask-gradient-y",
            "mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
          )}
        >
          <InfiniteSlider direction="vertical" speed={30} speedOnHover={15}>
            {firstColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden md:block"
            direction="vertical"
            speed={50}
            speedOnHover={25}
          >
            {secondColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
          <InfiniteSlider
            className="hidden lg:block"
            direction="vertical"
            speed={35}
            speedOnHover={17}
          >
            {thirdColumn.map((testimonial) => (
              <TestimonialsCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </InfiniteSlider>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCard({
  testimonial,
  className,
  ...props
}: React.ComponentProps<"figure"> & {
  testimonial: Testimonial;
}) {
  const { quote, image, name, role, company } = testimonial;
  return (
    <figure
      className={cn(
        "w-full max-w-xs rounded-3xl border-2 border-sky-200 bg-white p-8 shadow-lg shadow-sky-500/5 hover:border-sky-400 hover:shadow-xl transition-all text-left",
        className,
      )}
      {...props}
    >
      <blockquote className="text-xs text-slate-800 leading-relaxed font-medium">
        "{quote}"
      </blockquote>
      <figcaption className="mt-5 flex items-center gap-3">
        <Avatar className="size-10 rounded-full border-2 border-sky-300">
          <AvatarImage alt={`${name}'s profile picture`} src={image} />
          <AvatarFallback className="bg-sky-100 text-sky-900 font-black">{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="font-black not-italic leading-5 tracking-tight text-slate-950 text-xs">
            {name}
          </cite>
          <span className="text-slate-600 font-bold text-xs leading-5 tracking-tight">
            {role} {company && `, ${company}`}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}

export default TestimonialsSection;
