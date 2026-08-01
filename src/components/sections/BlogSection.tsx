import { blogPosts } from "@/data/blog";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionHeader } from "./SectionHeader";

export function BlogSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Insights"
          title="Wholesale market notes"
          copy="Strategic articles for B2B partners exploring luxury wholesale, travel retail, FMCG distribution, and Africa-focused market expansion."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <ProjectCard
              key={post.title}
              title={post.title}
              description={post.description}
              imgSrc={post.image}
              link={post.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
