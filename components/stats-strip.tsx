"use client";

import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/framer-variants";
import { Users, DollarSign, CheckCircle2, Zap } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "12K+",
    label: "Community Members",
    subtext: "Active global builders & contributors",
  },
  {
    icon: DollarSign,
    value: "$500K+",
    label: "USDC Paid Out",
    subtext: "Distributed directly to developer wallets",
  },
  {
    icon: CheckCircle2,
    value: "1,500+",
    label: "Bounties Completed",
    subtext: "Verified deliverables & merged PRs",
  },
  {
    icon: Zap,
    value: "Instant",
    label: "Solana Settlement",
    subtext: "Non-custodial escrow & sub-second payouts",
  },
];

export function StatsStrip() {
  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 -mt-8 mb-12 sm:mb-16 z-10">
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
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 bg-card/60 backdrop-blur-md border rounded-2xl p-6 sm:p-8 shadow-sm"
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={FADE_UP_ANIMATION_VARIANTS}
              className="flex flex-col items-center text-center p-2"
            >
              <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                <Icon className="size-5" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-foreground mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                {stat.subtext}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
