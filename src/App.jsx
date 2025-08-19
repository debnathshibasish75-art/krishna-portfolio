import React from 'react';
import krishna from './assets/krishna.jpg';

export default function App() {
  return (
    <div>
      <h1>Shri Krishna Portfolio</h1>
      <img src={krishna} alt="Shri Krishna" style={{ width: '300px', borderRadius: '10px' }} 
      />
    </div>
  );
}
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Book,
  Sword,
  Heart,
  Feather,
  Infinity,
  Github,
  Mail,
  Link as LinkIcon,
  Image as ImageIcon,
  Calendar,
  Quote,
  Star,
  Sun,
  Moon,
} from "lucide-react";

// -------- Minimal UI --------
const cn = (...classes) => classes.filter(Boolean).join(" ");

const Button = ({ className = "", children, as: As = "button", ...props }) => (
  <As
    className={cn(
      "inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold",
      "border shadow-sm transition hover:shadow-md",
      "bg-white/80 dark:bg-neutral-900/60 backdrop-blur",
      className
    )}
    {...props}
  >
    {children}
  </As>
);

const Input = ({ className = "", ...props }) => (
  <input
    className={cn(
      "w-full rounded-2xl border px-3 py-2 text-sm",
      "bg-white/70 dark:bg-neutral-900/60 backdrop-blur",
      className
    )}
    {...props}
  />
);

const Card = ({ className = "", children }) => (
  <div
    className={cn(
      "rounded-2xl border bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-sm",
      className
    )}
  >
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={cn("p-5 border-b", className)}>{children}</div>
);
const CardTitle = ({ className = "", children }) => (
  <h3 className={cn("text-lg font-semibold flex items-center gap-2", className)}>
    {children}
  </h3>
);
const CardDescription = ({ className = "", children }) => (
  <p className={cn("text-sm text-neutral-600 dark:text-neutral-300", className)}>
    {children}
  </p>
);
const CardContent = ({ className = "", children }) => (
  <div className={cn("p-5", className)}>{children}</div>
);

const Separator = ({ className = "" }) => (
  <div className={cn("h-px w-full bg-neutral-200 dark:bg-neutral-800", className)} />
);

// -------- Utils --------
const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

const Section = ({ id, eyebrow, title, description, children }) => (
  <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
    <motion.div {...fade} className="mb-10">
      {eyebrow && (
        <p className="text-xs tracking-widest uppercase text-indigo-600/80 dark:text-indigo-400/80 font-semibold">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold mt-2">{title}</h2>
      {description && (
        <p className="mt-3 text-neutral-700 dark:text-neutral-300 max-w-3xl">{description}</p>
      )}
    </motion.div>
    <div>{children}</div>
  </section>
);

// -------- Theme Toggle --------
function useTheme() {
  const [theme, setTheme] = React.useState(
    () => localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
  );
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);
  return [theme, setTheme];
}

// -------- Nav --------
const Nav = () => {
  const links = [
    { href: "#hero", label: "Home" },
    { href: "#leelas", label: "Leelas" },
    { href: "#wars", label: "Wars" },
    { href: "#gita", label: "Bhagavad Gita" },
    { href: "#lifestyle", label: "Lifestyle" },
    { href: "#timeline", label: "Timeline" },
    { href: "#gallery", label: "Gallery" },
    { href: "#quotes", label: "Quotes" },
    { href: "#resources", label: "Resources" },
    { href: "#contact", label: "Contact" },
  ];
  const [theme, setTheme] = useTheme();
  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 dark:bg-neutral-950/50 border-b">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <a href="#hero" className="flex items-center gap-2 font-extrabold text-base md:text-lg">
          <Star className="h-5 w-5" />
          <span>Shri Krishna • Portfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <a href="#contact" className="text-sm underline md:hidden">Contact</a>
        </div>
      </nav>
    </div>
  );
};

// -------- Hero --------
const Hero = () => (
  <section id="hero" className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 via-white to-white dark:from-indigo-900/20 dark:via-neutral-950 dark:to-neutral-950" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div {...fade}>
          <p className="text-xs tracking-widest uppercase text-indigo-600/80 dark:text-indigo-400/80 font-semibold">Avatār • Dharma • Compassion</p>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-tight">Shri Krishna</h1>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300">
            A curated, modern portfolio highlighting the divine life, teachings, and legacy of Shri Krishna—his playful leelas, sublime wisdom of the Bhagavad Gita, leadership in times of war, and timeless lifestyle principles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="a" href="#gita">Explore Bhagavad Gita</Button>
            <Button as="a" href="#leelas" className="bg-transparent">Life & Leelas</Button>
          </div>
        </motion.div>
        <motion.div {...fade} className="relative">
          <img src="/images/peacock-feather.svg" alt="Peacock feather" className="w-full aspect-video object-cover rounded-2xl shadow-xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

// -------- Feature Cards --------
const FeatureCards = () => {
  const items = [
    { icon: Heart, title: "Life & Leelas", desc: "From Vrindavan’s ras leela to acts of compassion and playful divinity.", href: "#leelas" },
    { icon: Sword, title: "Wars & Leadership", desc: "Strategist, diplomat, and Parthasarathi (charioteer) in the Kurukshetra war.", href: "#wars" },
    { icon: Book, title: "Bhagavad Gita", desc: "Eternal knowledge on duty, devotion, and yoga.", href: "#gita" },
    { icon: Feather, title: "Lifestyle", desc: "Grace, simplicity, music, devotion, and balanced living.", href: "#lifestyle" },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
      <div className="grid md:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, title, desc, href }) => (
          <motion.a {...fade} key={title} href={href} className="block">
            <Card className="h-full hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>
                  <Icon className="h-5 w-5" /> {title}
                </CardTitle>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
            </Card>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

// -------- Sections --------
const Leelas = () => (
  <Section id="leelas" eyebrow="Leelas" title="Divine Play & Compassion" description="Highlights of Krishna’s childhood and youth: miracles, music, and mercy.">
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { t: "Makhan Chor", d: "The butter thief—symbolizing the Lord stealing our hearts and ego with sweetness." },
        { t: "Govardhan Lila", d: "Lifting Govardhan to protect Vrindavan; teaching reliance on the Divine over ritual formalism." },
        { t: "Kaliya Mardan", d: "Subduing the serpent Kaliya—triumph of dharma over toxicity and fear." },
        { t: "Ras Leela", d: "The dance of pure devotion with the gopis—love beyond ego and possession." },
        { t: "Putana Moksha", d: "Liberating the demoness Putana—grace that transforms even ill-intent." },
        { t: "Uddhava Sandesh", d: "Message of wisdom and detachment to the Vrajavasis through Uddhava." },
      ].map((x) => (
        <motion.div {...fade} key={x.t}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <Heart className="h-5 w-5" /> {x.t}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">{x.d}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Wars = () => (
  <Section id="wars" eyebrow="Leadership & Strategy" title="Wars, Diplomacy & Dharma" description="Krishna’s role in the Mahabharata—from peacemaker to Parthasarathi (charioteer).">
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { t: "Peace Embassy", d: "Before the Kurukshetra War, Krishna sought peaceful settlement—exemplifying diplomacy and restraint." },
        { t: "Charioteer of Arjuna", d: "Guiding Arjuna with clarity and courage—placing duty (svadharma) above personal dilemma." },
        { t: "Tactics & Dharma", d: "Strategic insights—honoring rules of war while adapting to adharma on the battlefield." },
      ].map((x) => (
        <motion.div {...fade} key={x.t}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <Sword className="h-5 w-5" /> {x.t}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">{x.d}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Gita = () => (
  <Section id="gita" eyebrow="Wisdom" title="Bhagavad Gita — Core Teachings" description="Timeless guidance Krishna gave to Arjuna: purpose, action, devotion, and knowledge.">
    <div className="grid md:grid-cols-2 gap-6">
      <motion.div {...fade}>
        <Card>
          <CardHeader>
            <CardTitle>
              <Book className="h-5 w-5" /> Four Yogas
            </CardTitle>
            <CardDescription>Paths harmonized in the Gita</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li><span className="font-semibold">Karma Yoga:</span> Selfless action without attachment to outcomes.</li>
              <li><span className="font-semibold">Bhakti Yoga:</span> Loving devotion that purifies and surrenders the ego.</li>
              <li><span className="font-semibold">Jnana Yoga:</span> Discrimination between the eternal and transient.</li>
              <li><span className="font-semibold">Dhyana/Raja Yoga:</span> Steady mind through meditation and discipline.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div {...fade}>
        <Card>
          <CardHeader>
            <CardTitle>
              <Infinity className="h-5 w-5" /> Key Insights
            </CardTitle>
            <CardDescription>Essentials in one glance</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
              <li>Do your duty (svadharma) with equanimity.</li>
              <li>Offer action and results to the Divine (ishvara pranidhana).</li>
              <li>The Self (Atman) is unborn, eternal, and indestructible.</li>
              <li>True renunciation is inner detachment, not inaction.</li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>

    <div className="mt-8 grid md:grid-cols-2 gap-6">
      <img src="/images/gita.svg" alt="Bhagavad Gita" className="w-full rounded-2xl border" />
      <div className="space-y-3">
        <details className="rounded-2xl border">
          <summary className="cursor-pointer p-4 font-medium">Selected Verses (Paraphrased)</summary>
          <div className="p-4 pt-0 text-neutral-700 dark:text-neutral-300">
            <ul className="list-disc pl-5 space-y-2">
              <li>"You have a right to action, not to the fruits of action." (2.47)</li>
              <li>"Whenever dharma declines, I manifest to protect the good and restore harmony." (4.7–8)</li>
              <li>"Fix your mind on Me, be devoted to Me—thus you will come to Me." (9.34)</li>
            </ul>
          </div>
        </details>
        <details className="rounded-2xl border">
          <summary className="cursor-pointer p-4 font-medium">How to Apply in Daily Life</summary>
          <div className="p-4 pt-0 text-neutral-700 dark:text-neutral-300">
            <ol className="list-decimal pl-5 space-y-2">
              <li>Begin the day with a short offering or gratitude practice.</li>
              <li>Work wholeheartedly; detach from praise/blame.</li>
              <li>Practice a few minutes of meditation or japa.</li>
              <li>Serve others—let compassion be your compass.</li>
            </ol>
          </div>
        </details>
      </div>
    </div>
  </Section>
);

const Lifestyle = () => (
  <Section id="lifestyle" eyebrow="Aesthetic & Ethics" title="Lifestyle Principles" description="Harmony of music, devotion, courage, humor, and simplicity that defined Krishna’s way of life.">
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { t: "Music & Art", d: "The flute (bansuri) as a symbol of surrender—hollow yet filled with divine breath." },
        { t: "Compassion in Action", d: "Protecting the vulnerable; guiding friends and devotees with warmth and wisdom." },
        { t: "Joy & Play", d: "Lila as a reminder to keep the heart light while living dharma fully." },
        { t: "Balanced Strength", d: "Softness with courage—diplomacy first, decisive action when needed." },
        { t: "Simplicity", d: "Grace in simple living, presence over possessions." },
        { t: "Community", d: "Vrindavan’s spirit—belonging, seva, and shared celebration." },
      ].map((x, i) => (
        <motion.div {...fade} key={i}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <Heart className="h-5 w-5" /> {x.t}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-neutral-700 dark:text-neutral-300">{x.d}</p>
              {i === 0 && <img src="/images/lifestyle.svg" alt="Lifestyle" className="mt-4 w-full rounded-xl border" />}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Timeline = () => (
  <Section id="timeline" eyebrow="Chronicle" title="Life Timeline (Selected)" description="A concise arc—from birth in Mathura to the teachings on Kurukshetra and beyond.">
    <ol className="relative border-s">
      {[
        { year: "Birth", detail: "Born to Devaki and Vasudeva in Mathura; moved to Gokul to escape Kansa." },
        { year: "Childhood", detail: "Vrindavan leelas—Makhan chor, Kaliya mardan, Govardhan lila." },
        { year: "Adolescence", detail: "Ras leela; deepening of bhakti among the gopis and Vrajavasis." },
        { year: "Mathura/Dwaraka", detail: "Slaying Kansa; establishing Dwaraka; statesmanship and guidance." },
        { year: "Mahabharata", detail: "Diplomatic mission for peace, counsel to the Pandavas, charioteer to Arjuna." },
        { year: "Bhagavad Gita", detail: "Eternal discourse on duty, devotion, knowledge, and meditation." },
      ].map((x, i) => (
        <li key={i} className="mb-8 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
            <Calendar className="h-4 w-4" />
          </span>
          <h4 className="font-semibold">{x.year}</h4>
          <p className="text-neutral-700 dark:text-neutral-300">{x.detail}</p>
          {x.year === "Mahabharata" && <img src="/images/war.svg" alt="Kurukshetra" className="mt-3 w-full max-w-md rounded-xl border" />}
        </li>
      ))}
    </ol>
  </Section>
);

const Gallery = () => (
  <Section id="gallery" eyebrow="Visuals" title="Gallery" description="Blend of traditional paintings and modern illustrations (placeholders here).">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div {...fade} key={i} className="aspect-square rounded-2xl bg-neutral-100 dark:bg-neutral-900 border flex items-center justify-center overflow-hidden">
          <img
            src={i % 2 === 0 ? "/images/peacock-feather.svg" : "/images/lifestyle.svg"}
            alt="Gallery item"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
    </div>
    <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-3">Replace these with real artwork as you prefer.</p>
  </Section>
);

const Quotes = () => (
  <Section id="quotes" eyebrow="Inspiration" title="Memorable Lines (Paraphrased)" description="Short reflections inspired by the Gita and Krishna bhakti literature.">
    <div className="grid md:grid-cols-3 gap-6">
      {["In the stillness of surrender, the heart becomes a flute.", "Offer every action; freedom blooms when craving fades.", "Where there is Dharma, there I stand—fearless and kind."].map((q, i) => (
        <motion.div {...fade} key={i}>
          <Card className="h-full">
            <CardHeader>
              <CardTitle>
                <Quote className="h-5 w-5" /> Reflection
              </CardTitle>
              <CardDescription className="text-base">{q}</CardDescription>
            </CardHeader>
          </Card>
        </motion.div>
      ))}
    </div>
  </Section>
);

const Resources = () => (
  <Section id="resources" eyebrow="Further Study" title="Resources" description="Curate your preferred translations of the Bhagavad Gita, Mahabharata, and commentaries here.">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <Book className="h-5 w-5" /> Suggested Readings
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Bhagavad Gita (choose your favorite translator/commentator).</li>
            <li>Mahabharata (abridged and full versions).</li>
            <li>Srimad Bhagavatam (Bhagavata Purana) selected cantos.</li>
            <li>Modern commentaries on karma yoga, bhakti, and meditation.</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <LinkIcon className="h-5 w-5" /> Notable Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Official Gita text sources and study guides.</li>
            <li>Audio kirtans and bansuri tracks for ambience.</li>
            <li>Virtual tours of Vrindavan, Mathura, and Kurukshetra.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" eyebrow="Connect" title="Contact / Newsletter" description="Add a simple form or your social links for visitors.">
    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <CardTitle>
            <Mail className="h-5 w-5" /> Send a Message
          </CardTitle>
          <CardDescription>Form is illustrative—hook it to your backend/provider.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <Input placeholder="Your name" />
            <Input placeholder="Your email" />
            <Input placeholder="Message (short)" />
            <Button className="w-full">Submit</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>
            <Github className="h-5 w-5" /> Social & Code
          </CardTitle>
          <CardDescription>Swap these for your real links.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 text-sm">
            <a className="underline" href="#">Website</a>
            <a className="underline" href="#">GitHub</a>
            <a className="underline" href="#">YouTube</a>
            <a className="underline" href="#">Instagram</a>
          </div>
        </CardContent>
      </Card>
    </div>

    <Separator className="my-10" />
    <footer className="text-center text-sm text-neutral-600 dark:text-neutral-400">
      Made with devotion • Replace placeholders as needed • © {new Date().getFullYear()}
    </footer>
  </Section>
);

// BackToTop + self-tests
const BackToTop = () => {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#hero"
      className={cn(
        "fixed bottom-6 right-6 p-3 rounded-full border shadow-xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur",
        show ? "opacity-100" : "opacity-0"
      )}
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </a>
  );
};

function runSelfTests() {
  console.assert(typeof Heart === "function", "[TEST] Heart icon should be available.");
  console.assert(typeof Sword === "function", "[TEST] Sword icon should be available.");
  console.assert(typeof Book === "function", "[TEST] Book icon should be available.");
  console.assert(typeof Infinity === "function", "[TEST] Infinity icon should be available.");
}
runSelfTests();

export default function App() {
  return (
    <div className="min-h-screen font-sans text-neutral-900 dark:text-neutral-100 bg-white dark:bg-neutral-950">
      <Nav />
      <Hero />
      <FeatureCards />
      <Leelas />
      <Wars />
      <Gita />
      <Lifestyle />
      <Timeline />
      <Gallery />
      <Quotes />
      <Resources />
      <Contact />
      <BackToTop />
    </div>
  );
}
