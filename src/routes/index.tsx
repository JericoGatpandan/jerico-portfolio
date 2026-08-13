import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/portfolio/Background";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Expertise } from "@/components/portfolio/Expertise";
import { Stack } from "@/components/portfolio/Stack";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Education } from "@/components/portfolio/Education";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { useReveal } from "@/hooks/useReveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jerico Gatpandan — Full-Stack Developer & CS Student" },
      {
        name: "description",
        content:
          "Portfolio of Jerico Gatpandan — BS Computer Science student at University of Nueva Caceres. Full-stack developer working with React, Node.js, MySQL, and AI-assisted tools.",
      },
      { property: "og:title", content: "Jerico Gatpandan — Portfolio" },
      {
        property: "og:description",
        content:
          "Full-stack developer building cooperative management platforms, booking systems, and AI-assisted flood forecasting.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <Background />
      <Nav />
      <main>
        <Hero />
        <Expertise />
        <Stack />
        <Work />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
