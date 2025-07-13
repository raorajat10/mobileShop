"use client";

import { useState } from "react";
import { companySupporters } from "@/lib/data";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Award, Badge } from "lucide-react";

export default function CompanySupportersDropdown() {
  const [activeCompany, setActiveCompany] = useState<string>(companySupporters[0].id);

  const activeData = companySupporters.find(c => c.id === activeCompany);

  return (
    <section className="relative py-20 " id="company-supporters">
      <div className="mx-auto px-6  lg:px-12 max-w-7xl flex flex-col items-center">
        {/* <Badge className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-0 px-4 py-2 animate-gentle-bounce ">
              <Award className="w-4 h-4 mr-2 "/>
              Ready For You!
            </Badge> */}
                 <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-center mb-6 text-slate-800">
              <span className="gradient-text text-slate-600 font-sans">Company Executies</span>
            </h2>

        {/* Horizontal Brand Hover Buttons */}
        <div className=" bg-violet-300 glass-card-hover w-full max-w-4xl rounded-lg overflow-x-auto whitespace-nowrap flex flex-wrap justify-center gap-2 p-2">
          {companySupporters.map((company) => (
            <button
              key={company.id}
              onMouseEnter={() => setActiveCompany(company.id)}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition-colors whitespace-nowrap",
                activeCompany === company.id
                  ? "bg-primary text-white"
                  : "bg-white/60 dark:bg-zinc-800 text-gray-800 hover:bg-primary/10"
              )}
            >
              {company.name}
            </button>
          ))}
        </div>

        {/* Dropdown Below */}
        <AnimatePresence mode="wait">
          {activeData && (
            <motion.div
              key={activeData.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full h-max max-w-4xl mt-4"
            >
              <div
                className={cn(
                  "bg-violet-300 glass-card-hover p-6 rounded-lg gap-6 flex flex-wrap justify-center",
                  activeData.supporters.length === 1 ? "flex-col items-center" : "sm:flex-row"
                )}
              >
                {activeData.supporters.map((supporter, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col h-60 items-center text-center glass-card p-4 rounded-lg",
                      activeData.supporters.length > 1 ? "w-full sm:w-full" : "w-full"
                    )}
                  >
                    <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-primary mb-2">
                      <Image
                        src={supporter.photo}
                        alt={supporter.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                      {supporter.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {supporter.designation}
                    </p>
                    <p className="text-primary font-medium">
                      Experience: {supporter.experience}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 mt-2 text-sm max-w-prose">
                      {supporter.bio}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
