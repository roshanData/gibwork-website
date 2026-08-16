"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import {
  GitPullRequest,
  Code2,
  Palette,
  Share2,
  CreditCard,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const categoryPillars = [
  {
    icon: GitPullRequest,
    title: "Open Source Bounties",
    description: "Incentivize pull requests and fund open-source issue resolutions via GitHub.",
    image: "https://cdn.gib.work/misc/open_source_bounty.png",
    tag: "GitHub Native",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Smart contracts, full-stack dApps, frontend UI, backend APIs, and bots.",
    image: "https://cdn.gib.work/misc/simple_task.png",
    tag: "Engineering",
  },
  {
    icon: Palette,
    title: "Design",
    description: "UI/UX interfaces, graphic assets, product mockups, and 3D web visuals.",
    image: "https://cdn.gib.work/misc/services.png",
    tag: "Creative",
  },
  {
    icon: Share2,
    title: "Social Media & Content",
    description: "Technical articles, community management, marketing threads, and video tutorials.",
    image: "https://cdn.gib.work/misc/simple_task.png",
    tag: "Growth",
  },
  {
    icon: CreditCard,
    title: "Paid Requests",
    description: "Direct 1-on-1 commissions and custom milestone contracts with USDC escrow.",
    image: "https://cdn.gib.work/misc/services.png",
    tag: "Direct Escrow",
  },
];

const workDetails = [
  {
    image: "/tasks/image-01.png",
    title: "Design gibwork's new mobile landing experience",
    amount: 750,
    token: "usdc",
    category: "Design",
  },
  {
    image: "/tasks/image-02.png",
    title: "Implement Solana Blinks integration for instant tipping",
    amount: 1200,
    token: "usdc",
    category: "Development",
  },
  {
    image: "/tasks/image-03.png",
    title: "Resolve PR #142: Fast wallet connection on Mobile Safari",
    amount: 400,
    token: "usdc",
    category: "Open Source",
  },
  {
    image: "/tasks/image-01.png",
    title: "Create technical deep-dive thread & documentation for Paid Requests",
    amount: 250,
    token: "usdc",
    category: "Content",
  },
];

export function LookingFor() {
  return (
    <section className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <Tabs defaultValue="1" className="w-full flex flex-col items-center">
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <TabsList className="mx-auto rounded-full">
            <TabsTrigger className="rounded-full px-5" value="1">
              Looking for Help
            </TabsTrigger>
            <TabsTrigger className="rounded-full px-5" value="2">
              Looking for Work
            </TabsTrigger>
          </TabsList>
        </motion.div>

        {/* Tab 1: Looking for Help */}
        <TabsContent value="1" className="mt-8 w-full">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Get help from top crypto builders
            </motion.h2>

            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground max-w-2xl"
            >
              Create bounties or paid requests across engineering, design, and content.
              Escrow USDC with confidence.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 w-full"
            >
              {categoryPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Card
                    key={idx}
                    className="overflow-hidden border bg-card/60 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div className="relative h-36 w-full overflow-hidden bg-muted">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-md px-2.5 py-0.5 rounded-full text-xs font-medium text-foreground">
                        {pillar.tag}
                      </div>
                    </div>
                    <CardHeader className="p-5 border-t">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Icon className="size-4 text-primary" />
                        <CardTitle className="text-lg">{pillar.title}</CardTitle>
                      </div>
                      <CardDescription className="text-sm">
                        {pillar.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </motion.div>
          </motion.div>
        </TabsContent>

        {/* Tab 2: Looking for Work */}
        <TabsContent value="2" className="mt-8 w-full max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="flex flex-col items-center"
          >
            <motion.h2
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-3xl sm:text-4xl text-center font-semibold"
            >
              Get paid for your expertise
            </motion.h2>
            <motion.p
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="text-center mt-2 text-muted-foreground max-w-2xl"
            >
              Discover open bounties and paid requests. Submit your work and receive instant
              USDC directly to your Solana wallet.
            </motion.p>

            <motion.div
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col gap-3 mt-8 w-full"
            >
              {workDetails.map((detail, idx) => (
                <Link
                  key={idx}
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore bounty: ${detail.title}`}
                  className="block"
                >
                  <Card className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:border-primary/40 hover:bg-muted/30 transition-all">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="relative aspect-square rounded-full shrink-0 w-11 bg-muted overflow-hidden">
                        <Image
                          alt=""
                          fill
                          src={detail.image}
                          className="h-full w-full object-cover"
                        />
                      </div>

                      <div className="min-w-0">
                        <p className="font-semibold text-sm sm:text-base truncate">
                          {detail.title}
                        </p>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full inline-block mt-1">
                          {detail.category}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right">
                        <span className="font-bold text-base sm:text-lg text-foreground">
                          ${detail.amount}
                        </span>
                        <span className="text-xs text-muted-foreground ml-1 uppercase font-semibold">
                          {detail.token}
                        </span>
                      </div>
                      <div className="relative aspect-square rounded-full w-7 bg-muted overflow-hidden shrink-0">
                        <Image
                          alt={detail.token}
                          fill
                          src={`/token-${detail.token}.png`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <ArrowUpRight className="size-4 text-muted-foreground hidden sm:block" />
                    </div>
                  </Card>
                </Link>
              ))}
            </motion.div>
          </motion.div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
