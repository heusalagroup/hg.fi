---
title-meta: "ChatGPT AI in Job Search"
author-meta: "Jaakko Heusala"
date-meta: "5.8.2025"
toc: false
---

\thispagestyle{empty}
\clearpage
\pagenumbering{arabic}

\clearpage

```{=latex}
\newgeometry{left=1cm, right=1cm, top=1cm, bottom=1cm}
\vspace*{\fill}
\noindent
\makebox[\textwidth][s]{%
  \textcolor{black}{Digital Early Access version, 5.8.2025.}%
  \hfill%
  \textcolor{white}{\href{https://thejhh.me}{Jaakko Heusala}, \href{https://hg.fi}{Heusala Group Oy}.}%
}
\newpage
\restoregeometry
\newgeometry{left=2cm, right=2cm, top=2cm, bottom=2cm}
```

\clearpage
\tableofcontents
\clearpage

## 1 Introduction

### 1.1 What is generative AI and why it revolutionizes job search

Generative AI (GenAI) is a subset of machine learning where models learn from vast text datasets to create new content based on previous material – text, images, code, and even strategic suggestions. LLM models like ChatGPT produce human-like text in seconds while understanding the context and goals of the questioner.

In job search, GenAI shifts the focus from routine tasks (CV formatting, screening job postings, personalizing applications) back to strategic thinking. Instead of spending hours polishing each application by hand, you can input the essential facts to the model and focus on making good career decisions – or practice interview situations with an AI assistant regardless of the time of day. The result is more targeted applications in less time and a better understanding of your market value.

### 1.2 Who this book is for and how to use it

Generative AI has quickly moved from experiments to everyday routines.

* **75% of knowledge workers** already use Gen-AI tools in their work, according to Microsoft & LinkedIn's *Work Trend Index 2024* report. ([Microsoft][12])
* **40% of job seekers** have used AI – such as ChatGPT – to support CVs, applications, or interview practice, according to iHire's recent 1,645 respondent *Inside the Multi-Generational Workforce 2025* survey. ([ihire.com][13])
* **71% of organizations** use generative AI in at least one business function (including HR), according to McKinsey's *State of AI 2025* global survey. ([McKinsey & Company][14])

\vspace{0.5em}
This book is aimed at:

* **Active and passive job seekers** – across all fields who want to build an AI-ready search process.
* **Recruiters and career coaches** for whom Gen-AI is already part of the toolkit.
* **Students** and career changers who want to understand AI-assisted job search rules before the first (or next) application round.

\vspace{0.5em}
**How to get the most out of reading:**

1. **Ensure data security.** If ChatGPT and AI are not familiar yet, read this introduction and **2.3 Settings** section first and ensure you understand and have set up security settings correctly.
2. **Test chapter by chapter.** Keep ChatGPT window open and copy prompt templates directly for use as-is and answer ChatGPT's questions.
3. **Iterate and evaluate.** AI speeds up but doesn't replace judgment – check facts, polish style, and add value from a human perspective.

[12]: https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part?utm_source=chatgpt.com "AI at Work Is Here. Now Comes the Hard Part - Microsoft"
[13]: https://www.ihire.com/resourcecenter/employer/pages/40-7-of-candidates-have-used-ai-in-their-job-search-but-adoption-varies-by-generation "40.7% of Candidates Have Used AI in Their Job Search – But Adoption Varies by Generation | iHire"
[14]: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai "The State of AI: Global survey | McKinsey"

\pagebreak
### 1.3 ChatGPT versions, online tools, and what you actually need for job search

| Version                 | Message Quota\*                           | Web Search               | Note for job search                                  |
|------------------------|-------------------------------------------|--------------------------|----------------------------------------------------|
| **Free**               | ≈ 10 messages / 3 h → then GPT-3.   | ✓ On for all        | Basic searches work                         |
| **Plus**               | ≈ 80 messages / 3 h                        | ✓ Unlimited quota\*   | Recommended if you do many searches daily      |
| **Team**               | \~2× Plus quota / user              | ✓ Unlimited\*\*            | For teams sharing prompt templates            |
| **Pro**                | No fixed cap (fair use principle) | ✓ Unlimited                | Overwhelming if you need hundreds of search rounds  |
| **Enterprise / Edu**   | 500 requests / 3 h (4.1)                   | ✓ Unlimited\*\*            | Large organizations, regulation, strong data protection |

\* Message quotas apply to GPT-4o queries, which also count Web Searches. When quota is reached, conversation continues with GPT-4.1 mini model.

\*\* Admin can restrict

Even with the free ChatGPT level (GPT-4o web search), you can handle job posting browsing and familiarization; *Plus* mainly brings more speed and message quotas.

*Choose Plus or Free level if you focus purely on job search.* Upgrade to Team/Enterprise level only if multiple users need a shared, secure workspace.

\vspace{0.5em}
**What is the Web Search tool?**

The Web Search tool is a ChatGPT feature that enables real-time web browsing and information retrieval from the internet. It's particularly useful in job search -- you need Web Search for finding job postings online, checking requirements, and personalizing applications.

* **Job posting browsing**: Web Search fetches at most a few dozen URLs, which easily fulfills "10 best places" type prompts.
* **Application personalization**: The model only needs the posting link or text.
* **Speed**: More complex web search, such as finding open job postings, can take 5-15 minutes.

\vspace{0.5em}
**What is Deep Research?**

Deep Research is a useful ChatGPT tool if you want to conduct a time-consuming meta-analysis, such as comparing dozens of industry reports.
In Deep Research, ChatGPT independently explores the web, reads and summarizes multiple articles, reports, or studies.
Deep Research takes 5–30 min/request and consumes separate credits. Finally, you get a multi-page summary that includes links to sources and possibly also recommendations, which you can print as PDF or Docx file.

[1]: https://www.indeed.com/career-advice/news/chatgpt-job-search?utm_source=chatgpt.com "How To Use ChatGPT in Your Job Search | Indeed.com"
[2]: https://www.forbes.com/sites/bernardmarr/2025/01/14/5-chatgpt-prompts-that-will-supercharge-your-job-search/?utm_source=chatgpt.com "5 ChatGPT Prompts That Will Supercharge Your Job Search - Forbes"
[3]: https://openai.com/chatgpt/pricing/?utm_source=chatgpt.com "Pricing - ChatGPT - OpenAI"
[4]: https://openai.com/index/introducing-chatgpt-search/?utm_source=chatgpt.com "Introducing ChatGPT search - OpenAI"
[5]: https://cincodias.elpais.com/smartlife/lifestyle/2025-04-28/deep-research-chatgpt-gratuita-truco.html?utm_source=chatgpt.com "Esta función Deep Research de la IA ChatGPT Pro pasa a ser gratuita, pero tiene truco"
[6]: https://help.openai.com/en/articles/6825453-chatgpt-release-notes?utm_source=chatgpt.com "ChatGPT — Release Notes - OpenAI Help Center"
[7]: https://openai.com/index/introducing-deep-research/?utm_source=chatgpt.com "Introducing deep research - OpenAI"
[8]: https://openai.com/index/introducing-chatgpt-agent/?utm_source=chatgpt.com "Introducing ChatGPT agent: bridging research and action - OpenAI"
[9]: https://www.businessinsider.com/ai-job-search-tool-apply-dream-role-2025-6?utm_source=chatgpt.com "I made an AI tool to run my job search, and it helped me get my dream role"
[10]: https://medium.com/prompt-engine/how-i-use-chatgpt-for-job-search-102945181978?utm_source=chatgpt.com "How I Use ChatGPT for Job Search. Prompts included | Jun, 2025"
[11]: https://www.tomsguide.com/ai/5-chatgpt-prompts-to-help-you-find-your-dream-job-and-how-to-use-them-effectively?utm_source=chatgpt.com "This ChatGPT hack gives new grads an edge in the job hunt - here's how"

\pagebreak
**What is a model?**

A model refers to ChatGPT's "brain": the computational structure that understands input text and produces responses. Models vary in size and power, and they have a direct impact on how accurately and flexibly ChatGPT can process questions and create content.

The free version only has one model available, which the interface calls "ChatGPT": this is based on GPT-4o technology. When the free version's message quota is reached, the model temporarily switches to the lighter GPT-4.1 mini version until the limit resets.

OpenAI releases new model versions and improvements regularly, so the available models and their features are updated over time.

Below is a comparison of key ChatGPT models and their support for web search ("Web Search" tool) and other important features.

| Model      | Year  | Free | Plus | Pro | Team | Enterprise | Web Search | Advanced Data Analysis | Images | Voice |
|------------|--------|---|---|---|---|------|------|------|------|------|
| **GPT-4o** | 2024   | \* | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **GPT-4.5** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     |      |
| **o3-mini** | 2025   | ✓ | ✓ | ✓ | ✓ |            | ✓          | ✓                        | ✓     | ✓    |
| **o3**     | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o3-pro** | 2025   |   |   | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |
| **o4-mini** | 2025   |   | ✓ | ✓ | ✓ | ✓          | ✓          | ✓                        | ✓     | ✓    |

\* Free accounts have limited access to *GPT-4o*, and when quota runs out, you fall back to *GPT-4.1 mini*. Upgrading to Plus increases *GPT-4o* quota limits and opens models with broader reasoning and tool support.

\pagebreak
**How much data can a model process?**

| Model     | Input<br>(tokens) | Output<br>(tokens) | Notable features                                                                                                                              |
|-----------|-------|-------|-----------------------------------|
| GPT-4o    | 128 000 |                    | Updated knowledge base April 2023; improved instruction following; integrated tools for automatic use; cost-effective pricing    |
| o3        | 200 000 | 100 000            | Deliberative reasoning (private chain-of-thought); visual recognition and image analysis; full tool support (web, Python, func. calling)     |
| o4-mini   | 200 000 | 100 000            | Fast and cost-effective reasoning; excellent in coding and visual analysis tasks; full chain-of-thought and tool support (web, Python, image)          |
| o4-mini-high | 200 000 | 100 000            | "High-reasoning" variant of o4-mini: more computational power at the cost of accuracy                                                                      |
| GPT-4.5   | 128 000 |                    | New intermediate version in GPT-4 series; better instruction following and performance; available to ChatGPT Pro and Plus users                               |
| GPT-5     | ?     | ?                  | Coming Q3 2025                                                                                                                                           |

One token corresponds to approximately four characters and about ¾ of a word in English text. Thus, 128,000 tokens is about 96,000 words, which corresponds to about 192 A4 pages in single-spaced format (about 500 words per page).

When you use ChatGPT, the model processes both new input and model-generated response tokens as a total count in the background. For example, 10,000 token input and 5,000 token response consume 15,000 tokens total. Model usage also considers previous message history and stored data, which is compressed as needed within token limits.

<!--
https://community.openai.com/t/not-able-to-browse-the-web-anymore-what-is-going-on/616933?utm_source=chatgpt.com "Not able to browse the web anymore? What is going on? - ChatGPT"
https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq?utm_source=chatgpt.com "ChatGPT Free Tier FAQ"
https://en.wikipedia.org/wiki/GPT-4o?utm_source=chatgpt.com "GPT-4o"
https://www.wired.com/story/openai-gpt-45?utm_source=chatgpt.com "OpenAI Launches GPT-4.5 for ChatGPT-It's Huge and Compute-Intensive"
https://www.reuters.com/technology/openai-launches-new-ai-tool-facilitate-research-tasks-2025-02-03/?utm_source=chatgpt.com "OpenAI launches new AI tool to facilitate research tasks"
https://en.wikipedia.org/wiki/ChatGPT_Deep_Research?utm_source=chatgpt.com "ChatGPT Deep Research"
https://en.wikipedia.org/wiki/OpenAI_o3?utm_source=chatgpt.com "OpenAI o3"
-->

\pagebreak 

## 2 ChatGPT Setup and Basic Settings

### 2.1 Account creation, paid tiers, and limits

1. **Register** at *chatgpt.com* – you get Free tier access immediately ([OpenAI][21]).
2. **Free tier** allows you to use GPT-4o for about 10–16 messages every third hour, after which conversation continues with GPT-4.1 mini model; Web Search browsing remains available all the time ([Reddit][22], [OpenAI Community][23]).
3. **Plus (≈ €23 / month EU price)** raises the limit to 80 GPT-4o messages per three-hour period and opens Advanced tools; this is the best price–benefit balance for most active job seekers ([OpenAI Community][24], [CometAPI][25]).
4. **Team (€29 / month with annual billing)** adds shared workspace, admin controls, and approximately double quotas per user; choose only if you share prompts and results with others ([OpenAI Help Center][26]).
5. **Pro ($200 ≈ €229)** removes message caps within fair use framework and offers 125 deep research credit monthly quota – needed mainly for data-intensive power seekers ([Substack][27], [Reddit][28]).
6. **Enterprise/Edu** offers 500 GPT-4.1 requests per 3 h, unlimited web search, and full SSO and security support; suitable for large organizations ([Facebook][29]).

**For job search, Web Search alone is sufficient**, which is on in all packages — upgrade to Plus level only if you repeatedly hit Free version message limits. Deep research is overkill for screening individual job postings.

[21]: https://openai.com/chatgpt/pricing/?utm_source=chatgpt.com "Pricing - ChatGPT - OpenAI"
[22]: https://www.reddit.com/r/ChatGPT/comments/1crdxwd/i_hit_the_message_limit_on_free_gpt4o_after_only/?utm_source=chatgpt.com "I hit the message limit on Free GPT-4o after only 10 ... - Reddit"
[23]: https://community.openai.com/t/the-new-gpt-4o-message-limit/1193486?utm_source=chatgpt.com "The New GPT-4o Message Limit - OpenAI Developer Community"
[24]: https://community.openai.com/t/whys-gpt-4o-insanely-limited-to-free-users-and-even-plus-users-it-literally-barely-gives-you-5-messages-in-5-6-hours-to-the-free-users/769852?utm_source=chatgpt.com "Why's GPT 4o insanely limited to free users and even plus users? It ..."
[25]: https://www.cometapi.com/2025-chatgpt-plus-pro-team-version-comparison/?utm_source=chatgpt.com "2025 ChatGPT Plus, Pro, Team Version Guide: Usage Limits, Prices ..."
[26]: https://help.openai.com/en/articles/11391654-chatgpt-team-release-notes?utm_source=chatgpt.com "ChatGPT Team - Release Notes - OpenAI Help Center"
[27]: https://substack.com/home/post/p-154758121?utm_campaign=post&utm_medium=web&utm_source=chatgpt.com "HELP! OpenAI's ChatGPT Team Plan Just Took All Of My Data As ..."
[28]: https://www.reddit.com/r/ChatGPT/comments/1hq85l1/misleading_200_chatgpt_pro_plan_by_openai_is_it/?utm_source=chatgpt.com "Misleading $200 ChatGPT Pro Plan by OpenAI (is it really unlimited!)"
[29]: https://m.facebook.com/jonathanjmast/photos/chatgpt-model-usage-limitsever-hit-your-chatgpt-message-limit-and-wondered-why-w/24633847286221440/?utm_source=chatgpt.com "25 full research queries per month. * ChatGPT Agent"

\pagebreak
### 2.2 Toolkit: built-in features and voice usage

| Feature                                                                                                                                                                                         | Where to find it?                      | When is it useful?                                                    |
|----|----| ---- |
| **Companion window (macOS)**<br/> Option + Space opens a floating ChatGPT window that stays on top of other applications.                                                                              | ChatGPT desktop app (macOS)      | When you want to analyze a job posting without switching browsers.      |
| **Advanced Voice Mode**<br/> Speak and listen to responses in real-time with GPT-4o model. Free tier offers "daily preview", Plus/Team levels offer broader usage.                        | Browser, desktop, and mobile apps | For practicing CV corrections or interview responses out loud.               |
| **ChatGPT as default assistant on Android**<br/> Beta version 1.2025.070 enables selecting ChatGPT in "Digital assistant app" settings; open with long Home press or swipe. | Android app (beta ≥ 1.2025.070)  | Hands-free questions on the go, e.g. "summarize this posting".           |
| **Record Mode (Team)**<br/> Records max 120 min of audio, transcribes and creates action lists; admin can disable from Workspace Controls.                                               | ChatGPT Team (macOS app)         | Speeds up follow-up messages and note-taking from recruitment meetings. |

The minimum package for job search is browser or mobile app. No separate browser extensions are needed – the Web Search tool and built-in tools above are sufficient for most search routines. GPT-4o is available even on Free tier with limited message quotas, so you can get started without a paid subscription.

[31]: https://x.com/OpenAI/status/1820914089612439622?lang=en&utm_source=chatgpt.com "OpenAI on X"
[32]: https://help.openai.com/en/articles/8400625-voice-mode-faq?utm_source=chatgpt.com "Voice Mode FAQ - OpenAI Help Center"
[33]: https://help.openai.com/en/articles/6825453-chatgpt-release-notes?utm_source=chatgpt.com "ChatGPT — Release Notes - OpenAI Help Center"
[34]: https://www.tomsguide.com/ai/chatgpt/how-to-make-chatgpt-your-default-assistant-on-android-instead-of-gemini?utm_source=chatgpt.com "How to make ChatGPT your default assistant on Android instead of Gemini"
[35]: https://9to5google.com/2025/03/14/chatgpt-default-assistant-android/?utm_source=chatgpt.com "ChatGPT can now replace Gemini as your default assistant on Android"
[36]: https://tactiq.io/learn/how-to-use-chatgpt-record-mode-to-get-meeting-transcripts?utm_source=chatgpt.com "How to Use ChatGPT Record Mode to Get Meeting Transcripts"
[37]: https://tldv.io/blog/chatgpt-record-mode-for-meetings/?utm_source=chatgpt.com "Tried ChatGPT Record Mode for Meetings. Here's My Honest Review"
[38]: https://www.lifewire.com/chatgpt-can-now-record-meetings-11748412?utm_source=chatgpt.com "Yes, ChatGPT Can Now Record-But You \"Can\" Turn It Off"
[39]: https://openai.com/index/hello-gpt-4o/?utm_source=chatgpt.com "Hello GPT-4o - OpenAI"

\pagebreak
### 2.3 Settings: language, data storage, privacy, and sharing with team

First click **your profile picture in the bottom left corner**, open **Settings**, and do three things:

1. Switch the interface and response language to English (or whatever you want). The examples in this guide are in English.
2. Turn off the *Help improve the model for everyone* slider.
3. Check whether your conversations are saved for 30 days or shorter (Enterprise).

This minimizes the spread of sensitive information and ensures ChatGPT responds in your desired language and tone.

More detailed instructions in the following paragraphs.

\vspace{0.5em}
**Language switching:**

* Open **Profile ▸ Settings ▸ General ▸ Language** and select the interface language from the dropdown.
* Profile picture button is found in ChatGPT browser and desktop versions always in the **bottom left corner**.

\vspace{0.5em}
**Data management & model training:**

* In browser: **Settings ▸ Data Controls ▸ Help improve the model for everyone → Off**. Then your messages won't go to model retraining.
* When you delete a message thread or use *Temporary conversation* mode, the material remains on OpenAI servers for a maximum of **30 days** before final deletion
* **Zero-Data-Retention (ZDR)** is only available with separate API endpoints — this option is not available in ChatGPT interface

\vspace{0.5em}
**Share link risks:**

* **Share → Create link** creates a public URL; in July 2025 these links were indexed by Google, so private conversations were found in search engines.
* OpenAI removed the "Discoverable" option in the same month and promised to ask search engines to remove already indexed pages.
* If you share a link, you are responsible for anonymizing the content.

\vspace{0.5em}
**Retention & admin rights:**

| Subscription                  | Who adjusts retention time? | Default               | Minimum time |
|-------------------------|------------------------|----------------------| ------------- |
| Free / Plus / Pro       | User               | Deleted chat disappears in 30 days | 30 days         |
| Team                    | User (admin cannot shorten) | 30 days                | 30 days         |
| Enterprise / Edu        | Workspace admin   | Admin can choose 0 days → n days | 0 days          |

\vspace{0.5em}
**Checklist:**

* Turn off *Help improve the model for everyone* if you handle confidential information like CV or NDA material.
* Don't share sensitive data with Share link.
* Need less than 30 days retention? Choose Enterprise package.

[41]: https://help.openai.com/en/articles/8357869-how-to-change-your-language-setting-in-chatgpt?utm_source=chatgpt.com "How to change your language setting in ChatGPT"
[42]: https://x.com/OpenAI/status/1880323050798973295?lang=en&utm_source=chatgpt.com "OpenAI - X"
[43]: https://techcrunch.com/2025/01/17/chatgpts-newest-feature-lets-user-assign-it-traits-like-chatty-and-gen-z/?utm_source=chatgpt.com "ChatGPT's newest feature lets users assign it traits like 'chatty' and ..."
[44]: https://help.openai.com/en/articles/7730893-data-controls-faq?utm_source=chatgpt.com "Data Controls FAQ | OpenAI Help Center"
[45]: https://help.openai.com/en/articles/8983778-chat-and-file-retention-policies-in-chatgpt?utm_source=chatgpt.com "Chat and File Retention Policies in ChatGPT - OpenAI Help Center"
[46]: https://www.reddit.com/r/ChatGPT/comments/1l1jgh8/deleting_your_chatgpt_chat_history_doesnt/?utm_source=chatgpt.com "Deleting your ChatGPT chat history doesn't actually delete ... - Reddit"
[47]: https://platform.openai.com/docs/guides/your-data?utm_source=chatgpt.com "Zero Data Retention (ZDR) - OpenAI Platform"
[48]: https://omni.se/a/B0pLn9?utm_source=chatgpt.com "Open AI stoppar funktion som gjorde chattar sökbara"
[49]: https://searchengineland.com/google-indexing-shared-chatgpt-conversations-459839?utm_source=chatgpt.com "Your ChatGPT conversations may be visible in Google Search"
[50]: https://blog.stackaware.com/p/chatgpt-team-data-retention-security-compliance?utm_source=chatgpt.com "Use ChatGPT Team without having your data retained forever"
[51]: https://openai.com/enterprise-privacy/?utm_source=chatgpt.com "Enterprise privacy at OpenAI"
[52]: https://help.openai.com/en/articles/8266418-does-a-member-lose-access-to-chat-history-files-and-canvas-if-removed-from-a-workspace?utm_source=chatgpt.com "Does a member lose access to chat history, files and canvas if ..."

\pagebreak 

## 3 Mapping the Job Seeker's Starting Position

### 3.1 Skills and experience data as ChatGPT understands it

The fastest way to input your background information to AI is to provide **public URLs** (public LinkedIn, website, GitHub URL…) and/or **upload an attachment** (e.g., CV). ChatGPT can read both.

**Remember to turn on the 🔍 Web Search tool.** Web browsing also works in **Temporary conversation** mode – you get an "incognito conversation" that isn't saved to history, but you can still search the web.

\vspace{0.5em}
**Step 1 – Ensure Web Search tool is on**

1. Open a new conversation (regular or temporary).
2. Check that the 🔍 web search icon is **on**
   *If the icon is missing, ensure GPT-4o model or appropriate account level.*

\vspace{0.5em}
**Step 2 – Raw extraction (no interpretation)**

Copy and paste the following text into ChatGPT conversation:

````text
You act as my CV analyst.

TASK A – RAW EXTRACTION (don't modify!):

1. Always use the Web Search tool to open profile URLs mentioned in the conversation 
   (e.g., LinkedIn, portfolio). 
   - If no URLs are provided, first ask: "Could you give me profile URLs 
     (e.g., LinkedIn, portfolio) or attach a CV file?"  

2. If there's a CV attachment in the conversation (e.g., PDF), extract it at the same time.  

3. Copy exactly the visible texts (preserving line breaks):  
   - Profile headline  
   - About / Summary  
   - Work experience (job title, company, dates, description)  
   - Education  
   - Skills section (if found)  
   - Languages

4. DON'T add, guess, or reformat anything.  

5. Paste everything together in a ```raw``` code block so I can verify.
````

*Check the "`raw`" block to ensure there's no fabricated text. Fix or add missing items manually.*

\pagebreak
**Step 3 – Structured summary in Markdown**

Copy and paste the following text into ChatGPT conversation:

````text
TASK B – STRUCTURED SUMMARY (Markdown):
• Use only information from the ```raw``` block (and any manually added lines).  
• Build three sections:

### 🛠️ Core Skills
- …

### 📚 Supporting Skills
- …

### 🏆 Achievements
- …

• Maximum ~80 characters per list item.  
• Don't add new facts.
````

\vspace{0.5em}
**Why this way?**

1. **Web Search + Temporary conversation** = real-time search without permanent storage.
2. **Two-step process** reveals hallucinations because you see the collected data first.
3. **Markdown** is easy to transfer to CV templates, emails, or ChatGPT's Customize ChatGPT fields.
4. **Attachment (CV.pdf)** automatically complements missing information if profiles don't have everything.

\vspace{0.5em}
**Privacy tip:** Don't input personal identification numbers or confidential material. Public profiles + own CV are sufficient for strong applications.

\pagebreak
### 3.2 Career motivations and life situation – prompts for clarification

Copy and paste the following text into **ChatGPT conversation** (you can stay in the same message thread). The prompt:

1. **Asks six questions one at a time** – waits for your answer before the next one.
2. When all answers are given, **summarizes** them (≤ 140 characters / answer).
3. Finally builds a Markdown summary with *Requirements* and *Plus* lists.

**Note** You don't need web search for this request, so you can leave the 🔍 Web Search tool off.

Copy and paste the following text into ChatGPT conversation:

```text
You act as my career coach.

❶ Ask me the following six questions **one at a time**.
  Wait for my answer before the next question:

   1. Most important reason why I'm considering a job search
   2. What kind of workday puts me in flow state
   3. What I want to learn in the next 12 months
   4. What I'm not willing to compromise on (salary / location / work hours / other)
   5. Where I see myself in three years
   6. What is my desired monthly salary (gross €/month)

❷ When I've answered all six questions, 
  **don't ask new questions**. Instead do this:
   • Summarize each of my answers to max 140 characters.  
   • Create two list sections as follows:

### 🛑 Requirements
- …

### ✅ Plus
- …

   • Return the entire output in Markdown format.  
   • Don't invent new information – use only my given answers.
```

**Usage tip:** If you continue in the **same message thread**, ChatGPT remembers your motivation without additional actions. Save the summary to the *Customize ChatGPT* field only if you want it to remain active in other or new conversations.

\pagebreak
### 3.3 Setting goals: SMART + milestones

Copy and paste this to any point in the message thread.

* **Web search not needed** → 🔍 Web Search tool can be off.
* ChatGPT can use **all previously provided information in the conversation** (skills, motivation, salary expectations, etc.) to suggest drafts for your answers – you can accept, correct, or write your own.

```text
You act as my goal coach.

❶ Ask me the following five questions **one at a time**.  
   • If you have previous context from my answers, 
     offer a **draft example** in parentheses after each question, 
     which I can modify.  
   • Wait until I answer before moving to the next question.

   1. What is your concrete main goal in job search? (Specific)  
   2. How do you know you've succeeded? (Measurable)  
   3. How do you ensure the goal is realistically achievable? (Achievable)  
   4. Why is this goal important for your career? (Relevant)  
   5. By what date must the goal be met? (Time-bound)

❷ When I've answered all five questions, **don't ask for additional information**. 
  Instead:  
   • Combine my answers with previous conversation information (if it complements or 
     clarifies points).  
   • Form the following Markdown block:

### 🎯 SMART Goal
- **Specific**: …
- **Measurable**: …
- **Achievable**: …
- **Relevant**: …
- **Time-bound**: …

Don't invent new facts; use only my given or previously mentioned information.  
```

**Usage tip:** When you get the SMART block, you can paste it into notes or the *Customize ChatGPT* field if you want ChatGPT to automatically consider your goals in later conversations.

\pagebreak 

## 4 Effective Job Search

### 4.1 Interactive job search prompt

• Asks all necessary information **one at a time** (including draft examples from previous answers)

• Returns results from found job positions

**Copy the entire block to ChatGPT conversation.** The Web Search tool (🔍) doesn't need to be on yet.

```text
You act as an experienced HR recruiter.

QUESTIONS (one at a time):
• If there's already information in the conversation, offer **draft examples** in parentheses 
  based on my previous answers.  
• If information is missing, leave parentheses empty or write "(fill in)".  
• Wait for my answer before the next question.

1. What is your current title and most important skills? (draft example: …)  
2. In which geographical location do you want to work? (draft example: …)  
3. What is your minimum salary expectation (gross €/month)? (draft example: …)  
4. Which work conditions or content factors are most important to you? (draft example: …)  
5. Are there other special constraints or wishes? (draft example: …)  
6. What day is it today? (this information is needed for deadline filtering)

WHEN all five answers are received, execute **TASK**:  
1. Ensure that 🔍 Web Search tool is on.  
2. Find **ten** open positions that meet **all** given requirements.  
3. Return results in Markdown table, columns:  
   • Role & Company.  
   • Application deadline (if known).  
   • Salary €/month — if limit is only met with upper bound or salary not stated, 
     start row with "*) " and write "negotiable".  
   • Direct link to posting.  
4. Add below the table a short (max 120 characters) assessment of my suitability for each role.  
5. Don't include other text.
```

**Iteration & result fine-tuning**

After getting the first table, you can refine the search without inputting new data. Just write a new instruction, and ChatGPT will do the search with the same base data but updated limits:

\vspace{0.5em}
* **Example 1 – location**

  > *"Do the same search, but limit results to employers located in Finland."*

\vspace{0.5em}
* **Example 2 – role nature**

  > *"Search again, but focus less on technical and more on people-oriented tasks (e.g., project management, customer interface)."*

\vspace{0.5em}
* **Example 3 – too strict limits / no results**

  > *"Search again, but limit less strictly so more results come up."*

The model maintains your title, salary expectations, and other original requirements, searches for a new list of ten roles, and returns an updated table. This way you can refine location, complexity level, industry, or any other criterion until the results suit you.

\pagebreak
### 4.2 Prompt modularization – break big tasks into multiple rounds

When searching for jobs with ChatGPT, it's easy to get a confusing, too-long response with one giant prompt. Modularization means **dividing the process into several phases**, so the model stays better on track and you can influence the outcome round by round.

\vspace{0.5em}
**How to break down tasks in practice:**

| Phase                    | What do you ask?                                                                                                                     | What do you get?                           |
|--------------------------| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| **A. Extract posting**     | "Read this job posting and list requirements vs. wishes."                                                                | Clear two-column table.    |
| **B. Mirror to profile** | "Compare the list to skills visible in my CV. Which 3 things match best? What's my biggest skill gap?"                      | Quick suitability and gap list. |
| **C. Write application**  | "Use results from phases A and B. Write a 150-word cover letter highlighting matching skills and explaining the skill gap." | Concise, targeted cover letter.      |
| **D. Review loop**   | "Suggest improvements to tone and aim for 10% shorter text."                                                                   | Improved version.                   |

**Memory rule:** One question = one clear output. Use the result as input for the next question.

\vspace{0.5em}
**Chaining: "do A → wait → do B":**

ChatGPT understands instructions where it *stops to wait*. For example:

```text
First do: summarize this 2,000-word article to half length.
Wait until I say "continue".
Then: extract 5 most important keywords from the article for my CV.
```

This can be used when you want to read intermediate results before continuing.

\vspace{0.5em}
**"Critic & improve" loop (self-feedback model):**

1. **Draft:** "Write a 120-word cover letter."
2. **Critic:** "Evaluate the text through three criteria: clarity, impact, keywords. Give points /5."
3. **Improvement:** "Modify the text to raise each point to at least four."

Repeat until the text meets your criteria – usually 2–3 rounds is enough.

\vspace{0.5em}
**Avoid these pitfalls:**

| Mistake                                    | How to fix?                                         |
| ---------------------------------------- | ------------------------------------------------------ |
| Ask "do everything" at once       | Break into A–D phases (table above).                   |
| Forget to give previous phase result | Copy or reference "as in phase A above".         |
| Loop doesn't stop                        | Add clear command "Wait for my answer before continuing." |

\pagebreak 

## 5 CV and LinkedIn Profile Optimization

### 5.1 ATS keyword search and ChatGPT-based analysis

Automated recruitment systems (ATS) screen your CV based on keywords before a human sees it. The two-phase workflow below helps find the posting's important terms, compare them to your CV, and refine the CV to match requirements.

\vspace{0.5em}
**Phase A – Extract keywords from job posting.**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my ATS analyst.

1. Check from this or previous messages if there is
   • job posting text OR
   • direct URL to posting.

2. IF posting is not found, ask ONCE:
   "Could you provide the job posting URL or copy the posting text here?"
   – Wait for my answer before continuing.

3. When posting is received, respond briefly "Thanks, analyzing the posting" and
   • extract keywords into four categories  
     – Hard skills (techniques, tools)  
     – Soft skills  
     – Certifications / education  
     – Company values & culture signals  
   • return results in Markdown table ("Category" | "Keywords").

Don't do anything else until posting is received and table is made.
```

**Example output:**

| Category         | Keywords                         |
| -------------- | ---------------------------------- |
| Hard skills   | Python, SQL, Docker                |
| Soft skills | Teamwork, communication                |
| Certifications  | AWS Solutions Architect            |
| Values          | Customer focus, sustainable development |

\pagebreak
**Phase B – Compare your CV to found keywords.**

Copy and paste the following text into ChatGPT conversation:

```text
Compare my CV to the previous keyword table.

1. Check from this or previous messages if there is
   • CV text OR
   • attached CV file (e.g., CV.pdf).

2. IF CV is not found, ask ONCE:
   "Could you attach CV.pdf file or copy CV text here?"
   – Wait for my answer before continuing.

3. When CV is received, list:
   • missing hard and soft skills  
   • suggestion where in CV they could be added naturally 
     (max 2 suggestions / word).  

Return results as Markdown list and don't add other text.
```

ChatGPT will report for example:

* **Missing:** Docker → add "Docker container orchestration" to Work Experience section
* **Missing:** AWS Solutions Architect → add to Certifications section

**Quick improvement rounds:**

1. Add suggested terms to CV draft.
2. Send updated CV as file and ask: *"Do new comparison to original – what's still missing?"*
3. Repeat until the list of missing keywords is empty or you decide to leave some out.

When these phases are done, your CV speaks the same language as the posting, and the probability of passing the ATS filter increases significantly.

\pagebreak
### 5.2 Profile headline, summary, and achievements

The top 300 characters of LinkedIn (headline + about sections) determine whether a recruiter clicks your profile open. Below are **two interactive prompts** that ask you for additional information only when it's not already clear from the conversation.

**A) Interactive headline generator**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my LinkedIn career coach.

1. Check if there's already information in this or my previous messages
   • CV text OR
   • LinkedIn raw data.

2. IF material is not found, ask ONCE:
   "Could you attach your CV text or copy LinkedIn profile content here?"
   – Wait for my answer.

3. When material is received, write 3 suggestions for 120-character headline:
   • #1: Keyword-focused
   • #2: Value proposition-focused
   • #3: More personal, story-based

Show suggestions as numbered list without explanatory text.
```

**B) Interactive 300-character "About" summary (STAR framework).**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my career coach.

1. Check if CV-/LinkedIn-text is already available in conversation.
   • IF NOT, ask ONCE:
     "Could you attach your CV text or LinkedIn profile here?"
     – Wait for my answer.

2. Check from material if there are numerical results (e.g., % savings, € figures).
   • IF NOT found, ask ONCE:
     "Could you give one concrete result number (e.g., 'increased sales 18%')?"

3. When required information is available, write 300-character summary using STAR model:
   • Situation: 1 sentence background  
   • Task/Action: 1 sentence about your role/actions  
   • Result: 1 sentence about numerical result  

Return text as one paragraph without additional explanations.
```

**C) Achievement bullet "screws".**

| Tip                       | Example                                                                |
| ---------------------------- | ------------------------------------------------------------------------ |
| **Verb + number + result**   | "Reduced cloud costs **22%** with automated Terraform pipeline." |
| **Show scale**      | "Led team of **7** developers • €1.2M budget."                      |
| **Technology or method** | "Optimized queries with **SQL + Looker** modeling."                      |

**D) Update cycle with ChatGPT.**

1. Take raw text to ChatGPT → ask "Write 5 bullets in 260 characters".
2. Ask: "Give two versions: keyword-focused & story-based."
3. Choose the best and update LinkedIn; repeat when you get new results.

With these interactive prompts, ChatGPT ensures it gets the information it needs **only when it's missing**, and doesn't burden you with unnecessary questions.

\pagebreak
### 5.3 Visual and technical attachments – portfolio links, code samples, and project presentations

A recruiter spends an average of less than **60 seconds** on your profile – unless the eye hits something concrete proving your skills. Portfolio links, GitHub profile, and sample projects boost your credibility especially in technical and creative roles. Below you get an **interactive prompt** that collects required project information, creates concise descriptions, and suggests where to place them (CV, LinkedIn, application attachment).

**Interactive portfolio prompt.**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my portfolio curator.

### Inquiry phase (one question at a time)
If the information below is not found in conversation, ask ONCE 
and wait for my answer:
1. Give max 5 links you want to highlight (GitHub repo, Behance portfolio, 
   production website, PDF case study).  
2. Write 1–2 sentence description for each link: what problem, what solution, 
   what result.
   • If no description, ask: "Could you briefly describe the project's problem, 
     solution, and result?"  
3. Are there numerical results in the project (saved €, increased % etc.)?  
   • If not, skip this question.

### Output phase
When links and descriptions are received:
1. Make table (Markdown), columns:  
   • Project | Role | Technologies/tools | Result (number or short text) | Link  
2. Write 120-character "headline" for each project for LinkedIn's 
   "Featured" section.  
3. Suggest where in my CV the project should be added (Portfolio section, 
   Work Experience, Tech Stack etc.).  

Don't add other text than table, headline list, and placement suggestions.
```

**How to use results:**

| Step                                                                | What do you do?                                              | End result                             |
|----------------------------------------------------------------------|---------------------------------------------------------| -------------------------------------- |
| **1.** Run prompt – copy/paste links and descriptions                | Get ready table and 120-character "headline" texts  | Clear list of projects              |
| **2.** Add table or parts to LinkedIn's **Featured section**    | Practical proof of skills shows in profile top | Better "social proof"                 |
| **3.** Embed "headline + link" pairs in CV's Portfolio section       | Links in CV are clickable                          | Recruiter goes directly to samples   |
| **4.** Attach relevant projects or case studies to application end | Especially useful in design and dev roles          | Stands out better than text-only CV  |

**Note security** Remove all client confidential information from projects or case studies before sharing. Files attached in temporary conversation mode are deleted within 30 days.

**Quick diagnosis: does portfolio work?**

| Check                                                                     | Yes / No |
|-------------------------------------------------------------------------------| ---------- |
| Each project has **link**, **technology**, and **result number**?        | ☐          |
| LinkedIn shows at least **two** sample works in "Featured" section?     | ☐          |
| CV's Portfolio section has max **5** projects – not 30?                        | ☐          |
| Your favorite project tells **WHAT** you did, **WHY**, and **WITH WHAT RESULT**? | ☐          |

Fill "No" boxes using the prompt above and add missing descriptions or links. When all boxes are **Yes**, portfolio effectively supports your applications.

\pagebreak
### 5.4 Multilingualism and translation with ChatGPT

More and more employers require – or at least value – English-language versions of CVs and applications. ChatGPT facilitates maintaining language pairs when you instruct it properly and check cultural nuances.

**A) Interactive translation prompt (CV / cover letter)**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my translation and localization expert.

### Inquiry phase (one question at a time)
1. Check if there's translatable text in this or my previous messages 
   (CV section, cover letter, or LinkedIn summary).
   • IF NOT found, ask ONCE:
     "Could you attach Finnish- or English-language text you want translated?"

2. When text is received, ask ONCE:
   "To which language translate (Finnish ↔ English)?"

3. Ask ONCE (if not yet clear):
   "Desired tone / register? (e.g., formal, casual, 'tech-savvy', 'expert')."

### Translation phase
When all information is received:
1. Translate text to requested language.
2. Preserve original formatting (headings, bullet points).
3. Adapt cultural points:
   • Date and currency format (30 June 2025 ↔ 30.6.2025, € ↔ EUR).  
   • Title explanations: "Tietoliikenneinsinööri" → "Telecommunications Engineer".
4. Return translation + summary table with:
   • "Original term" | "Translation" | "Comment/reason for modification" 
     (if you did localization).

Don't add other text.
```

**B) Checklist – how to ensure quality**

| Point              | What to check?                       | Why?                                          |
| ------------------ | ------------------------------------- | ----------------------------------------------- |
| **Titles**       | Equivalent understood internationally? | "Software Developer" ≠ "Coder"                  |
| **Units**   | Mm ↔ in, € ↔ EUR                      | Avoid interpretation errors                          |
| **Dates**    | 2024-01 ↔ Jan 2024                    | ATS bots recognize both                  |
| **Tone**           | Same "you-/I-level"                | Avoid bureaucratic Finnish vs. too casual phrases |
| **Value terms** | "kestävä kehitys" → "sustainability"  | Search for keywords also in English            |

**Quick tip** If translation sounds "machine-translated", ask:
*"Improve readability to native level, but preserve facts."*

**C) Maintain two versions without manual copy-paste**

1. **Master document** Keep original version (Finnish) in Google Docs.
2. **Translation conversation** Same thread where the translation prompt above is.
3. **Update** When you add new achievement in Finnish, copy it to conversation and ask "Translate new paragraph."
4. **Sync** Paste English-language update to LinkedIn/CV file.

This avoids continuous copying of two separate documents and ensures both languages stay current.

**D) Frequently asked: "Can ChatGPT translate Finnish → Swedish too?"**

Yes. Just change target language in step 2. Model accuracy in Swedish and other European languages is sufficient for CV level, but in rarer languages (e.g., Japanese) it's worth asking for native proofreading.

\pagebreak 

## 6 Job Posting Analysis

### 6.1 Breaking down requirements – must-have vs nice-to-have

A job posting is often a confusing mix of essential and "would be nice" requirements. When you first get a clear list divided into two columns, you can

1. quickly decide whether the position is worth applying for
2. target exactly the right skills in your application.

Below is a text section + interactive prompt that automatically asks for missing posting and produces a "Required / Desired" table.

**Why is this useful?**

| Benefit                     | What do you do?                                       | End result                                |
| ------------------------- | ------------------------------------------------ | ----------------------------------------- |
| **Time saving**            | Evaluate 5–10 postings per hour                  | Apply only to realistic positions             |
| **Application targeting**  | Highlight must-have skills in cover letter               | Better hit rate in ATS and recruitment funnel |
| **Interview questions** | Ask recruiter why something "desired" is listed | Show you're prepared                  |

**Interactive posting analysis prompt**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my requirement analyst.

### Inquiry phase (one question at a time)

1. Check if there's already information in this or previous messages
   • job posting text OR
   • direct URL to posting.
   If neither is available, ask ONCE:
   "Could you attach the posting URL or copy the text here?"

2. When posting is found, ask (only if missing):
   "Do you have special boundary conditions (e.g., salary limit, location) to compare against?"

### Analysis phase

When posting and possible boundary conditions are received:
1. Extract all requirements and divide into two columns:
   • **Required / Must-have**  
   • **Desired / Nice-to-have**
   – Keep original formatting as short bullets.
2. Mark with asterisk (*) all points that violate your given boundary conditions.
3. Return as two Markdown tables (Must-have, Nice-to-have).  
Don't add other text.
```

**Example output**

| Required           |                           |
| -------------------- | ------------------------- |
| Python experience       |                           |
| Docker environment     |                           |
| *Location: Berlin* | *(violated my location limit)* |

| Desired          |   |
| ----------------- | - |
| AWS certification |   |
| Go experience        |   |

**Use results like this:**

1. **Quick test** – If asterisks hit required rows, consider whether application leads to unnecessary work.
2. **Application framework** – Show at least 70% of must-have skills in cover letter; reference 2–3 most important from nice-to-have list.
3. **Interview questions** – Prepare question "I saw Go experience is mentioned as desired – how important is it actually?"

\pagebreak
### 6.2 Own suitability & identifying skill gaps

When you've divided the posting's requirements into "must-have vs nice-to-have" tables, the next step is to compare the list to your own skill profile. The goal of this phase is to:

1. **Confirm** strengths that you'll highlight in your application.
2. **Locate** gaps – and decide how to talk about (or cover) them in cover letter and interview.

**Interactive suitability analysis prompt:**

```text
You act as my suitability analyst.

### Inquiry phase (one question at a time)

1. Check if there's already information in conversation
   • previous phase's requirement tables (Must-have / Nice-to-have) AND
   • my CV text or LinkedIn raw block.
   – If both are found, proceed to analysis phase.

2. IF requirement table is not found, ask ONCE:
   "Could you attach the posting's requirement table 
   or link to previous message where it is?"

3. IF CV text is not found, ask ONCE:
   "Could you attach your CV text or LinkedIn profile content here?"

### Analysis phase

When requirements and CV are available:

1. Compare Must-have list to my CV.  
   • Mark ✔ if skill is found, ✖ if missing.  
   • If skill is partially mastered, mark ~ and give explanation 
     (e.g., "2 years experience").  

2. Do the same for Nice-to-have list.

3. Return results in two Markdown tables:

#### Must-have vs CV

| Skill | Status | Comment |
|-------|--------|-----------|
| Python | ✔ | 5 years experience |
| Docker | ✖ | No direct experience |

#### Nice-to-have vs CV

| Skill | Status | Comment |
|-------|--------|-----------|
| AWS certification | ~ | In progress, ready Q4/2025 |

4. Finally list max 3 strengths and max 3 skill gaps to focus on in application.  
   • Format as "Strengths:" / "Gaps:" lists (no explanatory text).

Don't include other text.
```

**How to use results:**

| Action                       | What do you do?                                                                      | Benefit                                          |
| --------------------------- | ------------------------------------------------------------------------------- | ---------------------------------------------- |
| **Cover letter**              | Highlight ✔-marked must-have skills in 1st paragraph.                              | Recruiter sees you meet critical criteria. |
| **Gap strategy**           | Choose max 2 ✖- or ~-skills and show how you're filling them (course, project). | Show you're self-directed and honest.       |
| **Interview preparation** | Prepare explanation for each ✖-skill ("This is how I'm learning…").                   | Reduce surprises and improve trust.   |

**Tip** If there are more than 3 ✖-marks in the must-have column, consider saving time and moving to the next job. ChatGPT's quick analysis helps avoid unnecessary "spray & pray" applications.

\pagebreak
### 6.3 Company culture and value matching – how to find out "does the house fit you"

Good salary and suitable role aren't enough if the workplace culture is in a completely different world from your own values. ChatGPT can help gather scattered information (values, employee reviews, technology stacks) and compare it to your motivation.

**A) Information sources for culture and value research:**

| Source                           | What do you see?                             | How to utilize in ChatGPT?                   |
| ------------------------------- |----------------------------------------|------------------------------------------------|
| **Company "About"/Career pages** | Official values, mission statement    | Input URL → ask for summary in three sentences |
| **Glassdoor / Indeed Reviews**  | Anonymous employee reviews             | "Scrape top 5 pluses and minuses"             |
| **LinkedIn Insights**           | Employee count, turnover            | "What is personnel growth over 2 years?"        |
| **GitHub / Stack Overflow**     | Technologies and open-source activity | "Calculate repo star count and latest commit"    |
| **Press & blogs**           | Scandals, responsibility              | "List three latest ESG discussions"       |

\pagebreak
**B) Interactive culture analysis prompt.**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my company culture analyst.

### Inquiry phase (one question at a time)

1. I need company identifier.
   • If company name or URL is not found in this or previous messages, 
     ask ONCE:
     "Which company's culture do you want to analyze? Give name or career page URL."

2. I need your values to compare against.
   • If values (e.g., motivation summary from 3.2) are not in conversation, 
     ask ONCE:
     "What three values are most important to you at work? 
     (e.g., openness, remote work, sustainable development)"

3. Ensure that 🔍 Web Search is on; if it's off, ask permission to turn on.

### Analysis phase

1. Search and summarize:
   • Official values & mission (3 bullets).  
   • 3 most common positive and 3 negative comments on Glassdoor (briefly).  
   • Technology/product signals (1–2 sentences from GitHub, if relevant).  
2. Compare employer values to user values:
   • Mark ✔ if value matches, ✖ if not, ~ if unknown.  
3. Return one Markdown table:

| Category | Observation | Match |
|-----------|----------|---------|
| Official values | Openness ✔ | ✔ |
| Employee pluses | Good work-life balance | ✔ |
| Employee minuses | Slow decision-making | ✖ |
| Tech signal | Active OSS | ✔ |

4. Write 120-character "culture summary" at the end (e.g., "Values aligned, 
   but bureaucracy – verify decision-making in interview.").

Don't add other text.
```

**C) How to use results:**

| Situation                | What do you do?                                           | Benefit                          |
| ---------------------- | ---------------------------------------------------- | ------------------------------ |
| ✔ most match    | Highlight culture-fit points in application            | Show you're genuinely interested |
| \~ much unknown | Ask in interview: "How are values lived in daily work?" | Understand risks early        |
| ✖ several big differences   | Decide whether to apply anyway (salary vs values).               | Avoid culture shock         |

**Tip** If analysis reveals negative employee experiences, ask ChatGPT to formulate a polite question: "I noticed Glassdoor comments mentioning slow decision-making. Could you tell me how processes have been developed over the past year?"

\pagebreak
### 6.4 Question generation – information requests to recruiter

When the posting and own suitability analysis are ready, it's time to gather targeted questions that:

* **clarify unclear requirements**
* **test culture and value matching**
* **show active interest**

Good questions distinguish you from applicants who settle for basic small talk.

**Interactive question generator prompt.**

Copy and paste the following text into ChatGPT conversation:

```text
You act as my recruitment question analyst.

### Inquiry phase (one question at a time)

1. Check if there's already information in conversation
   • job posting text OR URL  
   • my culture analysis table (6.3) OR own "values" list.

   IF posting is not found, ask ONCE:  
   "I need job posting URL or text. Could you attach it?"

   IF my values are not found, ask ONCE:  
   "What 2–3 values or factors do you want to verify in interview? 
   (e.g., remote work, decision-making speed)"

2. Ask ONCE:  
   "What situation do you need questions for?  
    A) Application follow-up email  
    B) Interview start  
    C) Interview ending ('Do you have questions?')"

### Generation phase

When posting, values, and situation are clear:

1. Prepare 6 targeted questions:  
   • 2 for role requirements (clarify must-have / nice-to-have)  
   • 2 for culture or value matches (based on values list)  
   • 2 for growth and impact opportunities (e.g., career path, learning)

2. Place questions as numbered list under heading:

#### 🔍 Questions for [A/B/C] situation  

1. …  
2. …  
…

3. Don't add other text.
```

**Example output (for interview ending):**

1. **"How does the team measure success during the first 6 months?"**
2. **"How does remote work work in practice, and are office days mandatory?"**
3. **"How much autonomy is there in technology architecture decisions?"**
4. **"How does the company support professional development—is there budget for courses?"**
5. **"Could you give an example of a recent project supporting climate impact?"**
6. **"What's the next step if we reach agreement?"**

**Tips for using questions:**

| Situation                  | Good practice                                         | Avoid                       |
| ------------------------ | ----------------------------------------------------- | -------------------------------- |
| **Follow-up email** | 2–3 well-targeted questions; clear bullet list | 10-question novel            |
| **Interview start**    | Ask about role goals → show background work           | "What do you do here?"        |
| **Interview ending** | Reserve 2 culture questions + 1 process question    | Salary negotiation too early |

\pagebreak
## 7 Writing Applications and Cover Letters

Coming 7.8.2025.

* 7.1 Cover letter structure and CTA
* 7.2 Personalization at scale: variable templates and mass generation
* 7.3 Email templates: application, thank you message, follow-up
* 7.4 Tone adjustment: formal, casual, creative

\pagebreak
## 8 Preparing for Interviews

Coming 8.8.2025.

* 8.1 Company research and industry trends
* 8.2 Behavioral questions (STAR) vs technical questions
* 8.3 Mock interview from ChatGPT perspective (text & voice)
* 8.4 Response feedback cycle: self-assessment + ChatGPT critique

\pagebreak
## 9 Salary Comparison and Market Information

Coming 9.8.2025.

* 9.1 Salary data sources and validation
* 9.2 ChatGPT-simulated salary negotiations
* 9.3 Total compensation (stock options, bonuses, benefits)

\pagebreak
## 10 Example Prompts and Workflows

Coming 10.8.2025.

* 10.1 Basic prompts: ideation, error correction
* 10.2 Advanced workflows: end-to-end job search pipeline (incl. long prompt from this book)
* 10.3 Prompt library: Finnish vs English

\pagebreak
## 11 Ethical, Legal, and Privacy Issues

Coming 11.8.2025.

* 11.1 Personal data and confidentiality
* 11.2 Copyright, plagiarism, source attribution
* 11.3 Model biases and fair use – minimizing risks

\pagebreak
## 12 ChatGPT's Limits and Best Practices

Coming 12.8.2025.

* 12.1 Fact verification and reliability
* 12.2 Most common mistakes and how to avoid them
* 12.3 When to use traditional methods/expert

\pagebreak
## 13 Future Trends

Coming 13.8.2025.

* 13.1 Generative AI in HR pipeline (sourcing → onboarding)
* 13.2 Agents and automatic job search
* 13.3 New tools, API integrations, and trend tracking

\pagebreak
## 14 Appendices

Coming 14.8.2025.

* 14.1 Complete example prompt in Finnish and English
* 14.2 Checklist: job search with ChatGPT 1-page PDF
* 14.3 Glossary and abbreviations
* 14.4 Further reading and tool links 