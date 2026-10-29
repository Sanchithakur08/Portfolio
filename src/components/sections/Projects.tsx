import { sectionIndex } from '../../data/navigation';
import { projects } from '../../data/projects';
import { profile } from '../../data/profile';
import { isSet } from '../../lib/placeholder';
import { GitHubIcon } from '../ui/BrandIcons';
import { ButtonLink } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { Section, SectionHeading } from '../ui/Section';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        index={sectionIndex('projects')}
        eyebrow="Featured Projects"
        title="Things I've built"
        description="Full-stack projects spanning AI-assisted hiring, e-commerce and business tooling — plus the desktop Java app where it all started."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {isSet(profile.social.github) && (
        <Reveal className="mt-8 flex justify-center">
          <ButtonLink href={profile.social.github} target="_blank" rel="noopener noreferrer" variant="secondary">
            <GitHubIcon className="h-4 w-4" />
            More on GitHub
            <span className="sr-only">(opens in a new tab)</span>
          </ButtonLink>
        </Reveal>
      )}
    </Section>
  );
}
