import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Animate hero elements
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(buttonsRef.current?.children,
      { opacity: 0, y: 30, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)", stagger: 0.1 },
      "-=0.3"
    )
    .fromTo(socialRef.current?.children,
      { opacity: 0, scale: 0 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)", stagger: 0.1 },
      "-=0.2"
    )
    .fromTo(scrollIndicatorRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.2"
    );

    // Animate scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main title with gradient text */}
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl font-display font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="gradient-text">
              Karan Pratap Singh
            </span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl font-medium text-muted-foreground"
          >
            Machine Learning & Fintech Enthusiast
          </p>

          {/* Description */}
          <p 
            ref={descriptionRef}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Aspiring Data Analyst passionate about transforming financial data into actionable insights. 
            Specializing in ML algorithms, predictive modeling, and fintech innovation.
          </p>

          {/* Action buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:shadow-hero transition-all duration-300 text-lg px-8 py-6 rounded-full"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 rounded-full border-2 hover:bg-card-hover transition-all duration-300"
              asChild
            >
              <a 
                href="/Karan_Pratap_Singh_Resume.pdf" 
                download="Karan_Pratap_Singh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div ref={socialRef} className="flex justify-center space-x-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/SypherKx" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full hover:bg-primary/10 hover:scale-110 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/karan730" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          ref={scrollIndicatorRef}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={scrollToProjects}
        >
          <div className="flex flex-col items-center space-y-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll Down</span>
            <ChevronDown className="h-6 w-6 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};