export default [
  {
    name: "Blog Title",
    desc: "An AI tool that generates blog titles based on a given topic.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/13225/13225927.png",
    aiPrompt:
      "Give me 25 blog topic ideas in bullet wise only based on given niche topic and give me result in text editor format.",
    slug: "blog-title-generator",
    form: [
      {
        label: "Enter your niche topic",
        field: "input",
        name: "niche_topic",
        required: true,
      },
      {
        label: "Number of ideas",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Instagram Caption",
    desc: "Generates engaging Instagram captions based on your content idea or image theme.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384031.png",
    aiPrompt:
      "Write 25 catchy Instagram captions in bullet points for the given theme or idea. Use emojis where suitable.",
    slug: "instagram-caption-generator",
    form: [
      {
        label: "Enter your content idea or image theme",
        field: "input",
        name: "caption_idea",
        required: true,
      },
    ],
  },
  {
    name: "LinkedIn Post",
    desc: "Creates professional LinkedIn posts based on your topic or message.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
    aiPrompt:
      "Generate a LinkedIn post with a formal and impactful tone on the given topic. Include a strong opening line.In detail format",
    slug: "linkedin-post-generator",
    form: [
      {
        label: "Enter your topic/message",
        field: "input",
        name: "linkedin_topic",
        required: true,
      },
    ],
  },
  {
    name: "Twitter Post",
    desc: "Crafts short and catchy tweets based on your idea or announcement.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
    aiPrompt:
      "Write 25 tweet variations under 280 characters for the given topic. Include relevant hashtags if needed.",
    slug: "tweet-generator",
    form: [
      {
        label: "Enter your tweet topic or idea",
        field: "input",
        name: "tweet_topic",
        required: true,
      },
    ],
  },
  {
    name: "YouTube Title",
    desc: "Generates attention-grabbing YouTube video titles for your niche.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt:
      "Suggest 25 clickable YouTube video titles for the given video idea. Keep them short and catchy.and also add description in detail add some link to the websites",
    slug: "youtube-title-generator",
    form: [
      {
        label: "Enter your video idea or niche",
        field: "input",
        name: "youtube_topic",
        required: true,
      },
    ],
  },
  {
    name: "Hashtag Generator",
    desc: "Find trending and relevant hashtags based on your content topic.",
    category: "Social Media",
    icon: "https://cdn-icons-png.flaticon.com/128/709/709496.png",
    aiPrompt:
      "Give me 20 trending and relevant hashtags for the given topic. Include a mix of high and medium popularity tags.",
    slug: "hashtag-generator",
    form: [
      {
        label: "Enter your topic or keyword",
        field: "input",
        name: "hashtag_topic",
        required: true,
      },
    ],
  },
  {
    name: "FAQ Generator",
    desc: "Creates frequently asked questions and answers based on a product or topic.",
    category: "Content",
    icon: "https://cdn-icons-png.flaticon.com/128/2769/2769339.png",
    aiPrompt:
      "Write 25 common FAQs with answers for the given topic or product. Keep it clear and concise.",
    slug: "faq-generator",
    form: [
      {
        label: "Enter your topic or product name",
        field: "input",
        name: "faq_topic",
        required: true,
      },
    ],
  },
  {
    name: "Resume Summary",
    desc: "Creates a professional and concise resume summary based on your experience.",
    category: "Career",
    icon: "https://cdn-icons-png.flaticon.com/128/942/942748.png",
    aiPrompt:
      "Write a strong resume summary for a candidate with the given experience and role. Keep it under 300 words.",
    slug: "resume-summary-generator",
    form: [
      {
        label: "Enter your experience and job role",
        field: "textarea",
        name: "resume_data",
        required: true,
      },
    ],
  },
  {
    name: "Cold Email",
    desc: "Crafts persuasive cold email messages for outreach and lead generation.",
    category: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/561/561127.png",
    aiPrompt:
      "Write a cold email for outreach based on the given offer and recipient type. Keep it polite and action-oriented.",
    slug: "cold-email-generator",
    form: [
      {
        label: "Enter your offer and recipient type",
        field: "textarea",
        name: "email_info",
        required: true,
      },
    ],
  },
  {
    name: "Quote Generator",
    desc: "Generates motivational or theme-based quotes for social media or websites.",
    category: "Content",
    icon: "https://cdn-icons-png.flaticon.com/128/3075/3075977.png",
    aiPrompt:
      "Generate 25 original motivational quotes based on the given theme. Keep them short and powerful.",
    slug: "quote-generator",
    form: [
      {
        label: "Enter a theme (e.g. success, mindset)",
        field: "input",
        name: "quote_theme",
        required: true,
      },
    ],
  },
  {
    name: "Newsletter Intro",
    desc: "Writes a catchy and warm introduction for your newsletter content.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/481/481112.png",
    aiPrompt:
      "Write a friendly and engaging newsletter intro paragraph for the given topic or audience.in 300 words",
    slug: "newsletter-intro-generator",
    form: [
      {
        label: "Enter your newsletter topic or audience",
        field: "input",
        name: "newsletter_topic",
        required: true,
      },
    ],
  },
];
