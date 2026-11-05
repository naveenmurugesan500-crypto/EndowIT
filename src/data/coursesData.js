export const courses = [
  {
    id: "full-stack-backend",
    slug: "full-stack",
    title: "Full Stack (Backend Mastery)",
    shortTitle: "Full Stack (Backend)",
    tagline: "Architect robust, scalable, enterprise-grade backends, microservices & APIs",
    category: "Development",
    level: "Intermediate to Advanced",
    duration: "16 Weeks",
    hoursPerWeek: "10-12 hrs/week",
    rating: 4.95,
    reviewsCount: 320,
    learnersCount: "3,800+",
    featured: true,
    badge: "Most High-Demand",
    avgSalary: "₹8.5 - 24 LPA",
    overview: "Become an elite backend architect. This intensive program focuses deeply on server architecture, distributed systems, high-concurrency engines, database optimization, microservices, cloud deployments, and modern full-stack integrations. You won't just learn syntax—you will master how high-scale tech companies build fault-tolerant systems.",
    highlights: [
      "Deep dive into Node.js, Express, Go / Java Spring, and Python FastAPIs",
      "Master Relational (PostgreSQL) and NoSQL (MongoDB, Redis caching)",
      "Distributed systems, Kafka message queuing & Microservices architecture",
      "Docker containerization, Kubernetes orchestration & AWS Cloud CI/CD",
      "System Design: Scaling to 10M+ concurrent users & database sharding",
      "5 Production-grade Capstone Projects with code reviews"
    ],
    tools: [
      { name: "Node.js", category: "Runtime" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Caching" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "DevOps" },
      { name: "Kafka", category: "Messaging" },
      { name: "GraphQL", category: "API" },
      { name: "AWS", category: "Cloud" },
      { name: "Git", category: "VCS" }
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Advanced Server Architecture & RESTful API Engineering",
        duration: "3 Weeks",
        topics: [
          "Event-loop deep dive, async programming & memory leak prevention in Node.js",
          "Clean Architecture, Repository Pattern & Domain-Driven Design (DDD)",
          "Authentication & Authorization (JWT, OAuth2, RBAC, Sessions)",
          "RESTful standards, OpenAPI 3.0 specs, rate limiting & API security (OWASP Top 10)"
        ]
      },
      {
        module: "Module 2",
        title: "Database Engineering, Indexing & High-Performance Caching",
        duration: "4 Weeks",
        topics: [
          "Advanced PostgreSQL: query execution plans, B-Tree indexes, partitioning & locks",
          "ACID compliance, transaction isolation levels & distributed transactions",
          "NoSQL at Scale: MongoDB aggregation pipelines and indexing strategies",
          "Redis: In-memory caching patterns, Cache-Aside, Write-Through, pub/sub & distributed locking"
        ]
      },
      {
        module: "Module 3",
        title: "Microservices Architecture & Event-Driven Systems",
        duration: "4 Weeks",
        topics: [
          "Monolith to Microservices decomposition strategies & API Gateways",
          "Asynchronous communication with Apache Kafka and RabbitMQ",
          "gRPC & Protocol Buffers for blazing-fast service-to-service communication",
          "Service discovery, circuit breakers, resiliency patterns & Saga pattern for distributed transactions"
        ]
      },
      {
        module: "Module 4",
        title: "DevOps, Containerization, Cloud & System Design",
        duration: "5 Weeks",
        topics: [
          "Dockerizing backend services and multi-stage container builds",
          "Kubernetes deployments, ConfigMaps, Secrets, Ingress & Helm charts",
          "AWS deployment: ECS, RDS, S3, CloudFront & Automated GitHub Actions CI/CD pipelines",
          "System Design: Designing YouTube, Uber Backend, and high-frequency trading ledgers"
        ]
      }
    ],
    careerRoles: [
      "Backend Engineer",
      "Full Stack Backend Specialist",
      "API & Microservices Architect",
      "Distributed Systems Engineer",
      "Database Administrator / Data Engineer"
    ],
    prerequisites: "Basic programming logic in any language (JavaScript, Python, C++ or Java). We cover advanced backend from the ground up."
  },
  {
    id: "data-science",
    slug: "data-science",
    title: "Data Science Specialization",
    shortTitle: "Data Science",
    tagline: "Uncover predictive insights, build statistical models & drive strategic data decisions",
    category: "Data",
    level: "Beginner to Advanced",
    duration: "18 Weeks",
    hoursPerWeek: "10-12 hrs/week",
    rating: 4.92,
    reviewsCount: 290,
    learnersCount: "4,200+",
    featured: true,
    badge: "Top Rated",
    avgSalary: "₹9 - 26 LPA",
    overview: "Data is the new currency of modern business. Our Data Science program equips you with end-to-end expertise spanning exploratory data analysis, statistical modeling, machine learning pipelines, feature engineering, and deploying data products to production.",
    highlights: [
      "Applied Mathematics, Probability, Hypothesis Testing & Inferential Statistics",
      "Data wrangling mastery with Python (NumPy, Pandas, Polars) and SQL",
      "Predictive Machine Learning: Regression, Classification, Clustering, Ensembles",
      "Model Evaluation, Hyperparameter tuning, Cross-validation & Bias-Variance tradeoff",
      "Big Data processing with PySpark & Cloud Data Warehouses",
      "End-to-end Capstone: Credit Risk Prediction, Churn Forecasting & Recommendation Systems"
    ],
    tools: [
      { name: "Python", category: "Language" },
      { name: "Pandas", category: "Data Wrangling" },
      { name: "NumPy", category: "Math" },
      { name: "Scikit-Learn", category: "ML" },
      { name: "SQL", category: "Database" },
      { name: "PySpark", category: "Big Data" },
      { name: "Tableau", category: "BI" },
      { name: "Jupyter", category: "IDE" },
      { name: "FastAPI", category: "Deployment" },
      { name: "MLflow", category: "MLOps" }
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Python for Data Science, Advanced SQL & Statistics",
        duration: "4 Weeks",
        topics: [
          "Python data structures, vectorization, NumPy matrix algebra & Pandas optimization",
          "Advanced SQL: Window functions, CTEs, subqueries, pivoting, and execution planning",
          "Probability distributions, Central Limit Theorem, confidence intervals & A/B testing",
          "Exploratory Data Analysis (EDA) and storytelling with Seaborn, Matplotlib & Plotly"
        ]
      },
      {
        module: "Module 2",
        title: "Applied Machine Learning & Feature Engineering",
        duration: "5 Weeks",
        topics: [
          "Supervised Learning: Linear, Ridge, Lasso, Logistic Regression, Decision Trees",
          "Ensemble methods: Random Forests, XGBoost, LightGBM, and CatBoost",
          "Unsupervised Learning: K-Means, Hierarchical Clustering, PCA dimensionality reduction",
          "Automated feature engineering, missing value imputation, out-of-fold validation"
        ]
      },
      {
        module: "Module 3",
        title: "Time Series Forecasting & Big Data with Spark",
        duration: "4 Weeks",
        topics: [
          "Time series decomposition, ARIMA, SARIMAX, and Facebook Prophet",
          "Big Data foundations: Hadoop, HDFS, Spark Architecture & RDDs",
          "PySpark DataFrames, Spark SQL & Distributed Machine Learning with MLlib",
          "Data lake architectures with Snowflake, BigQuery & Databricks"
        ]
      },
      {
        module: "Module 4",
        title: "Model Deployment, MLOps & Capstone Portfolio",
        duration: "5 Weeks",
        topics: [
          "Packaging models as RESTful APIs using FastAPI and Docker containers",
          "Experiment tracking, model registry, and metrics logging using MLflow",
          "Monitoring data drift, model degradation, and continuous retraining pipelines",
          "Industry Capstones: Customer Lifetime Value (CLV) & Real-time Fraud Detection"
        ]
      }
    ],
    careerRoles: [
      "Data Scientist",
      "Machine Learning Analyst",
      "Predictive Modeler",
      "Quantitative Data Strategist",
      "Data Science Consultant"
    ],
    prerequisites: "Comfort with high-school mathematics and a passion for data analysis. Prior coding experience is a plus but not mandatory."
  },
  {
    id: "ai-and-ml",
    slug: "ai-ml",
    title: "Artificial Intelligence & Machine Learning (AI & ML)",
    shortTitle: "AI & ML",
    tagline: "Build Next-Gen Generative AI, Deep Learning Models, LLMs & Autonomous Agents",
    category: "AI",
    level: "Intermediate to Advanced",
    duration: "20 Weeks",
    hoursPerWeek: "12-14 hrs/week",
    rating: 4.98,
    reviewsCount: 410,
    learnersCount: "5,100+",
    featured: true,
    badge: "Trending 2026",
    avgSalary: "₹12 - 32 LPA",
    overview: "Step into the bleeding edge of Artificial Intelligence. This masterclass covers the entire spectrum from mathematical foundations of Neural Networks to state-of-the-art Deep Learning, Computer Vision, Transformers, Large Language Models (LLMs), RAG architectures, and autonomous AI agents.",
    highlights: [
      "Neural Networks from scratch: Backpropagation, Gradient Descent, Activation functions",
      "Deep Learning with PyTorch: CNNs for Computer Vision & RNN/LSTMs for Sequences",
      "Transformers architecture: Attention mechanisms, BERT, GPT-4, and Gemini internals",
      "Generative AI & LLMs: Prompt engineering, Fine-Tuning (LoRA/QLoRA), and RLHF",
      "Retrieval-Augmented Generation (RAG) with Vector Databases (Chroma, Pinecone)",
      "Autonomous Multi-Agent workflows with LangChain, LangGraph & CrewAI"
    ],
    tools: [
      { name: "PyTorch", category: "Deep Learning" },
      { name: "TensorFlow", category: "Deep Learning" },
      { name: "Hugging Face", category: "Transformers" },
      { name: "LangChain", category: "Agent Framework" },
      { name: "Pinecone", category: "Vector DB" },
      { name: "OpenAI API", category: "LLM" },
      { name: "Ollama", category: "Local LLMs" },
      { name: "Weights & Biases", category: "Experimentation" },
      { name: "CUDA", category: "GPU Computing" },
      { name: "FastAPI", category: "Serving" }
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Mathematical Foundations & Deep Neural Networks (PyTorch)",
        duration: "5 Weeks",
        topics: [
          "Linear algebra for AI, tensors, autograd, and vector calculus",
          "Building multi-layer perceptrons (MLP) from first principles",
          "Optimization algorithms: AdamW, RMSProp, learning rate schedulers & weight decay",
          "Regularization techniques: Dropout, Batch Normalization, Layer Normalization"
        ]
      },
      {
        module: "Module 2",
        title: "Computer Vision & Natural Language Processing",
        duration: "5 Weeks",
        topics: [
          "Convolutional Neural Networks (CNNs), ResNet, EfficientNet, and Vision Transformers (ViT)",
          "Object detection with YOLOv8 and semantic segmentation with U-Net",
          "NLP fundamentals: Tokenization, embeddings (Word2Vec), and recurrent networks",
          "Seq2Seq models, Encoder-Decoder architectures, and Self-Attention mechanics"
        ]
      },
      {
        module: "Module 3",
        title: "Generative AI, Large Language Models & Prompt Engineering",
        duration: "5 Weeks",
        topics: [
          "The Transformer architecture decoded: Multi-head attention and positional encodings",
          "Pre-training vs Fine-Tuning: Parameter-Efficient Fine-Tuning (PEFT, LoRA, QLoRA)",
          "Vector Databases & Enterprise RAG pipelines: Chunking strategies, hybrid search, re-ranking",
          "Multi-modal AI: Processing vision, speech, and structured documents together"
        ]
      },
      {
        module: "Module 4",
        title: "Autonomous Agents, LLMOps & Production Deployment",
        duration: "5 Weeks",
        topics: [
          "Building autonomous multi-agent systems with LangGraph and CrewAI",
          "Model quantization (GGUF, AWQ), GPU inference optimization with vLLM & TensorRT",
          "Guardrails, hallucination prevention, evaluations, and ethical AI standards",
          "Capstone: Production-grade Enterprise Agent with Live Tool Use & RAG"
        ]
      }
    ],
    careerRoles: [
      "AI Engineer",
      "Machine Learning Engineer",
      "Generative AI Architect",
      "LLM Solutions Specialist",
      "Computer Vision / NLP Researcher"
    ],
    prerequisites: "Python proficiency and fundamental understanding of calculus & linear algebra. We guide you step-by-step through advanced AI topics."
  },
  {
    id: "data-analytics",
    slug: "data-analytics",
    title: "Data Analytics & Business Intelligence",
    shortTitle: "Data Analytics",
    tagline: "Transform raw organizational data into interactive executive dashboards & strategic growth",
    category: "Data",
    level: "Beginner to Intermediate",
    duration: "14 Weeks",
    hoursPerWeek: "8-10 hrs/week",
    rating: 4.89,
    reviewsCount: 380,
    learnersCount: "4,900+",
    featured: false,
    badge: "High Placement Rate",
    avgSalary: "₹6.5 - 18 LPA",
    overview: "Bridge the gap between data and business decision-making. This program equips you with real-world business analytics skills using Advanced Excel, complex SQL queries, interactive Power BI / Tableau dashboards, and Python for statistical insights.",
    highlights: [
      "Advanced Excel: Power Query, XLOOKUP, dynamic arrays, VBA automation & financial modeling",
      "Industrial SQL: Multi-table joins, window functions, indexing, and aggregate reporting",
      "Interactive Dashboard design in Power BI (DAX) and Tableau",
      "Cohort analysis, customer segmentation, funnel conversion, and KPI metrics",
      "Automated data pipelines and Python reporting (Pandas, OpenPyXL)",
      "Real-world Business Case Studies: E-commerce, Fintech, Healthcare, and SaaS metrics"
    ],
    tools: [
      { name: "Power BI", category: "BI Tool" },
      { name: "Tableau", category: "Data Viz" },
      { name: "Advanced Excel", category: "Spreadsheets" },
      { name: "SQL", category: "Querying" },
      { name: "Python", category: "Scripting" },
      { name: "Power Query", category: "ETL" },
      { name: "DAX", category: "Formulas" },
      { name: "Snowflake", category: "Cloud Warehouse" }
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Mastering Advanced Excel & Data Manipulation",
        duration: "3 Weeks",
        topics: [
          "Data cleaning, nested logical formulas, dynamic array formulas & INDEX-MATCH-MATCH",
          "Power Query for automated ETL workflows and combining multi-source workbooks",
          "What-If analysis, Scenario Manager, Goal Seek, and Executive summary dashboards",
          "Introduction to VBA macros for recurring business task automation"
        ]
      },
      {
        module: "Module 2",
        title: "Database Querying & Complex SQL for Analytics",
        duration: "4 Weeks",
        topics: [
          "Relational databases: primary/foreign keys, normalization & schema design",
          "Advanced grouping, aggregations, conditional filtering, and CASE WHEN logic",
          "Window functions: ROW_NUMBER, RANK, DENSE_RANK, NTILE, LAG, LEAD, and running totals",
          "Performance tuning, common table expressions (CTEs), and reporting views"
        ]
      },
      {
        module: "Module 3",
        title: "Business Intelligence with Power BI & Tableau",
        duration: "4 Weeks",
        topics: [
          "Star schema and Snowflake schema modeling in Power BI",
          "DAX mastery: CALCULATE, FILTER, RELATED, Time Intelligence (YTD, QTD, MoM growth)",
          "Building interactive Tableau dashboards with parameters, calculated fields & LOD expressions",
          "Executive UX principles: layout hierarchy, color psychology, and drill-through actions"
        ]
      },
      {
        module: "Module 4",
        title: "Applied Business Analytics, Python & Capstone",
        duration: "3 Weeks",
        topics: [
          "Python for data analysts: automated data cleaning, merging, and descriptive statistics",
          "Key business metrics: CAC, LTV, Churn, ARR, Burn Rate, and ROI calculations",
          "Storytelling with data: presenting insights to CXOs and executive stakeholders",
          "Capstone: End-to-end Sales, Inventory & Marketing ROI Dashboard portfolio"
        ]
      }
    ],
    careerRoles: [
      "Data Analyst",
      "Business Intelligence (BI) Developer",
      "Product Analyst",
      "Operations Analyst",
      "Reporting & Visualization Specialist"
    ],
    prerequisites: "No coding background needed. Curiosity for numbers, business problem solving, and analytical thinking."
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Performance Digital Marketing & Growth Hacking",
    shortTitle: "Digital Marketing",
    tagline: "Master high-ROI paid campaigns, SEO ranking, social funnel conversions & modern AI marketing",
    category: "Marketing",
    level: "Beginner to Advanced",
    duration: "12 Weeks",
    hoursPerWeek: "8-10 hrs/week",
    rating: 4.88,
    reviewsCount: 340,
    learnersCount: "3,500+",
    featured: false,
    badge: "Rapid Career Transition",
    avgSalary: "₹5.5 - 16 LPA",
    overview: "Modern marketing is driven by data, algorithms, and high-converting creative engines. This hands-on program transforms you into a full-funnel growth marketer equipped to manage enterprise ad budgets, dominate Google search rankings, and leverage modern AI tools to scale brands profitably.",
    highlights: [
      "Search Engine Optimization (SEO): Technical audits, On-page, Off-page & programmatic SEO",
      "Performance Ads: Meta Ads (Facebook/Instagram), Google Search/Display/PMax, LinkedIn Ads",
      "Conversion Rate Optimization (CRO), A/B landing page testing & funnel architecture",
      "Web Analytics: Google Analytics 4 (GA4), Google Tag Manager (GTM), and server-side tracking",
      "AI-powered Marketing: ChatGPT, Midjourney for creatives, Copy.ai & automated drip campaigns",
      "Live Budget Practice: Run real ad campaigns with dedicated practice budgets"
    ],
    tools: [
      { name: "Google Ads", category: "Paid Media" },
      { name: "Meta Ads Manager", category: "Social Ads" },
      { name: "Google Analytics 4", category: "Analytics" },
      { name: "Google Tag Manager", category: "Tracking" },
      { name: "SEMrush", category: "SEO" },
      { name: "Ahrefs", category: "SEO" },
      { name: "HubSpot", category: "CRM" },
      { name: "Canva", category: "Design" },
      { name: "Mailchimp", category: "Email" },
      { name: "Hotjar", category: "CRO" }
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Advanced SEO & Content Marketing Mastery",
        duration: "3 Weeks",
        topics: [
          "Search engine crawl mechanisms, Core Web Vitals, schema markup & site architecture",
          "Keyword research intent mapping, competitive gap analysis using SEMrush & Ahrefs",
          "On-page optimization: semantic HTML, title tags, internal linking, and content clustering",
          "Link building strategies: Digital PR, guest posting, broken link building, and local SEO"
        ]
      },
      {
        module: "Module 2",
        title: "Paid Search & Performance Advertising (Google Ads)",
        duration: "3 Weeks",
        topics: [
          "Google Ads ecosystem: Search, Display, Video (YouTube), and Performance Max (PMax)",
          "Bidding strategies: Target CPA, Target ROAS, Maximize Conversions, and manual CPC",
          "Quality Score optimization, ad extensions, negative keyword sculpting & ad copywriting",
          "Remarketing lists for search ads (RLSA) and dynamic search ads"
        ]
      },
      {
        module: "Module 3",
        title: "Social Media Ads & Paid Acquisition (Meta & LinkedIn)",
        duration: "3 Weeks",
        topics: [
          "Meta Ads Manager: Campaign budget optimization (CBO), ad sets, placements, and creative fatigue",
          "Audience segmentation: Lookalike audiences (LAL), Custom audiences, and demographic targeting",
          "B2B Growth: LinkedIn Ads, Account-Based Marketing (ABM), InMail, and lead generation forms",
          "High-converting video creatives, UGC strategy, hook testing, and viral retention formulas"
        ]
      },
      {
        module: "Module 4",
        title: "GA4, Conversion Tracking, Marketing Automation & AI",
        duration: "3 Weeks",
        topics: [
          "Google Tag Manager (GTM): Custom triggers, dataLayer events, and conversion tracking",
          "Google Analytics 4 (GA4): Exploration reports, custom dimensions, funnel analysis, and attribution models",
          "Email marketing automation: Welcome sequences, abandoned cart triggers, and segmentation",
          "Capstone: End-to-end Multi-channel growth campaign launch with live budget review"
        ]
      }
    ],
    careerRoles: [
      "Performance Marketing Specialist",
      "SEO Strategist / Manager",
      "Paid Ads Specialist (Google / Meta)",
      "Growth Marketing Manager",
      "Digital Marketing Lead"
    ],
    prerequisites: "No technical background required. Ideal for graduates, career switchers, entrepreneurs, and traditional marketers wanting to modernize."
  }
];

export const courseCategories = ["All", "Development", "Data", "AI", "Marketing"];

export const academyStats = [
  { value: "10,000+", label: "Graduates Trained", sublabel: "Across 25+ countries" },
  { value: "95.4%", label: "Placement Rate", sublabel: "Within 6 months of graduation" },
  { value: "450+", label: "Hiring Partners", sublabel: "Startups to Fortune 500" },
  { value: "₹14.2 LPA", label: "Average Package", sublabel: "Across technical courses" }
];

export const hiringPartners = [
  "Google", "Amazon", "Microsoft", "TCS", "Infosys", "Wipro", "Tech Mahindra", "Razorpay", "Swiggy", "Zomato", "Accenture", "Cognizant"
];

export const studentTestimonials = [
  {
    name: "Aakash Sharma",
    role: "Backend Engineer",
    company: "Razorpay",
    course: "Full Stack (Backend Mastery)",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "EndowIT Academy completely changed my trajectory. Before this, I only knew basic JavaScript. The deep dive into microservices, Kafka, and PostgreSQL indexes helped me crack a 16 LPA backend engineering offer!"
  },
  {
    name: "Priyanka Nair",
    role: "AI & ML Specialist",
    company: "Cognizant AI Labs",
    course: "AI & ML",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "The Generative AI and RAG module was top-notch. Building autonomous agents from scratch gave me practical confidence that ordinary online courses never provided. The mentor support was 24/7."
  },
  {
    name: "Rohan Varma",
    role: "Senior Data Scientist",
    company: "Swiggy",
    course: "Data Science Specialization",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Hands-on projects made the whole difference. The instructors are working data scientists from tier-1 companies who review your code and conduct mock interviews. Worth every single penny!"
  },
  {
    name: "Sneha Patel",
    role: "Performance Marketer",
    company: "GrowthX Media",
    course: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    quote: "Transitioning from non-tech to digital marketing was intimidating until I enrolled at EndowIT. Running live Meta and Google ad budgets gave me the real portfolio that got me hired in 4 weeks."
  }
];

export const academyHighlights = [
  {
    icon: "GraduationCap",
    title: "1-on-1 Industry Mentorship",
    desc: "Learn directly from senior architects, lead data scientists, and marketing directors from top tech firms."
  },
  {
    icon: "Briefcase",
    title: "100% Placement Assistance",
    desc: "Dedicated career managers, resume revamping, GitHub portfolio polishing, and guaranteed interview opportunities."
  },
  {
    icon: "Cpu",
    title: "Hands-On Capstone Labs",
    desc: "No boring theory. Work on real production environments, live database clusters, and industry datasets."
  },
  {
    icon: "Clock",
    title: "Flexible Learning Formats",
    desc: "Weekday and weekend live cohorts designed specifically for college graduates and working professionals."
  }
];
