import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  liveDemoLink: string;
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  githubLink,
  liveDemoLink,
}) => {
  return (
    <div className="flex flex-col flex-wrap md:justify-start">
      <div className="flex flex-col px-3 py-3 mt-2 mr-2 w-full min-w-full rounded-lg text-sm font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-100 border border-neutral-300/50 dark:border-neutral-600/50">
        <p className="text-xl font-medium text-gray-700 dark:text-gray-200">
          {title}
        </p>

        <p className="text-sm font-normal text-gray-600 dark:text-gray-300 mt-2">
          {description}
        </p>

        <div className="flex flex-row space-x-5">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 mt-3"
          >
            <span className="sr-only">Github</span>
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 mt-3"
          >
            <span className="sr-only">Demo</span>
            <FiExternalLink className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
