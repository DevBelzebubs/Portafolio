"use client";

import type { ProjectGalleryImage } from "@/lib/projects-data";

interface ProjectGalleryProps {
  images: ProjectGalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="aspect-video border border-outline-variant/15 overflow-hidden group relative"
          >
            <img
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              alt={img.alt}
              src={img.src}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              <span className="font-mono text-[10px] tracking-widest text-primary">
                {img.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
