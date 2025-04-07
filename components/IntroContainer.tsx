"use client";
import { useEffect, useRef } from "react";
import { annotate, annotationGroup } from "rough-notation";
import { RoughAnnotationConfig, RoughAnnotationGroup } from "rough-notation/lib/model";

import config from "../lib/config";
import useMediaQuery from "../hooks/use-media";
import { cn } from "../lib/utils";
import { typo } from "../ui/typography";
import Image from "next/image";
import animeImage from "../assets/images/anime.png";
import { annotationsConfig } from "../constants/annotations";

const AboutSection = () => {
  const isSmallDevice = useMediaQuery("(max-width: 500px)");
  const annotationRefs = annotationsConfig.map(() =>
    useRef<HTMLSpanElement | HTMLAnchorElement>(null)
  );

  useEffect(() => {
    const annotations = annotationsConfig.map((config: any, index: any) => {
      const { ref, ...options } = config;
      return annotate(annotationRefs[index]!.current!, options as RoughAnnotationConfig);
    });

    const annotationGroupInstance: RoughAnnotationGroup = annotationGroup(annotations);

    if (!isSmallDevice) {
      annotationGroupInstance.show();
    }

    return () => annotationGroupInstance.hide();
  }, [annotationRefs, isSmallDevice]);

  return (
    <section className="grid gap-8 sm:gap-4 md:grid-cols-3 w-[45%]" aria-label="About">
      <div className="order-2 space-y-3 sm:order-1 md:col-span-2">
        <h1 className="font-ubuntu text-lg font-semibold sm:text-xl">
          Prem Raj<span className="text-italic font-normal text-white"></span>
        </h1>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          <span className="text-white">
            About Me <br />
          </span>
          Hello! I'm a developer from Bangalore, India. I love building complex stuffs.
          I've participated in{" "}
          <span className="text-white" ref={annotationRefs[0]}>
            
          </span>{" "}
          & ideathons and won 6 of them.
        </p>

        <p className={typo({ variant: "paragraph", font: "sans" })}>
          <span className="text-white">
            What I do? <br />
          </span>{" "}
          I've delivered 10+ freelance projects, interned at two startups and failed to build my own
          startup twice.{" "}
          <span ref={annotationRefs[1]} className="text-white">
            #LifeGoesOn
          </span>
          . I'm super active on X where I share funnies and{" "}
          <span ref={annotationRefs[2]} className="text-white">
            #BuildInPublic
          </span>
          .{" "}
        </p>

        {/* <p className={typo({ variant: "paragraph", font: "sans" })}>
          I'm an{" "}
          <span ref={annotationRefs[3]} className="text-white">
            AWS Cloud Club Captain
          </span>
          , a maintainer and contributor of open-source projects. When not coding, I read books, go
          out for a run or binge YouTube.
        </p> */}

        <p className={typo({ variant: "paragraph", font: "sans" })}></p>

        {/* <p className={cn(typo({ variant: "paragraph", font: "sans" }), "sm:!mt-4")}>
          I'm{" "}
          <span ref={annotationRefs[4]} className="text-white">
            open to work
          </span>
          , freelance, or collaborate.{" "}
          <a
            ref={annotationRefs[5] as React.RefObject<HTMLAnchorElement>}
            href={`mailto:${config.social.email}`}
            aria-label="Hire Me"
            className="el-focus-styles text-ring"
          >
            Contact Me.
          </a>
        </p> */}
      </div>

      <div className="relative order-1 block aspect-square sm:order-2 sm:hidden md:block">
        <div className="absolute inset-0 -z-10 size-full rounded-md bg-[#00adb5]"></div>
        <Image
          alt="Speaking on stage at for a hackathon presentation"
          src={animeImage}
          placeholder="blur"
          className="size-full -rotate-3 transform rounded-md shadow-md"
          priority
        />
      </div>
    </section>
  );
};

export default AboutSection;
