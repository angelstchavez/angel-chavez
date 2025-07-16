"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Github, Linkedin, X } from "lucide-react"
import { motion } from "framer-motion" // Import motion from framer-motion

type SocialLinks = {
  github: string
  x: string
  linkedin: string
}

export function Footer({
  socialLinks = {
    github: "https://github.com/angelstchavez",
    x: "https://x.com/angelstchavez",
    linkedin: "https://www.linkedin.com/in/angelstchavez/",
  },
}: {
  socialLinks?: SocialLinks
}) {
  const t = useTranslations("portfolioPage")
  const copyright = t("copyright")
  const year = new Date().getFullYear()

  return (
    <footer className="container mx-auto px-4 py-6 text-center text-muted-foreground text-xs border-t">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <span>{`${copyright} ${year}`}</span>
        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={socialLinks.github} target="_blank" aria-label="GitHub">
              <Github className="h-4 w-4 hover:text-foreground" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={socialLinks.x} target="_blank" aria-label="X">
              <X className="h-4 w-4 hover:text-foreground" />
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link href={socialLinks.linkedin} target="_blank" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4 hover:text-foreground" />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
