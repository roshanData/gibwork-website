"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Smartphone,
  Zap,
  ArrowRight,
  GitPullRequest,
  Sparkles,
  Coins,
  Send,
} from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const features = [
  {
    icon: Coins,
    badge: "USDC Native",
    title: "Crypto-Native USDC Escrow",
    description:
      "Funds are locked safely in non-custodial smart contracts on Solana. Once PRs or deliverables are accepted, USDC is instantly settled to your wallet with near-zero gas fees.",
    highlight: "Instant wallet payouts upon PR merge",
  },
  {
    icon: Smartphone,
    badge: "iOS & Android",
    title: "gibwork Mobile App",
    description:
      "Discover bounties, submit PR reviews, track payouts, and chat with project owners on the go. Available for mobile builders in the Solana Mobile ecosystem.",
    highlight: "Real-time push notifications for bounty rewards",
  },
  {
    icon: Send,
    badge: "Direct Commission",
    title: "Paid Requests Flow",
    description:
      "Skip the back-and-forth. Commission tailored work directly from top developers, designers, and content creators with milestone-backed USDC escrow.",
    highlight: "Milestone-based milestones & guaranteed completion",
  },
];

export function CryptoNative() {
  return (
    <section className="relative max-w-7xl mx-auto w-full py-16 sm:py-24 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="flex flex-col items-center"
      >
        <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
          <Badge variant="secondary" className="px-3 py-1 text-xs">
            <Sparkles className="size-3.5 mr-1.5 text-primary" />
            Next-Gen Web3 Work Economy
          </Badge>
        </motion.div>

        <motion.h2
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-3xl sm:text-5xl text-center font-bold tracking-tight mt-4 max-w-3xl"
        >
          Built for the Future of Work. Powered by USDC & Solana.
        </motion.h2>

        <motion.p
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="text-center mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl"
        >
          From GitHub-linked open source bounties to custom paid requests, gibwork enables
          trustless collaboration and instant global earnings.
        </motion.p>

        {/* Feature Grid */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="grid md:grid-cols-3 gap-6 mt-12 w-full"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <Card
                key={idx}
                className="relative flex flex-col justify-between overflow-hidden border bg-card/50 backdrop-blur-sm hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <CardHeader className="space-y-3 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="size-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="size-5" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                      {feature.badge}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center gap-2 text-xs font-medium text-primary bg-primary/5 rounded-lg p-2.5 border border-primary/10">
                    <Zap className="size-3.5 shrink-0" />
                    <span>{feature.highlight}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Mobile & Live Bounties CTA Banner */}
        <motion.div
          variants={FADE_UP_ANIMATION_VARIANTS}
          className="mt-8 w-full rounded-2xl border bg-gradient-to-r from-muted/50 via-card to-muted/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-primary uppercase tracking-wider">
              <GitPullRequest className="size-4" /> Live Open Source Bounties
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to earn USDC for your GitHub contributions?
            </h3>
            <p className="text-sm text-muted-foreground">
              Claim open bounties, submit your PR, and get paid automatically when merged.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button asChild className="group">
              <Link
                href={siteConfig.appUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore Live Bounties
                <ArrowRight className="size-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
