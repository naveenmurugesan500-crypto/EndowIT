export const blogs = [
  {
    id: "backend-architecture-2026",
    slug: "modern-backend-architecture-microservices-kafka",
    title: "Building Resilient Microservices with Apache Kafka & PostgreSQL in 2026",
    excerpt: "Discover how modern distributed systems handle high-volume event streams, maintain transactional consistency, and prevent cache stampedes at scale.",
    category: "Full Stack & Backend",
    readTime: "7 min read",
    date: "March 28, 2026",
    author: {
      name: "Siddharth Rao",
      role: "Lead Backend Architect & Instructor",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=80",
    tags: ["Backend", "Microservices", "Kafka", "PostgreSQL", "System Design"],
    content: `
      ### The Evolution of Modern Backend Systems
      In modern backend development, monolithic architectures often struggle to meet the velocity and scalability demands of high-growth technology applications. The transition to distributed microservices allows independent deployment, modular scaling, and high fault tolerance.

      #### 1. Why Event-Driven Architecture Dominates
      Synchronous HTTP/REST calls between microservices create tight coupling and cascading latency. If Service B slows down, Service A backs up, and the user experiences timeouts.
      By introducing an event streaming broker like **Apache Kafka**, services communicate asynchronously:
      - **Producer Independence:** The ordering service emits an \`OrderCreated\` event and returns 202 Accepted immediately.
      - **Consumer Scalability:** The inventory, billing, and notification services independently consume events at their own pace.

      #### 2. The Saga Pattern for Distributed Transactions
      Traditional 2-Phase Commit (2PC) locks database resources across network boundaries, ruining throughput. The Saga pattern breaks a transaction into a sequence of local transactions:
      - If payment succeeds, proceed to fulfillment.
      - If payment fails, trigger compensating events to undo prior steps.

      #### 3. Key Takeaway for Aspiring Backend Engineers
      Mastering synchronous REST APIs is only step one. High-paying engineering roles require deep intuition around idempotency, message brokers, caching tiers (Redis), and database query optimization.
    `
  },
  {
    id: "generative-ai-rag-guide",
    slug: "generative-ai-enterprise-rag-guide",
    title: "The Ultimate Guide to Enterprise RAG: Beyond Naive Vector Search",
    excerpt: "Learn how modern enterprise AI systems combine hybrid search, contextual compression, and re-ranking to eradicate hallucinations in production LLMs.",
    category: "AI & ML",
    readTime: "9 min read",
    date: "April 10, 2026",
    author: {
      name: "Dr. Ananya Sen",
      role: "Head of AI Research at EndowIT",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?w=800&auto=format&fit=crop&q=80",
    tags: ["AI", "Generative AI", "RAG", "LLMs", "Vector DB"],
    content: `
      ### Why Basic RAG Fails in Production
      Naive Retrieval-Augmented Generation (RAG)—chunking text, generating embeddings, and doing cosine similarity—works for toy demos. But in enterprise environments with financial tables, legal contracts, and technical schemas, standard vector search frequently fails.

      #### 1. The Power of Hybrid Search (Sparse + Dense)
      - **Dense Vectors (Cosine/Embedding):** Excel at capturing conceptual similarity ('salary expectations' matches 'compensation package').
      - **Sparse Vectors (BM25):** Essential for exact keyword lookups (e.g., product SKUs, tax IDs, error codes like \`ERR_4091\`).
      Combining both through Reciprocal Rank Fusion (RRF) yields significantly higher recall.

      #### 2. Cross-Encoder Re-Ranking
      Bi-encoder embedding models are fast but shallow. Feeding retrieved chunks through a Cross-Encoder Re-ranker (such as Cohere Rerank or BGE-Reranker) scores candidate passages with profound accuracy before feeding them to the generation prompt.

      #### 3. Guardrails and Evaluation
      Production AI applications require automated evaluation frameworks (like Ragas or TruLens) to continuously monitor faithfullness, answer relevance, and context precision.
    `
  },
  {
    id: "data-analyst-to-data-scientist",
    slug: "roadmap-data-analyst-to-data-scientist",
    title: "Bridging the Gap: How to Transition from Data Analyst to Data Scientist",
    excerpt: "A realistic, step-by-step career blueprint for data professionals looking to transition into predictive machine learning and advanced data science.",
    category: "Data Science",
    readTime: "6 min read",
    date: "April 18, 2026",
    author: {
      name: "Kavitha Murthy",
      role: "Principal Data Strategist",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["Data Science", "Career Transition", "Machine Learning", "Python"],
    content: `
      ### The Fundamental Shift: Retrospective vs. Predictive
      Data Analysts answer: **"What happened and why did it happen?"** using descriptive statistics, SQL, and BI dashboards.
      Data Scientists answer: **"What will happen next and how should we optimize for it?"** using statistical modeling, feature engineering, and algorithms.

      #### Essential Skills to Upgrade
      1. **From SQL to Python Vectorization:** Transition from writing SQL queries to writing vectorized Pandas/NumPy code and scalable PySpark pipelines.
      2. **Mathematical Foundations:** Revisit linear algebra, multivariate calculus, hypothesis testing, and Bayes' Theorem.
      3. **Model Evaluation Metrics:** Go beyond accuracy. Master ROC-AUC, Precision-Recall curves, F1-scores, and confusion matrices.
      4. **Production Deployment:** Learn to wrap trained models in FastAPI endpoints containerized with Docker.
    `
  },
  {
    id: "digital-marketing-ai-revolution",
    slug: "performance-marketing-in-ai-era",
    title: "Performance Marketing in the Age of AI: Mastering PMax & Meta Advantage+",
    excerpt: "How algorithmic ad buying has shifted digital marketing focus from manual bid tweaking to creative excellence, first-party data, and conversion tracking.",
    category: "Digital Marketing",
    readTime: "5 min read",
    date: "May 2, 2026",
    author: {
      name: "Vikram Malhotra",
      role: "Growth Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["Digital Marketing", "Meta Ads", "Google Ads", "Growth Hacking", "CRO"],
    content: `
      ### The Paradigm Shift in Paid Acquisition
      Gone are the days when digital marketers spent hours manually testing 50 micro-targeted audiences and setting manual cost-per-click bids.
      Today, Meta's Advantage+ Shopping Campaigns (ASC) and Google's Performance Max (PMax) use deep learning to locate buyers across the web.

      #### 3 Pillars of Modern High-ROI Marketing
      1. **Creative is the New Targeting:** High-converting video hooks, UGC (User Generated Content), and dynamic variations drive 80% of campaign performance.
      2. **First-Party Data & Server-Side Tracking:** Browser cookie deprecation means relying on Facebook Conversions API (CAPI) and Google Tag Manager server containers.
      3. **Conversion Rate Optimization (CRO):** Even the cheapest ad traffic is wasted if your landing page converts at less than 3%. Fast load speeds and clear social proof are non-negotiable.
    `
  }
];

export const blogCategories = ["All", "Full Stack & Backend", "AI & ML", "Data Science", "Digital Marketing"];
