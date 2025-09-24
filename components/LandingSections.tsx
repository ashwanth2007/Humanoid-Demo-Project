
import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, animate, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { AlertTriangle, CheckCircle, Timer, LogoPlaceholder } from './Icons';
import { GlowingEffect } from './GlowingEffect';
import { SplineScene } from './SplineScene';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { StackedCardsInteraction } from './ui/stacked-cards-interaction';
import { HeroVideoDialog } from './ui/hero-video-dialog';

// --- Reusable Section Components ---
const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-20 sm:py-28", className)}>
    {children}
  </section>
);

// FIX: Export SectionTitle to be used in other components.
export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    {children}
  </h2>
);

// --- Section 4: Solution Showcase ---
const FeatureCard = ({ children, className }: { children: React.ReactNode; className?: string; }) => (
  <div className={cn("bg-[#111111] p-6 rounded-2xl border border-neutral-800 flex flex-col", className)}>
    {children}
  </div>
);

export const SolutionShowcase = () => {
    return (
        <Section id="solution" className="pb-0 sm:pb-0">
            <SectionTitle>A Platform Built For The Future</SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                <FeatureCard className="md:col-span-2 items-center justify-center text-center">
                    <div className="relative flex h-24 w-56 items-center justify-center">
                        <svg className="text-neutral-700 absolute inset-0 size-full" viewBox="0 0 254 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z" fill="currentColor"></path>
                        </svg>
                        <span className="relative text-5xl font-semibold text-white">100%</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">Customizable</h3>
                </FeatureCard>

                <FeatureCard className="md:col-span-2 items-center justify-center text-center">
                    <div className="relative flex aspect-square size-32 items-center justify-center rounded-full border border-neutral-800 before:absolute before:-inset-2 before:rounded-full before:border before:border-neutral-900">
                         <svg className="w-24 h-24 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M34.1667 58.3333C34.1667 53.9394 35.132 50.2083 37.0625 47.1458C39 44.0833 41.5625 41.8403 44.75 40.4167M65.8333 58.3333C65.8333 62.7273 64.8681 66.4583 62.9375 69.5208C61 72.5833 58.4375 74.8264 55.25 76.25M50 87.5C41.9271 87.5 34.9097 84.8958 28.9479 79.6875C22.9861 74.4792 20 67.5833 20 59.0208C20 52.5 21.8403 46.5278 25.5208 41.0938C29.2014 35.6667 34.1667 31.875 40.4167 29.7292M50 87.5C58.0729 87.5 65.0903 84.8958 71.0521 79.6875C77.0139 74.4792 80 67.5833 80 59.0208C80 47.4583 75.3819 37.7431 66.1458 29.8646M50 20.8333C53.7014 20.8333 56.8924 21.9306 59.5694 24.125C62.2465 26.3194 63.5833 29.0278 63.5833 32.25C63.5833 34.3333 62.9167 36.25 61.5833 38M50 20.8333C46.2986 20.8333 43.1076 21.9306 40.4306 24.125C37.7535 26.3194 36.4167 29.0278 36.4167 32.25C36.4167 35.4375 37.5868 38.0903 39.9167 40.2083M25 50H75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold">Secure by Default</h3>
                    <p className="text-neutral-400 mt-2 text-sm">Enterprise-grade security to protect your data and operations.</p>
                </FeatureCard>
                
                <FeatureCard className="md:col-span-2 justify-center">
                    <div className="w-full">
                        <div className="flex justify-between items-center text-sm text-neutral-400 px-2">
                            <span className="inline-flex items-center gap-2">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V15M12 15L16 11M12 15L8 11M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                Throughput
                            </span>
                            <span>34.5 gbps</span>
                        </div>
                        <svg className="w-full mt-2" viewBox="0 0 100 30" preserveAspectRatio="none">
                            <path d="M 0 20 C 20 5, 30 25, 50 15 S 80 25, 100 10" stroke="white" strokeWidth="2" fill="none" />
                        </svg>
                    </div>
                    <h3 className="mt-12 text-2xl font-semibold text-center">Peak Performance</h3>
                     <p className="text-neutral-400 mt-2 text-sm text-center">Blazing fast data processing and near-zero latency.</p>
                </FeatureCard>

                <FeatureCard className="md:col-span-3">
                    <div className="grid grid-cols-5 h-full gap-4">
                        <div className="col-span-2 flex flex-col justify-between">
                            <div className="flex aspect-square size-12 items-center justify-center rounded-full border border-neutral-700">
                               <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 10H16.01M12 10H12.01M8 10H8.01M4 18V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Real-time Analytics</h3>
                                <p className="text-neutral-400 mt-2 text-sm">Monitor performance and get actionable insights from a unified dashboard.</p>
                            </div>
                        </div>
                        <div className="col-span-3 flex items-end justify-center pb-4">
                            <svg className="w-full" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 88.5V72.5L10 75L12 60L20 80L25 50L31 68L36 55L42 85L50 30L55 60L60 42L65 78L70 20L75 70L80 50L88 82L95 10L102 72L110 35L118 60L125 48L133 80L140 60L148 70L159 2" stroke="white" strokeWidth="2"/>
                            </svg>
                        </div>
                    </div>
                </FeatureCard>

                <FeatureCard className="md:col-span-3">
                     <div className="grid grid-cols-5 h-full gap-4">
                        <div className="col-span-2 flex flex-col justify-between">
                             <div className="flex aspect-square size-12 items-center justify-center rounded-full border border-neutral-700">
                                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 17H21M17 13H21M17 9H21M3 21V11C3 9.67392 3.52678 8.40215 4.46447 7.46447C5.40215 6.52678 6.67392 6 8 6H12C13.3261 6 14.5979 6.52678 15.5355 7.46447C16.4732 8.40215 17 9.67392 17 11V21M3 21H17M3 21V9C3 7.67392 3.52678 6.40215 4.46447 5.46447C5.40215 4.52678 6.67392 4 8 4H10C10.663 4 11.2989 4.26339 11.7678 4.73223C12.2366 5.20107 12.5 5.83696 12.5 6.5V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Scale With Confidence</h3>
                                <p className="text-neutral-400 mt-2 text-sm">Effortlessly add or remove robots to match your production demands.</p>
                            </div>
                        </div>
                        <div className="col-span-3 relative flex h-full flex-col justify-center items-center space-y-6">
                            <div className="absolute inset-y-0 left-1/2 w-px bg-neutral-800"></div>
                            <div className="relative flex w-full items-center justify-start gap-3 pl-12">
                                <img className="size-8 rounded-full ring-4 ring-black" src="https://picsum.photos/seed/r1/40/40" alt="Avatar"/>
                                <span className="block h-fit rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-xs shadow-sm">1 Robot</span>
                            </div>
                            <div className="relative flex w-full items-center justify-end gap-3 pr-12">
                                <span className="block h-fit rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-xs shadow-sm">10 Robots</span>
                                <img className="size-8 rounded-full ring-4 ring-black" src="https://picsum.photos/seed/r2/40/40" alt="Avatar"/>
                            </div>
                            <div className="relative flex w-full items-center justify-start gap-3 pl-12">
                                 <img className="size-8 rounded-full ring-4 ring-black" src="https://picsum.photos/seed/r3/40/40" alt="Avatar"/>
                                <span className="block h-fit rounded border border-neutral-700 bg-neutral-900 px-2 py-1 text-xs shadow-sm">100+ Robots</span>
                            </div>
                        </div>
                    </div>
                </FeatureCard>
            </div>
        </Section>
    );
}

// --- Section: Meet the Robots ---
const robotCardsData = [
  {
    id: "tesla-optimus-gen2",
    image: "https://humanoidroboticstechnology.com/wp-content/uploads/2025/02/tesla-optimus-humanoid-gen-2-2025.jpg",
    title: "Humanoid Robot Tesla",
    description: "Optimus Gen 2 handles repetitive tasks in manufacturing and home automation, learning from real-world data.",
  },
  {
    id: "unitree-g1",
    image: "https://humanoidroboticstechnology.com/wp-content/uploads/2025/02/unitree-robotics-g1-humanoid-2025.jpg",
    title: "Unitree Robotics – G1",
    description: "Unitree’s G1 is optimized for rapid, agile movement and is tailored for environments where compact, efficient robots are essential.",
  },
  {
    id: "deep-robotics-dr01",
    image: "https://humanoidroboticstechnology.com/wp-content/uploads/2025/02/deep-robotics-dr01-humanoid-2025.jpg",
    title: "DEEP Robotics – Dr01",
    description: "Dr01 emphasizes high-precision tasks with integrated sensors for real-time monitoring and reliable industrial performance.",
  },
  {
    id: "tesla-optimus",
    image: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/tesla-optimus-robot.jpg",
    title: "Optimus (Tesla)",
    description: "Tesla's humanoid robot has made steady advances to realize its vision of a versatile robotic assistant for various tasks.",
  },
  {
    id: "xiaomi-cyberone",
    image: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/bae36bca5c0ba22bc548eb39b6356433.jpg",
    title: "CyberOne (Xiaomi)",
    description: "Xiaomi’s first humanoid robot, developed with proprietary software and hardware to control its multi-directional arms and legs.",
  },
  {
    id: "agility-digit",
    image: "https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/digit-humanoid-robotics.png",
    title: "Digit (Agility Robotics)",
    description: "Digit can crouch and squat to pick up objects, adjusting its center of gravity and using sensors to find the most efficient path.",
  },
];

export const MeetTheRobotsSection = () => {
  const [robotCards, setRobotCards] = useState(robotCardsData);

  const handleMove = (direction: 'prev' | 'next') => {
    if (direction === 'next') {
      setRobotCards(prev => {
        const nextState = [...prev];
        const first = nextState.shift();
        if(first) nextState.push(first);
        return nextState;
      });
    } else {
      setRobotCards(prev => {
        const prevState = [...prev];
        const last = prevState.pop();
        if (last) prevState.unshift(last);
        return prevState;
      });
    }
  };

  return (
    <Section id="robots">
      <SectionTitle>Meet Our Robotic Assistants</SectionTitle>
      <div className="relative w-full h-[500px] flex items-center justify-center">
        <StackedCardsInteraction cards={robotCards} />
      </div>
      <div className="flex justify-center gap-4 mt-8">
         <button
          onClick={() => handleMove('prev')}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-black border-2 border-neutral-700 hover:bg-sky-500 hover:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Previous Robot"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove('next')}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-black border-2 border-neutral-700 hover:bg-sky-500 hover:text-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          )}
          aria-label="Next Robot"
        >
          <ChevronRight />
        </button>
      </div>
    </Section>
  );
};

const stats = [
  { value: "67%", title: "Reduction in Quality Defects", description: "Fewer errors, higher quality output." },
  { value: "99.7%", title: "On-time Delivery Rate", description: "Reliable and punctual logistics." },
  { value: "45%", title: "Reduction in OpEx", description: "Lowering operational costs significantly." },
  { value: "5x", title: "Faster Deployment", description: "Accelerating project timelines." },
  { value: "300%", title: "Increase in Output", description: "Boosting production capacity." },
  { value: "80%", title: "Improved Safety", description: "Creating a safer work environment." },
];

export const StatsCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const cardWidth = isMobile ? 240 : 280;
    const cardHeight = isMobile ? 150 : 180;
    const radius = isMobile ? 200 : 320;
    const angle = 360 / stats.length;

    return (
        <Section id="achievements" className="overflow-hidden pb-0 sm:pb-0">
            <SectionTitle>Proven Impact Through Automation</SectionTitle>
            <div
                className="relative w-full flex items-center justify-center mt-20"
                style={{ height: `${cardHeight + 100}px`, perspective: "1000px" }}
            >
                <motion.div
                    className="relative"
                    style={{
                        transformStyle: "preserve-3d",
                        width: cardWidth,
                        height: cardHeight,
                    }}
                    animate={{
                        rotateY: -activeIndex * angle,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-full h-full p-[1px] rounded-2xl bg-gradient-to-br from-neutral-700 to-black shadow-xl shadow-black/50"
                            style={{
                                transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                                backfaceVisibility: "hidden",
                            }}
                        >
                            <div className="w-full h-full bg-neutral-950 rounded-[15px] p-4 flex flex-col justify-center items-center text-center overflow-hidden relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(150,150,150,0.1)_0%,transparent_60%)]"></div>
                                <p className="relative text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 mb-2">{stat.value}</p>
                                <h3 className="relative text-base font-semibold text-white mb-1">{stat.title}</h3>
                                <p className="relative text-xs sm:text-sm text-neutral-400 leading-tight">{stat.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
};

export const WatchLiveDemoSection = () => {
  return (
    <Section id="demo" className="pb-0 sm:pb-0">
      <SectionTitle>Watch Live Demo</SectionTitle>
      <div className="max-w-4xl mx-auto mt-4">
        <HeroVideoDialog
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/Nkh6RUocD8c"
          thumbnailSrc="https://techcrunch.com/wp-content/uploads/2024/03/Project-GR00T-Humanoid-Image.jpg?w=1024"
          thumbnailAlt="RoboCorp Live Demo Video"
        />
      </div>
    </Section>
  );
};


// --- Section: FAQ ---
const faqData = [
    {
        question: "How does your RaaS model reduce upfront capital expenditure?",
        answer: "Our Robotics-as-a-Service (RaaS) model eliminates the need for massive capital investment. You pay a predictable subscription fee, converting a large CapEx into a manageable OpEx. This allows you to deploy cutting-edge automation immediately without impacting your capital budget, freeing up funds for other critical business areas."
    },
    {
        question: "What is the typical deployment time compared to traditional automation?",
        answer: "While traditional projects can take months or even years, our standardized solutions and expert team get your robotic workforce operational in weeks. This deployment, often 5x faster, means you see ROI and operational improvements almost immediately."
    },
    {
        question: "Can your robots work safely alongside our human employees?",
        answer: "Absolutely. Our fleet includes advanced collaborative robots (cobots) designed with multiple safety features like force sensors and proximity detection to work safely with humans. We conduct rigorous safety assessments for every deployment to ensure a secure environment that enhances human capabilities."
    },
    {
        question: "How does your platform handle scalability for fluctuating demands?",
        answer: "Our platform is built for flexibility. You can effortlessly scale your robotic workforce up or down based on real-time production needs. Whether it's a seasonal peak or a new product line, you can add or remove robots with a simple request, ensuring you only pay for the capacity you use."
    },
    {
        question: "What kind of performance analytics and support can we expect?",
        answer: "You get access to a unified, real-time analytics dashboard with actionable insights into your fleet's performance, throughput, and efficiency. Our support team offers 24/7 monitoring and proactive maintenance to ensure maximum uptime, so you can focus on your core business."
    }
];

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-neutral-800 last:border-b-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-neutral-100">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="ml-4 flex-shrink-0"
        >
          <ChevronDown className="h-6 w-6 text-neutral-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-neutral-400">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" className="pb-0 sm:pb-0">
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-800 bg-[#111111] p-2 sm:p-4">
                {faqData.map((faq, index) => (
                    <AccordionItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        onClick={() => handleToggle(index)}
                    />
                ))}
            </div>
        </Section>
    );
};
