import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import stockPredictionImg from "@/assets/stock-prediction.jpg";
import fraudDetectionImg from "@/assets/fraud-detection.jpg";
import cryptoOptimizerImg from "@/assets/crypto-optimizer.jpg";
import creditRiskImg from "@/assets/credit-risk.jpg";
import tradingBotImg from "@/assets/trading-bot.jpg";
import newsSentimentImg from "@/assets/news-sentiment.jpg";

const projects = [
  {
    title: "Stock Price Prediction Model",
    description: "Advanced LSTM neural network for predicting stock prices with 85% accuracy. Built with TensorFlow and Python, featuring real-time data processing and technical indicators.",
    image: stockPredictionImg,
    tags: ["Python", "TensorFlow", "LSTM", "Finance", "API"],
    github: "https://github.com/alexjohnson/stock-prediction",
    demo: "https://stock-predictor-demo.com",
    featured: true
  },
  {
    title: "Fraud Detection System",
    description: "Machine learning solution for detecting fraudulent transactions in real-time using ensemble methods and anomaly detection algorithms.",
    image: fraudDetectionImg,
    tags: ["Python", "Scikit-learn", "XGBoost", "Fraud Detection"],
    github: "https://github.com/alexjohnson/fraud-detection",
    demo: null,
    featured: true
  },
  {
    title: "Cryptocurrency Portfolio Optimizer",
    description: "Portfolio optimization tool using Modern Portfolio Theory and risk analysis to suggest optimal crypto asset allocation strategies.",
    image: cryptoOptimizerImg,
    tags: ["React", "Python", "Portfolio Theory", "Crypto"],
    github: "https://github.com/alexjohnson/crypto-optimizer",
    demo: "https://crypto-portfolio-optimizer.com",
    featured: false
  },
  {
    title: "Credit Risk Assessment Dashboard",
    description: "Interactive dashboard for assessing credit risk using machine learning models and financial indicators with beautiful data visualizations.",
    image: creditRiskImg,
    tags: ["Tableau", "Python", "Risk Analysis", "Dashboard"],
    github: "https://github.com/alexjohnson/credit-risk",
    demo: "https://credit-dashboard.com",
    featured: false
  },
  {
    title: "Algorithmic Trading Bot",
    description: "Automated trading system using technical analysis and machine learning to execute trades based on market patterns and signals.",
    image: tradingBotImg,
    tags: ["Python", "Trading", "Algorithms", "Backtesting"],
    github: "https://github.com/alexjohnson/trading-bot",
    demo: null,
    featured: true
  },
  {
    title: "Financial News Sentiment Analysis",
    description: "NLP model analyzing financial news sentiment to predict market movements using transformer models and real-time news feeds.",
    image: newsSentimentImg,
    tags: ["NLP", "Transformers", "Sentiment Analysis", "Finance"],
    github: "https://github.com/alexjohnson/news-sentiment",
    demo: "https://news-sentiment-analyzer.com",
    featured: false
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