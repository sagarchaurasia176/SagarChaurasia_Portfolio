import { useState, useMemo } from "react";
import { Search, ArrowUpRight, Clock } from "lucide-react";
import { blogPosts, blogCategories } from "../../data/blog";
import SectionHeading from "../ui/SectionHeading";

export default function Blog() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        search === "" ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts and tutorials on web development, DevOps, and AI"
        />

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400"
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border border-surface-200 bg-surface-50 text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-400 transition-all duration-200"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 text-sm font-medium rounded-lg transition-colors duration-200 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary-600 text-white"
                    : "bg-surface-100 text-surface-600 hover:bg-surface-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={post.url || "#"}
                target={post.url ? "_blank" : undefined}
                rel={post.url ? "noopener noreferrer" : undefined}
                className="group block p-6 rounded-xl border border-surface-200 bg-white hover:border-primary-200 hover:shadow-sm transition-all duration-200"
              >
                {/* Category + Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary-50 text-primary-600">
                    {post.category}
                  </span>
                  <span className="text-xs text-surface-400">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-surface-900 mb-2 group-hover:text-primary-600 transition-colors duration-200 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-surface-500 leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between text-xs text-surface-400">
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Read more
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-surface-400 text-sm">
              No articles found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
