import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import sp500StockImg from '@/assets/sp500-stock-prediction.jpg';
import stockPredictionImg from "@/assets/stock-prediction.jpg";
import fraudDetectionImg from "@/assets/Untitled design (2).png";
import creditCardFraudImg from "@/assets/credit-card-fraud-detection.jpg";
import airQualityImg from "@/assets/Untitled design (3).png";
import cryptoOptimizerImg from "@/assets/crypto-optimizer.jpg";
import creditRiskImg from "@/assets/credit-risk.jpg";
import tradingBotImg from "@/assets/trading-bot.jpg";
import newsSentimentImg from "@/assets/news-sentiment.jpg";

const projects = [
  {
    title: "Aether Eye: Hybrid-Edge Surveillance",
    description: "A privacy-first surveillance system built on a hybrid-edge architecture using ESP32 and FastAPI. This project features offline AI for object and speech detection, delivering real-time alerts to a mobile app without cloud dependency.",
    image: null,
    tags: ["Python", "FastAPI", "YOLOv8", "ESP32", "React Native", "WebSockets"],
    github: "https://github.com/AetherEye/AetherEye.git",
    demo: null,
    featured: true
  },
  {
    title: "SP500 Stock Price Prediction",
    description: "A machine learning project that predicts S&P 500 stock prices using historical market data. Includes data collection via yfinance, model training with scikit-learn, and backtesting for performance evaluation.",
    image: sp500StockImg,
    tags: ["Machine Learning", "Python", "Jupyter Lab"],
    github: "https://github.com/SypherKx/SP500-Stock-Price-Prediction",
    demo: null,
    featured: true
  },
  {
    title: "Credit Card Fraud Detection",
    description: "A machine learning project to detect fraudulent credit card transactions using Logistic Regression. This project includes both a Python script for training & evaluation and a Streamlit web app for interactive testing.",
    image: fraudDetectionImg,
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
    github: "https://github.com/SypherKx/CardSentinel",
    demo: null,
    featured: true
  },
  {
    title: "Air Quality Prediction",
    description: "This project leverages machine learning models to predict air quality levels based on environmental factors such as temperature, humidity, wind speed, and pollutant concentration.",
    image: airQualityImg,
    tags: ["Python", "Machine Learning", "Jupyter"],
    github: "https://github.com/SypherKx/AQIPredictor",
    demo: null,
    featured: true
  },
  {
    title: "Coming Soon...",
    description: "Cooking up something awesome 👨‍💻",
    image: null,
    tags: ["Stay Tuned"],
    github: null,
    demo: null,
    featured: false,
    isPlaceholder: true
  }
];

export const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Animate section title
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Animate project cards
    projectRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "bottom 20%",
            }
          }
        );
      }
    });
  }, []);

  const setProjectRef = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl font-display font-bold mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in machine learning, fintech, and data analytics. 
            Each project demonstrates different aspects of my technical skills and problem-solving approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={(el) => setProjectRef(el, index)}
              className={`${project.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <Card className="h-full card-hover group bg-gradient-card border-0 shadow-md">
                {project.image ? (
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                ) : (
                  <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl opacity-30">🚀</div>
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    )}
                  </div>
                )}
                
                <CardHeader>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  {project.github ? (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 opacity-50 cursor-not-allowed"
                      disabled
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Coming Soon
                    </Button>
                  )}
                  {project.demo && (
                    <Button 
                      size="sm" 
                      className="flex-1 bg-gradient-primary"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
